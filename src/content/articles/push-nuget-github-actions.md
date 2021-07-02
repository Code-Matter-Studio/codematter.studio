---
title: Push a NuGet package with SemVer to nuget.org by using GitHub Actions
---

# Example

As an example, please see the repositry: <a href="https://github.com/sayganov/EventBus.RabbitMQ.Standard">sayganov/EventBus.RabbitMQ.Standard no-readme</a>

# How-To

1\. Firstly, create a new NuGet package on nuget.org. To do that, you need to upload the first version of your library manually.
2\. Go to `nuget.org/account/apikeys` and create an API key for the NuGet package.
3\. Go to the Secrets section in your repository settings and create a secret called `NUGET_API_KEY` with the value of the API key.
4\. Add the following `GitVersion.yml` file to the root of the repository.

```yaml
mode: MainLine
assembly-informational-format: '{NugetVersion}'
branches:
master:
  tag: ''
feature:
  tag: feature-{BranchName}
  increment: Minor
hotfix:
  tag: hotfix-{BranchName}
  increment: Patch
ignore:
sha: []
```

> NOTE: You can adjust tag and mode depends on your needs.

5\. Add the following build.yml file to the repository. It must be placed in `{repo-name}/.github/workflows/`.

```yaml
name: Build

on:
  push:
    paths:
      - src/**
      - .github/workflows/**

jobs:
  job-ubuntu:
    name: job-ubuntu
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v2
        with:
          fetch-depth: 0

      - name: Install GitVersion
        uses: gittools/actions/gitversion/setup@v0.9.7
        with:
          versionSpec: '5.5.0'

      - name: Determine Version
        id: gitversion
        uses: gittools/actions/gitversion/execute@v0.9.7
        with:
          useConfigFile: true
          configFilePath: 'GitVersion.yml'

      - name: Display GitVersion outputs
        run: |
          echo "Major: ${{ steps.gitversion.outputs.major }}"
          echo "Minor: ${{ steps.gitversion.outputs.minor }}"
          echo "Patch: ${{ steps.gitversion.outputs.patch }}"
      - name: Setup .NET Core
        uses: actions/setup-dotnet@v1
        with:
          dotnet-version: 5.0.201

      - name: Restore
        run: dotnet restore $GITHUB_WORKSPACE/src

      - name: Pack
        run: dotnet pack $GITHUB_WORKSPACE/src/YOUR_PROJECT_NAME/YOUR_PROJECT_NAME.csproj -c Release -p:PackageVersion=${{ steps.gitversion.outputs.semVer }}

      - name: Push YOUR_PROJECT_NAME.${{ steps.gitversion.outputs.semVer }}
        run: dotnet nuget push $GITHUB_WORKSPACE/src/YOUR_PROJECT_NAME/bin/Release/YOUR_PROJECT_NAME.${{ steps.gitversion.outputs.semVer }}.nupkg -k ${{ secrets.NUGET_API_KEY }} -s https://api.nuget.org/v3/index.json
```

> NOTE: Do not forget to change `YOUR_PROJECT_NAME` to the actual name of your project.

> NOTE: You can adjust different parameters depends on your needs, for example, paths.

6\. Now, when you push a new version of your library to the repository it is going to be built, packed, and pushed to nuget.org with a proper version, for example, 1.0.5.

# References

- [SemVer](https://semver.org/)

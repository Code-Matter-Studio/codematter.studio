<template>
  <div class="container">
    <div>
      <div class="title">
        {{ $t('index.title') }}
      </div>
      <div class="subtitle">
        {{ $t('index.subtitle') }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {}
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-size: 72px;
  color: #ffffff;
}

.subtitle {
  font-size: 23px;
  color: #ffffff;
}
</style>

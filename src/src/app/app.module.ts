import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

// Modules
import { SharedModule } from '@shared/shared.module';

// Components
import { LayoutComponent } from '@layouts/layout.component';

// Interceptors
import { AuthInterceptor } from '@interceptors/auth.interceptor';

//Resolvers
import { BlogListResolver } from '@pages/blog/list/blog-list-resolver.servise';
import { BlogPostResolver } from '@pages/blog/post/blog-post-resolver.servise';

@NgModule({
  declarations: [AppComponent, LayoutComponent],
  imports: [SharedModule, BrowserModule, AppRoutingModule, HttpClientModule, BrowserAnimationsModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    BlogListResolver,
    BlogPostResolver,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

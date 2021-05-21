import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { CourseModule } from './courses/course.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CourseModule,
    CoreModule,
    RouterModule.forRoot([ // o for root espera um array de objetos do tipo rota
      
        {
          path: '', redirectTo: 'courses', pathMatch: 'full' // rotas nativas do angular: ' ' = quando estamos na raiz da aplicação. Neste caso redirecionando para o componente courses
        }
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

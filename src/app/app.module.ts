import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { CourseListComponent } from './courses/course-list.component';
import { StarComponent } from './star/star.component';
import { ReplacePipe } from './pipe/replace.pipe';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { Error404Component } from './error-404/error-404.component';
import { CourseInfoComponent } from './courses/course-info.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    StarComponent,
    ReplacePipe,
    NavBarComponent,
    Error404Component,
    CourseInfoComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([ // o for root espera um array de objetos do tipo rota, no caso abaixo definimos 2. Um path vazio que redireciona a página courses e à página 404 qnd o componente não for localizado.      
      
      {
        path: 'courses', component: CourseListComponent
      },
      {
        path: 'courses/info/:id', component: CourseInfoComponent // o /:id informa ao Angular que essa rota receberá um parâmetro de nome id
      },
      {
        path: '', redirectTo: 'courses', pathMatch: 'full' // rotas nativas do angular: ' ' = quando estamos na raiz da aplicação. Neste caso redirecionando para o componente courses
      },
      {
        path: '**', component: Error404Component // quando não encontrar a url especificada redireciona à pagina de erro 404 conforme definido
      }

    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CourseService } from "./course.service";
import { Course } from './course';


@Component({
    templateUrl: './course-info.component.html'
})
export class CourseInfoComponent implements OnInit{

    course!: Course;

    constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService) { // o contrutor é o local que fazemos a injeção de dependência no nosso componente
                                                          // o ActivetedRoute pega as informações da rota no exato momento da execução, nesse caso pegando o id.
    } 

    ngOnInit(): void { // vamos carregar a informação do id do nosso curso

        this.courseService.retrieveById(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe({ //subscrevendo a requisição http
            next: course => this.course = course, // retorno do this.httpClient.get<Course>(`${this.coursesUrl}/${id}`)
            error: err => console.log('Error', err)
        });
    }

    save(): void {
        this.courseService.save(this.course).subscribe({ // sempre que chamar a requisição via HttpCliente é necessário o subscribe
            next: course => console.log('Saved with sucess', course),
            error: err => console.log('Error', err)
        });
    }

}
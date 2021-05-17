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

        this.course = this.courseService.retrieveById(+this.activatedRoute.snapshot.paramMap.get('id'));
    }

    save(): void {
        this.courseService.save(this.course);
    }

}
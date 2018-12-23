import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
})
export class TemplateComponent  {

  usuario:Object ={
    nombre:"Thomas",
    apellido:"Caycedo",
    correo:""
  }

  constructor() { }

 guardar(forma:NgForm){

   console.log("ngForm",forma)
   console.log("Valor",forma.value)

   console.log("Usuario", this.usuario)
  
 } 
}

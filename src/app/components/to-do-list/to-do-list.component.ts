import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent  {
public array = ["Exemplo 1", "Exemplo 2", "Exemplo 3"];
tarefa= "";

adicionarTarefa():void{
   
  this.array.push(this.tarefa);
  
}
//remove um item
removeTarefa(item:string){
  this.array.splice(this.array.indexOf(item),1)
}





}

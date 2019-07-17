import { Component } from "@angular/core";

@Component({
  selector : 'app-pipe-demo',
  templateUrl : './pipe-demo.component.html'
})

export class PipeDemoComponent{
  promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve("Here the data comes.")
    }, 3000);
  })

  contact_no  = 987654321;

  filteredStatus = "";
  todos = [{
    label : 'Renew insurance',
    status : 'done'
  },{
    label : 'pot the plant',
    status : 'pending'
  },{
    label : 'buy groceries',
    status : 'done'
  },{
    label : 'read the books',
    status : 'pending'
  }]

  onAddNewTodo(){
    this.todos.push({label : 'New Item' , status : 'pending'});
  }

}

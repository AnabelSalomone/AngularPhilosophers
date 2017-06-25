import { Component } from '@angular/core';
export class Philosopher {
  id: number;
  name: string;
}

@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
  <h2>{{philosopher.name}} details!</h2>
  <div><label>id: </label>{{philosopher.id}}</div>
 <div> <label>name: </label>
  <input [(ngModel)]="philosopher.name" placeholder="name">
</div>
  `,
})

//ngModel === v-model(vue.js)


export class AppComponent {
  title = 'Tour of Philosophers';
  philosopher: Philosopher = {
    id: 1,
    name: 'Plato'
  }
}

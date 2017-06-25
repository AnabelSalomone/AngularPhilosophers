import { Component } from '@angular/core';
export class Philosopher {
  id: number;
  name: string;
  subject: string[];
}

@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
  <h2>My Philosophers</h2>
  <div class="philosophers" *ngFor="let philosopher of philosophers">
    <h4>{{philosopher.name}}</h4>
    <p *ngFor="let item of philosopher.subject">{{item}}</p>
    </div>
  `,
})

/*ngModel === v-model(vue.js)
 *ngFor: The (*) prefix to ngFor is a critical part of this syntax. 
        It indicates that the <li> element and its children constitute 
        a master template.
        It is also === v-for="let item of items" (Vue.js)
        */


export class AppComponent {
  title = 'Tour of Philosophers';
  philosophers = PHILOSOPHERS;
};

const PHILOSOPHERS: Philosopher[] = [{
  id: 1,
  name: 'Plato',
  subject: ["Metaphysics", "Gnoseology", "Aesthetics", "Anthropology"]
},
{
  id: 2,
  name: "Aristotle",
  subject: ["Ethics", "Metaphysics", "Gnoseology", "Political philosophy", "Anthropology"]
},
{
  id: 3,
  name: "René Descartes",
  subject: ["Metaphysics", "Gnoseology"]
},
{
  id: 4,
  name: "Immanuel Kant",
  subject: ["Gnoseology", "Metaphysics", "Ethics", "Aesthetics"]
},
{
  id: 5,
  name: "Saint Augustin",
  subject: ["Metaphysics"]
},
{
  id: 6,
  name: "David Hume",
  subject: ["Gnoseology"]
},
{
  id: 7,
  name: "Thomas Hobbes",
  subject: ["Political philosophy"]
},
{
  id: 8,
  name: "Edgar Morin",
  subject: ["Ethics", "Anthropology", "Constructivist epistemology"]
},
{
  id: 9,
  name: "Averroes",
  subject: ["Metaphysics"]
},
{
  id: 10,
  name: "Baruch Spinoza",
  subject: ["Metaphysics", "Ethics"]
}
]




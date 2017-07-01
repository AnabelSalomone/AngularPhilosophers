import { Component } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';

export class Philosopher {
  id: number;
  name: string;
  subject: string[];
}

@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
  <div class="container">
  <div class="philosophers"
  *ngFor="let philosopher of philosophers" 
  (click)="onSelect(philosopher)" 
   [class.selec]="philosopher === selectedPhilo">
  
    <h4>{{philosopher.name}}</h4>
 
    </div>
    </div>

<!--Detail section-->
<div class="detail" *ngIf="selectedPhilo">
    <h2>{{selectedPhilo.name}} details!</h2>
    <div>
      <h4>Branches of study:</h4>
      <div class="subject" *ngFor="let item of selectedPhilo.subject">
      <p class="subject" *ngIf="item !== selectedPhilo.subject[selectedPhilo.subject.length-1]&&selectedPhilo.subject.length-1 !== 0">{{item}}, </p>
      <p class="subject" *ngIf="item === selectedPhilo.subject[selectedPhilo.subject.length-1]">{{item}}. </p><br/>
      </div>
      <div>
      <label>Add another branch: </label>
      <input type="text" 
      [(ngModel)]="newBranch" 
      placeholder= "Add a new branch"/>
      <button type="button" (click)="addBranch()">Add!</button>
    </div>
   </div>
</div>

  `,
  styles: [`
  .container{
    display: flex;
  }

  .philosophers {
     font-family: 'Arial';
      min-width: 100px;
      max-width: 300px;
      min-height: 50px;
      margin: 10px;
      border: 3px solid black; 
      background-color: grey !important;
      border: 3px solid;
      color:black
    }

  .selec{
      background-color: lightgrey;
      color: white;
  }

  .detail{
    font-family: Arial;
  }

  .subject{
    display: inline-block;
  }
    `]
})

/*ngModel === v-model(vue.js)
 *ngFor: The (*) prefix to ngFor is a critical part of this syntax. 
        It indicates that the <li> element and its children constitute 
        a master template.
        It is also === v-for="let item of items" (Vue.js)
 *(click) === onClick (vue.js)
 *ngIf    === v-if
        */




export class AppComponent {
  title: 'Philosophers';
  selectedPhilo: Philosopher; // != Vue.js, where you initialize a variable with "" if it's a string or 0 if a number, etc. Here, we specify the class.
  philosophers = PHILOSOPHERS;
  newBranch: string;

  onSelect(philosopher: Philosopher): void {
    this.selectedPhilo = philosopher;
    console.log(philosopher === this.selectedPhilo);
  }

  addBranch(): void {
    this.selectedPhilo.subject.push(this.newBranch);
    this.newBranch = '';
    console.log(this.selectedPhilo);
  }
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




import { Component } from '@angular/core';
import { Superhero } from './superheroes-material-design/superheroes-profile/superheroes-profile.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'superheroes';

  heroName: string = 'Batman';
  year: number = 2008;
  city: string = 'New York'

  printSuperhero(hero: Superhero) {
    console.log(hero);
  }
}

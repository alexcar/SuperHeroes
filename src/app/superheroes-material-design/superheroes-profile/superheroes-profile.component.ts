import { Component, Input, OnChanges, OnInit, Output, SimpleChanges, EventEmitter } from '@angular/core';
// import * as EventEmitter from 'events';

export type Superhero = {
  name: string;
  firstAppearence: number;
  livesIn: string;
}

@Component({
  selector: 'app-superheroes-profile',
  templateUrl: './superheroes-profile.component.html',
  styleUrls: ['./superheroes-profile.component.css']
})
export class SuperheroesProfileComponent implements OnInit, OnChanges {

  private _firstAppearance!: number;

  @Input()
  set firstAppearance(val: number) {
    if (val > 1950) {
      this._firstAppearance = val;
    } else {
      console.error("Idade invalida");
    }
  }

  get firstAppearance() {
    return this._firstAppearance;
  }

  @Input() name!: string;
  @Input() livesIn!: string;
  @Output() flyWithSuperhero = new EventEmitter<Superhero>();

  constructor() { }


  ngOnChanges(changes: SimpleChanges): void {
    // throw new Error('Method not implemented.');
    console.log(changes);
  }

  ngOnInit(): void {
  }


  returnSuperheroData() {
    let hero = {
      name: this.name,
      livesIn: 'New York',
      firstAppearence: 3
    };

    this.flyWithSuperhero.emit(hero);
  }
}



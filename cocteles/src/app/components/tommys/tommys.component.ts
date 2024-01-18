// tommys.component.ts
import { Component, OnInit } from '@angular/core';
import { CocktailService } from 'src/app/services/cocktail.service';
import { Cocktail } from 'src/app/Models/Cocktail';

@Component({
  selector: 'app-tommys',
  templateUrl: './tommys.component.html',
  styleUrls: ['./tommys.component.css'],
})
export class TommysComponent implements OnInit {
  cocktail: Cocktail | undefined;

  constructor(private cocktailService: CocktailService) {}

  ngOnInit(): void {
    this.cocktailService
      .getCocktailByName("Tommy's Margarita")
      .subscribe((cocktail) => {
        this.cocktail = cocktail;
      });
  }
}


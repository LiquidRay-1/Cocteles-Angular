import { Component, OnInit } from '@angular/core';
import { CocktailService } from 'src/app/services/cocktail.service';
import { Cocktail } from 'src/app/Models/Cocktail';

@Component({
  selector: 'app-blue',
  templateUrl: './blue.component.html',
  styleUrls: ['./blue.component.css'],
})
export class BlueComponent implements OnInit {
  cocktail: Cocktail | undefined 

  constructor(private cocktailService: CocktailService) {}

  ngOnInit(): void {
    this.cocktailService
      .getCocktailByName('Blue Margarita')
      .subscribe((cocktail) => {
        this.cocktail = cocktail;
      });
  }
}
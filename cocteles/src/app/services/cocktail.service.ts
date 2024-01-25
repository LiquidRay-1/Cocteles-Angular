import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Cocktail } from '../Models/Cocktail';

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  private baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

  constructor(private http: HttpClient) {}

  getCocktailByName(name: string): Observable<Cocktail> {
    return this.http
      .get<{ drinks: Cocktail[] }>(this.baseUrl + name)
      .pipe(map((res) => res.drinks[0])); // Devuelve un observable que emite un solo valor: el cóctel que tiene el mismo nombre que el parámetro name
    //.pipe sirve para encadenar varias funciones que se aplican sobre un observable
  }
}

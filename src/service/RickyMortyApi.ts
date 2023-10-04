import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';

export interface Character {
  name: string;
  image: string;
}

@Injectable({
  providedIn: 'root',
})
export class RickyMortyApi {
  constructor(private http: HttpClient) { }

  public characters(): Observable<Character[]> {
    return this.http.get('https://rickandmortyapi.com/api/character')
      .pipe(
        map((data: any) => data.results)
      )
  }

}

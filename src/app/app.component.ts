import {Component, OnInit} from '@angular/core';
import {Character, RickyMortyApi} from '../service/RickyMortyApi';
import {finalize, Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public characters: Character[] = [];


  constructor(private rickyMortyApi: RickyMortyApi) {

  }

  public ngOnInit(): void {
    const subscription: Subscription = this.rickyMortyApi.characters()
      .pipe(
        finalize(() => subscription.unsubscribe())
      )
      .subscribe(data => {
        console.log(data)
        this.characters = data;
      })
  }



}

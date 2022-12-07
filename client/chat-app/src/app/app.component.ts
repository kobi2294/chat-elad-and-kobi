import { Component, OnInit } from '@angular/core';
import { collection, doc, docData, Firestore } from '@angular/fire/firestore';
import { map, Observable, of } from 'rxjs';
import { Stuff } from './models/stuff.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  env$!: Observable<string>;


  constructor(private db: Firestore){}
  ngOnInit(): void {
    const docRef = doc(this.db, 'stuff/bla');
    const bla$ = docData(docRef) as Observable<Stuff>;
    this.env$ = bla$.pipe(
      map(st => st.name)
    );
  }


}

import { Component, OnInit } from '@angular/core';
import { collection, collectionData, doc, docData, Firestore } from '@angular/fire/firestore';
import { map, Observable } from 'rxjs';
import { Message } from './models/message.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  messages$!: Observable<Message[]>;


  constructor(private db: Firestore){}
  ngOnInit(): void {
    const docRef = collection(this.db, 'messages');
    this.messages$ = collectionData(docRef) as Observable<Message[]>;
  }


}

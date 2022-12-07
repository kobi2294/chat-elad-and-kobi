import { connectFirestoreEmulator, Firestore, getFirestore } from "@angular/fire/firestore"
import { environment } from "src/environments/environment";

export function getSetupFirestore(): Firestore {
    const db = getFirestore();

    if (!environment.production) {
        connectFirestoreEmulator(db, 'localhost', 8080);    
    }

    return db;
}
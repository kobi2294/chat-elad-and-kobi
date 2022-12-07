import { Auth, connectAuthEmulator, getAuth } from "@angular/fire/auth";
import { connectFirestoreEmulator, Firestore, getFirestore } from "@angular/fire/firestore"
import { environment } from "src/environments/environment";

export function getSetupFirestore(): Firestore {
    const db = getFirestore();

    if (!environment.production) {
        connectFirestoreEmulator(db, 'localhost', 8080);    
    }

    return db;
}

export function getSetupAuth(): Auth {
    const res = getAuth();

    if (!environment.production) {
        connectAuthEmulator(res, 'http://localhost:9099', {disableWarnings: true});
    }

    return res;
}
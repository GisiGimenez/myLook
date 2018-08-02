import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';


@Injectable()
export class StoreService {

    constructor(
        public db: AngularFirestore
    ) {
    }

    checkUserExistance(user) {
        return new Promise<any>((resolve, reject) => {
            const ref = this.db.collection('usuarios').ref;
            console.log(ref);
            ref.where('userName', '==', user.userName)
                .get()
                .then(snapshot => {
                    console.log(snapshot.empty);
                    return resolve(snapshot.empty);
                });

        });


    }
}

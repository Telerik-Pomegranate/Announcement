import firebaseDb from 'firebase-database';
//mocha.setup("bdd");

const { expect } = chai;

describe('data layer tests', () => {
    describe('registration tests', () => {
        it('Register with email', (done) => {
            //const user = {
            /*      email: 'valid@abv.com',
                  username: 'validusername',
                  password: 'validpassword',

              }*/
            let promise = firebaseDb.createUserWithEmail('valid@abv.com', 'validusername', 'validpassword');

            promise.then(result => { console.log(result) }) //.then(done, done);

            //sinon.stub(firebaseDb, 'createUserWithEmail');
        })
    });
});
//mocha.run();
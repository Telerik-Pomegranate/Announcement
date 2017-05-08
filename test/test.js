const chai = require('../node_modules/chai/chai.js'),
    { expect } = chai,
    sinon = require('../node_modules/sinon/lib/sinon');

// import firebaseDb from '../database/firebas-databas';
// import firebaseModule from '../config/firebase-config';
// import search from 'search';


describe('data layer tests', () => {
    describe('registration tests', () => {
        it('Register with email', (done) => {
            const user = {
                username: 'validusername',
                password: 'validpassword',
                email: 'valid@email.com'
            };

            // sinon.stub(firebaseDb, 'createUserWithEmail');
        });
    });
});

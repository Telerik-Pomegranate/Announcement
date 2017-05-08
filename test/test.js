import firebaseDb from 'firebase-database';

mocha.setup('bdd');

let expect = chai.expect;

describe('data layer tests', () => {
    describe('registration tests', () => {
        it('Register with email', (done) => {
            let self = true;
            const user = {
                username: 'validusername',
                password: 'validpassword',
                email: 'valid@email.com'
            };
            
            sinon.stub(firebaseDb, 'createUserWithEmail')
                .returns(Promise.resolve());

            firebaseDb.createUserWithEmail(user)
                .then(expect(firebaseDb.createUserWithEmail).to.have.callCount(1))
                .then(done, done);

            firebaseDb.createUserWithEmail.restore();
        });
    });
});

mocha.run();

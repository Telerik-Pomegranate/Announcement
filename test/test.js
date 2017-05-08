import firebaseDb from 'firebase-database';

mocha.setup('bdd');

let expect = chai.expect;

describe('data layer tests', () => {
    describe('registration tests', () => {
        beforeEach(function () {
            sinon.stub(firebaseDb, 'createUserWithEmail')
                .returns(Promise.resolve());
        });

        afterEach(function () {
            firebaseDb.createUserWithEmail.restore();
        });


        it('Register with email should be called once with valid parameters', (done) => {
            let user = {
                username: 'validusername',
                password: 'validpassword',
                email: 'valid@email.com'
            };

            firebaseDb.createUserWithEmail(user)
                .then(expect(firebaseDb.createUserWithEmail).to.have.been.calledOnce)
                .then(done, done);

        });

        it('Register with email be called with correct parameters', (done) => {
            const user = {
                username: 'validusername',
                password: 'validpassword',
                email: 'valid@email.com'
            };

            firebaseDb.createUserWithEmail(user)
                .then(expect(firebaseDb.createUserWithEmail.args[0][0]).to.deep.equal(user))
                .then(done, done);
        });
    });
});

mocha.run();

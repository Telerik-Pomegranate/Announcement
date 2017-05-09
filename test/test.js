import firebaseDb from 'firebase-database';
import msgModel from 'msg-model';
import validator from 'validator';

mocha.setup('bdd');

let expect = chai.expect;
let assert = chai.assert;

let FirebaseStub = function(fakeOn) {
    this.ref = function() {
        return this;
    }
    this.child = function(path) {
        return this;
    }
    this.on = function(eventType, callback) {
        fakeOn(eventType, callback, path)
    };
}
let simpleMsgs = [{
        "user": "tosho",
        "time": "10:38",
        "msg": "kak si"
    },
    {
        "user": "gosho",
        "time": "10:40",
        "msg": "dobre"
    }
]
describe('data layer tests', () => {
    describe('registration tests', () => {
        beforeEach(function() {
            sinon.stub(firebaseDb, 'createUserWithEmail')
                .returns(Promise.resolve());
        });

        afterEach(function() {
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
    describe('login tests', () => {
        beforeEach(function() {
            sinon.stub(firebaseDb, 'signInWithEmail')
                .returns(Promise.resolve());
        });

        afterEach(function() {
            firebaseDb.signInWithEmail.restore();
        });

        it('SignInWithEmail with email should be called once with valid parameters', (done) => {
            let user = {
                email: 'valid@email.com',
                password: 'validpassword',

            };
            firebaseDb.signInWithEmail(user)
                .then(expect(firebaseDb.signInWithEmail).to.have.been.calledOnce)
                .then(done, done);
        });
        it('signInWithEmail with email be called with correct parameters', (done) => {
            const user = {
                email: 'valid@email.com',
                password: 'validpassword',

            };

            firebaseDb.signInWithEmail(user)
                .then(expect(firebaseDb.signInWithEmail.args[0][0]).to.deep.equal(user))
                .then(done, done);
        });

    });
    describe('Validation tests', () => {
        describe('Username validation tests', () => {
            it('username should 6 an 10 symbol is provided', () => {
                expect(() => validator.validateUsername('validateUsername')).to.not.throw();
            });

            it('should throw when username less six symbol', () => {
                expect(() => validator.validateUsername('six')).to.throw();
            });
            it('should throw when username symbols non include only letters, numbers and underscores', () => {
                expect(() => validator.validateUsername('ivan:)')).to.throw();
            });
            it('should throw when username is non string is provided', () => {
                expect(() => validator.validateUsername(6)).to.throw();
            });
        });
        describe('Email validation tests', () => {
            it('email is correctly formated', () => {
                expect(() => validator.validateEmail('abv@abv.bg')).to.not.throw();
            });

            it('should throw when email is badly formated', () => {
                expect(() => validator.validateEmail('abv')).to.throw();
            });
        });
        describe('Password validation tests', () => {
            it('password must be at least 6 symbols long and contain at least one uppercase, lowercase and a number', () => {
                expect(() => validator.validatePassword('Password1')).to.not.throw();
            });

            it('should throw when password is badly formated', () => {
                expect(() => validator.validatePassword('password')).to.throw();
            });
        });
    });
    describe('msg tests', () => {
        beforeEach(() => {
            var stub = sinon.stub(firebase, "database").callsFake(function() {
                return new FirebaseStub(function(eventType, callback, path) {
                    callback({
                        val: function() {
                            if (path.indexOf("empty")) {
                                return null
                            }
                            return simpleMsgs
                        }
                    })
                })
            });
        })
        afterEach(() => { firebase.database.restore() })
        it('can read empty conversations', (done) => {
            var callback = sinon.spy();
            msgModel.getConversation("empty", callback)
            assert(callback.withArgs([]));
            done();
        })
        it('can read simple conversation', (done) => {
            var callback = sinon.spy();
            msgModel.getConversation("simple", callback)
            assert(callback.withArgs(simpleMsgs));
            done();
        })
    })
});

mocha.run();
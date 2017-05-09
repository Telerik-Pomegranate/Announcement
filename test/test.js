import firebaseDb from 'firebase-database';
import msgModel from 'msg-model';
import firebaseModule from 'firebase-config';
import userModel from 'user-model';
import encryptor from 'encryptor';

mocha.setup('bdd');

let expect = chai.expect;
let assert = chai.assert;

let FirebaseStub = function (fakeOn) {
    this.ref = function () {
        return this;
    }
    this.child = function (path) {
        return this;
    }
    this.on = function (eventType, callback) {
        fakeOn(eventType, callback, path)
    };
}
let simpleMsgs = [
    {
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
describe('User model tests', () => {
    describe('constructor tests', () => {
        it('constructor successfully creates user', () => {
            let db = sinon.mock(firebaseModule);
            let newUser = new userModel(db);
            expect(newUser).to.be.instanceof(userModel);
        })
    });

    describe('properties tests', () => {
        it('new user has correct properties', () => {
            let db = sinon.mock(firebaseModule);
            let newUser = new userModel(db);
            expect(newUser).to.have.property('signIn');
            expect(newUser).to.have.property('signUp');
            expect(newUser).to.have.property('signOut');
            expect(newUser).to.have.property('accountInfo');
            expect(newUser).to.have.property('accountUser');
        })
    });

    describe('sign in tests', () => {
        it('sign in calls encryptor method encrypt once', (done) => {
            let db = sinon.mock(firebaseModule);
            let encryptStub = sinon.stub(encryptor, 'encrypt');
            let signStub = sinon.stub(firebaseDb, 'signInWithEmail')
                .returns(Promise.resolve());
            let newUser = new userModel(db);
            newUser.signIn('valid@email.com', 'validPassw0rd')
                .then(expect(encryptStub).to.have.been.calledOnce)
                .then(done, done);

            signStub.restore();
            encryptStub.restore();
        })
    });

    describe('sign in tests', () => {
        it('sign in calls firebaseDb method signWithEmail once', (done) => {
            let db = sinon.mock(firebaseModule);
            let encryptStub = sinon.stub(encryptor, 'encrypt');
            let signStub = sinon.stub(firebaseDb, 'signInWithEmail')
                .returns(Promise.resolve());
            let newUser = new userModel(db);
            newUser.signIn('valid@email.com', 'validPassw0rd')
                .then(expect(signStub).to.have.been.calledOnce)
                .then(done, done);
                
            signStub.restore();
            encryptStub.restore();
        })
    });

});

describe('Data layer tests', () => {
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
describe('Msg tests', () => {
    beforeEach(() => {
        var stub = sinon.stub(firebase, "database").callsFake(function () {
            return new FirebaseStub(function (eventType, callback, path) {
                callback({
                    val: function () {
                        if (path.indexOf("empty")) {
                            return null
                        }
                        return simpleMsgs
                    }
                })
            })
        });
    });
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
});


mocha.run();

import firebaseDb from 'firebase-database';
import msgModel from 'msg-model';

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
    describe('msg tests', () => {
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

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

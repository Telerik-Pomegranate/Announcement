const { expect } = chai;

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

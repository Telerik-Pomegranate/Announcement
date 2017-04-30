import firebaseDb from 'firebase-database';
import validator from 'validator';
import encryptor from 'encryptor';

class UserModel {

    signIn(email, password) {
        password = encryptor.encrypt(password);

        return firebaseDb.signInWithEmail(email, password)
            .catch(error => Promise.reject(error));
    }

    signUp(email, password, username) {

        try {
            validator.validateSignUpForm(email, password, username);
        } catch (error) {
            console.log('eee', error)
            return Promise.reject({ code: '500', message: error });
        }

        password = encryptor.encrypt(password);

        return firebaseDb.createUserWithEmail(email, password, username)
            .catch(error => Promise.reject(error));
    }

    signOut() {
        return firebaseDb.signOut()
            .catch(error => Promise.reject(error));
    }

}

const userModel = new UserModel();
export default userModel;
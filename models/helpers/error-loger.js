import firebaseDb from 'firebase-database';

const errorLogger = (function() {
    function push(error) {
        firebaseDb.pushError(error);
    }

    return {
        push
    };
}());

export default errorLogger;
let validator = (function() {

    const PATTERNS = {
        NAME_PATTERN: /[^a-zA-Z]/,
        PASSWORD_PATTERN: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}/,
        USER_NAME_PATTERN: /\S[_a-zA-Z0-9]{5,10}/,
        EMAIL_PATTERN: /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i,
        RESTRICTED_SYMBOLS_PATTERN: /[<>$@#&]/gm
    }

    const MESSAGES = {
        INVALID_PASSWORD_MESSAGE: 'The password must be at least 6 symbols long and contain at least one uppercase, lowercase and a number.',
        INVALID_USERNAME_MESSAGE: 'The username must be between 6 and 10 symbols and include only letters, numbers and underscores.',
        INVALID_EMAIL_MESSAGES: 'The email is badly formatted.',
    };

    function validateUsername(username) {
        // console.log('vleze')
        if (!PATTERNS.USER_NAME_PATTERN.test(username)) {
            //console.log('greshkat')
            throw MESSAGES.INVALID_USERNAME_MESSAGE;
        }
    }

    function validateEmail(email) {
        //  console.log('vlezeememememeail ')

        if (!PATTERNS.EMAIL_PATTERN.test(email)) {
            //   console.log('vleze greshka emial')
            throw MESSAGES.INVALID_EMAIL_MESSAGES;
        }
    }

    function validateSignUpForm(email, password, username) {

        validateUsername(username);
        validateEmail(email);

    }

    return {
        validateSignUpForm,
        validateUsername,
        validateEmail,
    }
}());

export default validator;
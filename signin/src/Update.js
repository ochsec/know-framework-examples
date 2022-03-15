import * as R from 'ramda'

export const MSGS = {
    EMAIL_UPDATED: 'EMAIL_UPDATED',
    PASSWORD_UPDATED: 'PASSWORD_UPDATED',
    REMEMBER_UPDATED: 'REMEMBER_UPDATED',
}

/* Update functions */
export function emailInputMsg(email) {
    return {
        type: MSGS.EMAIL_UPDATED,
        email,
    }
}

export function passwordInputMsg(password) {
    return {
        type: MSGS.PASSWORD_UPDATED,
        password,
    }
}

export function rememberInputMsg(remember) {
    return {
        type: MSGS.REMEMBER_UPDATED,
        remember,
    }
}

export const signInMsg = { type: MSGS.SIGN_IN }

const update = (msg, model) => {
    switch (msg.type) {
        case MSGS.EMAIL_UPDATED: {
            const { email } = msg
            return { ...model, email }
        }
        case MSGS.PASSWORD_UPDATED: {
            const { password } = msg
            return { ...model, password }
        }
        case MSGS.REMEMBER_UPDATED: {
            const { remember } = msg
            return { ...model, remember }
        }
        case MSGS.SIGN_IN:
            const signedIn = true
            return { ...model, signedIn }
    }

    return model
}

export default update

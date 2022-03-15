import * as R from 'ramda'
import hh from 'hyperscript-helpers'
import { h } from 'virtual-dom'

// Components
import Email from './Components/Email'
import Password from './Components/Password'

// Actions
import { rememberInputMsg, signInMsg } from '../Update'

const {
    div,
    main,
    form,
    fieldset,
    legend,
    label,
    input,
    a,
    h2,
    p,
} = hh(h)

/* View functions */

const view = (dispatch, model) => {
    if (model.signedIn) {
        return div({ className: 'mw6 center' }, [
            h2({ className: '' }, 'Sign In Successful'),
            p(`Email: ${model.email}`),
            p(`Password: ${model.password}`),
            p(`Remember Me: ${model.remember}`)
        ])
    }
    return div({ className: 'mw6 center' }, [
        main({ className: 'pa4 black-80' }, [
            form({
                className: 'measure center',
                onsubmit: e => {
                    e.preventDefault()
                    dispatch(signInMsg)
                }
            }, [
                fieldset({ id: 'sign_up', className: 'ba b--transparent ph0 mh0' }, [
                    legend({ className: 'f4 fw6 ph0 mh0' }, 'Sign In'),
                    Email(dispatch, model),
                    Password(dispatch, model),
                    label({ className: 'pa0 ma0 lh-copy f6 pointer' }, [
                        input({
                            type: 'checkbox',
                            value: model.remember,
                            onchange: e => dispatch(rememberInputMsg(!model.remember))
                        }), 
                        ' Remember me']),
                ]),
                div([
                    input({
                        className: 'b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib',
                        type: 'submit',
                        value: 'Sign in',
                    }),
                    div({ className: 'lh-copy mt3' }, [
                        a({ href: '#0', className: 'f6 link dim black db' }, 'Sign up'),
                        a({ href: '#0', className: 'f6 link dim black db' }, 'Forgot your password?')
                    ])
                ])
            ])
        ])
    ])
}

export default view

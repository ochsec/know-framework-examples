import hh from 'hyperscript-helpers'
import { h } from 'virtual-dom'
import customFieldSet from './customFieldSet'
import { passwordInputMsg } from '../../Update'

const {
    div,
    label,
    input,
} = hh(h)

const Password = (dispatch, model) => {
    return customFieldSet(
        'Password',
        model.password,
        e => dispatch(passwordInputMsg(e.target.value)),
        'password',
        'b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100',
    )
    // return div({ className: 'mv3' }, [
    //     label({ 
    //             className: 'db fw6 lh-copy f6',
    //             for: 'password',
    //         },
    //         'Password'),
    //     input({
    //         className: 'b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100',
    //         type: 'password',
    //         name: 'password',
    //         id: 'password'
    //     })
    // ])
}

export default Password
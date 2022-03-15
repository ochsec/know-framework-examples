import hh from 'hyperscript-helpers'
import { h } from 'virtual-dom'
import customFieldSet from './customFieldSet'
import { emailInputMsg } from '../../Update'

const {
    div,
    label,
    input,
} = hh(h)

const Email = (dispatch, model) => {
    return customFieldSet(
        'Email',
        model.email,
        e => dispatch(emailInputMsg(e.target.value)),
        'email',
        'pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
    )
}

export default Email
import hh from 'hyperscript-helpers'
import { h } from 'virtual-dom'

const { div, label, input } = hh(h)

const customFieldSet = (labelText, inputValue, oninput, inputType, inputClasses) => {
    return div({ className: 'mt3' }, [
        label({ className: 'db fw6 lh-copy f6' }, labelText),
        input({
            className: inputClasses,
            type: inputType,
            value: inputValue,
            oninput,
        })
    ])
}

export default customFieldSet
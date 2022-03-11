import hh from 'hyperscript-helpers'
import { h } from 'virtual-dom'
import formView from './formView'
import tableView from './tableView'

const { 
    pre, 
    div, 
    h1,  
} = hh(h)

/* View functions */
const view = (dispatch, model) => {
    return div({ className: 'mw6 center' }, [
        h1({ className: 'f2 pv2 bb' }, 'Calorie Counter'),
        formView(dispatch, model),
        tableView(dispatch, model.meals),
        pre(JSON.stringify(model, null, 2))
    ])
}

export default view

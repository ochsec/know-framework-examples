import initModel from './Model'
import update from './Update'
import view from './View/View'
import app from './App'

require('./assets/css/tachyons.min.css');
const fa = document.createElement('link')
fa.type = "text/css"
fa.rel = "stylesheet"
fa.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"
document.getElementsByTagName("head")[0].appendChild(fa)

document.title = "Know Framework";
const appDiv = document.createElement('div');
appDiv.id = "app";
document.body.append(appDiv);

const node = document.getElementById('app')

app(initModel, update, view, node)

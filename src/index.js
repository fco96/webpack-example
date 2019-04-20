import $ from "jquery"
import './style.css'

$('#main').ready(() =>
    $('#main').append("Hola esto fue hecho en jquery c:!")
)

if (module.hot) {
    module.hot.accept()
}
import './styles.css'
import {renderProjectInput} from './display.js'

const newProjectButton = document.getElementById('create-project-btn')
newProjectButton.addEventListener('click', function() {
    renderProjectInput()
})
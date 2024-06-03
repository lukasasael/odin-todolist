import { createProject } from './project'
import { createTask } from './task'

const displayArea = document.getElementById('project-area')

export function clearDisplay() {
    displayArea.innerHTML = ''
}

export function renderProjectInput() {
    clearDisplay()
    let projectInputArea = document.createElement('div')
    projectInputArea.id = 'project-input-area'

    let title = document.createElement('input')
    title.type = 'text'
    title.id = 'input-title'
    projectInputArea.appendChild(title)

    let description = document.createElement('textarea')
    description.id = 'input-description'
    projectInputArea.appendChild(description)

    let createButton = document.createElement('button')
    createButton.id = 'input-create-button'
    createButton.textContent = 'Create Project'
    createButton.addEventListener('click', () => { createProject() })
    projectInputArea.appendChild(createButton)

    displayArea.appendChild(projectInputArea)
}

export function renderProject(project) {
    clearDisplay()
    let projectRenderedArea = document.createElement('div')
    projectRenderedArea.id = 'project-rendered-area'

    let projectTitle = document.createElement('h1')
    projectTitle.textContent = project.title
    projectRenderedArea.appendChild(projectTitle)

    let projectDescription = document.createElement('p')
    projectDescription.textContent = project.description
    projectRenderedArea.appendChild(projectDescription)

    let createNoteButton = document.createElement('button')
    createNoteButton.textContent = "Add Task"
    createNoteButton.addEventListener('click', () => { createTask(project) })
    projectRenderedArea.appendChild(createNoteButton)

    
    displayArea.appendChild(projectRenderedArea)
    renderTasks(project)
}

export function addSidebarProject(project) {

}

export function renderTasks(project) {
    if (project.taskList != null) {
        for (let key in project.taskList) {
            let task = project.taskList[key]
            
            let taskArea = document.createElement("div")
            taskArea.id = "task-rendered-area"

            let taskName = document.createElement("p")
            taskName.textContent = task.name

            let taskDescription = document.createElement("p")
            taskDescription.textContent = task.text

            let taskCheckBox = document.createElement("input")
            taskCheckBox.setAttribute("type", "checkbox")
            taskCheckBox.setAttribute("id", "checkbox")
            taskCheckBox.checked = task.checked

            taskArea.appendChild(taskName)
            taskArea.appendChild(taskDescription)
            taskArea.appendChild(taskCheckBox)
            displayArea.appendChild(taskArea)
        }
    }
}
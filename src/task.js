import { renderTasks } from "./display"
import { renderProject } from "./display"

export class Task {
    constructor(name, text, checked) {
        this.name = name
        this.text = text
        this.checked = checked
    }
}

export function createTask(project) {
    const projectArea = document.getElementById("project-rendered-area")

    let taskArea = document.createElement("div")
    taskArea.id = "task-area"   

    const form = document.createElement("form")

    const taskLabel = document.createElement("label")
    taskLabel.setAttribute("for", "task")
    taskLabel.textContent = "Task name:"
    const taskInput = document.createElement("input")
    taskInput.setAttribute("type", "text")
    taskInput.setAttribute("id", "task")

    const descriptionLabel = document.createElement("label")
    descriptionLabel.setAttribute("for", "description")
    descriptionLabel.textContent = "Task description:"
    const descriptionInput = document.createElement("input")
    descriptionInput.setAttribute("type", "text")
    descriptionInput.setAttribute("id", "description")

    const taskCheckBox = document.createElement("input")
    taskCheckBox.setAttribute("type", "checkbox")
    taskCheckBox.setAttribute("id", "checkbox")

    const submitButton = document.createElement("button")
    submitButton.setAttribute("type", "submit")
    submitButton.setAttribute("value", "Submit")
    submitButton.textContent = "Create Task"

    form.appendChild(taskLabel)
    form.appendChild(taskInput)
    form.appendChild(descriptionLabel)
    form.appendChild(descriptionInput)
    form.appendChild(taskCheckBox)
    form.appendChild(submitButton)

    taskArea.appendChild(form)
    projectArea.appendChild(taskArea)

    submitButton.addEventListener("click", (e) => {
        e.preventDefault()
    
        const taskName = document.getElementById("task").value
        const taskDescription = document.getElementById("description").value
        const taskCompleted = document.getElementById("checkbox").checked
        const task = new Task(taskName, taskDescription, taskCompleted)

        project.addTask(task)
        console.log(project)
        taskArea.remove()
        renderProject(project)
    })
}
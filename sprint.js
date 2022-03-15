const tasks = document.querySelectorAll('.task');
const taskBoxes = document.querySelectorAll('.taskBox')

tasks.forEach((task) => {
    task.addEventListener('dragstart', (e) => { e.target.className += ' task1' })
})
tasks.forEach((task) => {
    task.addEventListener('dragend', (e) => { e.target.className = 'task' })
})

taskBoxes.forEach((taskBox) => {
    taskBox.addEventListener('dragover', (e) => {
        e.preventDefault();
        // let element = document.querySelector('.task1');
        // taskBox.append(element)
    })
})

taskBoxes.forEach((taskBox) => {
    taskBox.addEventListener('drop', () => {
        let element = document.querySelector('.task1');
        taskBox.append(element)
    })
})
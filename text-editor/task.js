const textArea = document.getElementById('editor')
const clearAreaButton = document.getElementById('clear_editor')

textArea.addEventListener('keyup', () => {
    localStorage.setItem('text', textArea.value)
})

clearAreaButton.addEventListener('click', () => {
    textArea.value = ''
    localStorage.removeItem('text')
})

document.addEventListener('DOMContentLoaded', () => {
    textArea.value = localStorage.getItem('text')
})
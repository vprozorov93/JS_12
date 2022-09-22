const signButton = document.getElementById('signin__btn')
const xhr = new XMLHttpRequest()

signButton.addEventListener('click', (event) => {
    event.preventDefault()
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php')
    const formData = new FormData(document.forms.signin)
    xhr.send(formData)
})

xhr.addEventListener('readystatechange', (event) => {
    if (event.currentTarget.readyState === 4) {
        let response;
        try {
            const json = JSON.parse(xhr.responseText)
            response = json.success
            if (response) {
                localStorage.setItem('userID', json.user_id)
            }
        } catch {
            response = false
        }

        if (response === true) {
            showWelcome(localStorage.getItem('userID'))
        } else {
            alert('Неверный логин/пароль')
            document.querySelectorAll('input').forEach( element => element.value = '')
        }
    }
    
})

document.addEventListener('DOMContentLoaded', () => {
    const userlog = localStorage.getItem('userID')
    if (userlog) {
        showWelcome(userlog)
    }
})

function showWelcome(userID){
    document.querySelector('.signin_active').classList.remove('signin_active')
    document.querySelector('.welcome').classList.add('welcome_active')
    document.querySelector('#user_id').textContent = userID
}
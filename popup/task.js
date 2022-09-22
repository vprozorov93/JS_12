document.addEventListener('DOMContentLoaded', () => {
    let isClosedPopup = getCookie('isClosedSubscribePopup')

    if (!isClosedPopup) {
        setCookie('isClosedSubscribePopup', 'no')
        isClosedPopup = 'no'
    }

    if (isClosedPopup === 'no') {
        const modal = document.getElementById('subscribe-modal')
        modal.classList.add('modal_active')
    }    
})

document.querySelector('.modal__close').addEventListener('click', (event)=>{
    document.getElementById('subscribe-modal').classList.remove('modal_active')
    setCookie('isClosedSubscribePopup', 'yes')
})

function getCookie(value) {
    const cookies = document.cookie.split('; ')
    const cookie = cookies.find(element => element.startsWith(value+'='))
    
    if (cookie) {
        return cookie.substring(value.length+1)
    }

    return undefined
}

function setCookie(key, value) {
    document.cookie = key + '=' + encodeURIComponent(value)
}
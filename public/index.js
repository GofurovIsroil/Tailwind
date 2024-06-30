const list = document.body.querySelector('#list')
const menu = document.body.querySelector('.nav-burger')
const listBox = document.body.querySelector('#list-box')




const onClickHandler = () => {
    if (listBox.classList.contains('grid') && list.classList.contains('overflow-hidden')) {
        listBox.classList.remove('grid')
        list.classList.remove('overflow-hidden')
        listBox.style.gridTemplateRows = '1fr'
    } else {
        listBox.classList.add('grid')
        list.classList.add('overflow-hidden')
        listBox.style.gridTemplateRows = '0fr'
    }
}

menu.addEventListener('click', onClickHandler)
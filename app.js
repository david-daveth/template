var btn = document.querySelector('#theme')
const header = document.querySelector('.header')

window.addEventListener('scroll', ()=>{
    if(window.scrollY >= 60){
        document.body.classList.add('body')
        header.classList.add('scrolled')
    } else if (window.scrollY < 55){
        document.body.classList.remove('body')
        header.classList.remove('scrolled')
    }
})
btn.addEventListener('click', ()=>{
    document.body.classList.toggle('active')
    if(document.body.classList.contains('active')){
        btn.textContent = 'Light'
    }
        else{
            btn.textContent = 'Dark'
        }
})
let count = 3;
const unread = document.querySelectorAll('.unread');
const plural = document.querySelector('.plural');
const countSpan = document.querySelector('.count');
const markedRead = document.querySelector('.marked-read');

function removeDots(elem){
    const dot = elem.querySelector('* > .dot');
    dot.remove();
}

function manageCount(count){
    countSpan.textContent = count;
    if(count<=1){
        plural.style.display = "none";
    }
}

unread.forEach(elem => {
    elem.addEventListener('click',()=>{
        elem.classList.remove('unread');
        removeDots(elem);
        count--;
        manageCount(count);
    })
})

markedRead.addEventListener('click',()=>{
    countSpan.textContent = 0;
    unread.forEach(elem =>{
        elem.classList.remove('unread');
    })
    removeDots(elem);
})
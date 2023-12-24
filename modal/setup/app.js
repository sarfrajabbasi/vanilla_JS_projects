// select modal-btn,modal-overlay,close-btn
const modal_btn = document.querySelector('.modal-btn');
const close_btn = document.querySelector('.close-btn');
const modal_overlay = document.querySelector('.modal-overlay');
console.log(modal_btn,close_btn,modal_overlay);

// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
    modal_btn.addEventListener('click',()=>{
        modal_overlay.classList.add('open-modal')
    })
// when user clicks close-btn remove .open-modal from modal-overlay
close_btn.addEventListener('click',()=>{
    modal_overlay.classList.remove('open-modal')
})

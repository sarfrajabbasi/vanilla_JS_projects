//using selectors inside the element
const questions = document.querySelectorAll('.question');

questions.forEach((question)=>{
    const btn = question.querySelector('.question-btn');
    btn.addEventListener('click',function(){
        questions.forEach(function(item){
            if(item !== question){
                item.classList.remove('show-text')
            }
        })
        question.classList.toggle('show-text')
    })
})



// traversing the dom
// const btns = document.querySelectorAll('.question-btn');
// console.log(btns);
// btns.forEach((btn)=>{
//     btn.addEventListener('click',function(e){
//         const question = e.currentTarget.parentElement.parentElement;
//         console.log(question);

//         question.classList.toggle('show-text');

//     })
// })
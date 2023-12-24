// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');
console.log(navToggle,links);

navToggle.addEventListener('click',()=>{
    console.log(links.classList);
    // if(links.classList.contains('show-links')){
    //     links.classList.remove('show-links')
    // }else{
    //     links.classList.add('show-links')
    // }
    links.classList.toggle('show-links')
})
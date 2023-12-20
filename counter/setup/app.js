function createEl(el,mulitpleEl=0,clas=""){
    const element  = document.createElement(el);
    if(mulitpleEl){
        const elArr = [];
        for(let i=1;i<=mulitpleEl;i++){
            const MultiElement = document.createElement(el);
            MultiElement.classList.add(clas)
            elArr.push(MultiElement)

        }
        return elArr;
    }
    return element
    
}

const main  = createEl('main');
const container = createEl('div');
const h1 = createEl('h1');
const spanValue = createEl('span');

const button_container = createEl('div');
const btns = createEl('button',3,'btn');

// classs
container.classList.add('container');
spanValue.id = 'value';
button_container.classList.add('button_container');
 btns[0].classList.add('decrease');
 btns[1].classList.add('rest');
 btns[2].classList.add('increase');


// add text   
spanValue.textContent = 0;
h1.textContent = 'counter';
 btns[0].textContent = 'decrease';
 btns[1].textContent = 'rest';
 btns[2].textContent = 'increase';


//  appending
 function appendMe(parent,child){
    parent.appendChild(child);
 }
 function appendMoreChild(parent,child){
    parent.append(...child);
 }
 appendMoreChild(button_container,btns)
 appendMe(main,container)
 appendMoreChild(container,[h1,spanValue,button_container])
 document.body.appendChild(main);
 
// set initial count
let count =0;

// select value and buttons

const value =  document.querySelector('#value');





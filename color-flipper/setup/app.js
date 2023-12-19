function createEl(el) {
  const element = document.createElement(el);

  return element;
}

const nav = createEl("nav");
const nav_center = createEl("div");
nav_center.classList.add("nav-center");
nav_center.innerHTML = "<h4>color Changer</h4>";
const nav_links = createEl("ul");
nav_links.classList.add("nav-links");
nav_links.innerHTML = `<li>
<a href="index.html">Simple</a>
</li><li>
<a href="hex.html">hex</a>
</li>`;

nav_center.appendChild(nav_links);
nav.appendChild(nav_center);

const main = createEl('main');
const container = createEl('div');
container.classList.add('container');
container.innerHTML = `<h2>background color : <span class="color">
#f1f5f8
</span></h2>
<button class="btn btn-hero" id="btn">click me</button>`;

main.appendChild(container);
 document.body.append(nav,main)
 console.log(nav);


 const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];


 const btn = document.getElementById('btn');
 const color = document.querySelector('.color');

 btn.addEventListener('click',()=>{
  // get random number b/w 0-3

  const randomNumber = Math.floor(Math.random()*colors.length);
  // const randomNumber2 = `#${Math.floor(Math.random()*16777215).toString(16)}`;
// console.log(randomNumber2);
  document.body.style.backgroundColor = colors[randomNumber];
  // document.body.style.backgroundColor = randomNumber2;
  // color.textContent = colors[randomNumber2]
  color.textContent = colors[randomNumber]
 })
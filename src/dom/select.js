console.log("window",window);

console.log("document",document);

const form = document.getElementById('my-form');
const h1 = document.querySelector('h1');
const items = document.querySelectorAll('.item');
const items1 = document.getElementsByClassName("item");
const li = document.getElementsByTagName("li");
const ul = document.querySelector('.items');
const btn = document.querySelector('.btn');

console.log("form",form);
console.log("h1",h1);
console.log("items",items);
console.log("items1",items1);
console.log("li",li);

items.forEach((item,index)=>{
    console.log(index,item.className,item.textContent);
})

//ul.remove();
//ul.firstElementChild.remove();
//ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Brad';
ul.lastElementChild.innerHTML = '<h4>hello</h4>';

btn.style.background = 'red';

// btn.addEventListener('click',(e)=>{
//     const {id,className} = e.target;
//     console.log(`id=${id} class=${className}`);
//     e.preventDefault();
//     document.querySelector('#my-form').style.background = 'yellow';
//     document.querySelector('body').classList.add('bg-dark');
// });


const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit',onSubmit);

function onSubmit(e){
    e.preventDefault();
    if(nameInput.value === '' || emailInput.value === '' ) {
        msg.innerHTML = 'Plz input fileds';
        setTimeout(()=>{
           msg.innerHTML = '';
        },4000);
    } else {
        const li = document.createElement('li');
        li.innerHTML = nameInput.value;
        userList.appendChild(li);
        nameInput.value = '';
        emailInput.value = '';

    }
    console.log(nameInput.value);
}

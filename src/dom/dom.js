// console.log("URL",document.URL);
// console.log("domain",document.domain);
// console.log("title",document.title);
// console.log("doctype",document.doctype);
// console.log("head",document.head.textContent.trim());
// //console.log("all",document.all);
// console.log("all",document.all[2]);
// console.log("form",document.forms[0]);
// console.log("links",document.links);
// console.log("images",document.images);

// const headerTitle =  document.getElementById('header-title');
// const header =  document.getElementById('main-header');

//headerTitle.textContent = 'Hello Dom';
// console.log("textContent",headerTitle.textContent);
// console.log("innerText",headerTitle.innerText);
//header.innerHTML = '<h3>111</h3>';
//header.style.borderBottom = 'solid 3px #000';


// const items = document.getElementsByClassName('list-group-item');
// console.log(items);
// let {style}  = items[1];
// items[1].textContent = 'aaaa'
// style.fontWeight = 'bold';
// style.backgroundColor = 'red';

// for (let i=0;i<items.length;i++) {
//     items[i].style.backgroundColor = '#999';
// }


// const items = document.getElementsByTagName('li');
// console.log(items);
// let {style}  = items[1];
// items[1].textContent = 'aaaa'
// style.fontWeight = 'bold';
// style.backgroundColor = 'red';


// const items = document.querySelectorAll('li');
// console.log(items);
// let {style}  = items[1];
// items[1].textContent = 'aaaa'
// style.fontWeight = 'bold';
// style.backgroundColor = 'red';


// querySelector
// const header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';
//
// const input = document.querySelector('input');
// input.value = 'Hello world';
//
// const submit = document.querySelector('input[type="submit"');
// submit.value="SEND";
//
// const item = document.querySelector('.list-group-item');
// item.style.color = 'blue';
//
// const secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';

//traversing the dom
// const itemList = document.querySelector('#items');
// itemList.parentNode.style.backgroundColor = 'yellow';
// const body = itemList.parentNode.parentNode.parentNode;
// body.style.backgroundColor = 'green';


// const itemList = document.querySelector('#items');


// itemList.parentElement.style.backgroundColor = 'yellow';
// const body = itemList.parentElement.parentElement.parentElement;
// body.style.backgroundColor = '#555';


//childNodes
// console.log(itemList.childNodes);

// console.log(itemList.firstElementChild.attributes.item(0));
// console.log(itemList.lastElementChild.className);
// console.log(itemList.firstElementChild);

// nextSibling
// const first = itemList.firstElementChild;
// console.log(first);
// console.log(first.nextElementSibling);


// previousSibling
// const first = itemList.lastElementChild;
// console.log(first.previousSibling);
// console.log(first.previousElementSibling);


const newDiv = document.createElement('div');
newDiv.className = "hello";
newDiv.textContent = 'helloworld';
newDiv.setAttribute('title','helloworld');
const newDivText = document.createTextNode('  aaaaHello world');
newDiv.appendChild(newDivText);
document.querySelector('body').appendChild(newDiv);
console.log(newDiv);

const container = document.querySelector('header .container');
const h1 = document.querySelector('header h1');

container.insertBefore(newDiv,h1);

const btn = document.querySelector("#btn");
btn.addEventListener("mouseenter",()=>{
    console.log("mouseenter");
});
btn.addEventListener("mouseleave",()=>{
    console.log("mouseleave");
});
btn.addEventListener("mouseover",()=>{
    console.log("mouseover");
});
btn.addEventListener("mouseout",()=>{
    console.log("mouseout");
});


//const delbtn = document.createElement("button");

// removeItem=(e)=>{
//     if(e.target.classList.contains('delete')) {
//         console.log(1);
//         if(confirm('Are you Sure?')) {
//            // const li = e.target.parentElement;
//             e.target.value.toLowerCase();
//         }
//     }
// };


const items = document.getElementsByTagName("li");
Array.from(items).forEach((item)=>{
    console.log(item);
});


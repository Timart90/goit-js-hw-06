const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ul = document.querySelector('#ingredients')
const itemsLi = [];


function addLi (arr) {
arr.map((el) => {
  const li = document.createElement('li');
  li.textContent = el;
  li.classList.add('item');
  itemsLi.push(li)
});
  
  ul.append(...itemsLi);
}
addLi(ingredients);

console.log(ul);
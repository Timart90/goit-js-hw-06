const liItem = document.querySelectorAll('.item');
console.log(`Number of categories: ${liItem.length}`);

const categoryEl = liItem.forEach ((num) => {
  const category = num.firstElementChild.textContent;
  console.log(`Category: ${category}`);
  const elements = num.lastElementChild.children.length;
  console.log(`Elements: ${elements}`);
}); 



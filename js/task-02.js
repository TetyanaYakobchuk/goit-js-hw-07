const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsCollection = document.querySelector('ul');
//console.log(ingredientsCollection);

const elements = ingredients.map(ingredient => {
    const element = document.createElement('li');
    element.append(...ingredient);
    return element.textContent+' ';
});
//console.log(elements);

ingredientsCollection.append(...elements);

console.log(`В списке ${categories.children.length} категории.`);

const categoriesEl = categories.querySelectorAll('.item');
const animals = categories.firstElementChild;

categoriesEl.forEach(category =>
    console.log(`Категория: ${category.firstElementChild.textContent}; Количество элементов: ${category.lastElementChild.children.length};`)
);
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const arrayIngred = document.querySelector("ul");

const listEl = ingredients.map(ingredient =>{

  const itemEl = document.createElement("li");
  itemEl.classList.add("item");
  itemEl.textContent = ingredient;

  return itemEl;
}

)

arrayIngred.append(...listEl);



const categories = document.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length}`);

categories.forEach(function callback(number) {
  const title = number.querySelector("h2").textContent;

  const itemEl = number.querySelectorAll("li").length;

  console.log(`Category: ${title}`);

  console.log(`Elements: ${itemEl}`);
});

const input = document.querySelector("#validation-input");

input.addEventListener("blur", (event) => {
  console.log(input.value);

  if (input.value.length === 6) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
});

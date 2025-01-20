const form = document.querySelector("form");
const formTwo = document.getElementById("form2");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  console.log(formData);
  const jsObjectPlease = Object.fromEntries(formData);
  console.log(jsObjectPlease);
});

formTwo.addEventListener("submit", function (event) {
  event.preventDefault();
  const formData = new FormData(form2);
  console.log(formData);
  const getFormTwoObject = Object.fromEntries(formData);
  console.log(getFormTwoObject);
});

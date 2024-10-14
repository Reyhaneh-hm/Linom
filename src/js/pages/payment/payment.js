import '../../../scss/components/pages/payment/index.scss';
/*---------------------------------------------*/


// number Spinner
const numberSpinner = document.querySelectorAll("#numberSpinner");
numberSpinner.forEach((item) => {
  const increament = item.querySelector(".increament");
  const decreament = item.querySelector(".decreament");
  const input = item.querySelector("input");
  const minValue = input.getAttribute("min");
  const maxValue = input.getAttribute("max");
  const stepValue = input.getAttribute("step");

  input.value = minValue;

  increament.addEventListener("click", () => {
    if (+input.value < +maxValue) {
      input.value = +input.value + +stepValue;
    }
  });

  decreament.addEventListener("click", () => {
    if (+input.value > +minValue) {
      input.value = +input.value - +stepValue;
    }
  });
});
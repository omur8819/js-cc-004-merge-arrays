const toFirstArray = document.querySelector("#button_0");
const toSecondArray = document.querySelector("#button_1");
const stopFirstArray = document.querySelector("#button_2");
const mergeArraysBtn = document.querySelector("#button_3");
const input = document.querySelector("#numbers");
const desc = document.querySelector("#desc");
const result = document.querySelector("#merged_array");
const ArrayA = [];
const ArrayB = [];

toSecondArray.style.display = "none";

toFirstArray.addEventListener("click", function () {
  ArrayA.push(input.value);
  input.value = "";
});

stopFirstArray.addEventListener("click", () => {
  stopFirstArray.style.display = "none";
  toFirstArray.style.display = "none";
  toSecondArray.style.display = "inline";
  let firstArray = ArrayA.join(", ");
  desc.innerHTML = `First Array: ` + firstArray + "<br/>";
});

toSecondArray.addEventListener("click", function () {
  ArrayB.push(input.value);
  console.log(ArrayB);
  input.value = "";
});

mergeArraysBtn.addEventListener("click", function () {
  result.innerHTML = `Merged array : ` + mergeArrays(ArrayA, ArrayB);
});

function mergeArrays(ArrayA, ArrayB) {
  desc.innerText += "   Second Array: " + ArrayB.join(", ");
  ArrayB.forEach((x) => {
    ArrayA.push(parseInt(x)); 
  });

  return ArrayA.sort((a, b) => a-b).join(", ");
}

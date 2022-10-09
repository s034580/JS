/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */


let button = document.querySelector("#submit-btn");
button.addEventListener("click", (event) => {
  event.preventDefault();
  output.innerHTML ="";
  const value = document.querySelector("input[id=search]").value;
  const result1 = document.createElement("p");

  result1.innerText = "Result in lb: " + (value * 2.2046);

const result2 = document.createElement("p");

  result2.innerText ="Result in  g: " + (value /  0.001000);

const result3 = document.createElement("p");

  result3.innerText = "Result in oz: " + (value * 35.274);

  output.append(result1, result2, result3);
});


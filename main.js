
// Say Hello To The People!
// 1. - Populate the select options dynamically by iterating over the people array
//    - Create a template literal for an option element
//    - Append to the select element in the dom
// 2. Console.log "Hello[person's name]!" When a person is selected and the button is clicked!

const people = ["Meg", "Steve", "kimmy", "Madi", "Jisie", "Joe", "Emily", "Andy"];

let HTMLsquirt = "";
people.forEach(element => {
    HTMLsquirt += `<option id="${element}">${element}</option>
    `;
});
document.querySelector("#people").innerHTML = HTMLsquirt;

const helloButton = document.querySelector("#helloBtn");

helloButton.addEventListener("click", event => {
    const chosenPerson = document.querySelector("#people").value;
    console.log(`Hello  ${chosenPerson}!`);
});
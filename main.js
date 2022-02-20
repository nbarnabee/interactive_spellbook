
document.getElementById("search-button").addEventListener("click", fetchSpell);

function fetchSpell() {
  let searchTerm = document.querySelector("input").value.toLowerCase().split(" ").join("-");

  fetch(`https://www.dnd5eapi.co/api/spells/${searchTerm}`)
  .then(res => res.json())
  .then (data => {
    console.log(data)
  })
  .catch(err => console.log(`Error: ${err}`))
  .finally(document.querySelector("input").value = "");
}
/* 
Components of a D&D 5thE spell:
Name
Level
School
casting time
range
components (plus additional material field)
duration
source
description
higher level
*/
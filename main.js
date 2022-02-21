
document.getElementById("search-button").addEventListener("click", fetchSpell);
let newSpell;

function fetchSpell() {
  let searchTerm = document.querySelector("input").value.toLowerCase().split(" ").join("-");

  fetch(`https://www.dnd5eapi.co/api/spells/${searchTerm}`)
  .then(res => res.json())
  .then (data => {
    console.log(data);
    newSpell = SpellMaker(data);
  })
  .catch(err => console.log(`Error: ${err}`))
  .finally(document.querySelector("input").value = "");
}

function SpellMaker(input) {
  return {
    name: input.name,
    school: input.school.name,
    level: input.level,
    castTime: input.casting_time, 
    range: input.range,
    components: input.components,
    materialComp: input.material,
    duration: input.duration,
    concentration: input.concentration,
    desc: input.desc,
    desc_higher: input.higher_level, 
  }
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
var charactertype;

function CharacterSelect(type){
    charactertype = type;
    console.log("charactertype is" + charactertype);
    /* document.getElementById("CharacterSelection").hidden=true; */
    var element = document.getElementById("CharacterSelection");
        element.classList.add("hidden");
    /* section.classList.add("hidden"); */
    /* section.style.display = "none"; */
}

/* function hideSection() {
    var section = document.getElementById("mySection");
    section.classList.add("hidden");
  } */
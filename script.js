//HTML Declarations
const BLOODLINECONTAINER = document.getElementById("bloodline-container");
const BLOODLINECHOICE = document.getElementById("bloodline-choice");

//Importing
import { ardentPlaybook } from "./playbooks/bloodlines/ardent.js";
import { ektusPlaybook } from "./playbooks/bloodlines/ektus.js";

//Aggregation Variables
const BLOODLINES = [ardentPlaybook, ektusPlaybook];

//Load Content
const loadContent = function () {
  for (const bloodline of BLOODLINES) {
    //console.log(bloodline.name);
    BLOODLINECHOICE.innerHTML += `<div id=${bloodline.name}><p>${bloodline.name}</p></div>`;
  }
};

window.onload = loadContent();

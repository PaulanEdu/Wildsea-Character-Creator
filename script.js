//HTML Declarations
const BLOODLINE_CHOICE = document.getElementById("bloodline-choice");
const ORIGIN_CHOICE = document.getElementById("origin-choice");
const POST_CHOICE = document.getElementById("post-choice");

const BLOODLINE_OPTIONS = document.getElementById("bloodline-options");
const BLOODLINE_EDGE_BTNS = document.getElementById("bloodline-edges-btns");
const BLOODLINE_ASPECTS_BTNS = document.getElementById(
  "bloodline-aspects-btns"
);
const BLOODLINE_SKILL_BTNS = document.getElementById("bloodline-skills-btns");
const BLOODLINE_OPTION_DIVS = [
  BLOODLINE_EDGE_BTNS,
  BLOODLINE_ASPECTS_BTNS,
  BLOODLINE_SKILL_BTNS,
];

const ORIGIN_OPTIONS = document.getElementById("origin-options");
const ORIGIN_EDGE_BTNS = document.getElementById("origin-edges-btns");
const ORIGIN_ASPECTS_BTNS = document.getElementById("origin-aspects-btns");
const ORIGIN_SKILL_BTNS = document.getElementById("origin-skills-btns");
const ORIGIN_OPTION_DIVS = [
  ORIGIN_EDGE_BTNS,
  ORIGIN_ASPECTS_BTNS,
  ORIGIN_SKILL_BTNS,
];

const POST_OPTIONS = document.getElementById("post-options");
const POST_EDGE_BTNS = document.getElementById("post-edges-btns");
const POST_ASPECT_BTNS = document.getElementById("post-aspects-btns");
const POST_SKILL_BTNS = document.getElementById("post-skills-btns");
const POSTOPTIONDIVS = [POST_EDGE_BTNS, POST_ASPECT_BTNS, POST_SKILL_BTNS];

const OPTIONS_OBJECT = {
  Bloodline: { optiondiv: BLOODLINE_OPTIONS, divarray: BLOODLINE_OPTION_DIVS },
  Origin: { optiondiv: ORIGIN_OPTIONS, divarray: ORIGIN_OPTION_DIVS },
  Post: { optiondiv: POST_OPTIONS, divarray: POSTOPTIONDIVS },
};

import { PLAYBOOKS } from "./importer.js";
import { edgesInfo } from "./playbooks/edges.js";

let qsCharacterHolder = {
  bloodline: {
    name: "",
    edge: "",
    skills: {},
    resources: [],
    drive: "",
    mire: "",
    aspects: [],
  },
  origin: {
    name: "",
    edge: "",
    skills: {},
    resources: [],
    drive: "",
    mire: "",
    aspects: [],
  },
  post: {
    name: "",
    edge: "",
    skills: {},
    resources: [],
    drive: "",
    mire: "",
    aspects: [],
  },
};

const createEdgeHolder = () => {
  return [
    qsCharacterHolder.bloodline.edge,
    qsCharacterHolder.origin.edge,
    qsCharacterHolder.post.edge,
  ];
};

const capitalize = (str) => {
  return str[0].toUpperCase() + str.slice(1);
};

//Reset all choices in the qsCharacterHolder to blanks
const resetCharacterPlaybook = (item) => {
  item["name"] = "";
  item["edge"] = "";
  item["skills"] = {};
  item["resources"] = [];
  item["drive"] = "";
  item["mire"] = "";
  item["aspects"] = [];
};

const btnArrayOf = (pb, option) => {
  return [...document.getElementsByClassName(`${pb}-${option}`)];
};

//Create playbook choice buttons
const renderChoiceBtns = function () {
  for (const playbook of PLAYBOOKS) {
    if (playbook.type == "Bloodline") {
      BLOODLINE_CHOICE.innerHTML += playbookBtnTemplate(
        playbook.name,
        playbook.type,
        playbook.blurb
      );
    } else if (playbook.type == "Origin") {
      ORIGIN_CHOICE.innerHTML += playbookBtnTemplate(
        playbook.name,
        playbook.type,
        playbook.blurb
      );
    } else if (playbook.type == "Post") {
      POST_CHOICE.innerHTML += playbookBtnTemplate(
        playbook.name,
        playbook.type,
        playbook.blurb
      );
    }
  }
};

//Toggles the visibility of element el based on class cl of target t.
const hideOptionsIfNotSelected = (target, cl, el, pb) => {
  if (target.classList.contains(cl)) {
    if (target.classList.contains("selected-playbook")) {
      el.classList.remove("hidden");
    } else {
      el.classList.add("hidden");
      resetCharacterPlaybook(qsCharacterHolder[pb]);
    }
  }
};

//Unselect a button of the same class as the clicked button
const deselectUnusedButton = (arr, cl, target) => {
  [...arr].forEach((item) => {
    if (
      item.classList.contains(cl) &&
      item.classList.contains(target.classList[0]) &&
      item.id !== target.id
    ) {
      item.classList.remove(cl);
    }
  });
};

const isEdgeSelectedElsewhere = (holder, check) => {
  for (let pb in holder) {
    if (holder[pb].edge == check) {
      return true;
    }
  }
  return false;
};

const toggleLockedEdges = (target) => {
  let edgeHolder = createEdgeHolder();
  [...document.getElementsByClassName("edges")].forEach((item) => {
    if (item.id != target.id && !item.classList.contains("selected-edge")) {
      if (edgeHolder.includes(item.classList[1].split("-")[0])) {
        item.classList.add("locked-edge");
      } else if (item.classList.contains("locked-edge")) {
        item.classList.remove("locked-edge");
      }
    }
  });
};

//Skill Related Functions
const doesSkillHavePoints = (skill) => {
  for (let pb in qsCharacterHolder) {
    if (pb["skills"].hasOwnProperty(skill)) {
      if (pb["skills"][skill] > 0) {
        return true;
      }
    }
  }
  return false;
};

const plusBtnFunction = (target, type) => {
  const skill = target.parentElement.id.split("-")[0];

  if (qsCharacterHolder[type.toLowerCase()].skills.hasOwnProperty(skill)) {
    qsCharacterHolder[type.toLowerCase()].skills[skill]++;
  } else {
    qsCharacterHolder[type.toLowerCase()].skills[skill] = 1;
  }

  [...document.getElementsByClassName(`${skill}-value`)].forEach((counter) => {
    counter.innerHTML = qsCharacterHolder[type.toLowerCase()].skills[skill];
  });

  console.log("Check skills:", qsCharacterHolder);
};

//Option Functionality
const edgeButtonFunction = (target, type) => {
  //Set edge on the character sheet
  qsCharacterHolder[type.toLowerCase()].edge = target.id.split("-")[2];
  //Toggle selection class on clicked button
  target.classList.toggle("selected-edge");
  //Removes edge from qsCharacterHolder is edge button is deselected
  if (!target.classList.contains("selected-edge")) {
    qsCharacterHolder[type.toLowerCase()].edge = "";
  }
  deselectUnusedButton(
    [...document.getElementsByClassName(`${type}-edge`)],
    "selected-edge",
    target
  );
  toggleLockedEdges(target);
};

/* HTML TEMPLATES */
const playbookBtnTemplate = (name, type, blurb) => {
  return `<div id='${name}' class='${type.toLowerCase()}-choice-btn playbook-choice-btn'>
      <h2 class='text-center'>
      ${name}
      </h2>
      <p class='text-center'>
      ${blurb}
      </p></div>`;
};

const edgeBtnTemplate = (edge, pb) => {
  return `<div id='${pb}-edge-${edge}' class='${pb}-edge ${edge}-btn edges ${
    isEdgeSelectedElsewhere(qsCharacterHolder, edge) ? "locked-edge" : ""
  }'>
    <h3>${edge}</h3>
    <p>${capitalize(
      edgesInfo.find((entry) => entry.name == edge).tagline.slice(11)
    )}</p>
    </div>`;
};

const skillBtnTemplate = (skill) => {
  return `<div id='${skill}-skill-counter' class=' skill-counter'>
    <div class="skill-name">${capitalize(skill)}</div>
    <div class="skill-val-dec-btn">-</div>
    <div class="${skill}-value skill-value" id='${skill}-points'>0</div>
    <div class="skill-val-inc-btn">+</div>
    </div>`;
};

const aspectBtnTemplate = (aspect, type) => {
  return `<div class='${type}-aspect'>
        <h3>${aspect["name"]}</h3>
        <p>${aspect["length"]} Track ${aspect["type"]}</p>
        <p>${aspect["description"]}</p>
        </div>`;
};

//Call renderChoiceBtns before assigning button functionality
renderChoiceBtns();

//Create array of selectable buttons
const playbookChoiceBtns = document.getElementsByClassName(
  "playbook-choice-btn"
);

//Add functionality to Playbook buttons
[...playbookChoiceBtns].forEach((btn) => {
  btn.addEventListener("click", (event) => {
    let clickedBtn = event.target;
    if (
      event.target.tagName.toLowerCase() == "p" ||
      event.target.tagName.toLowerCase() == "h2"
    ) {
      clickedBtn = event.target.parentElement;
    }

    //Remove 'selected-playbook' class from a button of same type as clicked button
    deselectUnusedButton(
      [...playbookChoiceBtns],
      "selected-playbook",
      clickedBtn
    );

    clickedBtn.classList.toggle("selected-playbook");

    //Hide Options if no playbook is selected
    hideOptionsIfNotSelected(
      btn,
      "bloodline-choice-btn",
      BLOODLINE_OPTIONS,
      "bloodline"
    );
    hideOptionsIfNotSelected(
      btn,
      "origin-choice-btn",
      ORIGIN_OPTIONS,
      "origin"
    );
    hideOptionsIfNotSelected(btn, "post-choice-btn", POST_OPTIONS, "post");

    //Toggle locked-edge off when a playbook button is clicked
    let edgeHolder = createEdgeHolder();
    [...document.getElementsByClassName("edges")].forEach((item) => {
      if (
        !edgeHolder.includes(item.classList[1].split("-")[0]) &&
        item.classList.contains("locked-edge")
      ) {
        item.classList.remove("locked-edge");
      }
    });

    let selectedPlaybook = PLAYBOOKS.find((el) => el.name == clickedBtn.id);

    if (selectedPlaybook.type == "Bloodline") {
      //Clear out the holder when a new playbook is clicked
      resetCharacterPlaybook(qsCharacterHolder.bloodline);
      //Clear out each div that holds options on click
      BLOODLINE_OPTION_DIVS.forEach((div) => {
        div.innerHTML = "";
      });
      //Assign bloodline name to qsCharacterHolder
      qsCharacterHolder.bloodline.name = selectedPlaybook.name;
      //Generate Edge buttons
      selectedPlaybook.edgesQS.forEach((edge) => {
        BLOODLINE_EDGE_BTNS.innerHTML += edgeBtnTemplate(
          edge,
          selectedPlaybook.type
        );
      });

      //Add clickability to Edge buttons
      btnArrayOf(selectedPlaybook.type, "edge").forEach((btn2) => {
        btn2.addEventListener("click", () => {
          edgeButtonFunction(btn2, selectedPlaybook.type);
        });
      });

      //Generate Aspect Buttons
      selectedPlaybook.aspects.forEach((aspect) => {
        BLOODLINE_ASPECTS_BTNS.innerHTML += aspectBtnTemplate(
          aspect,
          selectedPlaybook.type
        );
      });
      //Generate Skill Buttons
      [...selectedPlaybook.skillsQS, ...selectedPlaybook.languagesQS].forEach(
        (skill) => {
          BLOODLINE_SKILL_BTNS.innerHTML += skillBtnTemplate(
            skill,
            selectedPlaybook.type
          );
        }
      );
      //Add clickability to skill plus buttons
      [...document.getElementsByClassName("skill-val-inc-btn")].forEach(
        (btn2) => {
          btn2.addEventListener("click", () => {
            plusBtnFunction(btn2, selectedPlaybook.type);
          });
        }
      );
    } else if (selectedPlaybook.type == "Origin") {
      //Clear out the holder when a new playbook is clicked
      resetCharacterPlaybook(qsCharacterHolder.origin);
      //Clear out each div that holds options on click
      ORIGIN_OPTION_DIVS.forEach((div) => {
        div.innerHTML = "";
      });
      //Assign origin name to qsCharacterHolder
      qsCharacterHolder.origin.name = selectedPlaybook.name;

      //Generate Edge buttons
      selectedPlaybook.edgesQS.forEach((edge) => {
        ORIGIN_EDGE_BTNS.innerHTML += edgeBtnTemplate(
          edge,
          selectedPlaybook.type
        );
      });

      //Add clickability to Edge buttons
      btnArrayOf(selectedPlaybook.type, "edge").forEach((btn2) => {
        btn2.addEventListener("click", () => {
          edgeButtonFunction(btn2, selectedPlaybook.type);
        });
      });

      //Generate Aspect Buttons
      selectedPlaybook.aspects.forEach((aspect) => {
        ORIGIN_ASPECTS_BTNS.innerHTML += aspectBtnTemplate(
          aspect,
          selectedPlaybook.type
        );
      });
    } else if (selectedPlaybook.type == "Post") {
      //Clear out the holder when a new playbook is clicked
      resetCharacterPlaybook(qsCharacterHolder.post);
      POST_EDGE_BTNS.innerHTML = "";
      POST_ASPECT_BTNS.innerHTML = "";
      qsCharacterHolder.post.name = selectedPlaybook.name;
      //Generate Edge buttons
      selectedPlaybook.edgesQS.forEach((edge) => {
        POST_EDGE_BTNS.innerHTML += edgeBtnTemplate(
          edge,
          selectedPlaybook.type
        );
      });
      //Add clickability to Edge buttons
      btnArrayOf(selectedPlaybook.type, "edge").forEach((btn2) => {
        btn2.addEventListener("click", () => {
          edgeButtonFunction(btn2, selectedPlaybook.type);
        });
      });
      //Generate Aspect Buttons
      selectedPlaybook.aspects.forEach((aspect) => {
        POST_ASPECT_BTNS.innerHTML += aspectBtnTemplate(
          aspect,
          selectedPlaybook.type
        );
      });
    }
    console.log(qsCharacterHolder);
  });
});

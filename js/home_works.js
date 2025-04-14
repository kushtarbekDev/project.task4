const parentBlock = document.querySelector(".parent_block");
const childBlock = document.querySelector(".child_block");
//
const startBtn = document.querySelector("#start");
const resetBtn = document.querySelector("#reset");
const stopBtn = document.querySelector("#stop");
const seconds = document.querySelector("#seconds");
const minutes = document.querySelector("#minutes");

const gmailInput = document.querySelector("#gmail_input");
const gmailButton = document.querySelector("#gmail_button");
const gmailResult = document.querySelector("#gmail_result");
let positionX = 0;
let positionY = 0;

const maxWidth = parentBlock.clientWidth - childBlock.clientWidth;
const maxHeight = parentBlock.clientHeight - childBlock.clientHeight;
const moviBlocks = () => {
  if (positionX < maxWidth && positionY === 0) {
    positionX++;
    childBlock.style.left = `${positionX}px`;
  } else if (positionX === maxWidth && positionY < maxHeight) {
    childBlock.style.transform = "rotate(-90deg)";
    positionY++;
    childBlock.style.top = `${positionY}px`;
  } else if (positionY === maxHeight && positionX > 0) {
    childBlock.style.transform = "rotate(90deg)";
    positionX--;
    childBlock.style.left = `${positionX}px`;
  } else if (positionX === 0 && positionY > 0) {
    positionY--;
    childBlock.style.transform = "rotate(-90deg)";
    childBlock.style.top = `${positionY}px`;
  }
  requestAnimationFrame(moviBlocks);
};

moviBlocks();

//
// const startBtn = document.querySelector("#start");
// const resetBtn = document.querySelector("#reset");
// const stopBtn = document.querySelector("#stop");
// const seconds = document.querySelector("#seconds");
//
let intervals = null;
let secondRessed = 0;

function taskTimer() {
  startBtn.addEventListener("click", () => {
    if (intervals !== null) return;
    intervals = setInterval(() => {
      secondRessed++;
      seconds.textContent = `${secondRessed}`;

      if (secondRessed === 60) {
        secondRessed = 0;
        minutes.textContent = parseInt(minutes.textContent) + 1;
      }
    }, 1000);
  });
}

if (seconds.textContent === 60) {
  minutes++;
  seconds.taskTimer();
}

stopBtn.addEventListener("click", () => {
  clearInterval(intervals);
  intervals = null;
});

resetBtn.addEventListener("click", () => {
  secondRessed = 0;
  seconds.textContent = `${secondRessed}`;
  minutes.textContent = "0";
  clearInterval(intervals);
});

taskTimer();

// const gmailInput = document.querySelector("#gmail_input");
// const gmailButton = document.querySelector("gmail_button");
// const gmailResult = document.querySelector("#gmail_result");
// const gmailText = "@gmail.com";
gmailButton.addEventListener("click", () => {
  const valueGmail = gmailInput.value;

  if (valueGmail.endsWith("@gmail.com")) {
    gmailResult.textContent = "Провилно";
    gmailResult.style.color = "green";
  } else {
    gmailResult.textContent = "Ошибка";
    gmailResult.style.color = "red";
  }
});

//
const button = document.querySelector(".characterBtn");
const cardDiv = document.querySelector(".card-container");

button.onclick = () => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "/data/character.json");
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.send();

  xhr.onload = () => {
    const data = JSON.parse(xhr.responseText);
    cards(data);
  };
};

function cards(characters) {
  cardDiv.innerHTML = "";
  characters.forEach((element) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${element.photo}" alt="${element.name}">
      <h3>${element.name}</h3>
      <p>Названия Аниме: ${element.nameAnime}</p>
    `;
    cardDiv.appendChild(card);
  });
}
//
const xhr = new XMLHttpRequest();
xhr.open("GET", "/data/any.json");
xhr.setRequestHeader("Content-type", "application/json");
xhr.send();

xhr.onload = () => {
  const data = JSON.parse(xhr.responseText);
  console.log(data[1].brand);
};

const tabContentsBlocks = document.querySelectorAll(".tab_content_block");
const tabs = document.querySelectorAll(".tab_content_item");
const tabsParent = document.querySelector(".tab_content_items");

const hideTabContent = () => {
  tabContentsBlocks.forEach((item) => {
    item.style.display = "none";
  });
  tabs.forEach((item) => {
    item.classList.remove("tab_content_item_active");
  });
};

const showTabContent = (i = 0) => {
  tabContentsBlocks[i].style.display = "block";
  tabs[i].classList.add("tab_content_item_active");
};
hideTabContent();
showTabContent();

tabsParent.onclick = (event) => {
  event.target.classList.contains("tab_content_item");
  tabs.forEach((item, index) => {
    if (event.target === item) {
      hideTabContent();
      showTabContent(index);
      avtoIndex = index;
    }
  });
};

let avtoIndex = 0;

function avtoTab() {
  avtoIndex++;

  if (avtoIndex >= tabContentsBlocks.length) {
    avtoIndex = 0;
  }
  hideTabContent();
  showTabContent(avtoIndex);
}
setInterval(avtoTab, 3000);

const conventerSom = document.querySelector("#som");
const conventerUsd = document.querySelector("#usd");
const conventerEur = document.querySelector("#eur");

conventerSom.addEventListener("input", (event) => convertor(event));
conventerUsd.addEventListener("input", (event) => convertor(event));
conventerEur.addEventListener("input", (event) => convertor(event));

function convertor(event) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "/data/convertor.json");
  xhr.setRequestHeader("content-type", "application/json");
  xhr.send();
  console.log(event);

  xhr.onload = () => {
    const { eur, usd } = JSON.parse(xhr.responseText);
    let newValue = Number(event.target.value);
    if (event.target.id === "som") {
      let valueUsd = newValue / usd;
      let valueEur = newValue / eur;

      conventerUsd.value = valueUsd.toFixed(2);
      conventerEur.value = valueEur.toFixed(2);
    } else if (event.target.id === "usd") {
      let valueSom = newValue * usd;
      let valueEur = valueSom / eur;
      conventerEur.value = valueEur.toFixed(2);
      conventerSom.value = valueSom.toFixed(2);
    } else if (event.target.id === "eur") {
      let valueSom = newValue * eur;
      let valueUsd = valueSom / usd;

      conventerSom.value = valueSom.toFixed(2);
      conventerUsd.value = valueUsd.toFixed(2);
    }
  };
}

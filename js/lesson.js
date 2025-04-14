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

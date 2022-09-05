window.onload = function () {
  // gnb
  let btnGnb = document.querySelector(".btnGnb");
  let gnb = document.querySelector(".gnb");
  btnGnb.addEventListener("click", function () {
    this.classList.toggle("on");
    gnb.classList.toggle("on");
  });

  // tab : 출/퇴근 오늘,이번달,지난달
  let tabs = document.querySelectorAll(".tabWrap > ul > li > a");
  function myTabClicks(tabClickEvent) {
    for (let i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove("on");
    }
    let clickedTab = tabClickEvent.currentTarget;
    clickedTab.classList.add("on");
    tabClickEvent.preventDefault();
    let myContentPanes = document.querySelectorAll(".tabCont");
    for (i = 0; i < myContentPanes.length; i++) {
      myContentPanes[i].classList.remove("on");
    }
    let anchorReference = tabClickEvent.target;
    let activePaneId = anchorReference.getAttribute("href");
    let activePane = document.querySelector(activePaneId);
    activePane.classList.add("on");
  }
  for (i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", myTabClicks);
  }

  // 업무 시작하기 종료하기
  let btnWork = document.querySelector("#btnWork");
  if (btnWork) {
    btnWork.addEventListener("click", function () {
      if (this.classList.contains("reverse")) {
        this.classList.remove("reverse");
        this.innerText = "업무 시작하기";
      } else {
        this.classList.add("reverse");
        this.innerText = "업무 종료하기";
      }
    });
  }

  // 명함관리 sorting
  let btnSort = document.querySelector(".btnSort");
  if (btnSort) {
    btnSort.addEventListener("click", function () {
      if (this.classList.contains("sort1")) {
        this.classList.remove("sort1");
        this.classList.add("sort2");
        this.innerText = "이름순";
      } else if(this.classList.contains("sort2")) {
        this.classList.remove("sort2");
        this.classList.add("sort3");
        this.innerText = "회사순";
      } else {
        this.classList.remove("sort3");
        this.classList.add("sort1");
        this.innerText = "등록순";
      }
    });
  }

  // tab : 출/퇴근 오늘,이번달,지난달
  let scrolltabs = document.querySelectorAll(".scrolltabWrap > ul > li > a");
  function myTabClicks(tabClickEvent) {
    for (let i = 0; i < scrolltabs.length; i++) {
      scrolltabs[i].classList.remove("on");
    }
    let clickedTab = tabClickEvent.currentTarget;
    clickedTab.classList.add("on");
    tabClickEvent.preventDefault();
    // let myContentPanes = document.querySelectorAll(".tabCont");
    // for (i = 0; i < myContentPanes.length; i++) {
    //   myContentPanes[i].classList.remove("on");
    // }
    // let anchorReference = tabClickEvent.target;
    // let activePaneId = anchorReference.getAttribute("href");
    // let activePane = document.querySelector(activePaneId);
    // activePane.classList.add("on");
  }
  for (i = 0; i < scrolltabs.length; i++) {
    scrolltabs[i].addEventListener("click", myTabClicks);
  }
};

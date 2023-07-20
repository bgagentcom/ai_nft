//Mobile menu
$(".header__menu").click(function () {
  $(this).toggleClass("header__menu--close");
  $(".menu").slideToggle();
  $("body").toggleClass("overflow");
});

//$(window).scroll(function(){
//  if ((window.pageYOffset || document.documentElement.scrollTop ||document.body.scrollTop) >= 100) {
//    $('.header').addClass('header--scroll');
//  } else {
//    $('.header').removeClass('header--scroll');
//  };
//});

//Parallax
let bg1 = document.querySelector(".promo__drop--left");
window.addEventListener("mousemove", function (e) {
  let x = e.clientX / window.innerWidth;
  let y = e.clientY / window.innerHeight;
  bg1.style.transform = "translate(-" + x * 50 + "px, -" + y * 50 + "px)";
});
let bg2 = document.querySelector(".promo__drop--right");
window.addEventListener("mousemove", function (e) {
  let x = e.clientX / window.innerWidth;
  let y = e.clientY / window.innerHeight;
  bg2.style.transform = "translate(-" + x * 30 + "px, -" + y * 30 + "px)";
});
let bg3 = document.querySelector(".promo__drop--top");
window.addEventListener("mousemove", function (e) {
  let x = e.clientX / window.innerWidth;
  let y = e.clientY / window.innerHeight;
  bg3.style.transform = "translate(-" + x * 20 + "px, -" + y * 20 + "px)";
});
let bg4 = document.querySelector(".promo__drop--round1");
window.addEventListener("mousemove", function (e) {
  let x = e.clientX / window.innerWidth;
  let y = e.clientY / window.innerHeight;
  bg4.style.transform = "translate(-" + x * 70 + "px, -" + y * 70 + "px)";
});
let bg5 = document.querySelector(".promo__drop--round2");
window.addEventListener("mousemove", function (e) {
  let x = e.clientX / window.innerWidth;
  let y = e.clientY / window.innerHeight;
  bg5.style.transform =
    "rotate(90deg) translate(-" + x * 10 + "px, -" + y * 10 + "px)";
});
let bg6 = document.querySelector(".promo__drop--round3");
window.addEventListener("mousemove", function (e) {
  let x = e.clientX / window.innerWidth;
  let y = e.clientY / window.innerHeight;
  bg6.style.transform =
    "rotate(-90deg) translate(-" + x * 10 + "px, -" + y * 10 + "px)";
});
let bg7 = document.querySelector(".invest__drop--left");
window.addEventListener("mousemove", function (e) {
  let x = e.clientX / window.innerWidth;
  let y = e.clientY / window.innerHeight;
  bg7.style.transform =
    "scaleX(-1) translate(-" + x * 50 + "px, -" + y * 50 + "px)";
});
let bg8 = document.querySelector(".invest__drop--right");
window.addEventListener("mousemove", function (e) {
  let x = e.clientX / window.innerWidth;
  let y = e.clientY / window.innerHeight;
  bg8.style.transform =
    "scaleX(-1) translate(-" + x * 30 + "px, -" + y * 30 + "px)";
});
let bg9 = document.querySelector(".invest__drop--round4");
window.addEventListener("mousemove", function (e) {
  let x = e.clientX / window.innerWidth;
  let y = e.clientY / window.innerHeight;
  bg9.style.transform =
    "rotate(-90deg) translate(-" + x * 20 + "px, -" + y * 20 + "px)";
});
let bg10 = document.querySelector(".invest__drop--round1");
window.addEventListener("mousemove", function (e) {
  let x = e.clientX / window.innerWidth;
  let y = e.clientY / window.innerHeight;
  bg10.style.transform = "translate(-" + x * 70 + "px, -" + y * 70 + "px)";
});
let bg11 = document.querySelector(".invest__drop--round2");
window.addEventListener("mousemove", function (e) {
  let x = e.clientX / window.innerWidth;
  let y = e.clientY / window.innerHeight;
  bg11.style.transform =
    "rotate(90deg) translate(-" + x * 50 + "px, -" + y * 50 + "px)";
});
let bg12 = document.querySelector(".invest__drop--round3");
window.addEventListener("mousemove", function (e) {
  let x = e.clientX / window.innerWidth;
  let y = e.clientY / window.innerHeight;
  bg12.style.transform =
    "rotate(180deg) translate(-" + x * 10 + "px, -" + y * 10 + "px)";
});

// AI 2 rang buttons
const data = [
  {
    ai3: [
      "Геймдев фундаментальный анализ рынка",
      "Геймдев стратегии по инвестициям",
      "Геймдев технический анализ рынка",
      "Геймдев распознавание паттернов графиков",
      "Геймдев торговые роботы",
    ],
    ai4: "Геймдев Узконаправленная нейронная сеть для решения практических задач в инвестициях",
  },
  {
    ai3: [
      "Инвестирование фундаментальный анализ рынка",
      "Инвестирование стратегии по инвестициям",
      "Инвестирование технический анализ рынка",
      "Инвестирование распознавание паттернов графиков",
      "Инвестирование торговые роботы",
    ],
    ai4: " Инвестирование Узконаправленная нейронная сеть для решения практических задач в инвестициях",
  },
  {
    ai3: [
      "Разработка ПО фундаментальный анализ рынка",
      "Разработка ПО стратегии по инвестициям",
      "Разработка ПО технический анализ рынка",
      "Разработка ПО распознавание паттернов графиков",
      "Разработка ПО торговые роботы",
    ],
    ai4: " Разработка ПО Узконаправленная нейронная сеть для решения практических задач в инвестициях",
  },
  {
    ai3: [
      "Медицина фундаментальный анализ рынка",
      "Медицина стратегии по инвестициям",
      "Медицина технический анализ рынка",
      "Медицина распознавание паттернов графиков",
      "Медицина торговые роботы",
    ],
    ai4: " Медицина Узконаправленная нейронная сеть для решения практических задач в инвестициях",
  },
  {
    ai3: [
      "Инвестирование фундаментальный анализ рынка",
      "Инвестирование стратегии по инвестициям",
      "Инвестирование технический анализ рынка",
      "Инвестирование распознавание паттернов графиков",
      "Инвестирование торговые роботы",
    ],
    ai4: " Инвестирование Узконаправленная нейронная сеть для решения практических задач в инвестициях",
  },
  {
    ai3: [
      "Образование фундаментальный анализ рынка",
      "Образование стратегии по инвестициям",
      "Образование технический анализ рынка",
      "Образование распознавание паттернов графиков",
      "Образование торговые роботы",
    ],
    ai4: " Образование Узконаправленная нейронная сеть для решения практических задач в инвестициях",
  },
  {
    ai3: [
      "Реклама и маркетинг фундаментальный анализ рынка",
      "Реклама и маркетинг стратегии по инвестициям",
      "Реклама и маркетинг технический анализ рынка",
      "Реклама и маркетинг распознавание паттернов графиков",
      "Реклама и маркетинг торговые роботы",
    ],
    ai4: " Реклама и маркетинг Узконаправленная нейронная сеть для решения практических задач в инвестициях",
  },
  {
    ai3: [
      "Туризм фундаментальный анализ рынка",
      "Туризм стратегии по инвестициям",
      "Туризм технический анализ рынка",
      "Туризм распознавание паттернов графиков",
      "Туризм торговые роботы",
    ],
    ai4: "Туризм Узконаправленная нейронная сеть для решения практических задач в инвестициях",
  },
  {
    ai3: [
      "Биотехнологии фундаментальный анализ рынка",
      "Биотехнологии стратегии по инвестициям",
      "Биотехнологии технический анализ рынка",
      "Биотехнологии распознавание паттернов графиков",
      "Биотехнологии торговые роботы",
    ],
    ai4: "Биотехнологии Узконаправленная нейронная сеть для решения практических задач в инвестициях",
  },
];

$(".process__link").click(function (e) {
  e.preventDefault();
  $(".process__tag").removeClass("process__tag--active");
  $(this).parent("li").addClass("process__tag--active");

  let ai3 = data[$(this).data("id")].ai3;
  $("#ai-3").find("li").remove();

  ai3.forEach(function (item) {
    let li = document.createElement("li");
    li.innerHTML = item;
    $("#ai-3").append(li);
  });

  let ai4 = data[$(this).data("id")].ai4;
  $("#ai-4").text(ai4);
});

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

"Генерация миров",
"Создание анимаций для персонажей и объектов в игре.",
"Оптимизация игровых ресурсов",
"Автоматическое тестирование",
"Разработка системы искусственного интеллекта",
"Проектирование пользовательского интерфейса и игровых меню.",
"Анализ пользовательского поведения",
    ],
    ai4: "Узконаправленная нейронная сеть, специализированная на решении практических задач в геймдизайне",
  },
  {
    ai3: [
"Анализ и прогнозирование финансовых рынков. ",
"Определение оптимальных портфелей инвестиций. ",
"Автоматизированное отслеживание и управление инвестиционными портфелями. ",
"Разработка алгоритмов для определения рисков и потенциальной доходности инвестиций. ",
"Предоставление рекомендаций по принятию инвестиционных решений. ",
"Мониторинг новостей и событий, влияющих на финансовые рынки. ",
"Идентификация трендов и паттернов в финансовых данных. ",
    ],
    ai4: "Специализированная нейронная сеть, разработанная для эффективного решения конкретных задач в инвестиционной сфере",
  },
  {
    ai3: [
"Автоматизация тестирования программного обеспечения. ",
"Разработка и оптимизация алгоритмов и структур данных. ",
"Разработка библиотек и фреймворков для повторного использования кода. ",
"Оптимизация производительности и исправление ошибок в существующем программном обеспечении. ",
"Разработка мобильных приложений и адаптация ПО для различных платформ. ",
"Интеграция различных компонентов и сторонних сервисов в программное обеспечение. ",
"Создание инструментов для автоматизации развертывания и управления приложениями. ",
    ],
    ai4: "Кастомная нейронная сеть для упрощения разработки программного обеспечения",
  },
  {
    ai3: [
"Автоматизация анализа медицинских изображений, таких как снимки МРТ или рентгеновские снимки. ",
"Разработка систем для диагностики и прогнозирования заболеваний на основе медицинских данных и симптомов. ",
"Создание инструментов для персонализированной медицины и разработки индивидуальных планов лечения. ",
"Анализ генетических данных и идентификация генетических мутаций, связанных с наследственными заболеваниями. ",
"Разработка инновационных методов лечения, включая использование искусственного интеллекта в хирургии и терапии. ",
"Разработка систем мониторинга здоровья пациентов и предсказание их состояния на основе собранных данных. ",
"Интеграция и обработка больших объемов медицинских данных для исследовательских и статистических целей.",
    ],
    ai4: "Специализированная модель, разработанная для эффективного решения практических задач в медицинской сфере",
  },
  {
    ai3: [
"Разработка и оптимизация электронных учебных материалов и интерактивных образовательных платформ. ",
"Создание индивидуализированных образовательных программ и адаптивных систем обучения. ",
"Анализ образовательных данных и оценка успеваемости учащихся для определения образовательных потребностей и оптимизации учебных планов. ",
"Разработка виртуальных и дополненных образовательных сред для более глубокого и интерактивного обучения. ",
"Построение алгоритмов и систем для автоматизации оценки знаний и навыков учащихся. ",
"Разработка систем поддержки преподавателей, включая инструменты для планирования, оценки и обратной связи в процессе обучения. ",
"Создание систем онлайн-обучения и дистанционного образования, включая платформы для вебинаров и виртуального класса. ",
    ],
    ai4: "Нейронная сеть, созданная для эффективного решения конкретных задач в образовании",
  },
  {
    ai3: [
"Анализ и прогнозирование поведения потребителей на основе данных о покупках, предпочтениях и поведении в сети. ",
"Разработка персонализированных рекламных стратегий и предложений для целевой аудитории. ",
"Оптимизация рекламных кампаний и бюджетов для достижения максимальной эффективности и возврата на инвестиции. ",
"Анализ конкурентной среды и исследование рынка для разработки маркетинговых стратегий. ",
"Предсказание и определение наиболее эффективных каналов и методов маркетинга для достижения целей компании. ",
"Анализ эффективности маркетинговых кампаний и измерение показателей успеха с помощью метрик и аналитики. ",
    ],
    ai4: "Нейронная сеть, созданная для эффективного решения конкретных задач в маркетинге",
  },
  {
    ai3: [
"Разработка интеллектуальных систем планирования путешествий и подбора туров, учитывающих предпочтения и бюджет путешественников. ",
"Создание систем для анализа и прогнозирования туристических трендов и потребностей рынка. ",
"Оптимизация маршрутов и расписаний путешествий с учетом эффективности и удовлетворения потребностей туристов. ",
"Разработка инновационных решений в сфере технологий связанного с туризмом, таких как приложения для навигации, виртуальные туры и аудиогиды. ",
"Разработка систем рекомендаций и персонализации для повышения качества и индивидуальности туристического опыта. ",
"Разработка интегрированных платформ и систем для бронирования туров и отслеживания путешествий. ",
"Исследование и разработка методов использования искусственного интеллекта и автоматизации в различных сферах туризма, таких как чат-боты и автоматизированный сервис поддержки клиентов.",
    ],
    ai4: "Кастомная нейронная сеть для решения задач в  туризме",
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

window.addEventListener("scroll", function () {
  const distance = window.scrollY;
  document.querySelector(".company-name").style.transform = `translateY(${
    distance * 0.5
  }px)`;
});

let velocity = 0.5;

function update() {
  let pos = $(window).scrollTop();
  $(".header").each(function () {
    let $element = $(this);
    // subtract some from the height b/c of the padding
    let height = $element.height() - 478; // 500 is for transforming
    $(this).css(
      "backgroundPosition",
      "50%" + Math.round((height - pos) * velocity) + "px"
    );
  });
}

$(window).bind("scroll", update);
//   document.querySelector("main").style.transform = `translateY(${
//     distance * -0.8
//   }px)`;
//   document.querySelector(
//     ".section-concept-introduction"
//   ).style.animation = `fadeIn 1.5s ease-in-out`;

//   setTimeout(() => {
//     document.querySelector("main").classList.add("animate-me");
//   }, 400);

// traversing the dom

// const questionBtns = document.querySelectorAll(".question-btn");

// questionBtns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     e.currentTarget.parentElement.parentElement.classList.toggle("show-text");
//   });
// });

//using selectors inside the element

const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  const btn = question.querySelector(".question-btn");
  btn.addEventListener("click", function () {
    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });

    question.classList.toggle("show-text");
  });
});

const questions = document.querySelectorAll(".question");
const answerOutput = document.querySelector(".hidden");

questions.forEach((question) => {
    question.addEventListener("click", () => {
        answerOutput.classList.toggle("active");
    });
});
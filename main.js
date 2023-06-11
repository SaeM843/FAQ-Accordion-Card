const questions = document.querySelectorAll(".question");


questions.forEach((question) => {
    question.addEventListener("click", () => {
        const answerOutput = question.querySelector(".answer");

        answerOutput.classList.toggle("active");
    });
});
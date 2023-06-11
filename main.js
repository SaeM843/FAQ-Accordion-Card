const questions = document.querySelectorAll(".question");


questions.forEach((question) => {
    question.addEventListener("click", () => {
        const answerOutput = question.querySelectorAll(".answer");

        answerOutput.forEach((answer) => {
            if(answer.classList.contains("active")) {
                answer.classList.remove("active")
            }else{
                answer.classList.add("active")
            }
        })
    })
})
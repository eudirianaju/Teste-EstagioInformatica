function toggleButton(buttonId) {
    var button = document.getElementById(buttonId);
    button.classList.toggle('expand');
  }
  
  function expandButton(buttonId) {
    var button = document.getElementById(buttonId);
    button.classList.toggle('expanded');
  }
  
  
  function toggleAnswer(questionNumber) {
    // Obter elementos da pergunta e da resposta
    var questionElement = document.getElementById("question" + questionNumber);
    var answer = document.getElementById("answer" + questionNumber);

    // Alternar a cor da pergunta e mostrar ou ocultar a resposta
    questionElement.classList.toggle("clicked");
    answer.style.display = (answer.style.display === "none" || answer.style.display === "") ? "block" : "none";
}

var listElement = document.querySelector("#app ul");
var inputElement = document.querySelector("#app input");
var buttonElement = document.querySelector("#app button");

var todos = [
    'Fazer café',
    'Beber gasolina',
    'Jogar o canudo no lixo',
    'Matar gamer'
];

  function renderTodos() {
      for(todo of todos) {
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        todoElement.appendChild(todoText);
        listElement.appendChild(todoElement);
      }
  }

  renderTodos();
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
    listElement.innerHTML = '';
      for(todo of todos) {
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');
        var linkText = document.createTextNode('Excluir');

        todoElement.appendChild(todoText);
        listElement.appendChild(todoElement);
      }
  }

  renderTodos();

  function addTodo(){
    var todoText = inputElement.value;


    todos.push(todoText);
    inputElement.value = '';
    renderTodos();

  };

  buttonElement.onclick = addTodo
  

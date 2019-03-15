var todos = []

function getDesc() {
  document.querySelector('.addTodo--title').style.display = 'none';
  document.querySelector('.addTodo--desc').style.display = 'flex';
  document.querySelector('.someH').innerHTML = 'Description';
}

function getTitle() {
  document.querySelector('.addTodo--title').style.display = 'flex';
  document.querySelector('.addTodo--desc').style.display = 'none';
  document.querySelector('.someH').innerHTML = 'Title';
}
class Todo {
  constructor(title, desc) {
    this.title = title;
    this.desc = desc;
    this.flag = 1;
  }
}

function addTodo() {
  var title = document.querySelector('#todoTitle').value;
  var desc = document.querySelector('#todoDesc').value;
  if (!title || !desc) {
    document.querySelector('#todoTitle').style.border = '3px solid red';
    getTitle();
    // console.log('border up!!')
  } else {
    var todo = new Todo(title, desc);
    todos.push(todo);
    console.log(todos);
    document.querySelector('#todoTitle').value = '';
    document.querySelector('#todoDesc').value = '';
    getTitle();
    genTodos();
  }
}

function checkAction(element) {
  var checkbox = document.getElementById(element);
  if (checkbox.checked) {
    var index = element.slice(5);
    todos[index].flag = (todos[index].flag+1)%2;
    genTodos()
    // checkEmpty()
  }
}

function genTodos() {
  document.querySelector('.todo-cards').innerHTML = ' <h2 class="todo-cards--heading "> ToDos.</h2>';
  document.querySelector('.finished-cards').innerHTML=' <h2 class="todo-cards--heading "> Finished tasks.</h2>'
  for (todo in todos) {
    console.log(todo);
    var todocard =
      ` <div class="todocard flex-column col-sm-11">`
      var card=`

    <div class="flex-row">
        
        <div class="checkbox">
            <label>
                <input type="checkbox" id='todo-` +
      todo +
      `' value="todo" onclick="checkAction(this.id)">
                <span class="checkmark"></span>
            </label>
        </div>
        
        <div class="todocard--title">` +
      todos[todo].title +
      `

        </div>
    </div>
    <div class="todocard--desc">
        ` +
      todos[todo].desc + `
    </div>
</div>`;
var finishedcard= ` <div class="todocard finished-card flex-column col-sm-11">`
    if (todos[todo].flag)
      document.querySelector('.todo-cards').innerHTML += todocard+card;
    if (!todos[todo].flag) {
      document.querySelector('.finished-cards').innerHTML += finishedcard+card;
      document.querySelector('.finished-cards').classList.add('finished-card');
    }
  }
  checkEmpty();
}

function checkEmpty(){
  // if(!document.querySelector('.finished-card')){
  //   document.querySelector('.finished-cards').innerHTML+='<h2>seems like you have not done much today!!</h2>'
  // }
  // if(!document.querySelector('.todocard')){
  //   document.querySelector('.todocards').innerHTML+='<h2>all caught up!!</h2>'
  // }
  // console.log(document.querySelector('.finished-cards').innerHTML)
}
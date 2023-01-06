// todo를 입력하는 부분 구현

const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.appendChild(span); // span을 li 안에 넣음
    span.innerText = newTodo; // span안에 todo 넣기
    toDoList.appendChild(li); // ul에 li 넣기
}

function handleToDoSubmit(event){
    event.preventDefault(); 
    const newTodo = toDoInput.value; 
    toDoInput.value = ""; 
    paintToDo(newTodo); // todo를 입력시킬 함수 실행
}

toDoForm.addEventListener("submit", handleToDoSubmit);

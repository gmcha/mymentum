// todo를 입력하는 부분 구현

const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function handleToDoSubmit(event){
    event.preventDefault(); // 브라우저가 default로 form을 submit하는 것을 막음
    const newTodo = toDoInput.value; // 임의로 새로운 todo를 변수에 저장
    toDoInput.value = ""; // 빈 값을 넣어 브라우저 상에는 submit 한 것처럼 표시
}

toDoForm.addEventListener("submit", handleToDoSubmit);

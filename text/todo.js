const toDoForm = document.querySelector(".js-toDoForm"),
toDoInput = toDoForm.querySelector("input"),
toDoList = document.querySelector(".js-toDoList");

function init(){
    loadToDos();
    toDoForm.addEventListener("submit" handleSubmit);
}
init();
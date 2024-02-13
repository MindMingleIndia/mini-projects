const InputBox = document.getElementById("todoInputBox");
const ListContainer = document.getElementById("list-container");

function AddTodo(){
    if(InputBox.value === ''){
        alert("You must have write to something");;
    }else{
        let li = document.createElement("li");
        li.innerHTML = InputBox.value;
        ListContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    InputBox.value = "";
    DataSave()
}
ListContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        DataSave()
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        DataSave()
    }
}, false);

function DataSave(){
    localStorage.setItem("data", ListContainer.innerHTML);
}
function ShowTodo(){
    ListContainer.innerHTML = localStorage.getItem("data");
}
ShowTodo();
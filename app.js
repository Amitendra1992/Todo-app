let inp = document.querySelector("input");
let list = document.querySelector("ul");
let btn = document.querySelector("button");

function addTask(){
    let newTask = document.createElement("li");
    list.append(newTask);
    newTask.innerHTML = `${inp.value} <button>Delete</button>`;
    console.log(newTask);
    inp.value = "";
}

btn.addEventListener("click", addTask);

function removeTask(e){

    if(e.target.nodeName == "BUTTON"){
        let parent = e.target.parentElement;
        list.removeChild(parent);
    }
}

list.addEventListener("click", removeTask);
import {
    todoList,
    todoInput
} from "./variable.js";

export function add(event) {
    event.preventDefault();

    let divTodo = document.createElement('div');
    divTodo.className = 'todo';

    //li

    let liTodo = document.createElement('li');

    liTodo.className = 'item-todo';

    liTodo.innerText = todoInput.value;

    divTodo.appendChild(liTodo);

    //add de local
    saveLocale(todoInput.value)

    //modif
    //<i class="fal fa-edit"></i>

    let mod = document.createElement('button');
    mod.innerHTML = '<i class="far fa-edit"></i>';
    mod.className = "mod-btn";

    divTodo.appendChild(mod);


    //btn-conf
    //<i class="fas fa-check"></i>
    //<i class="fas fa-check-square"></i>

    let complet = document.createElement('button');
    complet.innerHTML = '<i class="fas fa-check"></i>';
    complet.className = "complet-btn";

    divTodo.appendChild(complet);


    // btn-suppre

    //<i class="fas fa-trash"></i>
    let eff = document.createElement('button');
    eff.innerHTML = '<i class="fas fa-trash"></i>';
    eff.className = "eff-btn";

    divTodo.appendChild(eff);

    todoList.appendChild(divTodo);

    todoInput.value = '';
}


export function all(e) {
    let item = e.target
    if (item.classList[0] == "fa-trash" || item.classList[0] == "eff-btn") {
        item.parentElement.classList.add("down");
        item.parentElement.addEventListener('transitionend', function () {
            item.parentElement.remove();
        })
    } else if (item.classList[0] == "fa-check" || item.classList[0] == "complet-btn") {

        item.parentElement.classList.toggle("completed");

    }
    else if (item.classList[0] == "fa-edit" || item.classList[0] == "mod-btn"){

        let div2 = document.createElement("div")

        let inp =document.createElement("input");

        inp.classList.toggle('modif');

        let btn1 = document.createElement("button");

        btn1.classList.toggle('oky');
        let btn2 = document.createElement("button");

        btn2.classList.toggle('none');

        btn1.innerHTML ='<i class="fas fa-check"></i>';
        btn2.innerHTML ='<i class="fas fa-ban"></i>';

        item.parentElement.insertBefore(div2 , item.parentElement.firstChild.nextElementSibling)
        
        div2.appendChild(inp)

        div2.appendChild(btn1)

        div2.appendChild(btn2)

        

            btn1.addEventListener('click',()=>{

                item.parentElement.firstChild.innerText = inp.value
            })

            btn2.addEventListener('click',()=>{
                div2.style.display= 'none'
            })
    }
}

export function flit(e) {
    let todos = Array.from(todoList.children)

    todos.forEach(element => {
        switch (e.target.value) {
            case "all":
                element.style.display = "flex";
                break;
            case "completed":
                if (element.classList.contains("completed")) {
                    element.style.display = "flex";
                } else {
                    element.style.display = "none";
                }
                break;
            case "uncompleted":
                if (!element.classList.contains("completed")) {
                    element.style.display = "flex";
                } else {
                    element.style.display = "none";
                }
                break;
            default:
                break;
        }
    });

}




function saveLocale(todo) {

    let todos;
    if (localStorage.getItem("todos") == null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}


export function getTodos() {

    let todos;
    if (localStorage.getItem["todos"] == null) {

        todos = []
    } else {
        todos = JSON.parse(localStorage.getItem("todos"))
    }

    todos.forEach(element => {
        let divTodo = document.createElement('div');
        divTodo.className = 'todo';

        //li

        let liTodo = document.createElement('li');

        liTodo.className = 'item-todo';

        liTodo.innerText = element

        divTodo.appendChild(liTodo);

        //add de local
        saveLocale(todoInput.value)

        //modif
        //<i class="fal fa-edit"></i>

        let mod = document.createElement('button');
        mod.innerHTML = '<i class="far fa-edit"></i>';
        mod.className = "mod-btn";

        divTodo.appendChild(mod);


        //btn-conf
        //<i class="fas fa-check"></i>
        //<i class="fas fa-check-square"></i>

        let complet = document.createElement('button');
        complet.innerHTML = '<i class="fas fa-check"></i>';
        complet.className = "complet-btn";

        divTodo.appendChild(complet);


        // btn-suppre

        //<i class="fas fa-trash"></i>
        let eff = document.createElement('button');
        eff.innerHTML = '<i class="fas fa-trash"></i>';
        eff.className = "eff-btn";

        divTodo.appendChild(eff);

        todoList.appendChild(divTodo);
    });

}
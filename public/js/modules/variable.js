import { add, all,flit,getTodos} from "./function.js";

//variable

export let todoInput =document.querySelector("input");

let todoButton = document.querySelector(".todo-btn");

export let todoList = document.querySelector(".todo-list");

export let flitre = document.querySelector('.fliter-todo')

document.addEventListener("DOMContentLoaded",getTodos)

todoButton.addEventListener('click',add)

todoList.addEventListener('click',all)

flitre.addEventListener('input',flit)
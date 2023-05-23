let arr = [];
let addTodoForm = document.querySelector(".addTodoForm");
addTodoForm.onsubmit = (event) => {
    event.preventDefault();
    const target = event.target;
    let todo = {
        id: new Date().getTime(),
        text: target["text"].value,
        date: target["date"].value,
        gmail: target["gmail"].value,
        complete: false,
    };
    arr.push(todo);
    render();
};
function render() {
    const viewTodos = document.querySelector(".todos");
    viewTodos.innerHTML = "";
    arr.forEach((elem) => {
        let todo = document.createElement("div");
        todo.classList.add("todo");
        let check = document.createElement("input");
        let i = document.createElement("i");
        check.type = "checkbox";
        check.checked = elem.complete;
        let span = document.createElement("span");
        let span1 = document.createElement("span");
        let span2 = document.createElement("span");
    
        span.innerText = elem.text;
        span1.innerText=elem.date
        span2.innerText=elem.gmail
        let delBtn = document.createElement("button");
        delBtn.onclick=()=>{
          return Dalet(elem.id)
        }
        check.onclick=()=>{
            return elem.complete=true
           
          }
    i.className='fa-solid fa-trash'
    i.style.color='#e71313'
     
        todo.appendChild(span);
        todo.appendChild(span1);
        todo.appendChild(span2);
        todo.appendChild(delBtn);
        viewTodos.appendChild(todo);
        delBtn.appendChild(i);
    });
}

function Dalet(id){
arr=arr.filter(elem=>elem.id!==id)
render()
}
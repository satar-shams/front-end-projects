//initialization
var i = 1;
var data = [];

//remove an json object from json array
function removeById(data, id) {
    const requiredIndex = data.findIndex(el => {
        return el.id === String(id);
    });
    if (requiredIndex === -1) {
        return false;
    };
    !!data.splice(requiredIndex, 1);
    return;
};

//JAVASCRIPT HTML DOM
function addTask(id, todo, checked = false) {
    // creating checkbox, input and button
    var checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    // checkbox.value = checked;
    checkbox.id = "checkbox" + id;
    checkbox.addEventListener("click", () => changeCheck(id));

    var input = document.createElement('div');
    input.id = "text" + id;
    input.setAttribute('disabled', '');
    input.classList.add("text");
    input.innerHTML = todo;

    var btn = document.createElement("button");
    btn.innerHTML = "remove";
    btn.addEventListener("click", () => removeDiv(id));

    //creating 3 div(es) and add elements
    var left = document.createElement("div");
    left.classList.add("task-left");
    left.appendChild(checkbox);
    left.appendChild(input);

    var right = document.createElement("div");
    right.classList.add("task-right");
    right.appendChild(btn);

    var task = document.createElement("div");
    task.classList.add("task");
    task.setAttribute('id', 'task' + id);
    task.appendChild(left);
    task.appendChild(right);

    const tasks = document.getElementById("tasks");
    tasks.appendChild(task);

    //adding data to JSON array
    data.splice(i, 0, {
        "id": String(i),
        "todo": todo,
        "checked": false
    });
    i++;
}

// action functions
function addTaskFrom(t) {
    if (t === "") {
        alert("Task mut not be empty");
        return;
    }
    addTask(i, t, checked = false);
    document.getElementById('add').value = "";
}

//function for removing a task
function removeDiv(id) {
    removeById(data, id);
    document.getElementById("task" + id).style.display = "none";
}

function changeCheck(id) {
    var checkBox = document.getElementById("checkbox" + id);
    if (checkBox.checked == true) {
        document.getElementById("text" + id).classList.add("line-through")
    } else {
        document.getElementById("text" + id).classList.remove("line-through")
    }
}
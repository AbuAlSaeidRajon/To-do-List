function addTask() {
    var task = document.getElementById("task").value;
    if (task !== "") {
        var list = document.getElementById("taskList");
        var li = document.createElement("li");
        li.innerHTML = task + " <button onclick='deleteTask(this)'>Delete</button>";
        list.appendChild(li);
        document.getElementById("task").value = "";
    }
}
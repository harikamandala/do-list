function addTask() {
      const input = document.getElementById("taskInput");
      const taskText = input.value.trim();
      if (taskText === "") {
        alert("Please enter a task.");
        return;
      }

      const li = document.createElement("li");
      
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";

      const span = document.createElement("span");
      span.textContent = taskText;
      span.style.flex = "1";
      span.style.marginLeft = "10px";

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.className = "delete-btn";
      deleteBtn.onclick = function() {
        li.remove();
      };

      li.appendChild(checkbox);
      li.appendChild(span);
      li.appendChild(deleteBtn);

      document.getElementById("taskList").appendChild(li);
      input.value = "";
    }
      
      








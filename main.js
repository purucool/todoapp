window.addEventListener("load", () => {
  const form = document.querySelector("#newtask-form");
  const input = document.querySelector("#newtask-input");
  const list_el = document.querySelector("#Tasks");
  // console.log(form);
  // this will help stop reload page
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const task = input.value;
    if (!task) {
      alert("Please fill out some task");
      return;
    }

    const task_ele = document.createElement("div");
    task_ele.classList.add("task");

    const task_content_el = document.createElement("div");
    task_content_el.classList.add("content");
    // task_content_el.innerText=task;

    const task_input = document.createElement("input");
    task_input.classList.add("text");
    task_input.type = "text";
    task_input.value = task;
    task_input.setAttribute("readonly", "readonly");
    task_content_el.appendChild(task_input);

    task_ele.appendChild(task_content_el);

    const task_actions_el = document.createElement("div");
    task_actions_el.classList.add("action");

    const task_edit_el = document.createElement("button");
    task_edit_el.classList.add("edit");
    task_edit_el.innerHTML = "Edit";

    const task_del_el = document.createElement("button");
    task_del_el.classList.add("delete");
    task_del_el.innerHTML = "Delete";

    task_actions_el.appendChild(task_edit_el);
    task_actions_el.appendChild(task_del_el);

    task_ele.appendChild(task_actions_el);

    list_el.appendChild(task_ele);

    input.value = "";
    task_edit_el.addEventListener("click", () => {
      if (task_edit_el.innerText.toLocaleLowerCase() == "edit") {
        task_input.removeAttribute("readonly");
        task_input.focus();
        task_edit_el.innerText = "Save";
      } else {
        task_input.setAttribute("readonly", "readonly");
        task_edit_el.innerText = "Edit";
      }
    });
    task_del_el.addEventListener("click", () => {
      list_el.removeChild(task_ele);
    });
  });
});

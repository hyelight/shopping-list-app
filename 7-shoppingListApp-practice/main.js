const input = document.querySelector(".footer_name");
const items = document.querySelector(".items");
const addBtn = document.querySelector(".footer_btn");

function onAdd() {
  const textInput = input.value;
  if (textInput === "") {
    input.focus();
    return;
  }

  const item = createItem(textInput);
  items.appendChild(item);
  item.scrollIntoView({ block: "center" });
  input.value = "";
  input.focus();
}

function createItem(textInput) {
  const itemsRow = document.createElement("li");
  itemsRow.setAttribute("class", "items_row");

  const item = document.createElement("div");
  item.setAttribute("class", "item");

  const itemName = document.createElement("span");
  itemName.setAttribute("class", "item_name");
  itemName.innerText = textInput;

  const deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("class", "delete_btn");
  deleteBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
  deleteBtn.addEventListener("click", () => {
    items.removeChild(itemsRow);
  });

  const itemDivider = document.createElement("div");
  itemDivider.setAttribute("class", "item_divider");

  item.appendChild(itemName);
  item.appendChild(deleteBtn);

  itemsRow.appendChild(item);
  itemsRow.appendChild(itemDivider);
  return itemsRow;
}

addBtn.addEventListener("click", () => {
  onAdd();
});

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    onAdd();
  }
});

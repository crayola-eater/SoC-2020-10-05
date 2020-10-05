/* Task 4.2 - Add a new label and input field element to your index.html file. This input field represents the priority value of your
important thing, and should be inputted as a number. Refactor your code so that, when you click your 'Add To List' button, you 
add list object to your array, rather than a string value. For example: 'let importantThings = [{text: 'telephone mother', priority: 1}]' 
Other than this change, the site should function exactly as it did before. */

const importantThings = [];

const addListItems = () => {
  // map into list items
  const listItems = importantThings.map(({ text, priority }) => {
    const li = document.createElement("li");
    li.textContent = `${text} (Priority: ${priority})`;
    return li;
  });

  // attach to parent ol
  const ol = document.querySelector("ol");
  ol.innerHTML = "";
  ol.append(...listItems);
};

document.querySelector("#add-to-list").addEventListener("click", () => {
  // when button clicked, push input to important things array
  const text = document.querySelector("#important-thing").value.trim();
  const priority = +document.querySelector("#priority").value;

  if (text.length === 0 || priority === 0) {
    return;
  }

  importantThings.push({ text, priority });

  addListItems();
});

/* Task 4.3 - Add a new button to your site called 'Order List'. Add an event listener to the button so that when it is clicked your list
is re-ordered by priority, where items with the lowest number (priority: 1) are displayed first. */
document.querySelector("#sort-list").addEventListener("click", () => {
  importantThings.sort((a, b) => a.priority - b.priority);
  addListItems();
});

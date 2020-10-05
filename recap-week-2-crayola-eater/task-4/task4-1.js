/* Task 4.1 - On your HTML page you will see an input field and an 'Add To List' button. Declare a new variable, 'importantThings',
as an empty array. Using JavaScript, configure the website so that when you write something in the input field and click the 
'Add To List' button, a new item is added to the 'importantThings' array. After adding an item to the 'importantThings' array, 
use the .map() method to generate and display an ordered list of the items on the page. Remember to break down the task and make 
a plan! */
const importantThings = [];
document.querySelector("#add-to-list").addEventListener("click", () => {
  // when button clicked, push input to important things array
  const input = document.querySelector("#important-thing");
  const value = input.value.trim();

  if (value.length === 0) {
    return;
  }

  importantThings.push(value);

  // map into list items
  const listItems = importantThings.map((thing) => {
    const li = document.createElement("li");
    li.textContent = thing;
    return li;
  });

  // attach to parent ol
  const ol = document.querySelector("ol");
  ol.innerHTML = "";
  ol.append(...listItems);
});

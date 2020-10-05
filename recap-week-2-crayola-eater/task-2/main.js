/* Task 2.1 -  In the task-2 index.html there is a p tag that contains a counter. Using .setInterval(), have the counter increment
 once every second when the page is loaded. */
/* Task 2.2 - Save the above interval in a variable named 'intervalID' */
const intervalID = setInterval(() => {
  const p = document.querySelector("p");
  p.textContent = Number(p.textContent) + 1;
}, 1e3);

/* Task 2.3 - Using .setTimeout() and .clearInterval(), stop the counter from incrementing after 12 seconds have passed. */
setTimeout(() => clearInterval(intervalID), 12e3);

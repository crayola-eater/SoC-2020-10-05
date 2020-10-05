/* Task 3.1 - Create an image element on the task-3 index.html. Using .fetch(), get a random cat image using the
following API: https://api.thecatapi.com/v1/images/search */

const getRandomCatImageSrc = async () => {
  const response = await fetch("https://api.thecatapi.com/v1/images/search");
  const data = await response.json();
  return data[0].url;
};

const refreshCatImageOnPage = async () => {
  const img = document.querySelector("#cat-image");
  img.src = await getRandomCatImageSrc();
};

/* Task 3.2 -  Once you have retreived your image, display the image on the page when it loads. A different picture should be displayed
every time you reload the page. */
refreshCatImageOnPage();

/* Task 3.3 - Create a button element. Add an event listener to the button so that, when you click the button, a new image is displayed. */
document
  .querySelector("#change-cat-image")
  .addEventListener("click", refreshCatImageOnPage);

document.addEventListener('DOMContentLoaded', function () {
  const jokeContainer = document.getElementById('joke-container');
  const appContainer = document.getElementById('app');
  const toggleModeButton = document.getElementById('toggle-mode');
const likeButton = document.getElementById('like-button')
  // Function to fetch joke from the Official Joke API
  async function fetchJoke() {
    try {
      const response = await fetch('https://v2.jokeapi.dev/joke/Any?safe-mode')
      const data = await response.json();
      return data; // Return single joke object
    } catch (error) {
      console.error('Error fetching joke:', error);
    }
  }

  // Function to render joke to the page
  async function renderJoke() {
    const jokeData = await fetchJoke();
    if (jokeData) {
      let jokeHtml = '';
      jokeHtml+= `<p>${jokeData.setup}</p>`;
      jokeHtml += `<p>${jokeData.delivery}</p>`; // Assuming each joke object has a 'punchline' attribute
      jokeContainer.innerHTML = jokeHtml;
    } else {
      jokeContainer.innerHTML = '<p>Sorry, failed to fetch joke. Please try again later.</p>';
    }
  }

  // Event listener for button click to refresh joke
  document.getElementById('refresh-btn').addEventListener('click', renderJoke);

  // Event listener for button click to toggle dark/light mode
  let isDarkMode = false;
  toggleModeButton.addEventListener('click', function () {
    isDarkMode = !isDarkMode;
    if (isDarkMode) {
      appContainer.classList.add('dark-mode');
    } else {
      appContainer.classList.remove('dark-mode');
    }
  });

  // Initial rendering of joke
  renderJoke();
});
 // Using forEach to iterate through setups and punchlines arrays
 setups.forEach(function(setup, index) {
  console.log(`Joke ${index + 1} setup: ${setup}`);
});

punchlines.forEach(function(punchline, index) {
  console.log(`Joke ${index + 1} punchline: ${punchline}`);
});
//button with like-button
const likeButton = document.getElementById('like-button');
let likesCount = 0;

// Event listener for the like button
likeButton.addEventListener('click', function() {
    likesCount++;
    updateLikesCount();
});

// Function to update the likes count display
function updateLikesCount() {
    likeButton.textContent = `Like (${likesCount})`;
}

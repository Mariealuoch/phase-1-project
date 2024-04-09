document.addEventListener('DOMContentLoaded', function () {
  const jokeContainer = document.getElementById('joke-container');
  const appContainer = document.getElementById('app');
  const toggleModeButton = document.getElementById('toggle-mode');

  // Function to fetch joke from the Official Joke API
  async function fetchJoke() {
    try {
      const response = await fetch('https://official-joke-api.appspot.com/random_joke');
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
      jokeHtml += `<p>${jokeData.punchline}</p>`; // Assuming each joke object has a 'punchline' attribute
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
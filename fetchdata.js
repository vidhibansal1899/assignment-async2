// fetch-data.js
const fetchDataButton = document.getElementById('fetchData');
const dataDiv = document.getElementById('data');

// Add event listener to the fetch data button
fetchDataButton.addEventListener('click', fetchData);

// Function to fetch data from the API
function fetchData() {
    // API URL
    const apiUrl = 'https://dog.ceo/api/breeds/image/random';

    // Use fetch to make a request to the API
    fetch(apiUrl)
        .then(response => {
            // Check if the response is OK
            if (response.ok) {
                // Parse the JSON data
                return response.json();
            } else {
                // Throw an error if the response is not OK
                throw new Error(`HTTP error! status: ${response.status}`);
            }
        })
        .then(data => {
            // Display the fetched data on the webpage
            displayData(data);
        })
        .catch(error => {
            // Display any errors that occur during the fetching process
            displayError(error);
        });
}

// Function to display the fetched data on the webpage
function displayData(data) {
    // Create an image element
    const image = document.createElement('img');
    image.src = data.message;
    image.alt = 'Random Dog Image';

    // Clear the data div
    dataDiv.innerHTML = '';

    // Append the image to the data div
    dataDiv.appendChild(image);
}

// Function to display any errors that occur during the fetching process
function displayError(error) {
    // Clear the data div
    dataDiv.innerHTML = '';

    // Append the error message to the data div
    dataDiv.textContent = `Error: ${error.message}`;
}
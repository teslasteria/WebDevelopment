// Create elements
const form = document.createElement("form");
const input = document.createElement("input");
const button = document.createElement("button");

// Set attributes
input.setAttribute("type", "text");
input.setAttribute("placeholder", "Enter email");
button.textContent = "Check";

// Add styles
form.style.display = "flex";
form.style.gap = "10px";
form.style.margin = "20px 0";

input.style.padding = "8px";
input.style.border = "1px solid #ccc";
input.style.borderRadius = "4px";

button.style.padding = "8px 16px";
button.style.backgroundColor = "#007BFF";
button.style.color = "white";
button.style.border = "none";
button.style.borderRadius = "4px";
button.style.cursor = "pointer";

// Add elements to form
form.appendChild(input);
form.appendChild(button);

// Insert form before footer
const footer = document.querySelector('footer');
document.body.insertBefore(form, footer);

button.addEventListener("click", (e) => {
    // Prevent default behavior of form
    e.preventDefault();
    
    const existingEmails = ["test@example.com", "user@mail.ru"];
    const email = input.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!email) {
        alert("The field should not be empty!");
    } else if (existingEmails.includes(email)) {
        alert("This email is already registered!");
    } else if (!emailPattern.test(email)) {
        alert("Invalid email!");
    } else {
        alert("Email is valid!");
    }
});

const toggleBtn = document.createElement("button");
toggleBtn.textContent = "Hide/Show form";
toggleBtn.style.marginTop = "10px";

let isFormVisible = true;
let formExists = true;

toggleBtn.addEventListener("click", () => {
    isFormVisible = !isFormVisible;
    form.style.display = isFormVisible ? "flex" : "none";
});

document.body.insertBefore(toggleBtn, footer);

// second variant
// toggleBtn.addEventListener("click", () => {
//     if (formExists) {
//         form.remove();
//     } else {
//         document.body.appendChild(form);
//     }
//     formExists = !formExists;
// });

// document.body.appendChild(toggleBtn);


// get request weather
const API_KEY = 'f04d9bf3ad0ad2ebe6387b6d5d73265c';
const city = 'Saint Petersburg';

const xhr = new XMLHttpRequest();
xhr.open('GET', `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=en`);
xhr.responseType = 'json';

xhr.onload = function() {
  if (xhr.status === 200) {
    const data = xhr.response;
    displayWeather(data);
  } else {
    console.error('Error:', xhr.status, xhr.statusText);
    document.body.innerHTML += `<p>Failed to get weather. Error code: ${xhr.status}</p>`;
  }
};

xhr.onerror = function() {
  console.error('Network error');
  document.body.innerHTML += '<p>Problems with internet connection</p>';
};

xhr.send();

function displayWeather(data) {
  const weatherElement = document.createElement('div');
  weatherElement.innerHTML = `
    <h2>Weather in ${data.name}</h2>
    <p>Temperature: ${Math.round(data.main.temp)}°C</p>
    <p>Feels like: ${Math.round(data.main.feels_like)}°C</p>
    <p>Weather: ${data.weather[0].description}</p>
    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="${data.weather[0].main}">
  `;
  document.body.insertBefore(weatherElement, footer);
}


// fetch api
const newTask = {
    title: 'Learn Fetch API',
    completed: false,
    userId: 1
  };
  
  // Add loader
  const loader = document.createElement('div');
  loader.textContent = 'Sending data...';
  document.body.appendChild(loader);
  
  fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newTask)
  })
    .then(response => {
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
      return response.json();
    })
    .then(data => {
      loader.remove();
      const resultElement = document.createElement('div');
      resultElement.innerHTML = `
        <h3>Task added!</h3>
        <p><strong>Title:</strong> ${data.title}</p>
        <p><strong>Status:</strong> ${data.completed ? 'Completed' : 'Not completed'}</p>
        <p><small>ID: ${data.id} (fake API, data will not be saved)</small></p>
      `;
      document.body.appendChild(resultElement);
    })
    .catch(error => {
      loader.remove();
      document.body.innerHTML += `<p style="color: red;">Error: ${error.message}</p>`;
    });
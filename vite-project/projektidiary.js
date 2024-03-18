import "./projektidiary.css";
import { fetchData } from "./fetch.js";

// Retrieve the value from localStorage
const aloitususername = localStorage.getItem('username');


// Select the HTML element where you want to print the value
const usernameElement = document.getElementById('name');

// Set the innerHTML property of the selected element to the value of the variable
if (aloitususername) {
    usernameElement.innerHTML = `${aloitususername}`;
} else {
    usernameElement.innerHTML = 'No username found in localStorage';
}

const bt1 = document.querySelector('.get_entry');
bt1.addEventListener('click', async () => {
  console.log('Klikki toimii');
  const url = 'http://localhost:3000/api/entries/1';



  fetchData(url).then((data) => {
    // käsitellään fetchData funktiosta tullut JSON
    console.log(data);
  });

  // # Get entries by id
  // # GET http://localhost:3000/api/entries/:id
});

// Haetaan kaikki käyttäjät ja luodaan niistä taulukko
// 1. Hae ensin nappula ja kutsu funktiota (keksi nimi)

const allButton = document.querySelector('.get_users');
allButton.addEventListener('click', getUsers);

async function getUsers() {
  console.log('Haetaa kaikki käyttäjät');
  const url = 'http://127.0.0.1:3000/api/users';
  let token = localStorage.getItem('token');
  const options = {
    method: 'GET',
    headers: {
      Authorization: 'Bearer: ' + token,
    },
  };

  fetchData(url, options).then((data) => {
    createTable(data);
  });

  // vaihtoehtoinen tapa
  // try {
  //   const responseData = await fetchData(url, options);
  //   console.log(responseData);
  // } catch (error) {
  //   console.error(error);
  // }
}

function createTable(data) {
  console.log(data);
  console.log('tässä');

  // etitään tbody elementti
  const tbody = document.querySelector('.tbody');
  console.log(tbody);
  tbody.innerHTML = '';

  // loopissa luodaan jokaiselle tietoriville oikeat elementit
  // elementtien sisään pistetään oikeat tiedot

  data.forEach((rivi) => {
    console.log(rivi.user_id, rivi.username, rivi.user_level);

    // Luodaan jokaiselle riville ensin TR elementti alkuun
    const tr = document.createElement('tr');

    // Luodaan soluja mihihin tiedot
    const td1 = document.createElement('td');
    td1.innerText = rivi.username;

    // Luodaan soluja mihihin tiedot
    const td2 = document.createElement('td');
    td2.innerText = rivi.user_level;

    // <td><button class="check" data-id="2">Info</button></td>
    // const td3 = document.createElement('td');
    //td3.innerHTML = `<button class="check" data-id="${rivi.user_id}">Info</button>`;

    const td3 = document.createElement('td');
    const button1 = document.createElement('button');
    button1.className = 'check';
    button1.setAttribute('data-id', rivi.user_id);
    button1.innerText = 'Info';
    td3.appendChild(button1);

    button1.addEventListener('click', getUser);

    // td4
    const td4 = document.createElement('td');
    const button2 = document.createElement('button');
    button2.className = 'del';
    button2.setAttribute('data-id', rivi.user_id);
    button2.innerText = 'Delete';
    td4.appendChild(button2);

    const td6 = document.createElement('td');
    const button3 = document.createElement('button');
    button3.className = 'check';
    button3.setAttribute('data-id', rivi.user_id);
    button3.innerText = 'Hae Entrie';
    td6.appendChild(button3);
    button3.addEventListener('click', getEntries);



    // 2. Lisää kuuntelija kun taulukko on tehty
    button2.addEventListener('click', deleteUser);

    // td5
    var td5 = document.createElement('td');
    td5.innerText = rivi.user_id;

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);
    tbody.appendChild(tr);
  });
}

// Haetaan dialogi yksittäisille tiedoille
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog
const dialog = document.querySelector('.info_dialog');
const closeButton = document.querySelector('.info_dialog button');
// "Close" button closes the dialog
closeButton.addEventListener('click', () => {
  dialog.close();
});

async function getUser(evt) {
  // haetaan data-attribuutin avulla id, tämä nopea tapa
  const id = evt.target.attributes['data-id'].value;
  console.log('Getting individual data for ID:', id);
  const url = `http://127.0.0.1:3000/api/users/${id}`;
  let token = localStorage.getItem('token');
  const options = {
    method: 'GET',
    headers: {
      Authorization: 'Bearer: ' + token,
    },
  };
  fetchData(url, options).then((data) => {
    console.log(data);
    // Avaa modaali
    dialog.showModal();
    console.log('in modal');
    dialog.querySelector('p').innerHTML = `
          <div>User ID: <span>${data.user_id}</span></div>
          <div>User Name: <span>${data.username}</span></div>
          <div>Email: <span>${data.email}</span></div>
          <div>Role: <span>${data.user_level}</span></div>
    `;
  });
}


// toimiii!!!!!!
async function getEntries(evt) {
  // Get the ID using the data attribute
  const id = evt.target.getAttribute('data-id');
  console.log('Getting individual entries for ID:', id);
  
  const url = `http://127.0.0.1:3000/api/entries/${id}`;
  const token = localStorage.getItem('token');
  
  const options = {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + token, // Removed colon after 'Bearer'
    },
  };

  try {
    const data = await fetchData(url, options);
    console.log(data);
    createTable2(data);
    
    
  } catch (error) {
    console.error('Error fetching data:', error);
  } 
}

function createTable2(data) {
  console.log(data);

  // etitään tbody elementti
  const tbody2 = document.querySelector('.tbody2');
  console.log(tbody2);
  tbody2.innerHTML = '';
  
  // loopissa luodaan jokaiselle tietoriville oikeat elementit
  // elementtien sisään pistetään oikeat tiedot

  data.forEach((rivi) => {
    console.log(rivi.mood, rivi.notes, rivi.sleep_hours, rivi.weight);

    // Luodaan jokaiselle riville ensin TR elementti alkuun
    const tr = document.createElement('tr');

    // Luodaan soluja mihihin tiedot
    const td1 = document.createElement('td');
    td1.innerText = rivi.mood;

    // Luodaan soluja mihihin tiedot
    const td2 = document.createElement('td');
    td2.innerText = rivi.notes;

    //Luodaan soluja mihin tiedot
    const td3 = document.createElement('td');
    td3.innerText = rivi.sleep_hours;

    const td4 = document.createElement('td');
    td4.innerHTML = rivi.weight;

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    
    // Append the table row to tbody2
    tbody2.appendChild(tr);
  });
}

//Post funktio

async function postEntries(evt) {
  // Post the entry using the user-id-data attribute

  evt.preventDefault(); // Prevent form submission from refreshing the page

  console.log('Nyt postataan');
  const id = localStorage.getItem('userID');
  const url = `http://127.0.0.1:3000/api/entries/${id}`;

  const form = document.querySelector('.postEntry');
  const mood = form.querySelector('select[name="mood"]').value;
  const notes = form.querySelector('textarea[name="notes"]').value;
  const sleptHours = form.querySelector('select[name="slept_hours"]').value;
  const weight = form.querySelector('input[name="weight"]').value;
  const date = form.querySelector('input[name="date"]').value;
  console.log('moi');

  console.log(mood, notes, sleptHours, weight, date);

  const data = {
    "user_id": id,
    "entry_date": date,
    "mood": mood,
    "weight": weight,
    "sleptHours": sleptHours,
    "notes": notes
  }

  // {
  //   "user_id": 123,
  //   "entry_date": "2024-03-16",
  //   "mood": "Happy",
  //   "weight": 70.5,
  //   "sleep_hours": 8,
  //   "notes": "Feeling great today!"
  // }
  

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data), 
  };

  try {
    const response = await fetch(url, options);
    console.log(response);
    console.log('täsäollaa res');
    const postData = await response.json(); // assuming the response is JSON
    console.log(postData);
    alert('Entry sent successfully');

  } 
    catch (error) {
    console.error('Error posting entry:', error);
    alert('Error');
  }
}

// Assuming postEntries is a form submission handler, you can attach it to the form's submit event
const form = document.querySelector('.postEntry');
form.addEventListener('submit', postEntries);



async function deleteUser(evt) {
  console.log('Deletoit tietoa');
  console.log(evt);

  // Tapa 1, haetaan arvo tutkimalla eventtiä
  const id = evt.target.attributes['data-id'].value;
  console.log(id);

  // Tapa 2 haetaan "viereinen elementti"
  const id2 = evt.target.parentElement.nextElementSibling.textContent;
  console.log('Toinen tapa: ', id2);


  const url = `http://127.0.0.1:3000/api/users/${id}`;
  let token = localStorage.getItem('token');
  const options = {
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer: ' + token,
    },
  };

  const answer = confirm(`Oletko varma että haluat poistaa käyttäjän ID: ${id} `);
  if (answer) {
    fetchData(url, options).then((data) => {
      console.log(data);
      getUsers();
    });
  }
}

// logataan ulos kjun painetaan logout nappulaa

document.querySelector('.logout').addEventListener('click', logOut);

function logOut(evt) {
  evt.preventDefault();
  localStorage.removeItem('token');
  console.log('logginout');
  window.location.href = 'projektilogin.html';
}


//PUT

document.addEventListener('DOMContentLoaded', () => {
  const updateForm = document.querySelector('.update_user_form');
  if(updateForm) {
    updateForm.addEventListener('submit', async (evt) => {
      evt.preventDefault();
      const formData = new FormData(updateForm);
      const data = Object.fromEntries(formData.entries());
      const token = localStorage.getItem('token');
      const options = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
        body: JSON.stringify(data),
      };
      const url = 'http://127.0.0.1:3000/api/users';
      try {
        const responseData = await fetchData(url, options);
        console.log(responseData);
        alert('User updated successfully');
      } catch (error) {
        console.error('Error updating user:', error);
        alert('Error updating user');
      }
    });
  }
});

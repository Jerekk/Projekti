import "./styleaught.css";
import { fetchData } from "./fetch.js";

const bt1 = document.querySelector(".get_entry");
bt1.addEventListener("click", async () => {
  console.log("Klikki toimii");
  const url = "http://localhost:3000/api/entries/1";

  fetchData(url).then((data) => {
    // käsitellään fetchData funktiosta tullut JSON
    console.log(data);
  });

  // # Get entries by id
  // # GET http://localhost:3000/api/entries/:id
});

const button3 = document.querySelector(".get_users");
button3.addEventListener("click", getUsers);

async function getUsers() {
  console.log("haetaan kaikki käyttäjät");
  const url = "http://localhost:3000/api/users";
  let token = localStorage.getItem("token");
  const options = {
    method: "GET",
    headers: {
      Authorization: "Bearer: " + token,
    },
  };

  fetchData(url, options).then((data) => {
    createTable(data);
  });
}

function createTable(data) {
  console.log(data);

  // etitään tbody elementti
  const tbody = document.querySelector('.tbody');

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
    tbody.appendChild(tr);
  });
}

function getUser() {
  console.log('Haet tietoa');
}

function deleteUser(evt) {
  console.log('Deletoit tietoa');
  console.log(evt);
  //haetaan arvo tutkimalla eventtiä
  const id = evt.target.attributes['data-id'].value;
  console.log(id);

  const answer = confirm(`Oletko varma että haluat poistaa käyttäjän ID: ${id}`);
  const url = `http://127.0.0.1:3000/api/users/${id}`;
  let token = localStorage.getItem('token');
  const options = {
    method: "DELETE",
    headers: {
      Authorization: "Bearer: " + token,
    },
  };
  if (answer) {
    fetchData(url, options).then((data) => {
      console.log(data);
      getUsers();
    })
  }

}
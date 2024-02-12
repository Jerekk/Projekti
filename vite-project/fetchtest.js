'use strict';
console.log('the script starts');

function synchronousFunction() {
  let number = 1;
  for(let i = 1; i < 100; i++){
    number += i;
    console.log('synchronousFunction running');
  }
  console.log('regular function complete', number);
}

function synchronousFunction2() {
    console.log('huh vihdoin!!')
}

async function postfromoma() {
  console.log('postaa omaa dataa');

  try {
    const response = await fetch('http://127.0.0.1:3000/items', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        name: 'uusi nimi',
      }),
    });

    // Assuming you want to handle the response data or check for errors here
    // For example:
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    // If you want to process the response further, you can do it here

  } catch (error) {
    console.error('Virhe', error);
  }
}



async function getfromoma() {
  try{
    const response = await fetch('http://127.0.0.1:3000/items')

    const resdata = await response.json();
    console.log(resdata);
  } catch (error) {
    console.error('Virhe', error);

  }
}


// async function asynckrooni() {
//     console.log('haku alkaa!');

//     fetch('https://reqres.in/api/users?page=2')
//     .then((response) => {
//         if (!response.ok) {
//         throw new Error('Verkkovastaus ei ollut kunnossa');
//         }
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error) => {
//         console.error('Fetch-operaatiossa ilmeni ongelma:', error);
//     });

// }

async function asynckrooni2() {
    try {
      const response = await fetch('https://reqres.in/api/users?page=2');
      const vastausdata = await response.json();
    //console.log(vastausdata);
      console.log(vastausdata.data[0].email);
    } catch (error) {
      console.error('Virhe:', error);
    }
  }
  
  asynckrooni2();


// synchronousFunction();

synchronousFunction2();

asynckrooni2();

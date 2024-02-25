export async function showpics() {
    try {
      const response = await fetch('pics.json');
      console.log(response);
      if (!response.ok) throw new Error ('huono haku');

      const resdata = await response.json();

      console.log(resdata);
      const alt = resdata[1].name;
      const figurecap = resdata[1].description;
      const imagesrc = resdata[1].address;

      // haetaan kuvaelementti html tiedostosta
      const kuva = document.querySelector('img');
      kuva.src = imagesrc;
      kuva.alt = alt;

       // haetaan kuvateksti html tiedostosta
      const kuvateksti = document.querySelector('figcaption');
      kuvateksti.innerText = figurecap;

      

      // You can display the joke on the page instead of logging it to the console
      document.getElementById('picDisplay').innerHTML = resdata;

    } catch (error) {
      console.error('Error', error);
    }
  }
  
  export async function showpics2() {
    try {
      const response = await fetch('pics.json');
      console.log(response);
      if (!response.ok) throw new Error ('huono haku');

      const resdata = await response.json();

      resdata.forEach(element => {
        console.log(`Nimi: ${element.name}`);
        
      });
      

      console.log(resdata);
      const alt = resdata[1].name;
      const figurecap = resdata[1].description;
      const imagesrc = resdata[1].address;

      const cards = document.querySelector('#cards');
      cards.innerHTML = '';

      const figure = document.createElement('figure');
      cards.appendChild(figure);

      const image = document.createElement('img');
      image.src = imagesrc;
      image.alt = alt;
      figure.appendChild(image);

      const figurecaption = document.createElement('figurecaption');
      const node = document.createTextNode(figurecap);
      figurecaption.appendChild(node);
      figure.appendChild(figurecaption);


    } catch (error) {
      console.error('Error', error);
    }
  }


  export async function showpics3() {
    try {
      const response = await fetch('pics.json');
      console.log(response);
      if (!response.ok) throw new Error ('huono haku');

      const resdata = await response.json();

      const cards = document.querySelector('#cards');
        cards.innerHTML = '';

      resdata.forEach(element => {
        console.log(`Nimi: ${element.name}`);

        const figurecap = element.description;
        const imagesrc = element.address;
        const alt = element.name;
        
        
  
        const figure = document.createElement('figure');
        cards.appendChild(figure);
  
        const image = document.createElement('img');
        image.src = imagesrc;
        image.alt = alt;

        figure.appendChild(image);
  
        const figurecaption = document.createElement('figurecaption');
        const node = document.createTextNode(figurecap);
        figurecaption.appendChild(node);

        figure.appendChild(figurecaption);
  
        
      });

     

    } catch (error) {
      console.error('Error', error);
    }
  }

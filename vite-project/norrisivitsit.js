// Define the function to fetch Chuck Norris joke
export async function showjoke() {
    try {
      const response = await fetch('https://api.chucknorris.io/jokes/random');
      const resdata = await response.json();
    //   console.log(resdata);
      console.log(resdata.value);
      // You can display the joke on the page instead of logging it to the console
      document.getElementById('jokeDisplay').innerHTML = resdata.value;
    } catch (error) {
      console.error('Error', error);
    }
  }
  
  // Add event listener to the button
  // document.getElementById('fetchJokeButton').addEventListener('click', showjoke);
  
import './style.css'
import { showjoke } from './norrisivitsit'
import { showpics3} from './catpics'


document.querySelector('#app').innerHTML = 'Moi täällä ollaan'

document.getElementById('fetchJokeButton').addEventListener('click', showjoke);


document.getElementById('kissakuva').addEventListener('click', showpics3);
// console.log(element)

// document.getElementById('kissakuvat').addEventListener('click', showpics);
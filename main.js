// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let likes = document.querySelector('.like-glyph')
let divdiv = document.getElementById('modal')
let OKII = document.querySelector('.like-glyph')


function hidden(){
  divdiv.className = 'hidden'
}

 likes.addEventListener('click', function(e){
  mimicServerCall().then(json => 
     likes.classList.value == "like-glyph activated-heart" ? removeH() : heartAPP())
     .catch(e => ERR())})


 
function heartAPP(){
  likes.classList.add('activated-heart')
  likes.innerHTML = FULL_HEART
  
}

function removeH(){
  likes.classList.remove('activated-heart')
  likes.innerHTML = EMPTY_HEART
}


function ERR(){
  divdiv.className = ''
  setTimeout(hidden, 3000)
}





//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

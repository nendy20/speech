const area = document.getElementById('textarea'); 
const micro = document.getElementById('containerMicro');
const spain = document.querySelector('.spain');
const inglish = document.querySelector('.inglish');

//console.log(area,micro,spain,inglish);

const iniciar = () =>{
    console.log('i');
    if (!('webkitSpeechRecognition' in window)) {
       console.log('aqui'); //upgrade();
      } else {
        let recognition = new webkitSpeechRecognition();
      
        recognition.onstart = function(){
            console.log('escuchando');
        }

        recognition.onresult = function(event) {
            console.log(event);
        }
       /*  recognition.onerror = function(event) { ... }
        recognition.onend = function() { ... } */
    }
}

micro.addEventListener('click', iniciar);
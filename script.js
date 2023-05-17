const start = document.getElementById('start');
const stop = document.getElementById('stop');


const recognition = new webkitSpeechRecognition();
recognition.lang = "en-US";
recognition.interimResults = false;

recognition.interimResults = false;



start.addEventListener('click', () => { 
    recognition.start()
    start.id = 'stop'
    stop.style.display = 'block'
});

stop.addEventListener('click', () => {
     recognition.stop()
     start.id = 'start'
     stop.style.display = 'none'
    });

recognition.addEventListener('result', (event) => {
    const result = event.results[event.results.length - 1][0].transcript;
    console.log(result)
    start.id = 'start'
    stop.style.display = 'none'
});
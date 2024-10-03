const btn = document.querySelector('.talk');
const content = document.querySelector('.content');
function changeBackgroundImageByTime() {
  const body = document.body;
  const hours = new Date().getHours();

  if (hours >= 5 && hours < 12) {
      body.style.backgroundImage = "url('morning.jpg')";
  } else if (hours >= 12 && hours < 17) {
      body.style.backgroundImage = "url('afternoon.jpg')";
  } else if (hours >= 17 && hours < 20) {
      body.style.backgroundImage = "url('evening.jpg')";
  } else {
      body.style.backgroundImage = "url('night.jpg')";
  }
  body.style.backgroundRepeat = "no-repeat";
  body.style.backgroundSize = "100%";
}

changeBackgroundImageByTime();
setInterval(changeBackgroundImageByTime, 3600000);  // Update every hour


function speak(sentence) {
    const text_speak = new SpeechSynthesisUtterance(sentence);

    text_speak.rate = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    var day = new Date();
    var hr = day.getHours();

    if(hr >= 0 && hr < 12) {
        speak("Good Morning ");
    }

    else if(hr == 12) {
        speak("Good noon ");
    }

    else if(hr > 12 && hr <= 16) {
        speak("Good Afternoon ");
    }
    else if(hr > 12 && hr <=20) {
      speak("Good Evening ");
    }

    else {
        speak("Good Night");
    }
}

window.addEventListener('load', ()=>{
    speak("Inertia");
    speak("Going online");
    wishMe();
})

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    speakThis(transcript.toLowerCase());
}

btn.addEventListener('click', ()=>{
    recognition.start();
})

function speakThis(message) {
    const speech = new SpeechSynthesisUtterance();

    speech.text = "I did not understand what you said please try again";

    if(message.includes('hey') || message.includes('hello')) {
        const finalText = "Hello";
        speech.text = finalText;
    }

    else if(message.includes('how are you')) {
        const finalText = "I am fine  tell me how can i help you";
        speech.text = finalText;
    }

    else if(message.includes('name')) {
        const finalText = "My name is Inertia";
        speech.text = finalText;
    }

    else if(message.includes('open google')) {
        window.open("https://google.com", "_blank");
        const finalText = "Opening Google";
        speech.text = finalText;
    }

    else if(message.includes('open instagram')) {
        window.open("https://instagram.com", "_blank");
        const finalText = "Opening instagram";
        speech.text = finalText;
    }
    else if(message.includes('open leetcode')) {
      window.open("https://leetcode.com/", "_blank");
      const finalText = "Opening leetcode";
      speech.text = finalText;
    }
    else if(message.includes('open Hackerrank')) {
      window.open("https://www.hackerrank.com/", "_blank");
      const finalText = "Opening Hackerrank";
      speech.text = finalText;
    }

    else if(message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what i found on internet regarding " + message;
        speech.text = finalText;
    }

    else if(message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        const finalText = "This is what i found on wikipedia regarding " + message;
        speech.text = finalText;
    }
  

    else if(message.includes('time')) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
        const finalText = time;
        speech.text = finalText;
    }

    else if(message.includes('date')) {
        const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"})
        const finalText = date;
        speech.text = finalText;
    }

    else if(message.includes('calculator')) {
        window.open('Calculator:///')
        const finalText = "Opening Calculator";
        speech.text = finalText;
    }

    else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on google";
        speech.text = finalText;
    }

    speech.volume = 1;
    speech.pitch = 1;
    speech.rate = 1;

    window.speechSynthesis.speak(speech);
}


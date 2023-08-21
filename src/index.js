import  { fetchEventSource } from '@microsoft/fetch-event-source';


const addMessage = async (content) => {
  const element = document.getElementById('stream');
  await fetchEventSource('http://localhost:3000/stream', {
    onmessage(ev) {
      element.innerHTML += (ev.data + '<br>')
    }
  });
};

addMessage('hello');



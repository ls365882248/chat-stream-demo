import  { fetchEventSource } from '@microsoft/fetch-event-source';


const getMessage = async (content) => {
  const element = document.getElementById('stream');
  await fetchEventSource('http://localhost:3000/stream', {
    onmessage(ev) {
      element.innerHTML += (ev.data + '<br>')
    }
  });
};

const postMessage = async (content) => {
  const element = document.getElementById('post-stream');
  await fetchEventSource('http://localhost:3000/stream', {
    method: 'POST',
    onmessage(ev) {
      element.innerHTML += (ev.data + '<br>')
    }
  });
};

getMessage('hello');
postMessage('world')



import Main from './components/Main';
import Header from './components/Header';
import './css/style.css';


function App() {
  const state = {
    logo: 'Component Example',
    title: 'Component Example',
    text: 'This is a very basic example of an html component'
  }

  const html = `${Header(state)} ${Main(state)}`;

  document.body.innerHTML = html;
}

App();

if ('serviceWorker' in navigator) {
  // Register a service worker hosted at the root of the
  // site using the default scope.
  navigator.serviceWorker.register('service-worker.js').then((registration) => {
    console.log('Service worker registration succeeded:', registration);
  }, /*catch*/(error) => {
    console.error(`Service worker registration failed: ${error}`);
  });
} else {
  console.error('Service workers are not supported.');
}
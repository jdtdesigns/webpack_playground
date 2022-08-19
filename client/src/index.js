import Main from './components/Main';
import Header from './components/Header';
import './css/style.css';

fetch('/api/test')
  .then(res => res.json())
  .then(res => console.log(res));

// function App() {
//   const state = {
//     logo: 'Component Example',
//     title: 'Component Example',
//     text: 'This is a very basic example of an html component'
//   }

//   const html = `${Header(state)} ${Main(state)}`;

//   document.body.innerHTML = html;
// }

// App();

if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
  console.log('service worker');
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
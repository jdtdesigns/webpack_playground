import db from './db';
import './css/style.css';

db.init()
  .then(async () => {
    // const result = await db.createGroup({
    //   group_name: 'team garf'
    // });

    // console.log(result);

    const groups = await db.find();
    console.log(groups);
  })

if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
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
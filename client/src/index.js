import counter from './libs/counter';
import starwars_request from './libs/starwars_request';
import './css/style.css';
import './css/another.css';
import createList from './libs/create_list';



createList(['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']);

// if (module.hot) {
//   module.hot.accept((err) => {
//     if (err) {
//       console.error('Cannot apply HMR update.', err);
//     }
//   });
// }
import counter from './libs/counter';
import starwars_request from './libs/starwars_request';
import './css/style.css';
import './css/another.css';

counter(5);

starwars_request.then(char => console.log(char));
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import { makeMainRoutes } from './routes';
import { AppRegistry } from 'react-native';
AppRegistry.registerComponent('pnl_mobile', () => App);

const routes = makeMainRoutes();

ReactDOM.render(
  routes,
  document.getElementById('root')
);

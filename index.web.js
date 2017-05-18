/* global document */
import { AppRegistry } from 'react-native';
import App from './app/scenes/App';

AppRegistry.registerComponent('App', () => App);
AppRegistry.runApplication('App', {
  rootTag: document.getElementById('react-root'),
});

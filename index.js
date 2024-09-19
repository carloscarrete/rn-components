/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import ComponentsApp from './src/ComponentsApp';
import './gesture-handler';

AppRegistry.registerComponent(appName, () => ComponentsApp);

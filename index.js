/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

import Main from './Source/Sqlitedb/Main';

AppRegistry.registerComponent(appName, () => Main);

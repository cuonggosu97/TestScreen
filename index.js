/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import HomeScreen from "./src/screens/HomeScreen";
import AlbumPhotosScreen from "./src/screens/AlbumPhotosScreen";
import ListPhotoScreen from "./src/screens/ListPhotoScreen";
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => ListPhotoScreen);

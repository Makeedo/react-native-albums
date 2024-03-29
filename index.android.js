// index.android.js - place code in here for Android

// import a library to help create a componene
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// create a component
const App = () => {
    return (
        <View style={styles.scrollViewFix}>
            <Header headerText={'Albums'}/>
            <AlbumList/>
        </View>
    );
};

styles = {
   scrollViewFix: {
       flex: 1
   }
}

// render it to the device
AppRegistry.registerComponent('albums', () => App);
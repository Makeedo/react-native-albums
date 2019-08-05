import React, { Component } from 'react';

//whenever using a ScrollView, the root view element has to have a style with flex: 1
import { ScrollView } from 'react-native';
import AlbumDetail from './AlbumDetail';
import axios from 'axios'

class AlbumList extends Component {

    state = {
        albums:[]
    };

    render(){
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }

    componentWillMount(){
        axios.get("https://rallycoding.herokuapp.com/api/music_albums")
            .then((response) => {
                this.setState({albums: response.data});
            });
    }

    renderAlbums(){
        return this.state.albums.map((album) => <AlbumDetail album={album} key={album.title} />);
    }
}

export default AlbumList;

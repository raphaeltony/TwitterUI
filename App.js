import React from 'react';
import { Drawer } from 'native-base';
import SideBar from './app/screens/SideBar';
import Home from './app/screens/Home';


export default class App extends React.Component {
    render() {
        return (
            <SideBar />
        );
    }
}
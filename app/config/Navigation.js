import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import SideBar from '../screens/SideBar';
import Home from '../screens/Home';

const RootDrawer = DrawerNavigator({


    Home: {
        screen: Home
    },

},
    {
        contentComponent: props => <SideBar {...props} />,
        drawerOpenRoute: 'DrawerOpen',
        drawerCloseRoute: 'DrawerClose',
        drawerToggleRoute: 'DrawerToggle'
    },

);

export default RootDrawer;
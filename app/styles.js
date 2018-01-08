import React from 'react';
import {StyleSheet} from 'react-native';

const primaryBlue = '#55acee'

const styles = StyleSheet.create({
    header : {
        backgroundColor : "white",
        paddingTop : 5,
    },
    tab : {
        color : primaryBlue,
    },
    tabUnder : {
        backgroundColor : primaryBlue,
        borderBottomWidth : 0,
    }
    
});

export default styles;
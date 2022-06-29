/**
 * @format
 */
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import React from 'react';
import Welcome from './screens/Welcome';
let fakedProducts = [
    {
        productName: 'iphone X',
        year: 2020
    },
    {
        productName: 'iphone Xs',
        year: 2021
    },
    {
        productName: 'iphone Xsm',
        year: 2022
    }
]
// AppRegistry.registerComponent(appName,
//     () => () => <Welcome 
//     x={5} y= {20}
//     person = {{
//         name: 'VU DINH DUNG',
//         age: 21,
//         email: 'dinhdung521@gmail.com'
//     }}
//     products = {fakedProducts}
//     />)
AppRegistry.registerComponent(appName,
    () => () => <Welcome/>)

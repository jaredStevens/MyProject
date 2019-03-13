import React from 'react';
import Entity from 'Entity'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  asset,
  Entity,
} from 'react-360';
import {
  stat
} from 'fs';

export default class Ticker extends React.Component {
  render() {
    return ( 
    <Entity style = {
        {
          transform: [{
            translate: [0, 0, -3]
          }, {
            rotateX: 360,
            rotateY: 360,
            rotateZ: 360,
            scaleX: 100,
            scaleY: 100,
            scaleZ: 5
          }],
          position: 'absolute',
          backgroundColor: 'blue',
        }
      }
      source = {
        {
          obj: assets('globe.obj'),
          mtl: assets('globe.mtl'),
        }
      }
      />
    );
  }
};
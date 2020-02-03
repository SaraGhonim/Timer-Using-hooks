import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, Dimensions, StyleSheet, View} from 'react-native';

import Icon from './icon';

const MyColorPalette = ({color, isSelected, onColorChange}) => (
  <View>
    
    <TouchableOpacity
      onPress={() => onColorChange(color)}
      style={{
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 30,
        height: 30,
        marginHorizontal: 10,
        marginVertical: 10,
        borderRadius: 15,
        elevation: 5,
        shadowOffset: {width: 2, height: 2},
        shadowColor: 'black',
        shadowOpacity: 0.25,
        backgroundColor: color,
      }}>
      {isSelected && <Icon color={color}  />}
    </TouchableOpacity>
  </View>
);
const styles = StyleSheet.create({
  colorOption: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    height: 30,
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 15,
    elevation: 5,
    shadowOffset: {width: 2, height: 2},
    shadowColor: 'black',
    shadowOpacity: 0.25,
  },
});

// MyColorPalette.propTypes = {
//   icon: PropTypes.node,
//   color: PropTypes.string.isRequired,
//   isSelected: PropTypes.bool.isRequired,
//   scaleToWindow: PropTypes.bool.isRequired,
//   onColorChange: PropTypes.func.isRequired,
// }

export default MyColorPalette;

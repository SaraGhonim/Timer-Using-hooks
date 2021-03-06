import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native'

const getContrastColor = hex => parseInt(hex.substring(1), 16) > 0xffffff / 2 ? '#FFFF' : '#FFFFFF';

const Icon = (props) => {
  const { icon, color } = props;
  if (icon) return icon;
  return <Text style={{color:'white',fontSize:38,textAlign:'center' ,margin:4,fontWeight:'bold'}}
>✓</Text>
  // <Text style={{ color: 'white', fontSize: 30, textAlign:'center' }} adjustsFontSizeToFit>✔︎</Text>;
}

Icon.defaultProps = {
  icon: undefined
}

Icon.propTypes = {
  icon: PropTypes.node,
  color: PropTypes.string.isRequired,
}

export default Icon
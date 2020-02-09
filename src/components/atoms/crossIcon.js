import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native'

const getContrastColor = hex => parseInt(hex.substring(1), 16) > 0xffffff / 2 ? '#FFFF' : '#FFFFFF';

const CrossIcon = (props) => {
  const { icon, color } = props;
  if (icon) return icon;
  return <Text style={{ color: 'white', fontSize: 30, textAlign:'center' ,margin:9}} adjustsFontSizeToFit>✘</Text>;
}

CrossIcon.defaultProps = {
  icon: undefined
}

CrossIcon.propTypes = {
  icon: PropTypes.node,
  color: PropTypes.string.isRequired,
}

export default CrossIcon
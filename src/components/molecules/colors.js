import {MyColorPalette} from '_atoms';
import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    ImageBackground,
    TouchableOpacity,
    TextInput,
  } from 'react-native';
  
const ColorPal = ({colors, value, onColorChange,title}) => (
<View>
<Text>{title}</Text>
<View style={{
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center'
  }}>
   {colors.map((c) => (
          <MyColorPalette   
          key={c}    
            color={c}
            onColorChange={onColorChange}
           isSelected={value ? value ===c : color ===c}

          />
        ))}
          <MyColorPalette
            color={'red'}
            onColorChange={()=>{console.log('ok')}}
            isSelected={true}
          />
      
    
      </View>


            </View>
);
export default ColorPal;
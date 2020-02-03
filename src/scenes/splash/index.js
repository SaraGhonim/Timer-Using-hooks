import React, {useEffect} from 'react'
import { View, Text,ImageBackground,ActivityIndicator } from 'react-native'

const Splash = ({navigation}) => {
    useEffect(() => {
        
        setTimeout(()=>{navigation.navigate('App')},2000)
        return () => {
        
        };
    }, [])
    return (
        <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
            <ActivityIndicator size='large' color='red'/>
        </View>
    )
}

export default Splash

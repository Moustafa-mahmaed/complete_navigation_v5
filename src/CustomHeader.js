import React, { Component } from 'react'
  import { Text, View ,SafeAreaView ,Image ,TouchableOpacity ,ScrollView } from 'react-native';
import {IMAGES} from "./constants/img"

export  class CustomHeader extends Component {
    render() {
        return(
      <View style={{flexDirection:"row" , height:50  }}>
          <View style={{flex:1 ,justifyContent: 'center' }}>
      {
        this.props.isHome ?
        <TouchableOpacity
           onPress={()=>
      this.props.navigation.openDrawer()

      
         }>
        <Image style={{height:30 , width:30 , marginLeft:5  }}
        source={IMAGES.ICON_TAB}
        resizeMode="contain"
        />
         </TouchableOpacity>
      :
         <View style={{flex:1 ,justifyContent: 'center' }}>
         <TouchableOpacity
           onPress={()=>
       this.props.navigation.goBack()

      
         }>

        <Image style={{height:30 , width:30 , marginLeft:5  }}
        source={IMAGES.ICON_BACK}
        resizeMode="contain"
        />
         </TouchableOpacity>
      </View>

      }
      
      </View>
      <View style={{flex:2 ,  alignItems: 'center' ,justifyContent: 'center', }}>
      <Text style={{TextAlign:"center"}}>{this.props.title}</Text>
      </View>
      <View style={{flex:1  }}>
        
      </View>
      </View>
    )}
}

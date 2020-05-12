import React, { Component } from 'react'
import { Text, View ,SafeAreaView ,Image ,TouchableOpacity ,ScrollView } from 'react-native';

import {CustomHeader} from "../index"

export  class RegisterScreen extends Component {
    render() {
         return (
    <View style={{ flex: 1,  }}>
       <CustomHeader  title="Register"  isHome={true} navigation={this.props.navigation} /> 
      <Text>Register</Text>
     
    </View>
  );
    }
}

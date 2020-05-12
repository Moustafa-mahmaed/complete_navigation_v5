import React, { Component } from 'react'
import { Text, View ,SafeAreaView ,Image ,TouchableOpacity ,ScrollView } from 'react-native';

export  class CustomDrawerContent extends Component {
    render() {
        return(
    <SafeAreaView style={{flex:1 , backgroundColor:"red" }}>
    <ScrollView>
    <TouchableOpacity style={{marginTop:20 }}
    onPress={()=>
    this.props.navigation.navigate("MainMenu")
    }
    >
    <Text>Home</Text>
    </TouchableOpacity>


     <TouchableOpacity style={{marginTop:20 }}
    onPress={()=>
    this.props.navigation.navigate("Notifications")
    }
    >
    <Text>Notifications</Text>
    </TouchableOpacity>

    </ScrollView>
    </SafeAreaView>
  )
    }
}

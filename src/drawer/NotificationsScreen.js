import React, { Component } from 'react'
import { Text, View ,SafeAreaView ,Image ,TouchableOpacity ,ScrollView } from 'react-native';

export  class NotificationsScreen extends Component {
    render() {
        return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity onPress={() => this.props.navigation.goBack()}  >
      <Text>Go back home </Text>
      </TouchableOpacity>
    </View>
  );
    }
}

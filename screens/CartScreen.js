import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MonoText } from '../components/StyledText';

export default class CartScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return (
        <View style={styles.container}>
            <MonoText>screens/CartScreen.js</MonoText>
        </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems:'center'
  }
});
import React, { Component } from 'react';
import { StyleSheet, Alert } from 'react-native';
import { Header as NativeHeader, Item, Icon, Button, Input, Text, Left, Body, Right, Title} from 'native-base';
import { Actions } from 'react-native-router-flux';

class Detail extends Component {

  render() {
    return (
        <NativeHeader androidStatusBarColor={'#B00020'} style={{ backgroundColor: '#FFFFFF', marginBottom: 10 }} iosBarStyle='light-content'>
          <Left>
            <Button transparent onPress={() => {Actions.pop()}}>
              <Icon style={styles.color} name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title style={styles.color}>Details</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => { Alert.alert('Arka Plan Olarak Ayarlandı')}}>
              <Icon style={styles.color} name='images' />
            </Button>
            <Button transparent onPress={() => { Alert.alert('İndirildi')}}>
              <Icon style={styles.color} name='download' />
            </Button>
            <Button transparent onPress={() => { Alert.alert('Paylaşılıyor.')}}>
              <Icon style={styles.color} name='share' />
            </Button>
          </Right>
        </NativeHeader>
    );
  }

}
const styles = StyleSheet.create({
  color: { color: '#262626'}
});
export default Detail;

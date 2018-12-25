import React, { Component } from 'react';
import { Image, View, StyleSheet, ImageBackground, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';


class Item extends Component<Props> {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.item}>
        <TouchableOpacity onPress={ () => { Actions.detailPage({itemId: this.props.itemId}) } }>
          <ImageBackground source={{uri: this.props.thumb}} style={{width: '100%', height: "100%"}}>

          </ImageBackground>
        </TouchableOpacity>
      </View>

    );
  }

  _onPressInItem = () => {
    console.log('BASILI KALDI');
  }

}

const styles = StyleSheet.create({
  item: {
    width: '50%',
    height: 200,
    backgroundColor: '#252525',
    marginTop: 0,
  },
  itemText: {
    color: '#FFFFFF',
    fontSize: 20
  }
});

export default Item;

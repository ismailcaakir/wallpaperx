import React, { Component } from 'react';
import { FlatList, View, StyleSheet, Image } from 'react-native';

class Items extends Component {

  render() {
    return (
        <View >
          <FlatList contentContainerStyle={styles.container}
            data={this.props.renderData}
            numColumns={1}
            renderItem={({item}) => <View style={styles.item}> <Image source={{uri: item.thumb, width: '100%', height: 150}} /> </View>}
          />
        </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    marginLeft: 5,
    marginRight: 5,
  },

  item: {
    width: '100%',
    backgroundColor: '#252525',
    margin: 4,
    marginTop: 0,
  }
});

export default Items;

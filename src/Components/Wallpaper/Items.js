import React, { Component } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { Item } from '../'


class Items extends Component {

  render() {
    return (
        <View style={{flex:1}}>
          <FlatList contentContainerStyle={styles.container}
            data={this.props.renderData}
            numColumns={2}
            renderItem={({item}) => <Item thumb={item.thumb} itemId={item.id}/> }
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 11,
  },
});

export default Items;

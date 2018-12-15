import React, { Component } from 'react';
import { Header as NativeHeader, Item, Icon, Input, Button, Text} from 'native-base';
import { connect } from 'react-redux';
import { searchInputChanged } from '../../App/Actions';

class Search extends Component {

  render() {
    return (
        <NativeHeader searchBar={true} androidStatusBarColor={'#B00020'} style={{ backgroundColor: '#FFFFFF' }} iosBarStyle='light-content'>
            <Item>
              <Input placeholder=" Search in 100K + Wallpaper" onChangeText={(e) => { this.onEndSearching(e) } }/>
              <Icon name="ios-search" />
            </Item>
        </NativeHeader>
    );
  }

  onEndSearching(e) {
    text = e;
    this.props.searchInputChanged(text);
  }

}

export default connect(null, {searchInputChanged})(Search);

import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { Header as NativeHeader, Item, Icon, Input, Button, Text} from 'native-base';
import { connect } from 'react-redux';
import { searchInputChanged } from '../../App/Actions';

class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      query: "Space",
      searchIcon: 'ios-search',
      searchInputStatus: true,
    };
  }

  render() {
    return (
        <NativeHeader searchBar={true} androidStatusBarColor={'#B00020'} style={{ backgroundColor: '#FFFFFF', marginBottom: 10 }} iosBarStyle='light-content'>
            <Item>
              <Input
                placeholder="Search Wallpaper"
                ref="searchInput"
                onFocus={ () => { this.setState({searchIcon: 'ios-close', searchInputStatus: false}) }}
                onBlur={ () => { this.setState({searchIcon: 'ios-search', searchInputStatus: true}) }}
                onSubmitEditing={(e) => { this.onEndSearching(); this.setState({searchIcon: 'ios-search', searchInputStatus: true}) } }
                onChangeText={(text) => this.setState({ query: text})}
              />
              <TouchableOpacity onPress={ () => {this.searchInputStatus()} }>
                <Icon name={this.state.searchIcon} />
              </TouchableOpacity>
            </Item>
        </NativeHeader>
    );
  }

  onEndSearching(e) {
    text = this.state.query;
    this.props.searchInputChanged(text);
  };

  searchInputStatus() {
    if (this.state.searchInputStatus) {
      this.refs.searchInput._root.focus()
    } else {
      this.refs.searchInput._root.blur()
    }
  };

}

export default connect(null, {searchInputChanged})(Search);

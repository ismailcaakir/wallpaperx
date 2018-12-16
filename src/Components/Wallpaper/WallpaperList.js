import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { Spinner, Items } from '../';
import { connect } from 'react-redux';
import { searchInputChanged, searchDataUpdated } from '../../App/Actions';
import axios from 'axios';

class WallpaperList extends Component<Props> {

  constructor(props) {
    super(props);
  };

  // After Load Class
  componentDidMount() {
    this.props.searchInputChanged('Space');
  };

  // Render Component
  render() {
    return (
      <View>
        <Spinner show={this.props.searchSpinner}/>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <Items renderData={this.props.searchApiData.images}/>
        </ScrollView>
      </View>
    );
  };

}

const styles = StyleSheet.create({
    scrollView: {
      height: 500,
    }
});


const mapStateToProps = ({searchResponse}) => {
  const { query, searchApiData, searchSpinner } = searchResponse;
  return { query, searchApiData, searchSpinner };
};

export default connect(mapStateToProps, { searchInputChanged, searchDataUpdated })(WallpaperList);

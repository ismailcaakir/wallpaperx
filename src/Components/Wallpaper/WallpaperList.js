import React, { Component } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
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
        <ScrollView contentContainerStyle={styles.scrollView}>
          <Spinner show={this.props.searchSpinner}/>
          <Items renderData={this.props.searchApiData.images}/>
        </ScrollView>
    );
  }

};

const styles = StyleSheet.create({
    scrollView: {
      flex: 1,
      paddingBottom: 20,
    }
});


const mapStateToProps = ({searchResponse}) => {
  const { query, searchApiData, searchSpinner } = searchResponse;
  return { query, searchApiData, searchSpinner };
};

export default connect(mapStateToProps, { searchInputChanged, searchDataUpdated })(WallpaperList);

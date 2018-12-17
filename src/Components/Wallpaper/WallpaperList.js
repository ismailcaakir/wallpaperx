import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Text, ToastAndroid } from 'react-native';
import { Spinner, Items } from '../';
import { connect } from 'react-redux';
import { searchInputChanged, searchDataUpdated } from '../../App/Actions';
import axios from 'axios';

const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
  const paddingToBottom = 200;
  return layoutMeasurement.height + contentOffset.y >=
    contentSize.height - paddingToBottom;
};

class WallpaperList extends Component<Props> {

  constructor(props) {
    super(props);
  };

  // After Load Class
  componentDidMount() {
    this.props.searchInputChanged('Space');
  };

  componentWillMount() {

  };

  // Render Component
  render() {

    if (this.props.searchSpinner) {
      return (<Spinner show={this.props.searchSpinner}/>);
    }

    if (this.props.searchApiData.totalPages == 0 && this.props.searchApiData.images.length == 0) {
      return (<Text style={styles.noResultsText}> No Results.</Text>);
    }

    return (
        <ScrollView
          contentContainerStyle={styles.scrollView}
          onScroll={({nativeEvent}) => {
            if (isCloseToBottom(nativeEvent)) {
              this._loadMore(this.props.query, this.props.searchApiData.currentPage + 1, this.props.searchApiData)
            }
          }}
          scrollEventThrottle={400}
        >
          <Items renderData={this.props.searchApiData.images} />
        </ScrollView>
    );
  };

  _loadMore(keyword, nextPage, data) {
    console.log(data);
    if (nextPage <= this.props.searchApiData.totalPages) {
      ToastAndroid.showWithGravity("Loading more images.After just scroll down.",ToastAndroid.LONG,ToastAndroid.BOTTOM);
      data.currentPage = nextPage;
      this.props.searchDataUpdated(keyword, nextPage, data);
    } else {
      ToastAndroid.showWithGravity("That is all",ToastAndroid.LONG,ToastAndroid.BOTTOM);
    }
  }

};

const styles = StyleSheet.create({
    scrollView: {
      minHeight: 300
    },
    noResultsText: {
      fontSize: 18,
      textAlign: 'center',
      paddingTop: 15
    }
});


const mapStateToProps = ({searchResponse}) => {
  const { query, searchApiData, searchSpinner } = searchResponse;
  return { query, searchApiData, searchSpinner };
};

export default connect(mapStateToProps, { searchInputChanged, searchDataUpdated })(WallpaperList);

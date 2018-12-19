import React, { Component } from 'react';
import { ToastAndroid } from 'react-native';
import { Button, Text, Spinner } from 'native-base'
import { searchInputChanged, searchDataUpdated } from '../../App/Actions';
import { connect } from 'react-redux';


class LoadMoreButton extends Component<Props> {

  constructor(props) {
    super(props);

    this.state = {
      showLoadMore: this.props.showLoadMore
    }

  }

  render() {
    if (this.state.showLoadMore) {
      return (
        <Button full onPress={() => {this.loadMore()}} style={{backgroundColor: '#B00020'}}>
          {this.props.searchLoadMoreSpinner == true ? <Spinner color='#FFFFFF' /> : <Text>Load More Images</Text>}
        </Button>
      );
    } else {
      return (
        <Button full onPress={() => {}} disabled={true}>
          <Text>That is All</Text>
        </Button>
      );
    }

  }

  loadMore() {
    this.props.searchApiData.currentPage = this.props.searchApiData.currentPage + 1;
    if ((this.props.searchApiData.currentPage) <= this.props.searchApiData.totalPages) {
      //ToastAndroid.showWithGravity("Loading more images.",ToastAndroid.LONG,ToastAndroid.BOTTOM);
      this.props.searchDataUpdated(this.props.query, this.props.searchApiData.currentPage, this.props.searchApiData);
    } else {
      //ToastAndroid.showWithGravity("That is all.",ToastAndroid.LONG,ToastAndroid.BOTTOM);
      this.setState({showLoadMore: false});
    }
  }

}

const mapStateToProps = ({searchResponse}) => {
  const { query, searchApiData, searchLoadMoreSpinner } = searchResponse;
  return { query, searchApiData, searchLoadMoreSpinner };
};

export default connect(mapStateToProps, { searchDataUpdated })(LoadMoreButton);

import React, { Component } from 'react';
import { View, ImageBackground, TouchableOpacity } from 'react-native';
import { Spinner, DetailHeader } from '../Components';
import { connect } from 'react-redux';
import { detailItemIdChanged, detailDataUpdated } from '../App/Actions';

import axios  from 'axios';

class Detail extends Component<Props> {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.detailItemIdChanged(this.props.itemId);
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1}}>
          <DetailHeader />
        </View>
        <View style={{flex: 11}}>
          {this.props.data.fullImage === null ? <Spinner show={this.props.spinner}/> : <ImageBackground source={{uri: this.props.data.fullImage}} resizeMethod={'auto'} style={{width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.7)'}} />}
        </View>
      </View>
    );
  }

}


const mapStateToProps = ({detailResponse}) => {
  const { data, spinner } = detailResponse;
  return { data, spinner };
};

export default connect(mapStateToProps, { detailItemIdChanged, detailDataUpdated })(Detail);

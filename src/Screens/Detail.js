import React, { Component } from 'react';
import { View, ImageBackground, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { Spinner, DetailHeader } from '../Components';

import axios  from 'axios';

class Detail extends Component<Props> {

  constructor(props) {
    super(props);

    this.state = {
      fullImage: null,
      spinnerShow: true,
    };
  }

  componentWillMount() {

  }

  componentDidMount() {
    axios.get("https://wallhaven-api.now.sh/details/" + this.props.itemId, {})
    .then((obj) => {
      this.setState({fullImage: obj.data.fullImage});
    });
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1}}>
          <DetailHeader />
        </View>
        <View style={{flex: 11}}>
          {this.state.fullImage === null ? <Spinner show={true}/> : <ImageBackground source={{uri: this.state.fullImage}} resizeMethod={'auto'} style={{width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.7)'}} />}
        </View>
      </View>
    );
  }

}

export default Detail;

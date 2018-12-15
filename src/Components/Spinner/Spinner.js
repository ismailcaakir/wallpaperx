import React, { Component } from 'react';
import { Spinner as NativeSpinner } from 'native-base';
import { Text } from 'react-native';

class Spinner extends Component<Props> {

  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.show) {
      return (
        <NativeSpinner color={'#B00020'}/>
      );
    } else {
      return (
        <Text> </Text>
      );
    }
  }

}


export default Spinner;

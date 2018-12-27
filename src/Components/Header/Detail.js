import React, { Component } from 'react';
import { StyleSheet, Alert, TouchableOpacity, Share } from 'react-native';
import { Header as NativeHeader, Icon, Button, Left, Body, Right, Title} from 'native-base';
import { writeExternalStoragePermissions } from '../../App/Permissions/Android';
import { downloadImage, setAsWallpaper } from '../../App/Helpers';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';


class Detail extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: false,
    }
  }

  render() {
    return (
        <NativeHeader androidStatusBarColor={'#B00020'} style={{ backgroundColor: '#FFFFFF', marginBottom: 10 }} iosBarStyle='light-content'>
          <Left>
            <Button transparent onPress={() => {Actions.pop()}}>
              <Icon style={styles.color} name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title style={styles.color}>Details</Title>
          </Body>
          <Right>
            <TouchableOpacity>
              <Button transparent disabled={this.props.spinner} onPress={() => { this.setAsWallpaper()}}>
                <Icon style={styles.color} name='images' />
              </Button>
            </TouchableOpacity>
            <TouchableOpacity>
              <Button transparent disabled={this.props.spinner} onPress={() => { this.download() }}>
                <Icon style={styles.color} name='download' />
              </Button>
            </TouchableOpacity>
            <Button transparent disabled={this.props.spinner} onPress={ () => { this.onSharePress() } }>
              <Icon style={styles.color} name='share' />
            </Button>
          </Right>
          <Spinner
              visible={this.state.loading}
              textContent={'Loading...'}
              textStyle={styles.spinnerTextStyle}
          />
        </NativeHeader>
    );
  }

  download = () => {

    writeExternalStoragePermissions().then((granted) => {

      this.setState({loading: true});

      if (!granted)
      {
        this.setState({loading: false});
        Alert.alert('Permissions error.','Please open storage permissions for this application.');
      } else {
        downloadImage(this.props.data.fullImage).then((res) => {
          this.setState({loading: false});
        });
      }

    });

  };

  setAsWallpaper = () => {

    Alert.alert('Set as Wallpaper', 'Do you approve this picture as wallpaper?', [
        {text: 'Okay!', onPress: () => { this._processingSetAsWallpaper(); }},
        {text: 'Cancel', style: 'cancel'}
    ]);

  };

  onSharePress = (data) => {
      
  };

  _processingSetAsWallpaper() {

  };
}

const styles = StyleSheet.create({
    color: { color: '#262626'},
    spinnerTextStyle: {
      color: '#FFF'
    },
});

const mapStateToProps = ({detailResponse}) => {
  const { data, spinner } = detailResponse;
  return { data, spinner };
};

export default connect(mapStateToProps, {})(Detail);

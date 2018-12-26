import React, { Component } from 'react';
import { StyleSheet, Alert, PermissionsAndroid, TouchableOpacity } from 'react-native';
import { Header as NativeHeader, Item, Icon, Button, Input, Text, Left, Body, Right, Title} from 'native-base';
import { writeExternalStoragePermissions } from '../../App/Permissions/Android';
import { downloadImage, setAsWallpaper } from '../../App/Helpers';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';


class Detail extends Component {

  constructor(props) {
    super(props);
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
            <Button transparent disabled={this.props.spinner} onPress={() => { Alert.alert('Paylaşılıyor.')}}>
              <Icon style={styles.color} name='share' />
            </Button>
          </Right>
        </NativeHeader>
    );
  }

  download(){

    writeExternalStoragePermissions().then((granted) => {

      if (!granted) {
        Alert.alert('Permissions error.','Please open storage permissions for this application.');
      } else {
        downloadImage(this.props.data.fullImage);
      }

    });

  }

  setAsWallpaper() {
    setAsWallpaper(this.props.data.fullImage);
  }

}

const styles = StyleSheet.create({
  color: { color: '#262626'}
});

const mapStateToProps = ({detailResponse}) => {
  const { data, spinner } = detailResponse;
  return { data, spinner };
};

export default connect(mapStateToProps, {})(Detail);

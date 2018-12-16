import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, SafeAreaView, Text } from 'react-native';
import { Search, WallpaperList } from '../Components';

class Home extends Component {

  // Class Start
  constructor(props) {
    super(props);

  }

  // Start
  componentWillMount() {

  }

  // End
  componentDidMount() {

  }

  // Render Components
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1}}>
          <Search />
        </View>
        <View style={{flex: 10, justifyContent: "space-between"}}>
          <WallpaperList />
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({

});

export default Home;

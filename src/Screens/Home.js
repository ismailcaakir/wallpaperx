import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
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
        <SafeAreaView style={{flex: 11}}>
          <WallpaperList />
        </SafeAreaView>
      </View>
    );
  }

}

const styles = StyleSheet.create({

});

export default Home;

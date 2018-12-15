import React, { Component } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
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
      <View>
        <Search />
        <WallpaperList />
      </View>
    );
  }

}

const styles = StyleSheet.create({
    
});

export default Home;

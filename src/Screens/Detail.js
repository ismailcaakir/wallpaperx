import React, { Component } from 'react';
import { Text, View, SafeAreaView, Image } from 'react-native'
import axios  from 'axios';

class Detail extends Component<Props> {

  constructor(props) {
    super(props);

    this.state = {
      fullImage: "null",
    };
  }

  componentDidMount() {
    axios.get("https://wallhaven-api.now.sh/details/" + this.props.itemId, {})
    .then((obj) => {
      data =  JSON.stringify(obj.data)
      this.setState({ fullImage:});
      //const fullImage = obj.data.fullImage;
    });

    //this.setState({fullImage: fullImage});
  }

  render() {

    if (this.state.fullImage === "null") {
      return (<Text> Yükleniyor </Text>);
    }

    return (
      <View style={{flex: 1}}>
        <SafeAreaView style={{flex: 10, justifyContent: "space-between"}}>
          <Image
            style={{width: '100%', height: this}}
            source={{uri: this.state.fullImage}}
          />
        </SafeAreaView>
      </View>
    );
  }

}

export default Detail;

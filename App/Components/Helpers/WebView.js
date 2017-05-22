import React, {Component} from "react";
import {StyleSheet, View, WebView, ActivityIndicator} from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f1f1f1',
    flex: 1,
    flexDirection: 'column'
  }
});


export default class WEBView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false
    }
  }
  _onLoadEnd(){
    this.setState({isLoaded: true});
  }
  render(){
    return(
      <View style={styles.container}>
        {(this.state.isLoaded) ? null :  <ActivityIndicator animating={true} color="#111" size="large" />}

        <WebView source={{uri: this.props.url}} onLoadEnd={this._onLoadEnd()}/>
      </View>
    )
  }
}

WEBView.propTypes = {
  url: React.PropTypes.string.isRequired
};
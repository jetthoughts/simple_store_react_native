import React, {Component} from "react";
import {StyleSheet, View, Text, WebView, ActivityIndicator} from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    flexDirection: 'column',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  flashContainer: {},
  loader: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  }
});

const errorPlaceholder = () => {
  return (
    <View style={styles.errorContainer}>
      <View>
        <Text style={{fontSize: 15, color: 'black'}}> Something went wrong with your view, pleaser try again.</Text>
      </View>
    </View>
    )
};


export default class WEBView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  static propTypes = {
    url: React.PropTypes.string.isRequired
  }

  webLoadEnd(){
    this.setState({
      isLoading: false
    })
  }

  render(){
    return(
      <View style={styles.container}>
        {(this.state.isLoading) ? <ActivityIndicator
          animating={this.state.isLoading}
          size="large"
          color="#00aa00"
          style={styles.loader}
        /> : null}
        <WebView
          style={[ { opacity: (this.state.isLoading ? 0 : 1)} ]}
          renderError={errorPlaceholder}
          source={{uri: this.props.url}}
          onLoadEnd={this.webLoadEnd.bind(this)}
        />
      </View>
    )
  }
}

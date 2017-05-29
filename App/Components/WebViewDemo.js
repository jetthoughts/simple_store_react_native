import React, {Component} from 'react';
import {View, TouchableHighlight, Text, StyleSheet} from 'react-native';
import WEBView from './Helpers/WebView'

let styles = StyleSheet.create({
  container: {
    marginTop: 65,
    flex: 1
  },
  image: {
    height: 350
  },
  label: {
    backgroundColor: '#00ffcb',
    fontSize: 30,
    color: 'white',
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'center',
    flex: 1
  },
  text: {
    alignSelf: 'center',
    fontSize: 30,
    color: 'white'
  }
});

export default class WebViewDemo extends Component {
  getBackground(btn) {
    let obj = {
      flexDirection: 'row',
      alignSelf: 'stretch',
      justifyContent: 'center',
      flex: 1
    };

    switch (btn) {
      
      case 0: {
        obj.backgroundColor = '#54fe09';
        break;
      }
      case 1: {
        obj.backgroundColor = '#478cfe';
        break;
      }
      case 2: {
        obj.backgroundColor = '#fe266c';
        break;
      }
    }
    return obj;
  }


  goToWebView(url){
    console.log(url);
    this.props.navigator.push({
      component: WEBView,
      title: `Web of ${url}`,
      passProps: {
        url
      }
    })
  }

  render(){
    return (
      <View style={styles.container}>
        <TouchableHighlight style={this.getBackground(0)}
                            onPress={this.goToWebView.bind(this, 'https://youtu.be/_CL6n0FJZpk?t=40s')}
                            underlayColor='blue'>
          <Text style={styles.text}> Correct Link</Text>
        </TouchableHighlight>
        <TouchableHighlight style={this.getBackground(1)}
                            onPress={this.goToWebView.bind(this, 'https://fignia.com/polnaja')}
                            underlayColor='blue'>
          <Text style={styles.text}> Incorrect link/ other error</Text>
        </TouchableHighlight>
        <TouchableHighlight style={this.getBackground(2)}
                            onPress={this.goToWebView.bind(this, 'https://facebook.github.io/react-native/docs/getting-started.html')}
                            underlayColor='blue'>
          <Text style={styles.text}> Animated loading</Text>
        </TouchableHighlight>
      </View>

    )

  }
}
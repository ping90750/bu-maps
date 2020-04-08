/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
} from 'react-native';

import {Container, Content, Text} from 'native-base';

export default class App extends Component<Props> {
  render() {
    return (
      <Container>
        <Content>
          <View
            style={{
              alignSelf: 'center',
              justifyContent: 'center',
            }}>
            <Text>Hello World</Text>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});

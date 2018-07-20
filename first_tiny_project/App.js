/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

const FBSDK = require("react-native-fbsdk");
const { LoginButton, AccessToken, LoginManager } = FBSDK;

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>

        <TouchableOpacity
          // onPress={() => {
          //   GoogleSignin.signIn()
          //     .then(user => {
          //       console.log(user);
          //       this.setState({ user: user });
          //       console.log(user.token + " token");
          //       const credential = {
          //         provider: "google",
          //         token: user.accessToken,
          //         secret: user.id //I do not know what to send in secret
          //       };
          //       alert("accessToken " + user.accessToken);
          //       //Authentication.googleLogin(credential);
          //     })
          //     .catch(err => {
          //       alert("WRONG SIGNIN" + err);
          //     })
          //     .done();
          // }}
          onPress={() => {
            // console.log("Login start");
            // const user = await GoogleSignin.signIn();
            // this.setState({ user });
            LoginManager.logInWithReadPermissions([
              "public_profile",
              "email"
            ]).then(
              function(result) {
                if (result.isCancelled) {
                  //alert("Login cancelled");
                  console.log("Login cancelled");
                } else {
                  console.log(result);
                  console.log(result.grantedPermissions.toString());
                  alert(
                    "Login success with permissions: " +
                      result.grantedPermissions.toString()
                  );
                }
              },
              function(error) {
                console.log("Login fail with error: " + error);
                //alert("Login fail with error: " + error);
              }
            );
          }}
        >
          <Text>Sign In</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});

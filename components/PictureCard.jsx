import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export const PictureCard = () => {
  return (
    <View style={styles.containerPost}>
      <View>
        <Image
          source={require("../assets/images/profile.png")}
          style={{ width: 343, height: 240 }}
          resizeMode="cover"
        />
      </View>
      <View style={styles.containerTextPost}>
        <Text style={styles.textPost}>My work</Text>
      </View>
      <View style={styles.containerPostLocation}>
        <Image
          style={{ width: 24, height: 24 }}
          source={require("../assets/icons/map-pin.png")}
        />
        <Text style={styles.textLocation}>Lviv</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerPost: {
    marginRight: "auto",
    marginLeft: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 32,
    width: 343,
  },
  containerTextPost: {
    marginLeft: 3,
    display: "flex",
    marginRight: "auto",
    width: 343,
    marginTop: 8,
  },
  textPost: {
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    color: "#212121",
  },
  containerPostLocation: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
    width: 343,
  },
  textLocation: {
    marginLeft: 4,
  },
  logoLocation: {
    width: 24,
    height: 24,
  },
});

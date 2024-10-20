import { TouchableOpacity, Text } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";

const CustomButton = ({ title }) => {
  return (
    <TouchableOpacity
      // activeOpacity={0.7}
      // onPress={handlePress}
      style={styles.styleButton}
      // disabled={isLOading}
    >
      <Text style={styles.v3_202}>{title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  styleButton: {
    width: 343,
    height: 51,
    backgroundColor: "rgba(255,108,0,1)",
    borderRadius: 100,
   
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
    marginRight: "auto",
    marginLeft: "auto",
    // position: "absolute",
  },
  styleText: {
    color: "rgba(255,255,255,1)",
    fontSize: 16,
  },
});
export default CustomButton;



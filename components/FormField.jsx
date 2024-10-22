import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";

import eye from "../assets/icons/eye.png";
import eyeHide from "../assets/icons/eye-hide.png";

const FormField = ({
  title,
  value,
  handleChangeText,
  otherStyles,
  placeholder,
  marginBottom = 16, // Default value for marginBottom
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false); // Track focus state

  return (
    <View style={[styles.container, otherStyles, { marginBottom }]}>
      {/* <Text style={styles.title}>{title}</Text> */}

      <View
        style={[
          styles.inputContainer,
          { borderColor: isFocused ? "orange" : "#B0B0B0" }, // Change border color when focused
        ]}
      >
        <TextInput
          style={styles.input}
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
          onFocus={() => setIsFocused(true)} // Set focus state to true
          onBlur={() => setIsFocused(false)} // Set focus state to false when focus is lost
        />

        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? eye : eyeHide}
              style={styles.icon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 343,
    // marginVertical: 8,
    marginRight: "auto",
    marginLeft: "auto",
    // Removed static marginBottom, now controlled by props
  },
  title: {
    fontSize: 16, // equivalent to "text-base"
    color: "#F5F5F5", // equivalent to "text-gray-100"
  },
  inputContainer: {
    borderWidth: 2, // equivalent to "border-2"
    borderColor: "#B0B0B0", // default border color
    width: "100%",
    height: 64, // equivalent to "h-16"
    paddingHorizontal: 16, // equivalent to "px-4"
    backgroundColor: "#E8E8E8", // Background color
    borderRadius: 10, // equivalent to "rounded-2xl"
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    color: "#212121", // Text color
    fontSize: 16, // Font size
  },
  icon: {
    width: 24, // equivalent to "w-6"
    height: 24, // equivalent to "h-6"
  },
});

export default FormField;

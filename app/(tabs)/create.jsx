import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { signOut } from "../../lib/appwrite";
import { router } from "expo-router";
import { useGlobalContext } from "../../contex/GlobalProvider";

const Create = () => {
  const { user, setUser, setIsLoggedIn } = useGlobalContext();
  const logout = async () => {
    await signOut();
    setUser(null);
    setIsLoggedIn(false);

    router.replace("/");
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.containerHeader}>
        <Text style={styles.textHeader}>Create a publication</Text>
        <TouchableOpacity onPress={logout}>
          <Image
            source={require("../../assets/icons/log-out.png")}
            resizeMode="contain"
            style={styles.logoOut}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.loadContainer}>
        <TouchableOpacity>
          <Image
            source={require("../../assets/images/LoadFoto.jpg")}
            resizeMode="contain"
            style={{ width: 343, height: 240, borderRadius: 8 }}
          />
          <Text style={styles.loadText}>Upload a photo</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.loadTextName}>Name...</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Create;

const styles = StyleSheet.create({
  textHeader: {
    fontSize: 17,
    fontWeight: "medium",
    lineHeight: 22,
    color: "#212121",
    fontFamily: "Roboto-Medium",
    textAlign: "center",
  },
  containerHeader: {
    height: 60,
    width: "100%",
    borderBottomColor: "#BDBDBD",
    borderBottomWidth: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    zIndex: 10,
    flexDirection: "row",
    backgroundColor: "rgba(255,255,255,1)",
  },
  mainContain: {
    display: "flex",

    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "rgba(255,255,255,1)",

    alignItems: "center",
    justifyContent: "center",
  },
  logoOut: {
    width: 24,
    height: 24,
    left: 91,
  },
  imageProfile: {
    width: 60,
    height: 60,
    borderRadius: 16,
  },
  containetImageProfile: {
    marginTop: 32,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  textProfileName: {
    fontSize: 13,
    fontWeight: "medium",

    color: "#212121",
    fontFamily: "Roboto-Bold",
  },
  textProfileEmail: {
    fontSize: 11,
    fontWeight: "regular",

    color: "#212121",
    fontFamily: "Roboto-Regular",
  },
  loadContainer: {
    marginTop: 92,
    marginBottom: 32,
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
  loadText: {
    fontSize: 16,
    fontWeight: "medium",
    lineHeight: 22,
    color: "#BDBDBD",
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    marginTop: 8,
  },
  loadTextName: {
    fontSize: 16,
    fontWeight: "medium",
    lineHeight: 22,
    color: "#BDBDBD",
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    marginTop: 48,
    display: "flex",
    justifyContent: "left",
    flexDirection: "row",
    alignItems: "center",
    width: 343,
    height: 50,
    justifyContent: 'flex-start',
    borderBottomColor: '#BDBDBD',
    borderBottomWidth: 1,

  },
});

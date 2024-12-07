import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, RefreshControl, ScrollView } from "react-native";
// import VideoCard from "../components/VideoCard";
// import { posts } from "../constants";
import { useGlobalContext } from "../../contex/GlobalProvider";
// import SearchInput from "../components/SearchInput";
import useAppwrite from "../../lib/useAppwrite";
import { getAllPosts, getLatestPosts } from "../../lib/appwrite";
import { useState } from "react";
import { signOut } from "../../lib/appwrite";
import { router } from "expo-router";
import { Alert } from "react-native";
import { PictureCard } from "../../components/PictureCard";

const Home = () => {
  const { data: posts, refetch } = useAppwrite(getAllPosts);

  const { user, setUser, setIsLoggedIn } = useGlobalContext();

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  };
  const logout = async () => {
    await signOut();
    setUser(null);
    setIsLoggedIn(false);

    router.replace("/");
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Fixed Header */}
      <View style={styles.containerHeader}>
        <Text style={styles.textHeader}>Publications</Text>
        <TouchableOpacity onPress={logout}>
          <Image
            source={require("../../assets/icons/log-out.png")}
            resizeMode="contain"
            style={styles.logoOut}
          />
        </TouchableOpacity>
      </View>

      {/* List with Refresh Control */}
      <FlatList
        data={posts}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <View style={styles.mainContain}>
            <View
              style={{
                display: "flex",
                flexDirection: "column",

                backgroundColor: "rgba(255,255,255,1)",
                width: 343,
              }}
            >
              <View style={styles.containetImageProfile}>
                <Image
                  source={{ uri: item.creator.avatar }}
                  resizeMode="contain"
                  style={styles.imageProfile}
                />
                <View style={{ marginLeft: 8 }}>
                  <Text style={styles.textProfileName}>
                    {item.creator.username}
                  </Text>
                  <Text style={styles.textProfileEmail}>
                    {item.creator.email}
                  </Text>
                </View>
              </View>
              <PictureCard thumbnail={item.thumbnail} />
            </View>
          </View>
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        contentContainerStyle={{ paddingTop: 60 }} // To add space for the fixed header
      />
    </SafeAreaView>
  );
};

export default Home;

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
    left: 120,
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
});

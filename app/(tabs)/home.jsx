import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, RefreshControl } from "react-native";
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
  const { data: latestPosts } = useAppwrite(getLatestPosts);
  const { user, setUser, setIsLoggedIn } = useGlobalContext();

  const [refreshing, setRefreshing] = useState(false);
  const { isLoading, isLoggedIn } = useGlobalContext();

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
    <SafeAreaView>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.$id}
        // renderItem={({ item }) => (
        //   <VideoCard
        //     title={item.title}
        //     thumbnail={item.thumbnail}
        //     video={item.video}
        //     creator={item.creator.username}
        //     avatar={item.creator.avatar}
        //   />
        // )}
        ListHeaderComponent={() => (
          <View>
            <View>
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
              <View
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <View style={styles.mainContain}>
                  <View style={styles.containetImageProfile}>
                    <Image
                      source={require("../../assets/images/profile.png")}
                      resizeMode="contain"
                      style={styles.imageProfile}
                    />
                    <View style={{ marginLeft: 8 }}>
                      <Text style={styles.textProfileName}>John Doe</Text>
                      <Text style={styles.textProfileEmail}>qwwer@example.com</Text>
                    </View>
                  </View>
                  <PictureCard />
                </View>
              </View>
            </View>

            {/* <SearchInput /> */}
          </View>
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
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
    height: 44,
    width: "100%",
    borderBottomColor: "#BDBDBD",
    borderBottomWidth: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    flexDirection: "row",
  },
  mainContain: {
    display: "flex",
    flexDirection: "column",
    paddingLeft: 16,
    paddingRight: 16,
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

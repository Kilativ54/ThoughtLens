import React from "react";

import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  RefreshControl,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { signOut } from "../../lib/appwrite";

import { useGlobalContext } from "../../contex/GlobalProvider";

import useAppwrite from "../../lib/useAppwrite";
import { getAllPosts } from "../../lib/appwrite";
import { useState } from "react";
import { router } from "expo-router";
import { PictureCard } from "../../components/PictureCard";

const Profile = () => {
  const { data: posts, refetch } = useAppwrite(getAllPosts);
  const { user, setUser, setIsLoggedIn } = useGlobalContext();
  const [refreshing, setRefreshing] = useState(false);

  const logout = async () => {
    try {
      await signOut();
      setUser(null);
      setIsLoggedIn(false);
      router.replace("/");
    } catch (error) {
      Alert.alert("Error", "Failed to log out. Please try again.");
    }
  };

  const onRefresh = async () => {
    setRefreshing(true);
    try {
      await refetch();
    } catch (error) {
      Alert.alert("Error", "Failed to refresh posts.");
    } finally {
      setRefreshing(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        
        <View style={styles.mainContain}>
          <Image
            resizeMode="cover"
            source={require("../../assets/images/Photo BG.jpg")}
            style={styles.imageBackgr}
          />
          {/* Profile Section */}
          <View style={styles.styleContainerLogin}>
            <View style={styles.containerAvatar}>
              <Image
                style={styles.avatar}
                resizeMode="contain"
                source={require("../../assets/images/avatar.jpg")}
                width={120}
                height={120}
              />
              <Image
                style={styles.addIcon}
                resizeMode="contain"
                source={require("../../assets/icons/add.png")}
                width={25}
                height={25}
              />
              <TouchableOpacity onPress={logout}>
                <Image
                  source={require("../../assets/icons/log-out.png")}
                  resizeMode="contain"
                  style={styles.logoOut}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.name}>{user?.name || "John Doe"}</Text>

            <FlatList
              data={posts}
              keyExtractor={(item) => item.$id}
              renderItem={({ item }) => (
                <View style={styles.postContainer}>
                  <PictureCard thumbnail={item.thumbnail} />
                </View>
              )}
              style={styles.postList}
              ListEmptyComponent={
                <Text style={styles.emptyMessage}>No posts available</Text>
              }
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContainer: {
    flexGrow: 1,
  },
  mainContain: {
    width: "100%",
    minHeight: 1000,
    position: "relative",
  },
  imageBackgr: {
    width: "100%",
    minHeight: 250,
    position: "absolute",
  },
  styleContainerLogin: {
    width: "100%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: 200,
    padding: 20,
    flex: 1,
  },
  containerAvatar: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: -60,
  },
  avatar: {
    borderRadius: 16,
    position: "relative",
  },
  addIcon: {
    position: "absolute",
    top: 81,
    left: 107,
  },
  name: {
    fontFamily: "Roboto-Medium",
    color: "#212121",
    fontSize: 30,
    fontWeight: "500",
    textAlign: "center",
    marginTop: 8,
    marginBottom: 33,
  },
  postContainer: {
    alignItems: "center",
    marginVertical: 10,
  },
  postList: {
    marginTop: 10,
  },
  emptyMessage: {
    textAlign: "center",
    fontSize: 16,
    color: "#888",
    marginTop: 20,
  },
  logoOut: {
    width: 24,
    height: 24,
    left: 220,
    top: -35,
  },
});

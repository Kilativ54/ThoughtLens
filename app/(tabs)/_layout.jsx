import { StyleSheet, Text, View, Image } from "react-native";
import { Tabs, Redirect } from "expo-router";

const TabIcon = ({ icon, focused, color, backgroundColor, width, height }) => {
  return (
    <View style={focused ? styles.tabBoxFocused : styles.tabBox}>
      <Image style={{ width: width, height: height }} source={icon} />
    </View>
  );
};
const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#FFA001",
          tabBarInactiveTintColor: "#CDCDE0",
          tabBarStyle: {
            backgroundColor: "#FFFFFF",
            borderTopColor: "#F6F6F6",
            borderTopWidth: 1,
            height: 83,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "",
            headerShown: false,
            tabBarIcon: ({ focused, width, height }) => (
              <TabIcon
                focused={focused}
                width={focused ? 24 : 40}
                height={focused ? 24 : 40}
                icon={
                  focused
                    ? require("../../assets/icons/homeFocused.png")
                    : require("../../assets/icons/homeNotFocused.png")
                }
              />
            ),
          }}
        />
        <Tabs.Screen
          name="create"
          options={{
            title: "",
            headerShown: false,
            tabBarIcon: ({ focused, width, height }) => (
              <TabIcon
                focused={focused}
                width={20}
                height={20}
                icon={
                  focused
                    ? require("../../assets/icons/UnionFocused.png")
                    : require("../../assets/icons/Union.png")
                }
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "",
            headerShown: false,
            tabBarIcon: ({ focused, width, height }) => (
              <TabIcon
                focused={focused}
                width={24}
                height={24}
                icon={
                  focused
                    ? require("../../assets/icons/userFocused.png")
                    : require("../../assets/icons/user.png")
                }
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;

const styles = StyleSheet.create({
  tabBox: {
    width: 70,
    height: 40,
    borderRadius: 20,
    // backgroundColor: "#FF6C00",
    justifyContent: "center",
    alignItems: "center",
  },
  tabBoxFocused: {
    width: 70,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#FF6C00",
    justifyContent: "center",
    alignItems: "center",
  },
});

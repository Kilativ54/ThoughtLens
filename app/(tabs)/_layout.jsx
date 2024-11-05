import { StyleSheet, Text, View, Image } from "react-native";
import { Tabs, Redirect } from "expo-router";

const TabIcon = ({ icon, focused, color, backgroundColor, width, height }) => {
  return (
    <View style={styles.tabBox}>
      <Image
        width={width}
        height={height}
        source={icon}
        style={{ width: 40, height: 40 }}
      />
    </View>
  );
};
const TabsLayout = () => {
  return (
    <>
      <Tabs>
        <Tabs.Screen
          name="home"
          options={{
            title: "",
            headerShown: false,
            tabBarIcon: () => (
              <TabIcon icon={require("../../assets/icons/homeNotFocused.png")} />
            ),
          }}
        />
        <Tabs.Screen
          name="create"
          options={{
            title: "",
            headerShown: false,
            tabBarIcon: () => (
              <TabIcon width={13} height={13} icon={require("../../assets/icons/Union.png")} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "",
            headerShown: false,
            tabBarIcon: () => (
              <TabIcon width={20} height={20} icon={require("../../assets/icons/profile.png")} />
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
    backgroundColor: "#FF6C00",
    justifyContent: "center",
    alignItems: "center",
  },
});

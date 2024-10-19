import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        {/* Background */}
        <View style={styles.v3_26}>
          <Image source={require("../assets/images/v9_0.png")} style={styles.v9_0} />
          {/* White section */}
          <View style={styles.v9_1}></View>

          {/* Header */}
          <View style={styles.v3_27}>
           
            <View style={styles.v3_29}></View>
          </View>

          {/* Registration Title */}
          <View style={styles.v3_49}>
            <Text style={styles.v3_51}>Реєстрація</Text>
          </View>

          {/* Login Input */}
          <View style={styles.v3_56}>
            <View style={styles.v3_57}></View>
            <Text style={styles.v3_58}>Логін</Text>
          </View>

          {/* Email Input */}
          <View style={styles.v3_60}>
            <View style={styles.v3_61}></View>
            <Text style={styles.v3_62}>Адреса електронної пошти</Text>
          </View>

          {/* Password Input */}
          <View style={styles.v3_64}>
            <View style={styles.v3_65}></View>
            <Text style={styles.v3_66}>Пароль</Text>
            <Text style={styles.v3_67}>Показати</Text>
          </View>

          {/* Register Button */}
          <TouchableOpacity style={styles.v3_201}>
            <Text style={styles.v3_202}>Зареєстуватися</Text>
          </TouchableOpacity>

          {/* Already have an account */}
          <Text style={styles.v3_203}>Вже є акаунт? Увійти</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  v3_26: {
    width: 375,
    height: 812,
    backgroundColor: "rgba(255,255,255,1)",
    position: "relative",
  },
  v9_0: {
    width: 375,
    height: 812,
    position: "absolute",
    top: 0,
    left: 0,
    resizeMode: "cover",
  },
  v9_1: {
    width: 375,
    height: 549,
    backgroundColor: "rgba(255,255,255,1)",
    position: "absolute",
    top: 263,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  v3_27: {
    width: 375,
    height: 44,
    backgroundColor: "rgba(255,255,255,1)",
    position: "relative",
  },
  v3_28: {
    width: 375,
    height: 46,
    position: "absolute",
    top: 2,
    left: 0,
    resizeMode: "cover",
  },
  v3_29: {
    width: 375,
    height: 44,
    backgroundColor: "rgba(0,0,0,1)",
  },
  v3_49: {
    position: "absolute",
    top: 355,
    left: 16,
  },
  v3_51: {
    color: "rgba(33,33,33,1)",
    fontSize: 30,
    fontWeight: "500",
    textAlign: "center",
  },
  v3_56: {
    position: "absolute",
    top: 423,
    left: 16,
    width: 343,
    height: 50,
  },
  v3_57: {
    width: 343,
    height: 50,
    backgroundColor: "rgba(246,246,246,1)",
    borderWidth: 1,
    borderColor: "rgba(231,231,231,1)",
  },
  v3_58: {
    position: "absolute",
    top: 16,
    left: 16,
    color: "rgba(189,189,189,1)",
    fontSize: 16,
  },
  v3_60: {
    position: "absolute",
    top: 489,
    left: 16,
    width: 343,
    height: 50,
  },
  v3_61: {
    width: 343,
    height: 50,
    backgroundColor: "rgba(246,246,246,1)",
    borderWidth: 1,
    borderColor: "rgba(231,231,231,1)",
  },
  v3_62: {
    position: "absolute",
    top: 16,
    left: 16,
    color: "rgba(189,189,189,1)",
    fontSize: 16,
  },
  v3_64: {
    position: "absolute",
    top: 555,
    left: 16,
    width: 343,
    height: 50,
  },
  v3_65: {
    width: 343,
    height: 50,
    backgroundColor: "rgba(246,246,246,1)",
    borderWidth: 1,
    borderColor: "rgba(231,231,231,1)",
  },
  v3_66: {
    position: "absolute",
    top: 16,
    left: 16,
    color: "rgba(189,189,189,1)",
    fontSize: 16,
  },
  v3_67: {
    position: "absolute",
    top: 16,
    left: 255,
    color: "rgba(27,67,113,1)",
    fontSize: 16,
  },
  v3_201: {
    width: 343,
    height: 51,
    backgroundColor: "rgba(255,108,0,1)",
    borderRadius: 100,
    position: "absolute",
    top: 648,
    left: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  v3_202: {
    color: "rgba(255,255,255,1)",
    fontSize: 16,
  },
  v3_203: {
    position: "absolute",
    top: 715,
    left: 108,
    color: "rgba(27,67,113,1)",
    fontSize: 16,
  },
});

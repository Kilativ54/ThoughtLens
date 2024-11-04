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
import CustomButton from "../components/CustomButton";
import { Link } from "expo-router";
import FormField from "../components/FormField";

export default function App() {
  return (
    <SafeAreaView contentContainerStyle={{ height: "100%" }}>
      <ScrollView>
        {/* Background */}
        <View style={styles.mainContain}>
          <Image
            source={require("../assets/images/Photo BG.jpg")}
            style={styles.imageBackgr}
            resizeMode={"cover"}
          />
          {/* White section */}
          {/* <CustomButton title={"Registration"} /> */}
          <View style={styles.styleContainerLogin}>
            {/* Password Input */}
            {/* <View style={styles.v3_64}>
            <View style={styles.v3_65}></View>
            <Text style={styles.v3_66}>Пароль</Text>
            <Text style={styles.v3_67}>Показати</Text>
          </View> */}
            <Text style={styles.textSign}>Sign in</Text>
            <FormField
              otherStyles={{ marginBottom: 16 }}
              marginBottom={16}
              placeholder={"Email"}
            />
            <FormField marginBottom={43} placeholder={"Password"} />
            <CustomButton title={"Sign In"} />
            <View style={styles.linkSignUp}>
              <Text style={styles.textUnderButtom}>Don't have an account?</Text>
              <Link style={styles.textUnderButtom} href="/sign-up">
                Sign Up
              </Link>
            </View>
          </View>

          {/* Header */}
          {/* <View style={styles.v3_27}>
            <View style={styles.v3_29}></View>
          </View> */}

          {/* Registration Title */}
          {/* <View style={styles.v3_49}>
            <Text style={styles.v3_51}>Registration</Text>
          </View> */}

          {/* Login Input */}
          {/* <View style={styles.v3_56}>
            <View style={styles.v3_57}></View>
            <Text style={styles.v3_58}>Логін</Text>
          </View> */}

          {/* Email Input */}
          {/* <View style={styles.v3_60}>
            <View style={styles.v3_61}></View>
            <Text style={styles.v3_62}>Адреса електронної пошти</Text>
          </View> */}

          {/* Password Input */}
          {/* <View style={styles.v3_64}>
            <View style={styles.v3_65}></View>
            <Text style={styles.v3_66}>Пароль</Text>
            <Text style={styles.v3_67}>Показати</Text>
          </View> */}

          {/* Register Button */}
          {/* <TouchableOpacity style={styles.v3_201}>
            <Text style={styles.v3_202}>Зареєстуватися</Text>
          </TouchableOpacity> */}

          {/* Already have an account */}
          {/* <Text style={styles.v3_203}>Вже є акаунт? Увійти</Text> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContain: {
    width: "100%",
    minHeight: 1000,
    // backgroundColor: "rgba(255,255,255,1)",
    position: "relative",
  },
  imageBackgr: {
    width: "100%",
    minHeight: 549,
    position: "absolute",
    // resizeMode: "cover",
  },
  styleContainerLogin: {
    width: "100%",
    height: 680,
    backgroundColor: "rgba(255,255,255,1)",
    position: "relative",
    marginTop: "auto",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  linkSignUp: {
    display: "flex",
    flexDirection: "row",
    gap: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  marginButtonPasword: {
    marginBottom: 43,
  },
  textSign: {
    fontFamily: "Roboto-Medium",
    marginTop: 32,
    color: "212121",
    fontSize: 30,
    fontWeight: "500",
    textAlign: "center",
    marginBottom: 33,
  },
  textUnderButtom: {
    fontFamily: "Roboto-Regular",
    color: "rgba(27,67,113,1)",
    fontSize: 16,
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
    width: 343,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
    // position: "absolute",
    // top: 555,
    // left: 16,
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
    // position: "absolute",
    // top: 16,
    // left: 16,
    color: "rgba(189,189,189,1)",
    fontSize: 16,
  },
  v3_67: {
    // position: "absolute",
    // top: 16,
    // left: 255,
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
});

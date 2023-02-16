import React from "react";
import {
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import ListItem from "../../components/ListItem";
import SearchBar from "../../components/SearchBar";

const HomeScreens = ({ navigation }: any) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={require("../../../assets/background.jpg")}
        resizeMode="cover"
        style={styles.ImageBackground}
      >
        <View style={styles.MenuTouchableContainer}>
          <TouchableOpacity
            style={styles.MenuTouchable}
            onPress={() => navigation.openDrawer()}
          >
            <Image
              source={require("../../../assets/menu.png")}
              style={styles.Image}
            />
          </TouchableOpacity>
          <SearchBar onTextChange={() => {}} />
        </View>
        <View style={styles.ListItemContainer}>
          <TouchableOpacity
            style={styles.Touchable}
            onPress={() => navigation.navigate("Tabs")}
          >
            <ListItem>AI 1705</ListItem>
          </TouchableOpacity>
          <ListItem>SE 1740</ListItem>
          <ListItem>IT 1650</ListItem>
          <ListItem>IA 1578</ListItem>
          <ListItem>AI 1706</ListItem>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default HomeScreens;
const styles = StyleSheet.create({
  ListItemContainer: { alignItems: "center" },
  Image: { width: 40, height: 40 },
  MenuTouchable: { padding: 20 },
  MenuTouchableContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  ImageBackground: { flex: 1 },
  Touchable: { width: "100%", alignItems: "center" },
});
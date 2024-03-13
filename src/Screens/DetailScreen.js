import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Linking,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function DetailScreen({ route }) {
  const { newsItem, category } = route.params;
  const navigation = useNavigation();

  const formatContent = (content) => {
    return content.replace(/\[.*\]/, "");
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getDate()} ${
      monthNames[date.getMonth()]
    } ${date.getFullYear()}`;
  };

  const handleReadMore = () => {
    Linking.openURL(newsItem.url);
  };
  const handleBackButton = () => {
    navigation.navigate("Home");
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: newsItem.urlToImage }}
            style={styles.image}
            resizeMode="cover"
          />
          <Pressable onPress={handleBackButton} style={styles.backButton}>
            <Ionicons
              name="chevron-back-circle-outline"
              style={styles.backIcon}
              size={36}
              color="black"
            />
          </Pressable>
          <View style={styles.overlay}>
            <View style={styles.categoryChip}>
              <Text style={styles.categoryText}>{category}</Text>
            </View>
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{newsItem.title}</Text>
          </View>
        </View>
        <View style={styles.newsContent}>
          <View style={styles.heading}>
            <View style={styles.metaInfo}>
              <Text style={styles.sourceName}>{newsItem.source.name}</Text>
              <Text style={styles.divider}>|</Text>
              <Text style={styles.authorName}>{newsItem.author}</Text>
              <Text style={styles.divider}>|</Text>
              <Text style={styles.date}>
                {formatDate(newsItem.publishedAt)}
              </Text>
            </View>
          </View>
          <Text style={styles.article}>{formatContent(newsItem.content)}</Text>
          <TouchableOpacity
            onPress={handleReadMore}
            style={styles.readMoreButton}
          >
            <Text style={styles.readMore}>Read More</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const windowWidth = Dimensions.get("window").width;
const statusBarHeight = StatusBar.currentHeight || 0;

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: "black",
  },
  container: {
    backgroundColor: "black",

    paddingTop: statusBarHeight,
  },
  imageContainer: {
    position: "relative",
  },
  readMoreButton: {
    alignSelf: "flex-end",
    marginTop: 20,
    marginRight: 20,
  },
  readMore: {
    color: "#fff",
    textDecorationLine: "underline",
  },
  image: {
    width: windowWidth,
    height: 400,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  backButton: {
    position: "absolute",
    top: 20,
    left: 20,
    zIndex: 1,
  },
  backIcon: {
    opacity: 0.6,
  },
  overlay: {
    position: "absolute",
    // bottom: 180,
    top: 20,
    right: 20,
    // left: 20,
  },
  metaInfo: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 10,
  },
  sourceName: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#666",
    marginRight: 5,
  },
  authorName: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#666",
    marginRight: 5,
  },
  date: {
    fontSize: 14,
    color: "#666",
  },
  divider: {
    fontSize: 14,
    color: "#666",
    marginHorizontal: 5,
  },
  categoryChip: {
    backgroundColor: "purple",
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 3,
  },
  categoryText: {
    color: "#ffffff",
    fontWeight: "bold",
  },
  titleContainer: {
    position: "absolute",
    bottom: 60,
    left: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
    color: "white",
    maxWidth: windowWidth - 40,
  },
  newsContent: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 60,
    backgroundColor: "black",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20,
  },
  heading: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingHorizontal: 20,
  },
  headingText: {
    flexDirection: "row",
    alignItems: "center",
  },
  article: {
    fontSize: 20,
    lineHeight: 28,
    color: "#fff",
    marginTop: 20,
    paddingHorizontal: 20,
  },
});

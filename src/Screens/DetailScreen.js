import React from "react";
import { View, Text, Image, StyleSheet, Dimensions, StatusBar, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default function DetailScreen() {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: "https://tse3.mm.bing.net/th?id=OIP.aJVjKHTvalzTDznRcxCZ9gHaEK&pid=Api&P=0&h=180" }}
            style={styles.image}
            resizeMode="cover"
          />
          <TouchableOpacity style={styles.backButton}>
            <Ionicons name="chevron-back-circle-outline" style={styles.backIcon} size={32} color="white" />
          </TouchableOpacity>
          <View style={styles.overlay}>
            <View style={styles.categoryChip}>
              <Text style={styles.categoryText}>Political</Text>
            </View>
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>
              Opinion | 'Beyond Votes - A Slice of Hope Amidst Gloom': Rajmohan Gandhi Writes
            </Text>
          </View>
        </View>
        <View style={styles.newsContent}>
          <View style={styles.heading}>
            <View style={styles.headingText}>
              <Text style={styles.sourceName}>XDA Developers</Text>
              <Text style={styles.date}>21 Feb</Text>
            </View>
            <Text style={styles.authorName}>- By Mahmoud Itani</Text>
          </View>
          <Text style={styles.article}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget felis sit amet est viverra malesuada. Nulla facilisi. Proin ut libero at velit efficitur feugiat. Sed sodales risus et nunc sollicitudin vehicula. Integer at mi eu augue condimentum suscipit eu ac ante. Fusce ullamcorper enim et ex blandit, vel gravida velit dapibus. Nulla venenatis mi eu sapien rutrum convallis. Quisque ultricies quam sit amet lacus posuere, ac tincidunt mauris malesuada. Vivamus eu felis accumsan, sollicitudin enim non, finibus orci. Vivamus sed tellus sed libero dignissim scelerisque. Maecenas eu faucibus nisi. Nam a metus id velit tincidunt fermentum a eget nulla. Nulla facilisi. Donec vitae risus a arcu tincidunt vestibulum id sit amet sem. Integer tempus mattis lorem nec tincidunt.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const windowWidth = Dimensions.get('window').width;
const statusBarHeight = StatusBar.currentHeight || 0;

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  container: {
    paddingTop: statusBarHeight,
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: windowWidth,
    height: 300,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
  },
  backIcon: {
    opacity: 0.6,
  },
  overlay: {
    position: 'absolute',
    bottom: 120,
    left: 20,
  },
  categoryChip: {
    backgroundColor: "purple",
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  categoryText: {
    color: "#ffffff",
    fontWeight: 'bold',
  },
  titleContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "900",
    color: 'white',
    maxWidth: windowWidth - 40,
  },
  newsContent: {
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: '#f5f5f5',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20,
  },
  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingHorizontal: 20,
  },
  headingText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sourceName: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 5,
  },
  date: {
    fontSize: 14,
    color: '#666',
  },
  authorName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  article: {
    fontSize: 16,
    lineHeight: 24,
    color: "#333333",
    marginTop: 20,
    paddingHorizontal: 20,
  },
});

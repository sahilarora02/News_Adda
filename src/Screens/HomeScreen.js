import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  FlatList,
  Pressable,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import ad from "../../assets/ad.png";
import { Chip, Card, Title, Paragraph } from "react-native-paper";

const categories = [
  "general",
  "technology",
  "science",
  "sports",
  "health",
  "business",
  "entertainment",
];

export default function HomeScreen() {
  const [selectedCategory, setSelectedCategory] = useState("general");

  const handleCategoryPress = (category) => {
    setSelectedCategory(category);
    // Fetch and display news related to the selected category
  };

  const renderCategoryChip = ({ item }) => (
    <Chip
      style={selectedCategory === item ? styles.selectedChip : styles.chip}
      onPress={() => handleCategoryPress(item)}
    >
      {item}
    </Chip>
  );

  const renderNewsCard = ({ item }) => (
    <Pressable>
      <View style={styles.newsCard}>
        <Image source={{ uri: item.urlToImage }} style={styles.cardImage} />
        <View style={styles.cardContent}>
          {/* <Text>{item.title}</Text> */}
          <Text>{item.title}</Text>
        </View>
      </View>
    </Pressable>
  );

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = () => {
      setIsLoading(true);
      fetch(
        `https://saurav.tech/NewsAPI/top-headlines/category/${selectedCategory}/in.json`
      )
        .then((resp) => resp.json())
        .then((resp) => {
          const articles = resp.articles;
          let k = 1;
          articles.map((d) => {
            d.key = k++;
          });
          setData(articles);
          setIsLoading(false);
        });
    };

    fetchData();
  }, [selectedCategory]);

  return (
    <View style={styles.HomeScreen}>
      <Text style={styles.text}>News Adda</Text>
      <Image style={styles.img} source={ad} />

      {/* chips  */}
      <View style={{ marginTop: 15 }}>
        <FlatList
          data={categories}
          keyExtractor={(item) => item}
          renderItem={renderCategoryChip}
          horizontal
        />
      </View>

      {/* news card */}
      {isLoading ? (
        <ActivityIndicator style={styles.loader} size="large" color="#00ff00" />
      ) : (
        <View style={{ marginTop: 20, flex: 1 }}>
          <FlatList
            data={data}
            keyExtractor={(item) => item.key}
            renderItem={renderNewsCard}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  HomeScreen: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#388D00",
    marginTop: 20,
  },
  img: {
    width: "100%",
    height: "20%",
    marginTop: 16,
    borderRadius: 20,
  },
  chip: {
    margin: 4,
    height: 35,
  },
  selectedChip: {
    margin: 4,
    backgroundColor: "#388D00",
    height: 35,
  },
  newsCard: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    marginBottom: 10,
    borderColor: "black",
    padding: 7,
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 4,
    height: "25vh",
  },
  cardImage: {
    // height: 100,
    width: "35%",
    borderRadius: 10,
    objectFit: "contain",
  },
  cardContent: {
    padding: 8,
    // marginLeft: 20,
    width: "65%",
  },
  loader: {
    top: "1%",
  },
});

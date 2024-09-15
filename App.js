import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  Button,
  TouchableHighlight,
  Pressable,
  View,
  ScrollView
} from "react-native";

import { getLatestGames } from "./lib/metacritic";

import Constants from "expo-constants"


const icon = require("./assets/icon.png");


export default function App() {

  const [games, setGames] = useState([]);

  useEffect(() => {
    getLatestGames().then((games) => {
      setGames(games);
    });
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <SafeAreaView>
        {/* <Image
        source={{
          uri: "https://www.metacritic.com/a/img/catalog/provider/6/3/6-1-4763-13.jpg",
        }}
        style={{ width: 215, height: 294 }}
      ></Image> */}
        <Text style={{ color: "white" }}>
          Open up App.js to start working on your app!
        </Text>

        <ScrollView>
          {
            games?.map(game => (
              <View key={game.slug} style={styles.card}>
                <Image source={{ uri: game.image }} style={styles.image}></Image>
                <Text style={styles.title}>{game.title}</Text>
                <Text style={styles.score}>{game.score}</Text>
                <Text style={styles.description}>{game.description}</Text>
              </View>
            )
            )
          }

        </ScrollView>

        {/* Botón normal */}
        {/* <Button title='Push me' onPress={() => alert("what's up")}></Button> */}

        {/* Botón más estilizable */}
        {/* <TouchableHighlight
        underlayColor={"#09f"}
        style={{
          width: 200,
          height: 200,
          backgroundColor: "red",
          borderRadius: 100,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => alert("what's up")}
      >
        <Text style={{ color: "white" }}>Push me</Text>
      </TouchableHighlight> */}

        {/* Componente más estilizable para el botón */}
        {/* <Pressable
        onPress={null}
        style={({ pressed }) => [
          { backgroundColor: pressed ? "rgb(210,230,255)" : "white" },
          styles.wrapperCustom,
        ]}
      >
        {({ pressed }) => (
          <Text style={{ fontSize: pressed ? 32 : 16 }}>
            {pressed ? "Pressed!" : "Push me"}
          </Text>
        )}
      </Pressable> */}
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    padding: 12
  },
  card: {
    marginBottom: 10
  },
  image: { width: 107, height: 147, borderRadius: 10 },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff'
  },
  description: {
    fontSize: 16,
    color: '#eee'
  },
  score: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green',
    marginTop: 10
  },
});

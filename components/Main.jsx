import { useEffect, useState } from "react";
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View
} from "react-native";

import { useSafeAreaInsets } from "react-native-safe-area-context";
import { getLatestGames } from "../lib/metacritic";
export function Main() {

    const [games, setGames] = useState([]);

    const insets = useSafeAreaInsets()

    useEffect(() => {
        getLatestGames().then((games) => {
            setGames(games);
        });
    }, []);

    return (
        <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
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
        </View>
    );
}

const styles = StyleSheet.create({
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

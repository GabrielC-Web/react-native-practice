import { useEffect, useState } from "react";
import {
    ActivityIndicator,
    ScrollView,
    View
} from "react-native";

import { useSafeAreaInsets } from "react-native-safe-area-context";
import { getLatestGames } from "../lib/metacritic";
import { GameCard } from "./GameCard";
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
            {games.length === 0 ? (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator color={'#fff'} size={"large"}></ActivityIndicator>
                </View>
            ) :
                <ScrollView>
                    {
                        games?.map(game => (
                            <GameCard key={game.slug} game={game}></GameCard>
                        )
                        )
                    }
                </ScrollView>
            }
        </View>
    );
}

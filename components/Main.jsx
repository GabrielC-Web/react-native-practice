import { useEffect, useState } from "react";
import {
    ActivityIndicator,
    FlatList,
    View
} from "react-native";

import { useSafeAreaInsets } from "react-native-safe-area-context";
import { getLatestGames } from "../lib/metacritic";
import { AnimatedGameCard } from "./GameCard";
import { Logo } from "./Logo";
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
            <View style={{ marginVertical: 10 }}>
                <Logo></Logo>
            </View>
            {games.length === 0 ? (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator color={'#fff'} size={"large"}></ActivityIndicator>
                </View>
            ) :
                <FlatList data={games} keyExtractor={game => game.slug} renderItem={({ item, index }) => <AnimatedGameCard key={item.slug} game={item} index={index}></AnimatedGameCard>}>
                </FlatList>
            }
        </View>
    );
}

<<<<<<< HEAD
import { View, Text, Platform, TouchableOpacity, ScrollView, RefreshControl } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Bars3BottomLeftIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import { styles } from "../theme";
import TrendingMovies from "../components/trendingMovies";
import { useEffect, useState, useCallback } from "react";
import MovieList from "../components/movieList";
import { useNavigation } from "@react-navigation/native";
import Loading from "../components/loading";
import { fetchTopRatedMovies, fetchTrendingMovies, fetchUpcomingMovies } from "./api/moviedb";
import NetInfo from "@react-native-community/netinfo";
import { StatusBar } from 'expo-status-bar';

const ios = Platform.OS === "ios";

export default function HomeScreen() {
    const [upcoming, setUpcoming] = useState([]);
    const [topRated, setTopRated] = useState([]);
    const [trending, setTrending] = useState([]);
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);
    const [isConnected, setIsConnected] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');
    const navigation = useNavigation();

    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener((state) => {
            setIsConnected(state.isConnected);
        });

        return () => unsubscribe();
    }, []);

    useEffect(() => {
        if (isConnected) {
            fetchAllMovies();
        }
    }, [isConnected]);

    const fetchAllMovies = async () => {
        setRefreshing(true);
        setLoading(true);
        setErrorMessage(''); // reset error message
        await Promise.all([
            getTrendingMovies(),
            getUpcomingMovies(),
            getTopRatedMovies()
        ]);
        setLoading(false);
        setRefreshing(false);
    };

    const onRefresh = useCallback(async () => {
        setRefreshing(true);
        await fetchAllMovies();
        setRefreshing(false);
    }, []);

    const getTrendingMovies = async () => {
        const data = await fetchTrendingMovies();
        if (data?.error) {
            setErrorMessage(data.message);
            return;
        }
        if (data?.results) setTrending(data.results);
    };

    const getUpcomingMovies = async () => {
        const data = await fetchUpcomingMovies();
        if (data?.error) {
            setErrorMessage(data.message);
            return;
        }
        if (data?.results) setUpcoming(data.results);
    };

    const getTopRatedMovies = async () => {
        const data = await fetchTopRatedMovies();
        if (data?.error) {
            setErrorMessage(data.message);
            return;
        }
        if (data?.results) setTopRated(data.results);
    };

    return (
        <View className="flex-1 bg-neutral-800">
            {/* Header */}
            <SafeAreaView className={ios ? "-mb-2" : "mb-3"}>
                <StatusBar style="light" />
                <View className="flex-row justify-between items-center mx-4">
                    <Bars3BottomLeftIcon size={30} strokeWidth={2} color="white" />
                    <Text className="text-white text-3xl font-bold">
                        <Text style={styles.text}>Movie</Text>Verse
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Search")}>
                        <MagnifyingGlassIcon size={30} strokeWidth={2} color={"white"} />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>

            {/* Error Message */}
            {errorMessage ? (
                <View>
                    <Text className="text-red-500 text-center mt-2 mb-1 px-2">
                        {errorMessage}
                    </Text>
                </View>
            ) : null}

            {/* Content */}
            {loading ? (
                <Loading />
            ) : (
                <ScrollView
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                            colors={["red"]}
                            tintColor="red"
                        />
                    }
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 10 }}
                >
                    {trending.length > 0 && <TrendingMovies data={trending} />}
                    <MovieList
                        title="Upcoming"
                        data={upcoming.slice(0, 5)}
                        onSeeAll={() =>
                            navigation.navigate("SeeAll", {
                                title: "Upcoming Movies",
                                data: upcoming,
                            })
                        }
                    />
                    <MovieList
                        title="Top Rated"
                        data={topRated.slice(0, 5)}
                        onSeeAll={() =>
                            navigation.navigate("SeeAll", {
                                title: "Top Rated Movies",
                                data: topRated,
                            })
                        }
                    />
                </ScrollView>
            )}
        </View>
    );
}
=======
import { View, Text, Platform, TouchableOpacity, ScrollView, RefreshControl, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Bars3BottomLeftIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import { styles } from "../theme";
import TrendingMovies from "../components/trendingMovies";
import { useEffect, useState, useCallback } from "react";
import MovieList from "../components/movieList";
import { useNavigation } from "@react-navigation/native";
import Loading from "../components/loading";
import { fetchTopRatedMovies, fetchTrendingMovies, fetchUpcomingMovies } from "./api/moviedb";
import NetInfo from "@react-native-community/netinfo";
import { StatusBar } from 'expo-status-bar';

const ios = Platform.OS === "ios";

export default function HomeScreen() {
    const [upcoming, setUpcoming] = useState([]);
    const [topRated, setTopRated] = useState([]);
    const [trending, setTrending] = useState([]);
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);
    const [isConnected, setIsConnected] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');
    const navigation = useNavigation();

    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener((state) => {
            setIsConnected(state.isConnected);
        });

        return () => unsubscribe();
    }, []);

    useEffect(() => {
        if (isConnected) {
            fetchAllMovies();
        }
    }, [isConnected]);

    const fetchAllMovies = async () => {
        setRefreshing(true);
        setLoading(true);
        setErrorMessage(''); // reset error message
        await Promise.all([
            getTrendingMovies(),
            getUpcomingMovies(),
            getTopRatedMovies()
        ]);
        setLoading(false);
        setRefreshing(false);
    };

    const onRefresh = useCallback(async () => {
        setRefreshing(true);
        await fetchAllMovies();
        setRefreshing(false);
    }, []);

    const getTrendingMovies = async () => {
        const data = await fetchTrendingMovies();
        if (data?.error) {
            setErrorMessage(data.message);
            return;
        }
        if (data?.results) setTrending(data.results);
    };

    const getUpcomingMovies = async () => {
        const data = await fetchUpcomingMovies();
        if (data?.error) {
            setErrorMessage(data.message);
            return;
        }
        if (data?.results) setUpcoming(data.results);
    };

    const getTopRatedMovies = async () => {
        const data = await fetchTopRatedMovies();
        if (data?.error) {
            setErrorMessage(data.message);
            return;
        }
        if (data?.results) setTopRated(data.results);
    };

    // Show fallback screen if not connected
    // if (!isConnected) {
    //     return (
    //         <View style={{ flex: 1, backgroundColor: '#1f2937' }}>
    //             <StatusBar style="light" />
    //             <Image
    //                 source={require('../assets/images/networkError.png')}
    //                 style={{ width: '100%', height: '100%', resizeMode: 'cover' }}
    //             />
    //         </View>
    //     );
    // }

    return (
        <View className="flex-1 bg-neutral-800">
            {/* Header */}
            <SafeAreaView className={ios ? "-mb-2" : "mb-3"}>
                <StatusBar style="light" />
                <View className="flex-row justify-between items-center mx-4">
                    <Bars3BottomLeftIcon size={30} strokeWidth={2} color="white" />
                    <Text className="text-white text-3xl font-bold">
                        <Text style={styles.text}>Movie</Text>Verse
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Search")}>
                        <MagnifyingGlassIcon size={30} strokeWidth={2} color={"white"} />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>

            {/* Error Message */}
            {errorMessage ? (
                <View>
                    <Text className="text-red-500 text-center mt-2 mb-1 px-2">
                        {errorMessage}
                    </Text>
                </View>
            ) : null}

            {/* Content */}
            {loading ? (
                <Loading />
            ) : (
                <ScrollView
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                            colors={["red"]}
                            tintColor="red"
                        />
                    }
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 10 }}
                >
                    {trending.length > 0 && <TrendingMovies data={trending} />}
                    <MovieList
                        title="Upcoming"
                        data={upcoming.slice(0, 5)}
                        onSeeAll={() =>
                            navigation.navigate("SeeAll", {
                                title: "Upcoming Movies",
                                data: upcoming,
                            })
                        }
                    />
                    <MovieList
                        title="Top Rated"
                        data={topRated.slice(0, 5)}
                        onSeeAll={() =>
                            navigation.navigate("SeeAll", {
                                title: "Top Rated Movies",
                                data: topRated,
                            })
                        }
                    />
                </ScrollView>
            )}
        </View>
    );
}
>>>>>>> 7a2e217ea6c9b1a56268cc988023f7d27aba41e2

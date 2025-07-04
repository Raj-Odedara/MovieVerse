import { View, Text, ScrollView, SafeAreaView, TouchableOpacity, Dimensions, Platform, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { styles, theme } from '../theme';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { HeartIcon } from 'react-native-heroicons/solid';
import { LinearGradient } from 'expo-linear-gradient';
import Cast from '../components/cast';
import MovieList from '../components/movieList';
import Loading from '../components/loading';
import { fallbackMoviePoster, fetchMovieCredits, fetchMovieDetails, fetchSimilarMovies, image500 } from './api/moviedb';

var { width, height } = Dimensions.get('window');
const ios = Platform.OS == 'ios';
const topMargin = ios ? '' : 'mt-11';

export default function MovieScreen() {
    let movieName = "Spiderman: Across the spider verse";
    const { params: item } = useRoute();
    const [isFavourite, toggleFavourite] = useState(false);
    const navigation = useNavigation();
    const [cast, setCast] = useState([])
    const [similarMovies, setSimilarMovies] = useState([])
    const [loading, setLoading] = useState(false);
    const [movie, setMovie] = useState({});

    useEffect(() => {
        //call the movie details api
        // console.log('itemid: ',item.id);
        setLoading(true);
        getMovieDetails(item.id);
        getMovieCredits(item.id);
        getSimilarMovies(item.id);
    }, [item]);

    const getMovieDetails = async id => {
        const data = await fetchMovieDetails(id);
        // console.log("Got movie details: ",data);
        if (data) setMovie(data);
        setLoading(false);
    }
    const getMovieCredits = async id => {
        const data = await fetchMovieCredits(id);
        // console.log("Got Credits details: ",data);
        if (data && data.cast) setCast(data.cast);
    }
    const getSimilarMovies = async id => {
        const data = await fetchSimilarMovies(id);
        // console.log("Got Similar details: ",data);
        if (data && data.results) setSimilarMovies(data.results);
    }

    return (
        <ScrollView
            contentContainerStyle={{ paddingBottom: 20 }}
            className="flex-1 bg-neutral-900"
        >
            {/* back button and movie poster */}
            <View className="w-full">
                <SafeAreaView className={"absolute z-20 w-full flex-row justify-between items-center px-1 " + topMargin}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.background} className="rounded-xl p-1">
                        <ChevronLeftIcon size={28} strokeWidth={2.5} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { toggleFavourite(!isFavourite) }}>
                        <HeartIcon size={35} color={isFavourite ? theme.background : "white"} />
                    </TouchableOpacity>
                </SafeAreaView>
                {
                    loading ? (
                        <Loading />
                    ) : (
                        <View>
                            <Image
                                // source={require('../assets/images/moviePoster1.jpg')}
                                source={{ uri: image500(movie?.poster_path) || fallbackMoviePoster }}
                                style={{ width, height: height * 0.55 }}
                            />
                            <LinearGradient
                                colors={['transparent', 'rgba(23,23,23,0.8)', 'rgba(23,23,23,1)']}
                                start={{ x: 0.5, y: 0 }}
                                end={{ x: 0.5, y: 1 }}
                                style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    width: width,
                                    height: height * 0.4,
                                }}
                            />
                        </View>
                    )
                }
            </View>
            {/* movie details */}
            <View style={{ marginTop: -(height * 0.09) }} className="space-y-3">
                {/* title */}
                <Text className="text-white text-center text-3xl font-bold tracking-wider">
                    {
                        movie?.title
                    }
                </Text>
                {/* status, release, runtime */}
                {
                    movie?.id ? (
                        <Text className="text-neutral-400 font-semibold text-base text-center mt-4">
                            {movie?.status} • {movie?.release_date?.split('-')[0]} • {movie?.runtime} min
                        </Text>
                    ) : null
                }


                {/* genres */}
                <View className="flex-row justify-center mx-4 space-x-2 mt-4">
                    {
                        movie?.genres?.map((genre, index) => {
                            let showDot =  index+1 != movie.genres.length;
                            return (
                                <Text key={index} className="text-neutral-400 font-semibold text-base text-center ">
                                    {genre?.name} {showDot? "•":null}
                                </Text>
                            )
                        })
                    }
                </View>


                {/* description */}
                <Text className="text-neutral-400 mx-4 tracking-wide mt-4">
                    {
                        movie?.overview
                    }
                </Text>
            </View>


            {/* cast */}
            {cast.length>0 && <Cast navigation={navigation} cast={cast} />}

            {/* similar movies */}
            {similarMovies.length>0 && <MovieList title="Similar Movies" hideSeeAll={true} data={similarMovies} />}
        </ScrollView>
    )
}
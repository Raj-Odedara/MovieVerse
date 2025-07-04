import { View, Text, TouchableWithoutFeedback, Dimensions, Image } from 'react-native';
import React from 'react';
import Carousel from 'react-native-reanimated-carousel';
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import { image500 } from '../screens/api/moviedb';

var { width, height } = Dimensions.get('window');

export default function TrendingMovies({ data }) {
    const navigation = useNavigation()
    const handleClick =(item)=>{
        navigation.navigate('Movie',item)
    }
    return (
        <View className="mb-8">
            <Text className="text-white text-xl mx-4 mb-5">Trending</Text>
            <Carousel
                data={data}
                renderItem={({ item, animationValue }) => (
                    <MovieCard item={item} animationValue={animationValue} handleClick={handleClick} />
                )}
                firstItem={1}
                loop
                autoPlay={true}
                autoPlayInterval={3000}
                mode="parallax"
                modeConfig={{
                    parallaxScrollingScale: 0.9,
                    parallaxScrollingOffset: -20,
                    parallaxAdjacentItemScale: 0.75,
                }}
                width={width / 2}
                style={{
                    width:width,
                    height:(height * 0.4),
                    justifyContent: "center",
                }}
                />
        </View>
    );
}

const MovieCard = ({ item, animationValue, handleClick }) => {
    // Animated opacity style
    const animatedStyle = useAnimatedStyle(() => {
        const opacity = interpolate(
            animationValue.value, // Carousel's animated value
            [-1, 0, 1],           // Previous, Center, Next
            [0.5, 1, 0.5]         // Fade opacity on sides, full opacity at center
        );
        return { opacity };
    });

    return (
        <TouchableWithoutFeedback onPress={()=>handleClick(item)}>
            <Animated.View style={animatedStyle}>
                <Image
                    // source={require('../assets/images/moviePoster1.jpg')}
                    source={{uri: image500(item.poster_path)}}
                    style={{
                        width: width * 0.6,
                        height: height * 0.4,
                        borderRadius: 24,
                    }}
                    className="rounded-3xl"
                />
            </Animated.View>
        </TouchableWithoutFeedback>
    );
};
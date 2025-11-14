import { View, Text, SafeAreaView, Dimensions, TextInput, TouchableOpacity, ScrollView, TouchableWithoutFeedback, Image, StyleSheet, Platform } from 'react-native'
import { useCallback, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { XMarkIcon } from 'react-native-heroicons/outline';
import debounce from 'lodash.debounce';
import Loading from '../components/loading';
import { fallbackMoviePoster, image185, searchMovies } from './api/moviedb';
import { styles } from '../theme';

var { width, height } = Dimensions.get('window');
const ios = Platform.OS == 'ios';
const topMargin = ios ? '' : 'mt-11';

export default function SearchScreen() {
    const navigation = useNavigation();
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSearch = value => {
        if (value && value.length > 1) {
            setLoading(true);

            // Two parallel API calls
            Promise.all([
                searchMovies({
                    query: value,
                    include_adult: 'false',
                    language: 'en-US',
                    region: 'US',
                    page: '1',
                }),
                searchMovies({
                    query: value,
                    include_adult: 'false',
                    language: 'hi-IN',
                    region: 'IN',
                    page: '1',
                })
            ]).then(([englishData, hindiData]) => {
                setLoading(false);
                const allResults = [...(englishData?.results || []), ...(hindiData?.results || [])];

                // Remove duplicates by movie ID
                const uniqueResults = allResults.reduce((acc, current) => {
                    if (!acc.find(item => item.id === current.id)) {
                        acc.push(current);
                    }
                    return acc;
                }, []);

                setResults(uniqueResults);
            }).catch(err => {
                console.error("Search failed:", err);
                setLoading(false);
                setResults([]);
            });
        } else {
            setLoading(false);
            setResults([]);
        }
    }


    const handleTextDebounce = useCallback(debounce(handleSearch, 400), []);
    return (
        <SafeAreaView className="bg-neutral-800 flex-1 ">
            <View className={"mx-4 mb-3 flex-row justify-between items-center border border-neutral-500 rounded-full " + topMargin}>
                <TextInput
                    onChangeText={handleTextDebounce}
                    placeholder='Search Movie'
                    placeholderTextColor={'lightgray'}
                    className="pb-1 pl-6 flex-1 text-base font-semibold text-white tracking-wider"
                />
                <TouchableOpacity
                    onPress={() => navigation.goBack('Home')}
                    className="rounded-full p-3 m-1 bg-neutral-500"
                >
                    <XMarkIcon size={25} color={'white'} />
                </TouchableOpacity>
            </View>
            {/* results */}
            {
                loading ? (
                    <Loading />
                ) :
                    results.length > 0 ? (
                        <ScrollView
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={{ paddingHorizontal: 15 }}
                            className="space-y-3">
                            <Text className="text-white font-semibold ml-1 mb-4">Results ({results.length})</Text>
                            <View className="flex-row justify-between flex-wrap">
                                {
                                    results.map((item, index) => {
                                        return (
                                            <TouchableWithoutFeedback
                                                key={index}
                                                onPress={() => navigation.push("Movie", item)}
                                            >
                                                <View className="space-y-2 mb-4">
                                                    <Image className="rounded-3xl"
                                                        source={{ uri: image185(item?.poster_path) || fallbackMoviePoster }}
                                                        style={{ width: width * 0.44, height: height * 0.3 }}
                                                    />
                                                    <Text className="text-neutral-300 ml-1">
                                                        {
                                                            item?.title.length > 22 ? item?.title.slice(0, 22) + '...' : item?.title
                                                        }
                                                    </Text>
                                                </View>
                                            </TouchableWithoutFeedback>
                                        )
                                    })
                                }
                            </View>
                        </ScrollView>
                    ) : (
                        <View className="flex-auto items-center justify-center">
                            <Text className="text-white text-4xl font-semibold shadow-md shadow-red-500">
                                <Text className="text-4xl font-extrabold" style={styles.text} >S</Text>earch any movie
                            </Text>
                            <Image source={require('../assets/images/movieTime.png')}
                                className="h-96 w-96"
                            />
                        </View>
                    )
            }
        </SafeAreaView>
    )
}
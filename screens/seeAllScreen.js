import { View, Text, FlatList, TouchableOpacity, Image, Dimensions, SafeAreaView } from 'react-native';
import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { image185, fallbackMoviePoster } from './api/moviedb';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { styles } from '../theme';

const { width } = Dimensions.get('window');

export default function SeeAllScreen() {
  const navigation = useNavigation();
  const { title, data } = useRoute().params;

  return (
    <View className="flex-1 bg-neutral-800 pt-10">
      <SafeAreaView className="ml-4 flex-row items-center px-4 mb-4">
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.background} className="rounded-xl p-1">
            <ChevronLeftIcon size={28} strokeWidth={2.5} color="white" />
        </TouchableOpacity>
        <Text className="text-white text-xl font-bold ml-5">{title}</Text>
      </SafeAreaView>

      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between', paddingHorizontal: 10 }}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
          <TouchableOpacity className="mb-4" onPress={() => navigation.navigate('Movie', item)}>
            <Image
              source={{ uri: image185(item?.poster_path) || fallbackMoviePoster }}
              style={{ width: width * 0.44, height: 300, borderRadius: 16 }}
              className="rounded-xl"
            />
            <Text className="text-neutral-300 mt-2 ml-1">
              {item?.title?.length > 22 ? item.title.slice(0, 22) + '...' : item.title}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

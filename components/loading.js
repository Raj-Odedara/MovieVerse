<<<<<<< HEAD
import { View, Text, Dimensions } from 'react-native'
import * as Progress from 'react-native-progress';
import { theme } from '../theme';

const { width, height } = Dimensions.get('window');
export default function Loading() {
  return (
    <View style={{height,width}} className="absolute flex-row justify-center items-center">
      <Progress.CircleSnail thickness={12} size={160} color={theme.background} />
    </View>
  )
=======
import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import * as Progress from 'react-native-progress';
import { theme } from '../theme';

const { width, height } = Dimensions.get('window');
export default function Loading() {
  return (
    <View style={{height,width}} className="absolute flex-row justify-center items-center">
      <Progress.CircleSnail thickness={12} size={160} color={theme.background} />
    </View>
  )
>>>>>>> 7a2e217ea6c9b1a56268cc988023f7d27aba41e2
}
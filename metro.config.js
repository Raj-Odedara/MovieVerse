<<<<<<< HEAD
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');
 
const config = getDefaultConfig(__dirname)
 
=======
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');
 
const config = getDefaultConfig(__dirname)
 
>>>>>>> 7a2e217ea6c9b1a56268cc988023f7d27aba41e2
module.exports = withNativeWind(config, { input: './global.css' })
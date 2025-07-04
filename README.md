# 🎬 MovieVerse

**MovieVerse** is a cross-platform mobile app (📱 **Android & iOS**) that helps you explore trending movies, view cast information, and discover recommendations – all powered by the **TMDb API**. Built using **React Native** with **Expo**, it's optimized for both platforms with smooth performance and a modern interface.

<p align="center">
  <img src="./assets/Screenshots/AppIcon.png" width="120" alt="App Icon" />
</p>

---

## 📱 Features

- 🔥 **Trending Carousel** – Discover what’s hot in theaters and on streaming.
- 🎭 **Detailed Movie Pages** – Dive into synopses, cast details, and ratings.
- 🎥 **Cast & Crew Profiles** – Learn more about your favorite actors and directors.
- 🤖 **Personalized Suggestions** – Get smart movie recommendations.
- 🔍 **Search Movies** – Just type the name of the movie to get related results.

---

## 🧰 Tech Stack

| Category           | Technologies Used                      |
|-------------------|-----------------------------------------|
| Frontend          | React Native, NativeWind, Expo          |
| Backend/API       | TMDb API (The Movie Database)           |
| State Management  | React Redux                             |
| Styling           | Tailwind CSS (via NativeWind)           |
| Version Control   | Git, GitHub                             |

---

## 🖼️ App Screenshots

### 🏠 Home Screen  
<p align="center">
<img src="./assets/Screenshots/HomeScreen.jpg" width="300" alt="Home Screen" />
</p>

### 🎬 Movie Details  
<p align="center">
<img src="./assets/Screenshots/MovieDetails.jpg" width="300" alt="Movie Details" />
</p>

### 👤 Person Details  
<p align="center">
<img src="./assets/Screenshots/PersonDetails.jpg" width="300" alt="Person Details" />
</p>

### 🔍 Search Movie  
<p align="center">
<img src="./assets/Screenshots/SearchMovie.jpg" width="300" alt="Search Movie" />
</p>

### 📄 Search Results  
<p align="center">
<img src="./assets/Screenshots/SearchResults.jpg" width="300" alt="Search Results" />
</p>

### 🎞️ Similar Movies  
<img src="./assets/Screenshots/SimilarMovies.jpg" width="300" alt="Similar Movies" />


### ⭐ Top Rated Movies  
<p align="center">
<img src="./assets/Screenshots/TopRatedMovies.jpg" width="300" alt="Top Rated Movies" />
</p>

### 📆 Upcoming Movies  
<p align="center">
<img src="./assets/Screenshots/UpcomingMovies.jpg" width="300" alt="Upcoming Movies" />
</p>

### ⚠️ Error Message  
<p align="center">
<img src="./assets/Screenshots/ErrorMessage.jpg" width="300" alt="Error Message" />
</p>

---

## 🚀 Getting Started

### Prerequisites

Before getting started, ensure you have the following installed:

- **Node.js ≥ 16**
- **Expo CLI** (Install globally using `npm install -g expo-cli`)
- A **TMDb API Key** from [themoviedb.org](https://www.themoviedb.org/)

---

## 🔧 Installation

### Create a New Expo App Manually
If you'd prefer to set everything up manually:

1. Create a blank Expo project:
   ```bash
    npx create-expo-app movieverse --template blank
    cd movieverse

2. Install all required dependencies used in this app:
    ```bash
    npm install \
      @react-native-community/netinfo \
      @react-navigation/native \
      @react-navigation/native-stack \
      @react-navigation/drawer \
      @types/react-native-snap-carousel \
      axios \
      expo \
      expo-asset \
      expo-linear-gradient \
      expo-splash-screen \
      expo-status-bar \
      nativewind \
      prop-types \
      react \
      react-addons-shallow-compare \
      react-native \
      react-native-heroicons \
      react-native-progress \
      react-native-reanimated \
      react-native-reanimated-carousel \
      react-native-safe-area-context \
      react-native-screens \
      react-native-snap-carousel \
      tailwindcss

3. Install Expo dev tools (if not already installed globally):
    ```bash
    npm install -g expo-cli

4. Start the project:
   ```bash
     npx expo start

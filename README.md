# 🎬 MovieVerse

**MovieVerse** is a cross-platform mobile app (📱 **Android & iOS**) that helps you explore trending movies, view cast information, and discover recommendations – all powered by the **TMDb API**. Built using **React Native** with **Expo**, it's optimized for both platforms with smooth performance and a modern interface.

<p align="center">
  <img src="./assets/Screenshots/AppIcon.png" width="120" alt="App Icon" />
</p>

## 📥 APK Download
Click the link below to download the latest stable APK build of the app:
[Download the latest APK](https://drive.google.com/file/d/1x3mobsrY9xo6tv_13L_ku1TRDGaVGfq6/view?usp=drive_link)

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
| Styling           | Tailwind CSS (via NativeWind)           |
| Version Control   | Git, GitHub                             |

---

## 🖼️ App Screenshots

### 🏠 Home Screen  
<img src="./assets/Screenshots/HomeScreen.jpg" width="300" alt="Home Screen" />

### 🎬 Movie Details  
<img src="./assets/Screenshots/MovieDetails.jpg" width="300" alt="Movie Details" />

### 👤 Person Details  
<img src="./assets/Screenshots/PersonDetails.jpg" width="300" alt="Person Details" />

### 🔍 Search Movie  
<img src="./assets/Screenshots/SearchMovie.jpg" width="300" alt="Search Movie" />

### 📄 Search Results  
<img src="./assets/Screenshots/SearchResults.jpg" width="300" alt="Search Results" />

### 🎞️ Similar Movies
<img src="./assets/Screenshots/SimilarMovies.jpg" width="300" alt="Similar Movies" />

### ⭐ Top Rated Movies  
<img src="./assets/Screenshots/TopRatedMovies.jpg" width="300" alt="Top Rated Movies" />

### 📆 Upcoming Movies  
<img src="./assets/Screenshots/UpcomingMovies.jpg" width="300" alt="Upcoming Movies" />

### ⚠️ Error Message  
<img src="./assets/Screenshots/ErrorMessage.jpg" width="300" alt="Error Message" />

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

## Method 1: Create a Fresh Expo Project & Pull the Repo Into It
1. Create a blank Expo project:
   ```bash
    npx create-expo-app movieverse --template blank
    cd movieverse

2. Pull MovieVerse files into this project:
    ```bash
    git init
    git remote add origin https://github.com/Raj-Odedara/MovieVerse.git
    git pull origin main
 
  This downloads all the MovieVerse source code into your newly created Expo app folder.

## Method 2: Clone the Repository Directly
  ```bash
    git clone https://github.com/Raj-Odedara/MovieVerse.git
    cd MovieVerse
  ```
    
## 🔑 Add Your TMDb API Key
Inside the project, open:
  ```bash
  constants/index.js
  ```
Add your real API key here:
  ```bash
  export const apiKey = "YOUR_TMDB_API_KEY_HERE";
  ```

### ▶️ Run the Project

Install dependencies:
   ```bash
     npx install
   ```
Start the app:
  ```bash
  npx expo start
  ```
Scan the QR using Expo Go or run on an emulator.

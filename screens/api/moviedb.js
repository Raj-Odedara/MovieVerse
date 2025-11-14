<<<<<<< HEAD
import axios from "axios";
import { apiKey } from "../../constants";

// Base URL and endpoints
const apiBaseUrl = `https://api.themoviedb.org/3`;

const trendingMoviesEndpoint = `${apiBaseUrl}/trending/movie/day?language=en-US&api_key=${apiKey}`;
const upcomingMoviesEndpoint = `${apiBaseUrl}/movie/upcoming?language=en-US&page=1&api_key=${apiKey}`;
const topRatedMoviesEndpoint = `${apiBaseUrl}/movie/top_rated?language=en-US&page=1&api_key=${apiKey}`;
const searchMoviesEndpoint = `${apiBaseUrl}/search/movie?language=en-US&api_key=${apiKey}`;

// Dynamic endpoints
const movieDetailsEndpoint = (id) => `${apiBaseUrl}/movie/${id}?language=en-US&api_key=${apiKey}`;
const movieCreditsEndpoint = (id) => `${apiBaseUrl}/movie/${id}/credits?language=en-US&api_key=${apiKey}`;
const similarMoviesEndpoint = (id) => `${apiBaseUrl}/movie/${id}/similar?language=en-US&api_key=${apiKey}`;

const personDetailsEndpoint = (id) => `${apiBaseUrl}/person/${id}?language=en-US&api_key=${apiKey}`;
const personMoviesEndpoint = (id) => `${apiBaseUrl}/person/${id}/movie_credits?language=en-US&api_key=${apiKey}`;

// Image Helpers
export const image500 = (path) => path ? `https://image.tmdb.org/t/p/w500${path}` : null;
export const image342 = (path) => path ? `https://image.tmdb.org/t/p/w342${path}` : null;
export const image185 = (path) => path ? `https://image.tmdb.org/t/p/w185${path}` : null;

// Fallback Images
export const fallbackMoviePoster = 'https://www.christiancinema.com/images/christiancinema/404_page.svg?imwidth=1200';
export const fallbackPersonImage = 'https://static.vecteezy.com/system/resources/previews/008/506/404/large_2x/contact-person-red-icon-free-png.png';

// Generic API Call Function
const apiCall = async (endpoint, params) => {
    const options = {
        method: 'GET',
        url: endpoint,
        params: params ? params : {},
        timeout: 8000, // 8 seconds timeout
    };

    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        let customMessage = '';
        
        if (error.code === 'ECONNABORTED') {
            customMessage = "⏳ This is taking longer than usual\nPlease try again in a moment!";
        } else if (error.message === 'Network Error') {
            customMessage = "📡 Connection Lost\nTry reconnecting and pull to refresh when you're ready.";
        } else {
            customMessage = "⚠️ Something went wrong\nWe couldn’t fetch the data right now. Please try again later.";
        }

        return { error: true, message: customMessage };
    }
};



// Movie API Functions
export const fetchTrendingMovies = () => apiCall(trendingMoviesEndpoint);
export const fetchUpcomingMovies = () => apiCall(upcomingMoviesEndpoint);
export const fetchTopRatedMovies = () => apiCall(topRatedMoviesEndpoint);
export const fetchMovieDetails = (id) => apiCall(movieDetailsEndpoint(id));
export const fetchMovieCredits = (id) => apiCall(movieCreditsEndpoint(id));
export const fetchSimilarMovies = (id) => apiCall(similarMoviesEndpoint(id));

// Person API Functions
export const fetchPersonDetails = (id) => apiCall(personDetailsEndpoint(id));
export const fetchPersonMovies = (id) => apiCall(personMoviesEndpoint(id));

// Search API
export const searchMovies = (params) => apiCall(searchMoviesEndpoint, params);
=======
import axios from "axios";
import { apiKey } from "../../constants";

// Base URL and endpoints
const apiBaseUrl = `https://api.themoviedb.org/3`;

const trendingMoviesEndpoint = `${apiBaseUrl}/trending/movie/day?language=en-US&api_key=${apiKey}`;
const upcomingMoviesEndpoint = `${apiBaseUrl}/movie/upcoming?language=en-US&page=1&api_key=${apiKey}`;
const topRatedMoviesEndpoint = `${apiBaseUrl}/movie/top_rated?language=en-US&page=1&api_key=${apiKey}`;
const searchMoviesEndpoint = `${apiBaseUrl}/search/movie?language=en-US&api_key=${apiKey}`;

// Dynamic endpoints
const movieDetailsEndpoint = (id) => `${apiBaseUrl}/movie/${id}?language=en-US&api_key=${apiKey}`;
const movieCreditsEndpoint = (id) => `${apiBaseUrl}/movie/${id}/credits?language=en-US&api_key=${apiKey}`;
const similarMoviesEndpoint = (id) => `${apiBaseUrl}/movie/${id}/similar?language=en-US&api_key=${apiKey}`;

const personDetailsEndpoint = (id) => `${apiBaseUrl}/person/${id}?language=en-US&api_key=${apiKey}`;
const personMoviesEndpoint = (id) => `${apiBaseUrl}/person/${id}/movie_credits?language=en-US&api_key=${apiKey}`;

// Image Helpers
export const image500 = (path) => path ? `https://image.tmdb.org/t/p/w500${path}` : null;
export const image342 = (path) => path ? `https://image.tmdb.org/t/p/w342${path}` : null;
export const image185 = (path) => path ? `https://image.tmdb.org/t/p/w185${path}` : null;

// Fallback Images
export const fallbackMoviePoster = 'https://www.christiancinema.com/images/christiancinema/404_page.svg?imwidth=1200';
export const fallbackPersonImage = 'https://static.vecteezy.com/system/resources/previews/008/506/404/large_2x/contact-person-red-icon-free-png.png';

// Generic API Call Function
const apiCall = async (endpoint, params) => {
    const options = {
        method: 'GET',
        url: endpoint,
        params: params ? params : {},
        timeout: 8000, // 8 seconds timeout
    };

    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        let customMessage = '';
        
        if (error.code === 'ECONNABORTED') {
            customMessage = "⏳ This is taking longer than usual\nPlease try again in a moment!";
        } else if (error.message === 'Network Error') {
            customMessage = "📡 Connection Lost\nTry reconnecting and pull to refresh when you're ready.";
        } else {
            customMessage = "⚠️ Something went wrong\nWe couldn’t fetch the data right now. Please try again later.";
        }

        return { error: true, message: customMessage };
    }
};



// Movie API Functions
export const fetchTrendingMovies = () => apiCall(trendingMoviesEndpoint);
export const fetchUpcomingMovies = () => apiCall(upcomingMoviesEndpoint);
export const fetchTopRatedMovies = () => apiCall(topRatedMoviesEndpoint);
export const fetchMovieDetails = (id) => apiCall(movieDetailsEndpoint(id));
export const fetchMovieCredits = (id) => apiCall(movieCreditsEndpoint(id));
export const fetchSimilarMovies = (id) => apiCall(similarMoviesEndpoint(id));

// Person API Functions
export const fetchPersonDetails = (id) => apiCall(personDetailsEndpoint(id));
export const fetchPersonMovies = (id) => apiCall(personMoviesEndpoint(id));

// Search API
export const searchMovies = (params) => apiCall(searchMoviesEndpoint, params);
>>>>>>> 7a2e217ea6c9b1a56268cc988023f7d27aba41e2

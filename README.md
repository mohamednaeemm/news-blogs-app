# News Blogs App

[**Live Demo**](https://news-blogs-app-git-main-mohamednaeemms-projects.vercel.app/)

This is a **News Blogs App** built with **React**, **Vite**, and **CSS**. The app allows users to view the latest news, search for news articles, and check the weather. It pulls data from two public APIs: **GNews** for news articles and **OpenWeatherMap** for weather information. The app stores user bookmarks in **LocalStorage** for easy access to saved news articles.

## Features

- Browse the latest news headlines from multiple categories.
- Search for news articles using a search query.
- View current weather for a default location (Cairo) or a custom location.
- Save and view bookmarked news articles.
- Fully responsive for all screen sizes.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Vite**: A fast build tool that provides a modern development experience.
- **CSS**: Styling for the app's UI.
- **Axios**: HTTP client for making API requests.
- **LocalStorage**: For saving user bookmarks (news articles).
- **GNews API**: Fetches news data (API key required).
- **OpenWeatherMap API**: Fetches weather data (API key required).

## Setup

To run this project locally, follow these steps:

### 1. Clone the repository:

```bash
git clone https://github.com/mohamednaeemm/news-blogs-app.git
cd news-blogs-app
```

### 2. Install dependencies:

Make sure you have **Node.js** and **npm** installed. Then, run:

```bash
npm install
```

### 3. Add API keys:

You need to add your **API keys** for the **GNews** and **OpenWeatherMap** APIs.

1. Create a `.env` file in the root of the project.
2. Add your API keys like so:

```
VITE_GNEWS_API_KEY=your-gnews-api-key
VITE_WEATHER_API_KEY=your-openweathermap-api-key
```

Make sure to replace `your-gnews-api-key` and `your-openweathermap-api-key` with your actual API keys.

### 4. Start the development server:

Run the following command to start the development server:

```bash
npm run dev
```

The app should now be running locally at `http://localhost:5173`.

## How to Use

1. Open the app in your browser.
2. View the latest news on the homepage, categorized by various topics.
3. Use the search bar to look for specific news articles.
4. Check the current weather for Cairo or enter your custom location.
5. Bookmark your favorite news articles to view them later.
6. The app is fully responsive, so you can use it on mobile, tablet, or desktop.


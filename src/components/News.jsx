/* eslint-disable no-unused-vars */


import React, { useState } from 'react'
import Weather from './Weather'
import Calendar from './Calendar'
import './News.css'
import userImg from '../assets/images/user.jpg'
import noImg from '../assets/images/no-img.png'

import { useEffect } from 'react'
import axios from 'axios'
import NewsModel from './NewsModel'
import Bookmarks from './Bookmarks'

const categories = ['general', 'world', 'business', 'technology', 'entertainment', 'sports', 'science', 'health', 'nation']

const News = () => {

    const [headline, setHeadline] = useState(null)
    const [news, setNews] = useState([])
    const [selectedCategory, setSelectedCategory] = useState('general')
    const [searchInput, setSearchInput] = useState("")
    const [searchQuery, setSearchQuery] = useState("")
    const [showModel, setShowModel] = useState(false)
    const [selectedArticle, setSelectedArticle] = useState(null)
    const [bookmarks, setBookmarks] = useState([])
    const [showBookmarksModel, setShowBookmarksModel] = useState(false)


    useEffect(() => {
        const fetchNews = async () => {
            let url = `https://gnews.io/api/v4/top-headlines?category=${selectedCategory}&lang=en&country=us&max=10&apikey=a79119203086cc5edbabf338cd9215d4`

            if (searchQuery) {
                url = `https://gnews.io/api/v4/search?q=${searchQuery}&lang=en&country=us&max=10&apikey=a79119203086cc5edbabf338cd9215d4`
            }

            try {
                const response = await axios.get(url);
                const fetchedNews = response.data.articles;

                fetchedNews.forEach(article => {
                    if (!article.image) {
                        article.image = noImg
                    }
                })

                setHeadline(fetchedNews[0])
                setNews(fetchedNews.slice(1, 7))

                const saveBookmarks = JSON.parse(localStorage.getItem('bookmarks')) || []
                setBookmarks(saveBookmarks)
                
            } catch (error) {
                console.error("Error fetching news:", error);
            }
        }

        fetchNews()
    }, [selectedCategory, searchQuery])

    const handleCategoryClick = (e, category) => {
        e.preventDefault()
        setSelectedCategory(category)
    }

    const handleSearch = (e) => {
        e.preventDefault()
        setSearchQuery(searchInput)
        setSearchInput("")
    }

    const handleArticleClick = (article) => {
        setSelectedArticle(article)
        setShowModel(true)
    }

    const handleBookmarkClick = (article) => {
    setBookmarks((prevBookmarks) => {
        const updatedBookmarks = prevBookmarks.find((bookmark) => bookmark.title === article.title) ? prevBookmarks.filter((bookmark) => bookmark.title !== article.title) : [...prevBookmarks, article];
        localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
        return updatedBookmarks;
        });
      }

  return (
    <div className="news">
      <header className="news-header">
        <h1 className="logo">News & Blogs</h1>
        <div className="search-bar">
            <form onSubmit={handleSearch}>
                <input type="text" placeholder='Search News...' value={searchInput} onChange={(e) => setSearchInput(e.target.value)}/>
                <button type="submit">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
            </form>
        </div>
      </header>
        <div className="news-content" >
            <div className="navbar">
                <div className="user">
                    <img src={userImg} alt="User Image" />
                    <p>Mohamed&apos;s Blog</p>
                </div>
                <nav className="categories">
                    <h1 className="nav-heading">categories</h1>
                    <div className="nav-links">
                        {categories.map((category) => (<a href="" key={category} className="nav-link" onClick={(e) => handleCategoryClick(e, category)}>{category}</a>))}
                        
                        
                        <a href="#" className="nav-link" onClick={() => setShowBookmarksModel(true)}>Bookmarks <i className="fa-solid fa-bookmark"></i></a>
                    </div>
                </nav>
            </div>
            <div className="news-section">
                {headline && (
                <div className="headline" onClick={() => handleArticleClick(headline)}>
                    <img src={headline.image || noImg} alt={headline.title} />
                    <h2 className="headline-title">{headline.title}<i className={`${bookmarks.some((bookmark) => bookmark.title === headline.title) ? "fa-solid" : "fa-regular"} fa-bookmark bookmark`} onClick={(e) => {
                            e.stopPropagation();
                            handleBookmarkClick(headline)
                        }}></i>
                    </h2>
                </div>
                )}
                <div className="news-grid">
                    {news.map((article, index) => (
                        <div key={index} className="news-grid-item" onClick={() => handleArticleClick(article)}>
                        <img src={article.image || noImg} alt={article.title}/>
                        <h3>{article.title}<i className={`${bookmarks.some((bookmark) => bookmark.title === article.title) ? "fa-solid" : "fa-regular"} fa-bookmark bookmark`} onClick={(e) => {
                            e.stopPropagation();
                            handleBookmarkClick(article)
                        }}></i></h3>
                        </div>
                    ))}
                </div>
            </div>
            <NewsModel show={showModel} article={selectedArticle} onClose={() => setShowModel(false)}/>
            <Bookmarks show={showBookmarksModel} bookmarks={bookmarks} onClose={() => setShowBookmarksModel(false)} onSelectArticle={handleArticleClick} onDeleteBookmark={handleBookmarkClick} />
            <div className="my-blogs">My Blogs</div>
            <div className="weather-calendar">
                <Weather />
                <Calendar />
            </div>
        </div>
        <footer className="news-footer">Footer</footer>
    </div>
  )
}

export default News

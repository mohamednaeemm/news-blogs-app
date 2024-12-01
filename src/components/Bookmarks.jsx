import React from 'react'
import './Model.css'
import './Bookmarks.css'
import demoImg from '../assets/images/demo.jpg'
import noImg from '../assets/images/no-img.png'

const Bookmarks = ({show, bookmarks, onClose, onSelectAtricle, onDeleteBookmark}) => {
    if (!show) {
        return null;
    }
  return (
    <div className='model-overlay'>
        <div className="model-content">
            <span className="close-button" onClick={onClose}>
                <i className="fa-solid fa-xmark"></i>
            </span>
            <h2 className="bookmarks-heading">Bookmarked News</h2>
            <div className="bookmarks-list">
                {bookmarks.map((article, index) => (
                    <div className="bookmark-item" key={index} onClick={() => onSelectAtricle(article)}>
                    <img src={article.image || noImg} alt={article.title} />
                    <h3>{article.title}</h3>
                    <span className="delete-button" onClick={(e) => {
                        e.stopPropagation();
                        onDeleteBookmark(article)
                    }}>
                        <i className="fa-regular fa-circle-xmark"></i>
                    </span>
                </div>
                    ))}
                
            </div>
            
        </div>
    </div>
  )
}

export default Bookmarks

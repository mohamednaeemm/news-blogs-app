import React, { useState } from 'react'
import userImg from '../assets/images/user.jpg'
import './Blogs.css'

const Blogs = ({onBack}) => {
    const [showForm, setShowForm] = useState(false)
  return (
    <div className="blogs">
        <div className="blogs-left">
            <img src={userImg} alt="user Image" />
        </div>
        <div className="blogs-right">
            {showForm ? (<div className="blogs-right-form">
                <h1>New Post</h1>
                <form>
                    <div className="img-upload">
                        <label htmlFor="file-upload" className="file-upload">
                            <i className="bx bx-upload">
                                Upload Image
                            </i>
                        </label>
                        <input type="file" id="file-upload" />
                    </div>
                    <input type="text" placeholder="Add Titile {Max 60 characters}" className=" title-input" />
                    <textarea placeholder="Write your blog here..." className="text-input"></textarea>
                    <button className='submit-btn' type='submit'>Submit Button</button>
                </form>
            </div>) : (<button className="post-btn" onClick={() => setShowForm(true)}>Create New Post</button>)}
            
            
            <button className="blogs-close-btn" onClick={onBack}>Back <i className="bx bx-chevron-right"></i></button>
        </div>
    </div>
  )
}

export default Blogs

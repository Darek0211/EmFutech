import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Green Elastic Pony</title>
        <meta property="og:title" content="Green Elastic Pony" />
      </Helmet>
      <label className="home-text">Give an instruction</label>
      <input
        type="text"
        placeholder="placeholder"
        className="home-textinput input"
      />
      <button className="home-button button">send</button>
    </div>
  )
}

export default Home

import React, { Component } from 'react'
import NewsItem from './NewsItem.js'
export class News extends Component {
  render() {
    return (
      <div>
        This is the news component
        <NewsItem/>
      </div>
    )
  }
}

export default News

import React, { Component } from 'react'
import './index.scss'

export default class ZcHeader extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {

    }
    render() {
        return (
            <footer>
                <div className="social">
                    <ul className="social-list">
                        <li>WEIBO</li>
                        <li>ZHIHU</li>
                        <li>GITHUB</li>
                        <li>TWITTER</li>
                        <li>FACEBOOK</li>
                    </ul>
                </div>
                <div className="meta">
                    <div className="meta-copyright">
                        <img className="title-img" />
                        <p>created by @Ezreal</p>
                        <p>powered by React Express Nodejs</p>
                    </div>
                    <div className="post">
                        <h3 className="post-item">RECENT POSTS</h3>
                        <ul></ul>
                    </div>
                    <div className="comments">
                        <h3 className="post-item">RECENT COMMENTS</h3>
                        <ul></ul>
                    </div>
                </div>
            </footer>
        )
    }
}

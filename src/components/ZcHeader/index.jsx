import React, { Component } from 'react'
import { Icon } from 'antd';
import './index.scss'

export default class ZcHeader extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {

    }
    render() {
        return (
            <header>
                <div className="header-container">
                    <div className="logo">Ezreal. & Andromeda.</div>
                    <div className="menu">
                        <div className="archives">Archives</div>
                        <div className="links">Links</div>
                        <div className="about">About</div>
                        <div className="search"><Icon className="search-icon" type="search" /></div>
                    </div>
                </div>
            </header>
        )
    }
}

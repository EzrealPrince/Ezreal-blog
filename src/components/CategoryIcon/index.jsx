import React, { Component } from 'react'
import categoryImg from '../../images/bg-ico.png'

import './index.scss'

export default class CategoryIcon extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const category = this.props.category || 0;
        return (
            <div className="category-icon">
                <img src={categoryImg} className="c-i-img" style={{bottom: 42 * category + 'px'}}/>
            </div>
        )
    }
}
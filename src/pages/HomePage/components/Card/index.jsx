import React, { Component } from 'react'
import { createBrowserHistory } from 'history';
import CategoryIcon from '../../../../components/CategoryIcon'

import './index.scss'


const history = createBrowserHistory();
/*
** 标题
** 简述
** 背景
*/
export default class Card extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {

    }
    goBlogDetail(id) {
        console.log('id = ',id)
        console.log(history);
        history.push('/blogDetail');
    }
    render() {
        const {title = '暂无', intro = '暂无', bgUrl = '', category = '', categoryDesc = '前端'} = this.props.cardInfo
        return (
            <div className="blog-card" onClick={() => this.goBlogDetail(1)}>
                <div className="bgimg">
                    <div className="b-c-img" style={{backgroundImage: `url(${bgUrl})`}}>
                    </div>
                </div>
                <div className="b-c-intro">
                    <p>{intro}</p>
                </div>
                <div className="b-c-title">{title}</div>
                <div className="b-c-footer">
                    <span>{categoryDesc}</span>
                    <span className="icon">
                        <CategoryIcon category={category} />
                    </span>
                </div>

                <div className="b-c-left-bg"></div>
                <div className="b-c-right-bg"></div>
            </div>
        )
    }
}

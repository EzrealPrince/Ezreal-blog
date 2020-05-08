import React, { Component } from 'react'
import Card from './components/Card'

import './index.scss'

export default class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            blogList: [],
            cardWidth: '100%'
        }
    }
    componentDidMount() {
        this.setState({
            blogList: [
                {
                    id: 1,
                    title: '深入理解javascript异步机制',
                    intro: '异步的演变史，从回调到promise、async，如何实现一个promise？微任务和宏任务是什么？常见的微任务有哪些？',
                    bgUrl: 'http://10.1.22.68:3000/images/img-82de5dee7ce0d9e9a8313cc6becfcc3a.jpg',
                    category: 0,
                    categoryDesc: 'javascript'
                },  {
                    id: 2,
                    title: '探索nodejs模块机制之如何实现模块化重载',
                    intro: '实现nodejs模块热重载的方法，基本思路：1、监视文件/目录改动。2、清空require.cache中的模块缓存并重新require。3、用新模块覆盖旧模块',
                    bgUrl: 'http://10.1.22.68:3000/images/img-974ef054077ef18988e3748aeab554cf.jpg',
                    category: 1,
                    categoryDesc: 'nodejs'
                },  {
                    id: 3,
                    title: '测试3',
                    intro: '测试3的intro',
                    bgUrl: 'http://10.1.22.68:3000/images/img-9c912f76d2312674ee6f11769a52b978.jpg',
                    category: 2,
                    categoryDesc: 'express'
                }
            ]
        })
        this.resizeCardWidth();
        window.addEventListener('resize', () => this.resizeCardWidth())
    }
    resizeCardWidth() {
        const mainWidth = document.querySelector('main').clientWidth;
        const widthMap = {
            '1': '100%',
            '2': '50%',
            '3': '33.33%'
        }
        const curWidth = widthMap[Math.floor(mainWidth / 280)];
        this.setState({
            cardWidth: curWidth
        })
    }
    render() {
        const { blogList = [], cardWidth = '100%' }= this.state;
        return (
            <main className="card-list">
                {blogList.map(card => (
                    <div className="card-item" key={card.id} style={{width: `${cardWidth}`}}>
                        <Card cardInfo={card} />
                    </div>
                ))}
            </main>
        )
    }
}

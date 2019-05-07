import React, { Component } from 'react'
import Swiper from 'swiper'
import LessonCard from '../components/lesson-card'
const swiperOpt = {
    slidesPerView: 1,
    slidesPerColumn: 4,
    spaceBetween: 10,
    pagination: {
        el: '.swiper-pagination',
        bulletClass : 'readbook-bullet',
        clickable: true
    }
}
class LessonRecomm extends Component{
    constructor (){
        super()
        this.state = {
            swiper: null
        }
    }
    componentDidMount () {
        const swiper = new Swiper ('.swiper-container-lesson-recomm', swiperOpt)
        this.setState({ swiper: swiper})
    }
    render () {
        const { list } = this.props
        const listDom = list.map( (item, index) => (
            <div className="swiper-slide" key={ index }>
                <LessonCard data={ item } ></LessonCard>
            </div>
        ))
        return (
            <div className="readbook-lesson-recomm readbook-module readbook-wing">
                <div className="readbook-title3 readbook-module-title">
                </div>
                <div className="readbook-lesson-recomm-list">
                <div className="swiper-container swiper-container-lesson-recomm">
                    <div className="swiper-wrapper">
                        { listDom }
                    </div>
                    <div className='swiper-pagination swiper-pagination-lesson-recomm'></div>
                </div>
                    
                </div>
                
            </div>
        )
    }
}
export default LessonRecomm
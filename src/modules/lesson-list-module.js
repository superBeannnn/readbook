import React, { Component } from 'react'
import RadioPlayer from '../components/audio-player.js'
import LessonListTab from '../components/lesson-list-tab.js'
import LessonCard from '../components/lesson-card'
function LessonList ({ list }){
    const listDom = list.map((item, index) => 
        <LessonCard data={ item } key={ index }></LessonCard>
    )
    return ( listDom )
}
function LessonSingleModule ({ data }){
    return (
        <div 
            key={ data.id }
            className={ 'readbook-lesson-module' + ( data.id + 1 ) }
            >
            <div className="readbook-lesson-audio">
                <div className="readbook-module readbook-card-module">
                    <RadioPlayer data={ data.audioInfo }></RadioPlayer>
                </div>
            </div>
            <div className="readbook-module readbook-wing">
            <div className={ 'readbook-module-title readbook-module-lesson-title readbook-module-lesson-title' + ( data.id + 1) }></div>
                <LessonList list={ data.lessonList }></LessonList>
                <div className="readbook-lesson-list-more" >全部课程</div>
            </div>
        </div>
    )
}
class LessonListModule extends Component{
    constructor (props){
        super (props)
        this.state = {
            index: 1,
            tabList: [
                { id: 1, title: '升值加薪'},
                { id: 2, title: '变美变瘦'},
                { id: 3, title: '人文社科'},
                { id: 4, title: '精致女性'},
                { id: 5, title: '家庭亲子'},
                { id: 6, title: '生活美学'},
            ],
            topList: [],
            topObj: {}
        }
    }
    tabChange (index){
        this.setState({ index: index})
    }
    render (){
        const { list } = this.props
        const lessonList = list.map((item, index) => {
            return <LessonSingleModule data={ item } key={ index }></LessonSingleModule>
        })
        return (
            <div>
                <LessonListTab 
                    list={ this.state.tabList }
                    index={ this.state.index }
                    tabChange={ this.tabChange.bind(this) }>
                </LessonListTab>
               { lessonList }
                
                <p className="readbook-lesson-list-tips">到底啦，点【全部课程】选课吧</p>
            </div>
        )
    }
}
export default LessonListModule



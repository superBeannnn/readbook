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
function LessonSingleModule ({ data, id }){
    return (
        <div 
            key={ id }
            className={ 'readbook-lesson-module' + ( id ) + ' readbook-lesson-module' }
            >
            <div className="readbook-lesson-audio">
                <div className="readbook-module readbook-card-module">
                    <RadioPlayer data={ data.audioInfo }></RadioPlayer>
                </div>
            </div>
            <div className="readbook-module readbook-wing">
            <div className={ 'readbook-module-title readbook-module-lesson-title readbook-module-lesson-title' + ( id ) }></div>
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
            domObj: React.createRef(),
            tabList: [
                { id: 1, title: '升值加薪'},
                { id: 2, title: '变美变瘦'},
                { id: 3, title: '人文社科'},
                { id: 4, title: '精致女性'},
                { id: 5, title: '家庭亲子'},
                { id: 6, title: '生活美学'},
            ],
            topList: [],
        }
        this.setScroll = props.setScroll
    }
    componentDidMount (){
        const dom = this.state.domObj.current
        const tabList = this.state.tabList
        tabList.forEach( ({ id }) => {
            this.state.topList.push(
                { 
                    top: dom.querySelector('.readbook-lesson-module' + id).offsetTop + 
                    dom.offsetTop +
                    document.body.clientWidth * 1.45 -   
                    document.body.clientHeight * 0.3,
                    id: id
                })
        })
        
    }
    componentWillReceiveProps () {
        const l = this.state.topList
        for( let i = 0 ; i < l.length ; i++ ){
            if( i === l.length - 1){
                this.setState({ index: l[i].id })
                return 
            }
            if( this.props.top < l[i + 1].top ){
                this.setState({ index: l[i].id })
                return
            }
        }
    }
    tabChange (id, index){
        this.setState({ index: id})
        this.setScroll(this.state.topList[index].top + 1)
    }

    render (){
        const { list } = this.props
        const lessonList = this.state.tabList.map(({ id }) => {
            return <LessonSingleModule data={ list[id - 1] } id={ id } key={ id } ></LessonSingleModule>
        })
        return (
            <div className="readbook-lesson-list" ref={ this.state.domObj }>
                <div className="readbook-lesson-bannner"></div>
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



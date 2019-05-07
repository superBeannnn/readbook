import React ,{ Component }from 'react'
import TeacherModule from '../modules/teacher-module'
import LessonListModule from '../modules/lesson-list-module'
import LessonRecomm from '../modules/lesson-recomm-module'
import PackageModule from '../modules/package-module'

import { teacherList, lessonSaleList, lessonRecommList, packageList }  from '../store/index';
import 'css/readbook.css';
import 'swiper/dist/css/swiper.min.css'

function BannerModule (){
    return (
        <section className="readbook-banner">
            <div className="banner"></div>
            <div className="leaf"></div>
        </section>
    )
}

class Readbook extends Component {
    constructor (){
        super()
        this.state = {
            top: 0,
            domObj : React.createRef(),
            
        }
    }
    setScroll (top){
        this.state.domObj.current.scrollTop = top
    }
    scroll (){
        const f = ()=>{
            this.setState({ top: this.state.domObj.current.scrollTop })
            requestAnimationFrame(f)
        }
        f()
    }
    
    componentDidMount (){
        this.scroll()
    }
    render (){
        return (
            <div className="readbook scroll" ref={ this.state.domObj }>
                <BannerModule />
                <div className="readbook-content">
                    <TeacherModule list={ teacherList }></TeacherModule>
                    <LessonRecomm list={ lessonRecommList}></LessonRecomm>
                    <PackageModule list={ packageList }></PackageModule>
                    <LessonListModule list={ lessonSaleList } setScroll={ this.setScroll.bind(this) } top={ this.state.top }></LessonListModule>
                    
                </div>
            </div>
        )
    }
}
export default Readbook
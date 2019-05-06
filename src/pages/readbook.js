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
    render (){
        return (
            <div className="readbook scroll">
                <BannerModule />
                <div className="readbook-content">
                    <TeacherModule list={ teacherList }></TeacherModule>
                    <LessonRecomm list={ lessonRecommList}></LessonRecomm>
                    <PackageModule list={ packageList }></PackageModule>
                    <LessonListModule list={ lessonSaleList }></LessonListModule>
                    
                </div>
            </div>
        )
    }
}
export default Readbook
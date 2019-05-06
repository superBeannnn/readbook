import React from 'react'
import TeacherCard from '../components/teacher-card'

function TeacherList (props){
    const list = props.list.map((item, index) => {
        return <TeacherCard key={ index } data={ item }/>
    })
    return (
        <div>
            { list }
        </div>
    )
}
function TeacherModule (props){
    return (
        <div className="readbook-teacher readbook-module readbook-wing">
            <div className="readbook-title2 readbook-module-title">
            </div>
            <div className="readbook-card-module">
                <TeacherList list= { props.list } />
                <p className="readbook-teacher-text">成长礼包将于购买任意课程一日后自动发放到已购课程中</p>
            </div>
        </div>
    )
}
export default TeacherModule



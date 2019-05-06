import React from 'react';
function TeacherCard ({ data }) {
    return (
        <div className="teacher-card">
            <div 
                style={{ backgroundImage: 'url('+ data.imgUrl+')' }} 
                className="teacher-card-photo"
            >
            </div>
            <h3 className="teacher-card-name">{ data.name }</h3>
            <p className="teacher-card-info">{ data.info }</p>
        </div>
    )
    
}
export default TeacherCard
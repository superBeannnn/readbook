import React from 'react'
import ReadbookBtn from './readbook-btn'
function clickBtn(){
    console.log(1)
}
function LessonCard ({ data }){
    return (
        <div className="lesson-card readbook-card-module">
            <div className="lesson-card-left">
                <div 
                    className="lesson-card-img" 
                    style={{ backgroundImage: 'url('+ data.imgUrl+')' }} 
                    >
                </div>
            </div>
            <div className="lesson-card-right">
                <h2>{ data.title }</h2>
                <div className="lesson-card-price">
                    <p className="special"> 
                        活动价 
                        <strong> ¥{ data.specialPrice }</strong> 
                    </p>
                    <p className="normal"> 原价：¥{ data.price }元 </p>
                </div>
                <div className="lesson-card-button">
                    <ReadbookBtn 
                        btn-color="'blue'" 
                        btn-style="'circle'"
                        click={ clickBtn }
                        slot={ ()=>(<p>抢优惠</p>)}
                        >
                        
                    </ReadbookBtn>
                </div>
            </div>
        </div>
    )
}
export default LessonCard




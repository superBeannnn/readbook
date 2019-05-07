import React from 'react';
import ReadbookBtn from './readbook-btn'
function clickBtn () {
    console.log(1)
}
function PackageCardInfo( text ){
    
    return { __html: text }
}
function PackageCard ({ data }) {
    return (
        <div className="package-card readbook-card-module">
            <h2> { data.title }</h2>
            <p className="package-card-info" dangerouslySetInnerHTML={ PackageCardInfo( data.info ) }>
            </p>
            <p className="special"> 
                限时 
                <strong> ¥{ data.specialPrice }</strong> 
            </p>
            <p className="normal"> 原价：¥{ data.price }元 </p>
            <div className="package-card-button">
                <ReadbookBtn 
                    btn-color="blue" 
                    btn-style="circle"
                    click={ clickBtn }
                    slot={()=>(<p> 抢优惠 </p>)}>
                    
                </ReadbookBtn>
            </div>
        </div>
    )
}
export default PackageCard
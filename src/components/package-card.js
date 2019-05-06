import React from 'react';
import ReadbookBtn from './readbook-btn'
function clickBtn () {
    console.log(1)
}
function PackageCard ({ data }) {
    return (
        <div className="package-card readbook-card-module">
            <h2> { data.title }</h2>
            <p className="package-card-info">
                { data.info }
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
                    click={ clickBtn }>
                    抢优惠
                </ReadbookBtn>
            </div>
        </div>
    )
}
export default PackageCard
import React from 'react'
function ReadbookBtn ({ 
        btnStyle='circle', 
        btnColor='blue', 
        shadowColor="blue", 
        width='3.5rem', 
        active="true",
        click,
        slot=()=>{}
    }) {
    return (
        <div 
            onClick={ click }
            className={
                ['readbook-btn',
                [ 'readbook-btn-' + btnStyle ],
                [ 'readbook-btn-' + btnColor ],
                [ 'readbook-btn-shadow-' + shadowColor ],
                active ? [ 'readbook-btn-' + btnColor + '-active'] : ''].join(" ")
            }
            style={{
                width: width
            }}
        >
           { slot()}
        </div>
    )
    
}
export default ReadbookBtn
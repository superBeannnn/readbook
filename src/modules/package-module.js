import React, { Component } from 'react'
import Swiper from 'swiper'
import PackageCard from '../components/package-card'
function jump (){

    console.log(1)
}
function SwiperDom ({ list }){
    var listDom = []
    const l = Math.ceil(list.length / 4)
    for( let i = 0 ; i < l ; i ++){
        listDom.push(
            <div className="swiper-slide" key={ i }>
                {
                    (()=>{
                        const SlideDom = []
                        for( let n = 0 ; n  < 4 ; n++){
                            const index = i * 4 + n
                            SlideDom.push(
                                <PackageCard
                                    key={ index }
                                    data={ list[index]}
                                    click={ jump }>
                                </PackageCard>
                            )
                        }
                        return (
                            SlideDom 
                        )
                    })()
                }
                   
            </div>
        )
    }
    return (
        listDom 
    )
}
class PackageModule extends Component {

    componentDidMount (){
        new Swiper('.swiper-container-package', {
            spaceBetween: 10,
            loop: true,
            autoplay : {
                delay: 5000
            },
            pagination: {
                el: '.swiper-pagination',
                bulletClass : 'readbook-bullet',
                clickable: true
            }
        })        
    }
    render (){
        const { list } =  this.props

        return (
            <div className="readbook-lesson-package readbook-module readbook-wing">
                <div className="readbook-title4 readbook-module-title">
                </div>
                <div className="swiper-container swiper-container-package">
					<div className="swiper-wrapper">
                        { <SwiperDom list={ list }></SwiperDom>}
                    </div>
                    <div className='swiper-pagination swiper-pagination-lesson-recomm'></div>
                </div>
            </div>
        )
    }
}
export default PackageModule

import React from 'react'
import TabItem from './readbook-btn'


function LessonListTab ({
    list = [], 
    index = 0,
    tabChange
}){
    const tabList = list.map((item, i) => {
        return (
            <li key={ item.id }>
                <TabItem 
                    slot={()=>(<p>{ item.title }</p>)}
                    click={ tabChange.bind(this, item.id, i) }
                    btnColor={ item.id === index ? 'orange' : 'blue'}
                    shadowColor='orange'
                >
                </TabItem>
            </li>
        )
    })
    return (
        <div className="readbook-tab">
            <ul> { tabList } </ul>
        </div> 
    )
}
export default LessonListTab
import React from 'react'
import TabItem from './readbook-btn'


function LessonListTab ({
    list = [], 
    index = 0,
    tabChange
}){
    const tabList = list.map(item => {
        return (
            <li key={ item.id }>
                <TabItem 
                    slot={()=>(<p>{ item.title }</p>)}
                    click={ tabChange.bind(this, item.id) }
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
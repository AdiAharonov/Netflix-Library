import React, {useEffect} from 'react'


interface ContentListProps {
titles: {}[]
}

export const ContentList: React.FC<ContentListProps> = ({ titles }) => {

    // useEffect(() => {
    //     getContent(getPopular)
    //     getContent(getTitle)
    // }, [])

    
      
      
    return (
        <div>
            {titles[0] && titles.map((title, idx) => {
                return <div>
                    <h3>{}</h3>
                    {/* <img src={} alt="" /> */}
                    </div>
            })}
        </div>
    )
}


function NewsFeedCard(props) {

    const {author, newsTitle, newsContent} = props;
    return (
        <div className='card'>

            <h3 className='cardTitle'>{newsTitle}</h3>
            <p className='cardDesc'>{newsContent}</p>
            <p style={{color: "blue"}}>Author: {author}</p>
        </div>
    )

}

function ProfileFeedCard(props) {

    const {newsTitle, newsContent} = props;
    return (
        <div className='card'>

            <h3 className='cardTitle'>{newsTitle}</h3>
            <p className='cardDesc'>{newsContent}</p>
            
        </div>
    )

}

export {
    NewsFeedCard,
    ProfileFeedCard
}
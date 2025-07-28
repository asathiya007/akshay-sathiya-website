import React from 'react'; 

const PublicationCard = ({image, title, publisher, date, descriptions, url, idx}) => { 
    
    if (idx % 2 === 0){
        return (
            <div className="page-card">
                <div className="w-60 mr3">
                    <h4><a href={url} target="_blank" rel="noreferrer" className="url">{title}</a></h4>
                    <h5>{publisher} - {date}</h5>
                    {descriptions.map(description => {
                        return (
                            <p>{description}</p>
                        )
                    })}
                </div>
                <div className="w-40">
                    <img src={image} alt="publication card" className="card-image"/>
                </div>
            </div>
        ); 
    } 

    return (
        <div className="page-card">
            <div className="w-40 mr3">
                <img src={image} alt="publication card" className="card-image" />
            </div>
            <div className="w-60">
                <h4><a href={url} target="_blank" rel="noreferrer" className="url">{title}</a></h4>
                <h5>{publisher} - {date}</h5>
                {descriptions.map(description => {
                    return (
                        <p>{description}</p>
                    )
                })}
            </div>
        </div>
    )
}

export default PublicationCard; 
import React from 'react'; 

const ExperienceCard = ({image, title, organization, date, descriptions, idx}) => { 
    
    if (idx % 2 === 0){
        return (
            <div className="page-card">
                <div className="w-60 mr3">
                    <h4>{title}</h4>
                    <h5>{organization} ({date})</h5>
                    {descriptions.map(description => {
                        return (
                            <p>{description}</p>
                        )
                    })}
                </div>
                <div className="w-40">
                    <img src={image} alt="recognition card" className="card-image"/>
                </div>
            </div>
        ); 
    } 

    return (
        <div className="page-card">
            <div className="w-40 mr3">
                <img src={image} alt="recognition card" className="card-image" />
            </div>
            <div className="w-60">
                <h4>{title}</h4>
                <h5>{organization} ({date})</h5>
                {descriptions.map(description => {
                    return (
                        <p>{description}</p>
                    )
                })}
            </div>
        </div>
    )
}

export default ExperienceCard; 
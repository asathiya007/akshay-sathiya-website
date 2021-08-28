import React from 'react'; 

const ProjectCard = ({image, title, stack, date, descriptions, url, idx}) => { 
    
    if (idx % 2 === 0){
        return (
            <div className="page-card">
                <div className="w-60 mr3">
                    {url ? <h4><a href={url} target="_blank" rel="noreferrer" className="url">{title}</a></h4> : <h4>{title}</h4>}
                    <h5>{date} - Built with {stack}</h5>
                    {descriptions.map(description => {
                        return (
                            <p>{description}</p>
                        )
                    })}
                </div>
                <div className="w-40">
                    <img src={image} alt="project card" className="card-image"/>
                </div>
            </div>
        ); 
    } 

    return (
        <div className="page-card">
            <div className="w-40 mr3">
                <img src={image} alt="project card" className="card-image" />
            </div>
            <div className="w-60">
                {url ? <h4><a href={url} target="_blank" rel="noreferrer" className="url">{title}</a></h4> : <h4>{title}</h4>}
                <h5>{date} - Built with {stack}</h5>
                {descriptions.map(description => {
                    return (
                        <p>{description}</p>
                    )
                })}
            </div>
        </div>
    )
}

export default ProjectCard; 
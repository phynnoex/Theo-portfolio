import React from 'react';
import './ProjectCard.css';
import StackCard from '../StackCards/StackCard';
import LinkCard from '../linkCard/linkCard';


export default function ProjectCard(props) {
    return(
        <div className="projectCard">
          <div className="projectInfo">
                <div className="projectTitle">
                  <h2>{props.projectTitle}</h2>
                  <p>{props.AppType}</p>
                </div>
                <div className="projectDescription">
                  <div className="stackCards">{
                    props.stack.map((stackTitle) => {
                      return <StackCard stackTitle={stackTitle} />
                    })}
                  </div>
                  <div className="DescriptionDetails">
                    <p>{props.projectDescription}</p>
                  </div>
                  <div className="projectVisit">
                    <LinkCard linkTitle="Github" isPrimary={true} />
                    <LinkCard linkTitle="View site" />
                  </div>
                </div>
          </div>
          <div className="projectDisplay">
            <div>
                <div className="leftTopBox"></div>
                <div className="mainBox"></div>
                <div className="bottomRightBox"></div>
            </div>
          </div>
        </div>
    )
    
}
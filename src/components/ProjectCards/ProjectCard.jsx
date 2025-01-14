import React from 'react';
import './ProjectCard.css';
import StackCard from '../StackCards/StackCard';
import LinkCard from '../linkCard/linkCard';


export default function ProjectCard(props) {
    return(
        <div className="projectCard">
          <div className="projectInfo">
                <div className="projectTitle">
                  <h2>Quiz App</h2>
                  <p>Mobile Application</p>
                </div>
                <div className="projectDescription">
                  <div className="stackCards">
                    <StackCard stackTitle="React Native" />
                    <StackCard stackTitle="Expo" />
                    <StackCard stackTitle="Firebase" />
                  </div>
                  <div className="DescriptionDetails">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi repellendus provident consequatur officia sapiente, beatae voluptatum reiciendis explicabo eum dignissimos perferendis dolore deleniti. A numquam commodi enim, labore sit laboriosam cum repellat nisi temporibus natus error similique eligendi et ipsum </p>
                  </div>
                  <div className="projectVisit">
                    <LinkCard linkTitle="Github" isPrimary={true} />
                    <LinkCard linkTitle="View site" />
                  </div>
                </div>
          </div>
          <div className="projectDisplay">

          </div>
        </div>
    )
    
}
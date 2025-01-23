import React, { useState, useEffect, useRef } from 'react';
import './ProjectCard.css';
import StackCard from '../StackCards/StackCard';
import LinkCard from '../linkCard/linkCard';
import {motion} from 'framer-motion';

export default function ProjectCard(props) {  // This runs whenever 'coordinates' changes

  return (
    <>
      <div className={props.Pindex % 2 === 1 ? 'projectCard' : 'reverseProjectCard'}>
        <div className="projectInfo">
          <div className="projectTitle">
            <h2>{props.projectTitle}</h2>
            <p>{props.AppType}</p>
          </div>
          <div className="projectDescription">
            <div className="stackCards">
              {props.stack.map((stackTitle, index) => {
                return <StackCard key={index} stackTitle={stackTitle} />;
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
        <motion.div
          className="projectDisplay"
          initial={(props.Pindex % 2 === 1) ? { x: -120, opacity: 0.3, perspective:500, skewY: 10,  } : { x: 120, opacity: 0.3, perspective:500, skewY: -10 , }}
          whileInView={(props.Pindex % 2 === 1) ? {x: 0, opacity: 1, perspective:500, skewY:0} : {x: 0, opacity: 1,  perspective:500, skewY:0}}
          transition={{ duration: 0.5 }}
        >
          <div>
            <div className="leftTopBox"></div>
            <div className="mainBox"></div>
            <div className="bottomRightBox"></div>
          </div>
        </motion.div>
      </div>
      <hr />
    </>
  );
}

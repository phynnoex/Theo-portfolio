import React, { useState, useEffect, useRef } from 'react';
import './ProjectCard.css';
import StackCard from '../StackCards/StackCard';
import LinkCard from '../linkCard/linkCard';
import {motion, stagger} from 'framer-motion';

export default function ProjectCard(props) {  // This runs whenever 'coordinates' changes
  const containerVariants = {
    hidden:{
      opacity:0,
    },
    show:{
      opacity:1,
      transition:{
        staggerChildren:0.2,
      }
    }
  }

  const itemVariants = {
    hidden:{
      opacity:0,
      x: -100,
    },
    show:{
      opacity:1,
      x: 0,
    }
  }
  return (
    <>
      <div className={props.Pindex % 2 === 1 ? 'projectCard' : 'reverseProjectCard'}>
        <motion.div className="projectInfo"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{once: true, amount: 0.3}}
        >
          <motion.div className="projectTitle"
          variants={itemVariants}>
            <h2>{props.projectTitle}</h2>
            <p>{props.AppType}</p>
          </motion.div>

          <motion.div
          className="projectdDisplay"
          variants={itemVariants}
          >
          <div>
            <div className="leftTopBox"></div>
            <div className="mainBox"></div>
            <div className="bottomRightBox"></div>
          </div>
          </motion.div>

          <motion.div className="projectDescription" variants={itemVariants}>
            <div className="stackCards">
              {props.stack.map((stackTitle, index) => {
                return <StackCard key={index} stackTitle={stackTitle} />;
              })}
            </div>
            <div className="DescriptionDetails">
              <p>{props.projectDescription}</p>
            </div>
            <div className="projectVisit">
              <LinkCard linkTitle="Github" isPrimary={true} githubLink={props.githubLink} />
              <LinkCard linkTitle="View site" siteLink={props.siteLink}/>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          className="projectDisplay"
          initial={(props.Pindex % 2 === 1) ? { x: -120, opacity: 0.3, perspective:500, skewY: 10,  } : { x: 120, opacity: 0.3, perspective:500, skewY: -10 , }}
          whileInView={(props.Pindex % 2 === 1) ? {x: 0, opacity: 1, perspective:500, skewY:0} : {x: 0, opacity: 1,  perspective:500, skewY:0}}
          transition={{ duration: 0.5 }}
          viewport={{once: true, amount: 0.3}}
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
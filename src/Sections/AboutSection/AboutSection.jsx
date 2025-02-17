import React from 'react';
import SkillCard from '../../components/skills/SkillCard';
import skills from '../../Data/skills';
import { color, motion,useScroll } from 'framer-motion';
import './AboutSection.css';

export default function AboutSection(props) {
    const containerVariants = {
        hidden:{
          opacity:0,
        },
        show:{
          opacity:1,
          transition:{
            staggerChildren:0.5,
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

    const {scrollYprogress} = useScroll();
    return(
        <motion.div className='aboutSection'>
          <motion.div className='leftStyle'>
              <div className='leftBar'></div>
          </motion.div>
          <motion.div className='mainAbout'>
            <motion.div className='LeftMainAbout'
            
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{once: true, amount: 0.3}}>
              <motion.div className='topMainAbout' variants={itemVariants}>
                <h2 className='aboutTitle'>About me 🦖</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
              </motion.div>   
              <motion.div className='bottomMainAbout' variants={itemVariants}>
                <h3>Skills</h3>
                <div className='skills'>
                    {
                        skills.map((skill) => {
                            return <SkillCard  title={skill.skillTitle} width={skill.levelOfTen/10} icon={skill.icon}/>
                        })
                    }
                </div>
              </motion.div>
            </motion.div>
            <div className="rightMainAbout">
              <div className="ImgCard">
                <div className="profilePicture"></div>
                <div className='randomQuotes'> "Lorem ipsum dolor sit amet, consectetur adipisicing elit."  <span style={{color: "blue"}}>#randomquotes</span></div>
              </div>
            </div>
          </motion.div>
      </motion.div>
    )
}
import React from 'react';
import SkillCard from '../../components/skills/SkillCard';
import skills from '../../Data/skills';

export default function AboutSection(props) {

    
    return(
        <div className='aboutSection'>
          <div className='leftStyle'>
              <div className='leftBar'></div>
          </div>
          <div className='mainAbout'>
            <div className='LeftMainAbout'>
              <div className='topMainAbout'>
                <h2 className='aboutTitle'>../About me</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
              </div>   
              <div className='bottomMainAbout'>
                <h3>Skills</h3>
                <div className='skills'>
                    {
                        skills.map((skill) => {
                            return <SkillCard  title={skill.skillTitle} width={skill.levelOfTen/10} icon={skill.icon}/>
                        })
                    }
                </div>
              </div>
            </div>
            <div className="rightMainAbout">
              <div className="ImgCard">
                <div className="profilePicture"></div>
              </div>
            </div>
          </div>
      </div>
    )
}
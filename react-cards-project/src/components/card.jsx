import React from 'react'
import { Bookmark } from 'lucide-react'

function Card_temp (props) {
    // console.log({company: props.company, postedDays: props.postedDays});
    // const tab_arrey = [props.tags].length
    // console.log(tab_arrey);
    return (
    <>
    
    <div className="slide-box">
        <div className="card">
                <div className="top-wrapper">
                    <div className="top">
                    <img src={props.logo} alt="" />
                    <button>save<Bookmark size={24} /></button>
                    </div>
                    <div className="center">
                        <div className="heading-20">{props.company} <span>{props.postedDays}</span></div>
                        <div className="heading-24">{props.jobTitle}</div>
                        <div className="tabs">
                            {
                                props.tags.map((tag, index) => (
                                    console.log(index),
                                    <div key={index} className="tab">
                                        {tag}
                                    </div>
                                ))
                            }
                        </div>
                    </div>  
                </div>
                <div className="bottom">
                    <div className="price">
                    <div className="rate"><span>{props.salary}</span></div>
                    <div className="location">{props.location}</div>
                    </div>
                    <a href="#" className="apply-btn btn-dark button">Apply Now</a>
                </div>
        </div>
    </div>
    </>
  ) 
}

export default Card_temp
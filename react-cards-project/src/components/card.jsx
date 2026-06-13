import React from 'react'
import { Bookmark } from 'lucide-react'

function Card_temp (props) {
    // console.log({company: props.company, postedDays: props.postedDays});
    return (
    <>
    <div className="slide-box">
        <div className="card">
                {/* {console.log(company.companyName)} */}
                <div className="top-wrapper">
                    <div className="top">
                    <img src={props.logo} alt="" />
                    <button>save<Bookmark size={24} /></button>
                    </div>
                    <div className="center">
                    <div className="heading-20">{props.company} <span>{props.postedDays}</span></div>
                    <div className="heading-24">{props.jobTitle}</div>
                    <div className="tabs">
                        <div className="tab">{props.tags[0]}</div>
                        <div className="tab">{props.tags[1]}</div>
                        <div className="tab">{props.tags[2]}</div>
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
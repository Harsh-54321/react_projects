import React from 'react'
import { Bookmark } from 'lucide-react'

function Card_temp () {
  return (
    <>
        <div className="card">
                <div className="top-wrapper">
                    <div className="top">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png" alt="" />
                    <button>save<Bookmark size={24} /></button>
                    </div>
                    <div className="center">
                    <div className="heading-20">Amazon <span>5 days ago</span></div>
                    <div className="heading-24">senior UI/UX Designer</div>
                    <div className="tabs">
                        <div className="tab">Part Time</div>
                        <div className="tab">Senior Level</div>
                    </div>
                    </div>
                </div>
                <div className="bottom">
                    <div className="price">
                    <div className="rate">$<span>120</span>/hr</div>
                    <div className="location">Mumbai, India</div>
                    </div>
                    <a href="#" className="apply-btn btn-dark button">Apply Now</a>
                </div>
        </div>
    </>
  )
}

export default Card_temp
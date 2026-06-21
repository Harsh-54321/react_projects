import React from 'react'
import Top_header from './top-header.jsx'
import Left_content_side from './left-content-side.jsx'
import Right_boxs_side from './right-boxs-side.jsx'

const Section2 = () => {
  return (
    <section className="blogs-section mb-30">
      <div className="container">
        <Top_header />
        <div className="flex-comtainer flex items-center justify-between ">
          <Left_content_side />
          <Right_boxs_side />
        </div>
      </div>
    </section>
  )
}

export default Section2
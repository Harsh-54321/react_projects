// import React from 'react'
import './App.css';

const App = () => {

  const submitHandler = (e) => {
    e.preventDefault();
     console.log("form submited");
  }

  return (
    <section className='bg-purple-400 py-20'>
      <div className="container">
        <div className="flex-container flex-wrap items-start justify-between ">
          <form className='w-[calc(50%-20px)] sticky self-start !top-0' onSubmit={(e) => { 
            submitHandler(e)
            // return(
            //   submitHandler
            // )
          }}>  
            <div className="heading-30 !font-bold !text-white text-center">This IS NOTE DETAILS</div>
            <input type="text" placeholder='Enter notes Heading' />
            <textarea name="textareas" placeholder='Enter notes details' className='h-40' id=""></textarea>
            <button className='button w-full'>ADD NOTE</button>
          </form>
          <div className="note-side w-[calc(50%-20px)]">
            <div className="heading-30 !font-bold !text-white text-center">NOTES LIST</div>
            <div className="note-list flex flex-wrap gap-[20px] flex-wrap">
               <div className="note p-2 w-[calc(50%-10px)] h-50 bg-amber-200 rounded-sm">
                  <div className="note-title text-center py-2 capitalize font-semibold border-b-2">Here is note one</div>
                  <div className="note-details mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio dolor exercitationem veritatis, quas officia nihil, hic debitis commodi culpa eum possimus tempore. At reprehenderit alias aut recusandae accusantium illo unde?</div>
               </div>
              <div className="note p-2 w-[calc(50%-10px)] h-50 bg-amber-200 rounded-sm">
                  <div className="note-title text-center py-2 capitalize font-semibold border-b-2">Here is note one</div>
                  <div className="note-details mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio dolor exercitationem veritatis, quas officia nihil, hic debitis commodi culpa eum possimus tempore. At reprehenderit alias aut recusandae accusantium illo unde?</div>
               </div>
               <div className="note p-2 w-[calc(50%-10px)] h-50 bg-amber-200 rounded-sm">
                  <div className="note-title text-center py-2 capitalize font-semibold border-b-2">Here is note one</div>
                  <div className="note-details mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio dolor exercitationem veritatis, quas officia nihil, hic debitis commodi culpa eum possimus tempore. At reprehenderit alias aut recusandae accusantium illo unde?</div>
               </div>
               <div className="note p-2 w-[calc(50%-10px)] h-50 bg-amber-200 rounded-sm">
                  <div className="note-title text-center py-2 capitalize font-semibold border-b-2">Here is note one</div>
                  <div className="note-details mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio dolor exercitationem veritatis, quas officia nihil, hic debitis commodi culpa eum possimus tempore. At reprehenderit alias aut recusandae accusantium illo unde?</div>
               </div>
               <div className="note p-2 w-[calc(50%-10px)] h-50 bg-amber-200 rounded-sm">
                  <div className="note-title text-center py-2 capitalize font-semibold border-b-2">Here is note one</div>
                  <div className="note-details mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio dolor exercitationem veritatis, quas officia nihil, hic debitis commodi culpa eum possimus tempore. At reprehenderit alias aut recusandae accusantium illo unde?</div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default App
// import React from 'react'
import { useState } from 'react';
import './App.css';

const App = () => {
  // This are the variables to handle input
  const [title, setTitle] = useState('');

  // This are the variables to handle area content
  const [desc, setDesc] = useState('');

  // This are the Array to handle notes content
  const [nots, setNots] = useState([]);

  // This function is use to add notes to array list
  const submitHandler = (e) => {
    e.preventDefault();
     console.log("form submited");
     setTitle('');
     setDesc('')
     const copy_Notes = [...nots];

     copy_Notes.push({title,desc})

     setNots(copy_Notes);
     console.log(nots);
  }

  // This function is use to delete notes to array list

  const deleteNote = (idex) => { 
    const copy_Notes1 = [...nots];
    copy_Notes1.splice(idex,1)
    setNots(copy_Notes1)
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
            <input type="text" onChange={(e) => { setTitle(e.target.value)}} placeholder='Enter notes Heading' value={title} />
            <textarea name="textareas" onChange={(e) => { setDesc(e.target.value)}} placeholder='Enter notes details' value={desc} className='h-40' id=""></textarea>
            <button className='button w-full'>ADD NOTE</button>
          </form>
          <div className="note-side w-[calc(50%-20px)]">
            <div className="heading-30 !font-bold !text-white text-center">NOTES LIST</div>
            <div className="note-list flex flex-wrap gap-[20px] flex-wrap">
              
                { 
                  nots.map(function(elm,idex){
                      return <>
                        <div key={idex} className="note p-2 w-[calc(50%-10px)] text-center min-h-50 bg-amber-200 rounded-sm">
                            <div className="note-title text-center py-2 capitalize font-semibold border-b-2">{elm.title}</div>
                            <div className="note-details mt-5 text-left">{elm.desc}</div>
                            <button onClick={() => {deleteNote(idex)}} className='button btn-theme !font-normal !mt-10 !bg-white hover:!text-white hover:!bg-black !text-black !p-2 !min-h-auto'>Delet</button>
                        </div>
                      </>
                  })
                }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default App
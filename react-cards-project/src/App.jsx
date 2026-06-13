import React from 'react'
import Card_temp from './components/card'

const jobs = [
  {
    id: 1,
    logo: "https://images.unsplash.com/photo-1563694983011-6f4d90358083?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bG9nb3xlbnwwfHwwfHx8Mg%3D%3D",
    companyName: "TechNova",
    postedDays: "2 days ago",
    jobTitle: "Senior UI/UX Designer",
    tags: ["Full Time", "Senior Level", "Remote"],
    salary: "$45/hr",
    location: "Mumbai, India",
  },
  {
    id: 2,
    logo: "https://images.unsplash.com/photo-1563694983011-6f4d90358083?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bG9nb3xlbnwwfHwwfHx8Mg%3D%3D",
    companyName: "PixelCraft",
    postedDays: "5 days ago",
    jobTitle: "Graphics Designer",
    tags: ["Part Time", "Mid Level"],
    salary: "$30/hr",
    location: "Goa, India",
  },
  {
    id: 3,
    logo: "https://images.unsplash.com/photo-1563694983011-6f4d90358083?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bG9nb3xlbnwwfHwwfHx8Mg%3D%3D",
    companyName: "CodeSphere",
    postedDays: "1 day ago",
    jobTitle: "Frontend Developer",
    tags: ["Full Time", "React", "Remote"],
    salary: "$55/hr",
    location: "Pune, India",
  },
  {
    id: 4,
    logo: "https://images.unsplash.com/photo-1563694983011-6f4d90358083?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bG9nb3xlbnwwfHwwfHx8Mg%3D%3D",
    companyName: "DesignHub",
    postedDays: "3 days ago",
    jobTitle: "Product Designer",
    tags: ["Full Time", "Senior Level"],
    salary: "$60/hr",
    location: "Bangalore, India",
  },
  {
    id: 5,
    logo: "https://images.unsplash.com/photo-1563694983011-6f4d90358083?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bG9nb3xlbnwwfHwwfHx8Mg%3D%3D",
    companyName: "CloudSync",
    postedDays: "4 days ago",
    jobTitle: "React Developer",
    tags: ["Contract", "Remote"],
    salary: "$50/hr",
    location: "Hyderabad, India",
  },
  {
    id: 6,
    logo: "https://images.unsplash.com/photo-1563694983011-6f4d90358083?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bG9nb3xlbnwwfHwwfHx8Mg%3D%3D",
    companyName: "InnoTech",
    postedDays: "7 days ago",
    jobTitle: "UI Developer",
    tags: ["Full Time", "Junior Level"],
    salary: "$35/hr",
    location: "Ahmedabad, India",
  },
  {
    id: 7,
    logo: "https://images.unsplash.com/photo-1563694983011-6f4d90358083?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bG9nb3xlbnwwfHwwfHx8Mg%3D%3D",
    companyName: "BrightWorks",
    postedDays: "6 days ago",
    jobTitle: "Visual Designer",
    tags: ["Part Time", "Creative"],
    salary: "$28/hr",
    location: "Delhi, India",
  },
  {
    id: 8,
    logo: "https://images.unsplash.com/photo-1662947852375-0d45b28ff623?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    companyName: "NextGen Labs",
    postedDays: "1 day ago",
    jobTitle: "Senior Frontend Engineer",
    tags: ["Full Time", "React", "Senior Level"],
    salary: "$65/hr",
    location: "Chennai, India",
  },
  {
    id: 9,
    logo: "https://images.unsplash.com/photo-1563694983011-6f4d90358083?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bG9nb3xlbnwwfHwwfHx8Mg%3D%3D",
    companyName: "DigitalWave",
    postedDays: "8 days ago",
    jobTitle: "UX Researcher",
    tags: ["Remote", "Full Time"],
    salary: "$48/hr",
    location: "Kolkata, India",
  },
  {
    id: 10,
    logo: "https://img.magnific.com/free-vector/logo-template-design_1289-169.jpg?semt=ais_hybrid&w=740&q=80",
    companyName: "Creative Minds",
    postedDays: "10 days ago",
    jobTitle: "Graphic & Brand Designer",
    tags: ["Freelance", "Remote"],
    salary: "$40/hr",
    location: "Jaipur, India",
  },
];
console.log(jobs);
function App() {
  return (
    <>
      <div className='cards-list'>
        <div className="container">
          <div className="parent">
              { 
                jobs.map(function(elem) {
                  return (
                      <Card_temp key={elem.id} company={elem.companyName} postedDays={elem.postedDays} logo={elem.logo} tags={elem.tags} salary={elem.salary} location={elem.location} jobTitle={elem.jobTitle} />
                  )
                }) 
              }
          </div>  
        </div>
      </div>
    </>
  )
}

export default App
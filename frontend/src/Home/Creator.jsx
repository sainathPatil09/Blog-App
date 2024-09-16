import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const Creator = () => {
  const [admin, setAdmin] = useState([])

  useEffect(() => {
    const fetchAdmins = async () => {
      const { data } = await axios.get('http://localhost:4001/api/users/admins',
        {
          withCredentials: true,
        })
      console.log(data)
      setAdmin(data)
    }
    fetchAdmins()
  }, [])

  return (
    <>
      <div  className='w-[88%] justify-between items-center mx-auto p-6'>
        <h1 className='text-2xl font-semibold mb-4'>Popular Creators</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-4'>

        
        {admin && admin.length > 0 ? (
          admin.slice(0, 4).map((element) => {
            { console.log(element) }
            return (
              <div key={element._id}  className='p-3 bg-white border border-gray-400 rounded-lg shadow-md mx-2'>
                
                 
                  <div className="rounded-full overflow-hidden  w-76 shadow-xl bg-white hover:shadow-gray-400 transform hover:scale-105 transition-transform duration-300">
                    <figure className=' group relative'>
                      <img
                        src={element.photo.url} 
                        alt="Photo" />
                    </figure>
                    
                  </div>
                  <div className='text-center'>

                   <h2 className='text-xl font-semibold  mt-2'>{element.name}</h2>
                   <p>{element.role}</p>
                  </div>
              </div>)
          })
        ) : (<div> wasd</div>)}
        </div>
      </div>
    </>
  )
}

export default Creator

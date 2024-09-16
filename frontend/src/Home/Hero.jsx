import React from 'react'
import { useAuth } from '../context/AuthProvider'
import { Link } from 'react-router-dom'


const Hero = () => {
  const { blogs } = useAuth();
  console.log(blogs)
  return (
    <>
      <div className='w-[88%] justify-around items-center mx-auto my-10 p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>


        {blogs && blogs.length > 0 ? (
          blogs.slice(0, 4).map((element) => {
            { console.log(element) }
            return <Link to={`/blog/${element._id}`} key={element._id}
            className='bg-white hover:shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300'
            >
              {/* <div>
            <img src={element.blogImage.url} alt="" />
            <div></div>
            <h1>{element.title}</h1>
          </div>
          <div>
            <img src="" alt="" />
            <p></p>
            <p></p>
          </div> */}
              <div className="rounded-xl overflow-hidden  w-84 shadow-xl">
                <figure className=' group relative'>
                  <img
                    src={element.blogImage.url}
                    alt="Shoes" />
                    <h1 className='absolute text-black font-semibold bottom-4 left-4 text-xl group-hover:text-yellow-400 transition-colors duration-300'>{element.title} </h1>
                </figure>
                <div className="flex p-6 flex-row gap-8">
                  {/* <div>{element.title}</div> */}
                  <img className='w-16 h-16 rounded-full  border-2 border-yellow-300' src={element.adminPhoto} alt="photo" />
                  <div className=''>

                    <p className='text-black text-lg'  >{element.adminName}</p>
                    <p>2</p>
                  </div>

                </div>
              </div>
            </Link>
          })
        ) : (<div> wasd</div>)}

      </div>
    </>
  )
}

export default Hero

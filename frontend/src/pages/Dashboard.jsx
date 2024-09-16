import React, { useState } from 'react'
import { useAuth } from '../context/AuthProvider'
import SideBar from '../dashboard/SideBar';
import MyProfile from '../dashboard/MyProfile'
import CreateBlog from '../dashboard/CreateBlog'
import UpdateBlog from '../dashboard/UpdateBlog'
import MyBlogs from '../dashboard/MyBlogs'

const Dashboard = () => {
  const { profile, isAuthenticated } = useAuth();
  console.log(profile?.photo?.url);
  console.log(isAuthenticated);
  const [component, setComponent] = useState("My Blogs")
  return (
    <>
      <div>
        <div>
          <SideBar component={component} setComponent={setComponent} />
          <div className='md:ml-52 '>

            {component === 'My Profile' ? (<MyProfile />) :
              component === 'Create Blog' ? (<CreateBlog />) :
                component === 'Update Blog' ? (<UpdateBlog />) :
                  (<MyBlogs />)}
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard

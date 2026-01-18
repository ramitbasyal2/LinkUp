import React, { useState } from 'react'
import { dummyUserData } from '../assets/assets'
import { Pencil, X } from 'lucide-react';

const ProfileModal = ({setShowEdit}) => {

    const user = dummyUserData;
    const [editForm, setEditForm] = useState({
        username: user.username,
        bio: user.bio,
        location: user.location,
        profile_picture: null,
        cover_photo: null,
        full_name : user.full_name,
    });

    const handleSaveProfile = async (e)=>{
        e.preventDefault();
    }

  return (
    <div className='fixed top-0 bottom-0 left-0 right-0 z-110 h-screen 
    overflow-y-scroll bg-black/50'>
       <div className='profile-modal max-w-2xl'>
          <div className='profile-contain bg-white rounded-lg shadow'>
              <div className='flex items-center justify-between'>
                 <h1 className='profile-edit text-2xl font-bold text-gray-900'>Edit Profile</h1>
                  <div onClick={()=> setShowEdit(false)} className=
                  'cross-icon bg-slate-100 hover:bg-slate-200 rounded-md cursor-pointer'><X size={30} /></div>
              </div>

               <form className='space-y-4' onSubmit={handleSaveProfile}>
                    {/* Profile picture */}
                    <div className='flex flex-col items-start gap-3'>
                        <label htmlFor="profile_picture" className='edit-label block text-sm
                        font-medium text-gray-700 '>
                            Profile Picture
                            <input hidden type="file" accept='image/*' id='profile_picture'
                            className='input-edit w-full border border-gray-200 rounded-lg'
                            onChange={(e)=>
                            setEditForm({...editForm, profile_picture: e.target.files[0]})} />
                            <div className='group/profile relative'>
                            <img src={editForm.profile_picture ? URL.createObjectURL(editForm.profile_picture)
                                : user.profile_picture} alt="" className='edit-image w-24 h-24 rounded-full object-cover'/>
                              
                              <div className='absolute hidden group-hover/profile:flex top-0 left-0 right-0 right-0 bottom-0
                              bg-black/20 rounded-full items-center justify-center'>
                                <Pencil className='w-5 h-5 text-white' />
                              </div>
                            </div>
                        </label>
                    </div>

                     {/* Cover photo */}
                      <div className='flex flex-col items-start gap-3'>
                        <label htmlFor="cover_photo" className='cover-edit block text-sm font-medium text-gray-700 mb-1'>
                            Cover Photo
                             <input hidden type="file" accept='image/*' id='cover_photo'
                             className=' w-full p-3 border border-gray-200 rounded-lg'
                             onChange={(e)=> setEditForm({...editForm, cover_photo: e.target.files[0]})}/>
                              <div className='group/cover relative'>
                                 <img src={editForm.cover_photo ? URL.createObjectURL(editForm.cover_photo) : user.cover_photo}
                                 className='cover-img w-80 h-40 rounded-lg bg-gradient-to-r from-indigo-200 via-purple-200
                                 to-pink-200 object-cover' alt="" />

                                 <div className=' absolute hidden group-hover/cover:flex top-0 left-0
                                 right-0 bottom-0 bg-black/20 rounded-lg items-centerjustify-center'>
                                  <div className='icon'><Pencil className='w-5 h-5 text-white '/></div>
                                 </div>
                                </div>     
                        </label>
                      </div>
                      {/* details fullname and other */}
                      <div>
                            <label className='user-label block text-sm font-medium text-gray-700 mb-1' htmlFor="">
                                Name
                            </label>
                            <input type="text" className='user-input w-full border border-gray-200 rounded-lg'
                            placeholder='Please enter your full name' onChange={(e)=>
                            setEditForm({...editForm, full_name: e.target.value})} value={editForm.full_name} />
                      </div>
                       <div>
                            <label className='user-label block text-sm font-medium text-gray-700 mb-1' htmlFor="">
                                Username
                            </label>
                            <input type="text" className='user-input w-full border border-gray-200 rounded-lg'
                            placeholder='Please enter a username' onChange={(e)=>
                            setEditForm({...editForm, username: e.target.value})} value={editForm.username} />
                      </div>
                       <div>
                            <label className='user-label block text-sm font-medium text-gray-700 mb-1' htmlFor="">
                                Bio
                            </label>
                            <textarea rows={3} className='user-input w-full  border border-gray-200 rounded-lg'
                            placeholder='Please enter a bio' onChange={(e)=>
                            setEditForm({...editForm, bio: e.target.value})} value={editForm.bio} />
                      </div>
                      <div>
                            <label className='user-label block text-sm font-medium text-gray-700 mb-1' htmlFor="">
                             Location
                            </label>
                            <input type="text" className='user-input w-full border border-gray-200 rounded-lg'
                            placeholder='Please enter your location' onChange={(e)=>
                            setEditForm({...editForm, location: e.target.value})} value={editForm.location} />
                      </div>

                      <div className='contain-btn flex justify-end gap-4'>
                          
                          <button onClick={()=> setShowEdit(false)} type='button' className='btn border borrder-gray-300 rounded-lg
                          text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer'>Cancel</button>
                          <button type='submit' className='btn bg-gradient-to-r from-indigo-500 to-purple-600 
                          text-white rounded-lg hover:from-indigo-600
                          hover:to-purple-700 transition cursor-pointer'>Save Changes</button>
                      </div>
               </form>
          </div>
       </div>

    </div>
  )
}

export default ProfileModal
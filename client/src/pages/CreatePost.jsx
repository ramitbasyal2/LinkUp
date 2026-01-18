import React, { useState } from 'react'
import { dummyUserData } from '../assets/assets'
import { Image, X } from 'lucide-react'
import toast from 'react-hot-toast'

const CreatePost = () => {

const [content, setCotent] = useState('')
const [images, setImages] = useState([])
const [loading, setLoading] = useState(false)


const user = dummyUserData 

const handleSubmit = async ()=>{

}

  return (
    <div className='min-h-screen bg-gradient-to-b from-slate-50 to-white'>
      <div className='create max-w-6xl mx-auto'> 
        {/* title */}
          <div className='title'>
              <h1 className='title-p text-3xl font-bold text-slate-900 '>Create Post</h1>
              <p className='text-slate-600'>Share your thoughts with the world</p>
          </div>

          {/* form */}
          <div className='form max-w-xl bg-white smm:p-4 sm:pb-3 rounded-xl shadow-md space-y-4'>
          {/* Header */}
            <div className='flex items-center gap-3'>
              <img src={user.profile_picture} alt="" className='w-12 h-12 rounded-full shadow' />
              <div>
                <h2 className='font-semibold'>{user.full_name}</h2>
                <p className='text-sm text-gray-500'>@{user.username}</p>
              </div>
            </div>

            {/* text Area  */}
            <textarea className='textarea w-full resize-none max-h-20 text-sm outline-none placeholder-gray-400'
             placeholder=" What's happening " onChange={(e)=> setCotent(e.target.value)} value={content} />

             {/* Images */}
            {
              images.length > 0 && <div className='images flex flex-wrap gap-2'>
                {images.map((image,i)=>(
                  <div key={i} className='relative group'>
                    <img src={URL.createObjectURL(image)} className='h-20 rounded-md' alt=""/>
                    <div onClick={()=> setImages(images.filter((_, index)=> index !== i))} className='absolute inset-0 hidden group-hover:flex justify-center items-center top-0 
                    right-0 bottom-0 left-0 bg-black/40 rounded-md cursor-pointer'>
                      <X className='w-6 h-6 text-white'/>

                    </div>

                  </div>
                ))}
              </div>
            }

            {/* Bottom bar */}
            <div className='bottom-bar flex items-center justify-between border-t 
            border-gray-300'>
              <label htmlFor="images" className='flex items-center gap-2 text-sm 
              text-gray-500 hover:text-gray-700 transition cursor-pointer'>
                <Image className='size-6'/>
              </label>
              <input type="file" id='images' accept='images/*' hidden multiple
              onChange={(e)=> setImages([...images, ...e.target.files])} />

              <button disabled={loading} onClick={()=> toast.promise(
                handleSubmit(),
                {
                  loading: 'uploading...',
                  success: <p>Post Added</p>,
                  error: <p>Post Not Added</p> 
                }
              )} className='publish-btn text-sm bg-gradient-to-r from-indigo-500 to-purple-600
              hover:from-indiggo-600 hover:to-purple-700 active:scale-95 transition text-white font-medium
              rounded-md cursor-pointer'>
               Publish Post
              </button>

            </div>

          </div>

      </div>
 

    </div>
  )
}

export default CreatePost
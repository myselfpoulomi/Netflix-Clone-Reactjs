import React from 'react'
import youtube_icon from './../assets/youtube_icon.png'
import twitter_icon from './../assets/twitter_icon.png'
import instagram_icon from './../assets/instagram_icon.png'
import facebook_icon from './../assets/facebook_icon.png'

function Footer() {
  return (
    <div className='py-[30px] px-[4%] w-[100%] mx-auto my-0 flex flex-col mt-[100px] md:pl-[120px] pl-[30px]'>
      <div className='flex gap-[20px] my-[40px] mx-0'>
        <img src={facebook_icon} alt="" className='md:w-[50px] cursor-pointer w-[30px]'/>
        <img src={instagram_icon} alt="" className='md:w-[50px] cursor-pointer w-[30px]'/>
        <img src={twitter_icon} alt="" className='md:w-[50px] cursor-pointer w-[30px]'/>
        <img src={youtube_icon} alt="" className='md:w-[50px] cursor-pointer w-[30px]'/>
      </div>
      <ul className='md:grid grid-cols-auto-4 gap-[20px] mb-[30px] list-none flex flex-col'>
        <li>Audio Description</li>
        <li>Help Centre</li>
        <li>Gift Cards</li>
        <li>Media Centre</li>
        <li className='hidden md:block'>Investor Relations</li>
        <li className='hidden md:block'>Jobs</li>
        <div className='my-[10px] md:hidden'>

        </div>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li className='hidden md:block'>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li className='hidden md:block'>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className='text-gray-400 text-[14px]'>&#169; 1997-2024 Netflix , Inc.</p>
    </div>
  )
}

export default Footer
import React from 'react'
import dark_amazon from "../assets/dark_amazon'.png"
import darkbooking from "../assets/dark-booking.png"
import cnn_disguised from "../assets/cnn_disguised add.png"
import godaddy from "../assets/godaddy.png"
import etsy from "../assets/etsy.png"
import price from "../assets/price comparision.png"
import sneak from "../assets/sneak into basket.png"
import misdirection from "../assets/misdirection.png"
import insta from "../assets/insta.jpg"

const DarkPatternPage = () => {


  const data =[
    {
        h:"Amazon (Hidden Costs)",
        p:"Amazon sometimes includes additional fees, such as shipping costs or taxes, during the checkout process, which may not be clearly disclosed upfront.",
        img:dark_amazon
    },
    {
        h:"Booking.com(Urgency)",
        p:"Booking.com often uses tactics such as displaying \"Only 1 room left at this price!\" to create a sense of urgency and pressure users into making a booking decision quickly.",
        img:darkbooking
    },
    {
        h:"CNN(Disguised Ads)",
        p:"CNN displays sponsored posts in users' newsfeeds, often blending seamlessly with organic content, making it difficult to distinguish between sponsored content and genuine posts.",
        img:cnn_disguised
    },
    {
        h:"GoDaddy(Roach Motel)",
        p:"GoDaddy's domain registration process may include pre-selected options for additional services or auto-renewals, making it challenging for users to opt-out or cancel these services later.",
        img:godaddy
    },
    {
        h:"Etsy(Forced Continuity)",
        p:"Etsy offers free trials for its premium subscription services, but users may be automatically enrolled in a paid subscription after the trial period ends, without clear disclosure or easy cancellation options.",
        img:etsy
    },
    {
        h:"Instagram(Privacy Zuckering)",
        p:"Instagram's privacy settings may be presented in a confusing or misleading manner, making it difficult for users to understand and control the visibility of their personal information and activity on the platform..",
        img:insta
    },
    {
        h:"Sneak into Basket",
        p:"it involves adding items to a user's shopping cart without their explicit consent or knowledge. This often occurs when users interact with checkboxes or buttons that are pre-selected by default, resulting in unwanted items being added to their purchase.",
        img:sneak
    },
    {
        h:"Price Comparison Prevention",
        p:"Websites employing this dark pattern intentionally make it difficult for users to compare prices with competitors by hiding pricing. This tactic aims to discourage users from seeking better deals elsewhere, ultimately leading to higher profits for the website.",
        img:price
    },
    {
        h:"Misdirection",
        p:"it involves using visual cues or manipulative design  to divert users' attention away from important information or actions. For example, websites may use flashy graphics or pop-ups to distract users from noticing hidden fees or unfavorable terms and conditions.",
        img:misdirection
    },
  ]



  return (
    <main className=' w-full bg-[#0a051d] absolute top-0 left-0'>

      <div className=' w-full min-h-screen bg-gradient-to-b to-[#675bc6] from-[#09051c] pt-24'>


      <h1 className=' text-center text-8xl font-bold mt-20'>Dark Pattern Directory</h1>

      <p className='text-2xl font-medium text-center px-28 mt-16 '>Welcome to our Dark Pattern Directory, where we highlight websites known for employing deceptive design tactics. Stay informed and protect yourself from manipulative practices by exploring the list below.</p>


        <div className=' flex flex-wrap gap-20 justify-center py-24'>

          {
            data.map((p,i)=>(
              <div key={i} className='h-[60vh] w-[25rem] rounded-2xl overflow-hidden'>
              <img src={p.img}  className='h-[60%] w-full object-cover object-center' alt="" />
                <div className='h-[40%] py-2 text-slate-200 bg-[#1d1d22ee] px-5 flex flex-col justify-center gap-3'>
                  <h1 className='text-2xl font-medium'>{p.h}</h1>
                  <p className=' leading-5'>{p.p}</p>
                </div>
            </div>
            ))
          }



              <h1 className='text-black font-bold text-7xl'>more coming soon...</h1>
          
           


        </div>


      </div>

          

    </main>
  )
}

export default DarkPatternPage
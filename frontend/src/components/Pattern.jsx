import React from 'react'
import Product from './Product.jsx'
import bas from '../assets/bait-and-switch.png'
import rm from '../assets/roach motel.png'
import frsp from '../assets/friendly spam.png'
import hc from '../assets/hidden cost.png'
import disads from '../assets/disguised-ads-example-of-dark-patterns.png'

const Pattern = () => {

    const data = [
        {
          title: "Disguised Ads",
          desc: "Disguised ads blend seamlessly with the content of a website, making it difficult for users to distinguish between sponsored content and genuine information. These ads often mislead users into clicking on them, thinking they are part of the website's content.",
          clr:`from-violet-600 to-violet-400`,
          img:disads
          
        },
        {
          title: "Bait-and-Switch",
          desc: "This dark pattern involves luring users with a desirable offer or feature, only to switch it with something less favorable upon closer inspection or during the checkout process. Examples include advertising a product at a discounted price but revealing hidden fees at checkout.",
          img:bas,
          clr:`from-sky-500 to-sky-400`
        },
        {
          title: "Roach Motel",
          desc: "In a roach motel, it's easy for users to get into a situation but difficult to get out of it. This can manifest in various forms, such as subscription services with complicated cancellation processes or free trials that automatically convert into paid subscriptions without clear disclosure.",
          img:rm,
          clr:`from-emerald-500 to-emerald-400`
        },
        {
          title: "Friend Spam",
          desc: "Friend spam exploits users' contact lists or social networks to send unsolicited invitations or messages to their friends, often without their knowledge or consent. This tactic leverages social pressure to increase engagement but can lead to privacy concerns and annoyance among users.",
          img:frsp,
          clr:`from-orange-500 to-orange-400`
        },
        {
          title: "Hidden Costs",
          desc: "Hidden costs involve concealing additional fees or charges until the final stages of a transaction, deceiving users about the true cost of a product or service. This can include shipping fees, taxes, or add-on charges that are not clearly disclosed upfront.",
          img:hc,
          clr:`from-rose-500 to-rose-400`
        },
      ];


    
  return (
    <section>
      {data.map((product, i) => (
        <Product data={product} key={i} />
      ))}
    </section>
  )

}

export default Pattern
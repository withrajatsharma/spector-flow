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
          img:disads,
          clr:`from-rose-500 to-rose-400`
        },
        {
          title: "Privacy Zuckering",
          desc: "Privacy Zuckering manipulates users into sharing more personal information than they initially intended by presenting privacy settings in a confusing or misleading manner. This tactic exploits users' trust and lack of understanding about privacy settings to gather valuable data for targeted advertising or other purposes.",
          img:bas,
          clr:`from-violet-600 to-violet-400`
        },
        {
          title: "Sneak into Basket",
          desc: "Sneak into basket involves adding items to a user's shopping cart without their explicit consent or knowledge. This often occurs when users interact with checkboxes or buttons that are pre-selected by default, resulting in unwanted items being added to their purchase.",
          img:rm,
          clr:`from-sky-500 to-sky-400`
        },
        {
          title: "Price Comparison Prevention",
          desc: "Websites employing this dark pattern intentionally make it difficult for users to compare prices with competitors by obfuscating or hiding pricing information. This tactic aims to discourage users from seeking better deals elsewhere, ultimately leading to higher profits for the website.",
          img:frsp,
          clr:`from-emerald-500 to-emerald-400`
        },
        {
          title: "Misdirection",
          desc: "Misdirection involves using visual cues or manipulative design elements to divert users' attention away from important information or actions. For example, websites may use flashy graphics or pop-ups to distract users from noticing hidden fees or unfavorable terms and conditions.",
          img:disads,
          clr:`from-orange-500 to-orange-400`
        },
        {
          title: "Forced Continuity",
          desc: "Forced continuity tricks users into signing up for ongoing subscriptions or memberships by offering a one-time deal or free trial with unclear terms. Once the initial period ends, users are automatically enrolled in a paid subscription without their explicit consent.",
          img:bas,
          clr:`from-rose-500 to-rose-400`
        },
        {
          title: "Urgency",
          desc: "Urgency tactics create a sense of urgency or scarcity to pressure users into making immediate decisions. This can include countdown timers, limited-time offers, or stock availability notifications, compelling users to act quickly without fully considering their options.",
          img:rm,
          clr:`from-violet-600 to-violet-400`
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
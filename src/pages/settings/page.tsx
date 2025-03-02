import Image from 'next/image'
import React from 'react'

const Settings = () => {
  return (
    <section>
        <div className="title">
            SkateBoards
        </div>
  

       <div className="description">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, quisquam?
       </div>

       <div className="img">
          <Image src="/prismic/Suburbia-OG.png" alt="skateboard" width={500} height={500} />
       </div>

       <div className="navigation">

       </div>
    </section>
  )
}

export default Settings

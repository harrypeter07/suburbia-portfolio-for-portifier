import Image from 'next/image';
import React from 'react'

type Props = {
    foregroundImage: string;
    backgroundImage: string;
    className?: string;
}

export  function ParallaxImage({
    foregroundImage,
    backgroundImage,
    className
}: Props) {
  return (
    <div>
        
        	<div className="backgroundImage">
					<Image
						src={backgroundImage}
						height={300}
						width={300}
						alt="bg-image"
					/>
				</div>
                <div className="foreGroundImage">
					<Image
						src={foregroundImage}
						height={300}
						width={300}
						alt="bg-image"
					/>
				</div>
    </div>
  )
}
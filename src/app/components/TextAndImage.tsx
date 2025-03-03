                      import React from 'react'
import { Heading } from './Heading'
import Image from 'next/image'
import { ButtonLink } from './ButtonLink'
                      
                      const TextAndImage = () => {
                        return (
                            //this section should have four types of themes that will come as props , blue , orange, lime , Navy

                            //also two varitions one will image on left and other image on right variation 

                            //if theme is blue then bg-color should be bg-texture bg-brand-blue and text-white
                            //if theme is orange then bg-color should be bg-texture bg-brand-orange and text-white
                            //if theme is lime then bg-color should be bg-texture bg-brand-lime and text-white
                            //if theme is navy then bg-color should be bg-texture bg-brand-navy and text-white
                          <section>
                            
                              <Heading as='h2'>
                                TEXT

                              </Heading>

                              <div className="body">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, enim?
                              </div>

                              <div className="button">
                                {/* <ButtonLink href='/'>
                                            Buy
                                </ButtonLink> */}
                              </div>

                              <div className="bgImage">
                                <Image
                                src="/prismic/paint-background.png"
                                height={300}
                                width={300}
                                alt='bg-imagee'/>
                              </div>

                              <div className="foreGroundImage">
                              <Image
                                src="/prismic/guy-1.png"
                                height={300}
                                width={300}
                                alt='bg-imagee'/>
                              </div>


                          </section>
                        )
                      }
                      
                      export default TextAndImage
                                                                                                                        
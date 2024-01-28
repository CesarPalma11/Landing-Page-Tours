import React from 'react'
import image from '../../assets/about-us-banner-sitecore.avif'
import './About.css'
import yateImg from '../../assets/yate.jpg'
import imageCasa from '../../assets/casa-playa.jpg'
import imageBote from '../../assets/persona-bote.jpg'
const About = () => {
  return (
    <>
    <section className='container-about'>
        <img src={image} alt='img'className='image-crucero-banner'/>

        <div className='content-about'>
            <h1>Empresa Tours</h1>
            <h3>Learn More About What We Do</h3>
            <div className='col-md-9 col-lg-7 col-xl-8 x-auto mt-4'>
            <p>This is a paragraph. You can write your own content here, and fill in the blanks. What's your story and where do you go from here?
                 Tell the world about your business, and make this text yours. This is a paragraph. You can write your own content here, and fill
                  in the blanks. What's your story and where do you go from here? Tell the world about your business, and make this text yours. This is a paragraph.
                 You can write your own content here, and fill in the blanks. What's your story and where do you go from here? Tell the world about your business
                 , and make this text yours.</p>

            <p>This is a paragraph. You can write your own content here, and fill in the blanks. What's your story and where do you go from here? Tell the world about
                 your business, and make this text yours. This is a paragraph. You can write your own content here, and fill in the blanks. What's your story and where
                  do you go from here? Tell the world about your business, and make this text yours. This is a paragraph. You can write your own content here, and fill
                   in the blanks. What's your story and where do you go from here? Tell the world about your business, and make this text yours. This is a paragraph.
                You can write your own content here, and fill in the blanks. What's your story and where do you go from here? Tell the world about your business,
                    and make this text yours. This is a paragraph. You can write your own content here, and fill in the blanks. What's your story and where do you go
                    from here? Tell the world about your business, and make this text yours. This is a paragraph. You can write your own content here, and fill in the
                    blanks. What's your story and where do you go from here? Tell the world about your business, and make this text yours. This is a paragraph.
                    You can write your own content here, and fill in the blanks. What's your story and where do you go from here? Tell the world about your business,
                        and make this text yours.</p>
            <p>This is a paragraph. You can write your own content here, and fill in the blanks. What's your story and where do you go from here? Tell the world about your
                 business, and make this text yours. This is a paragraph. You can write your own content here, and fill in the blanks. What's your story and where do you go
                  from here? Tell the world about your business, and make this text yours. This is a paragraph. You can write your own content here, and fill in the blanks.
                   What's your story and where do you go from here? Tell the world about your business, and make this text yours. This is a paragraph. You can write your 
                   own content here, and fill in the blanks. What's your story and where do you go from here? Tell the world about your business, and make this text yours.</p>

            <p>This is a paragraph. You can write your own content here, and fill in the blanks. What's your story and where do you go from here? Tell the world about your business,
                 and make this text yours.</p>      

             
            </div>
        <img src={yateImg} alt='yate' className='img-yate' style={{marginTop:'3rem', marginBottom:'3rem'}}></img>    

            <div className='col-md-9 col-lg-7 col-xl-8 x-auto mt-4'>
                <p>This is a paragraph. You can write your own content here, and fill in the blanks. What's your story and where do you go from here? Tell the world about your business,
                and make this text yours. This is a paragraph. You can write your own content here, and fill in the blanks. What's your story and where do you go from here? Tell 
                the world about your business, and make this text yours. This is a paragraph. You can write your own content here, and fill in the blanks. What's your story
                and where do you go from here? Tell the world about your business, and make this text yours.</p>

                <p>This is a paragraph. You can write your own content here, and fill in the blanks. What's your story and where do you go from here? Tell the world about your business,
                     and make this text yours. This is a paragraph. You can write your own content here, and fill in the blanks. What's your story and where do you go from here? Tell
                      the world about your business, and make this text yours. This is a paragraph. You can write your own content here, and fill in the blanks. What's your story and
                       where do you go from here? Tell the world about your business, and make this text yours. This is a paragraph. You can write your own content here, and fill in
                        the blanks. What's your story and where do you go from here? Tell the world about your business, and make this text yours.
                         This is a paragraph. You can write your own content here, and fill in the blanks. What's your story and where do you go from here?
                          Tell the world about your business, and make this text yours. This is a paragraph. You can write your own content here,
                           and fill in the blanks. What's your story and where do you go from here? Tell the world about your business, and make this text yours. 
                           this is a paragraph. You can write your own content here, and fill in the blanks. What's your story and where do you go from here? 
                           Tell the world about your business, and make this text yours. This is a paragraph. You can write your own content here, and fill in
                            the blanks. What's your story and where do you go from here? Tell the world about your business, and make this text yours. This is 
                            a paragraph. You can write your own content here, and fill in the blanks. What's your story and where do you go from here?
                             Tell the world about your business, and make this text yours. This is a paragraph. You can write your own content here,
                              and fill in the blanks. What's your story and where do you go from here? Tell the world about your business, and make this text yours.
                              This is a paragraph. You can write your own content here, and fill in the blanks. What's your story and where do you go from here? 
                              Tell the world about your business, and make this text yours.</p>
            </div>
            <div class="contenedor two-columns">
                <article class="two-images">
                    <img src={imageBote} alt='img' className='image-edit'/>
                </article>
                <article class="two-images">
                    <img src={imageCasa} alt='img' className='image-edit'/>
                </article>
            </div>
        </div>
    </section>
    </>
  )
}

export default About
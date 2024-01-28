import React from 'react'
import imageTour from '../../assets/image-bote.jpg'
import './Tours.css'
import { Link } from 'react-router-dom'
const Tours = () => {
  return (
    <>

    <img src={imageTour} alt='yojye' className='image-tour-banner'></img>

    <div className='content-about-tours'>
            <h1 style={{color:'#3b83bd'}}>Chartered Adventures</h1>
            <h3>Learn More About What We Do</h3>
            <div className='col-md-9 col-lg-7 col-xl-8 x-auto mt-4'>
            <p>This is a paragraph. You can write your own content here, and fill in the blanks. What's your story and where do you go from here?
                 Tell the world about your business, and make this text yours. This is a paragraph. You can write your own content here, and fill
                  in the blanks. What's your story and where do you go from here? Tell the world about your business, and make this text yours. This is a paragraph.
                 You can write your own content here, and fill in the blanks. What's your story and where do you go from here? Tell the world about your business
                 , and make this text yours.</p>
      </div>
    </div>
    <div class="contenedor tres-columnas">
        <article class="entrada-blog">
            <h1>Guided Tours</h1>
            <img src={imageTour} alt='img'/>
            <p>Maecenas maximus urna vitae nisl semper, id volutpat ipsum scelerisque. Aenean nec ipsum finibus, eleifend dolor at, venenatis risus. Quisque varius orci et augue scelerisque luctus.</p>
            <Link to='/contact' >Book Now</Link>
        </article>

        <article class="entrada-blog">
            <h1>Custom Charters</h1>
            <img src={imageTour} alt='img'/>

            <p>Maecenas maximus urna vitae nisl semper, id volutpat ipsum scelerisque. Aenean nec ipsum finibus, eleifend dolor at, venenatis risus. Quisque varius orci et augue scelerisque luctus.</p>
            <Link to='/contact' >Book Now</Link>
        </article>

        <article class="entrada-blog">
            <h1>Private Charters</h1>
            <img src={imageTour} alt='img'/>

            <p>Maecenas maximus urna vitae nisl semper, id volutpat ipsum scelerisque. Aenean nec ipsum finibus, eleifend dolor at, venenatis risus. Quisque varius orci et augue scelerisque luctus.</p>
            <Link to='/contact' >Book Now</Link>
        </article>

        <article class="entrada-blog">
            <h1>Leisure Cruises</h1>
            <img src={imageTour} alt='img'/>

            <p>Maecenas maximus urna vitae nisl semper, id volutpat ipsum scelerisque. Aenean nec ipsum finibus, eleifend dolor at, venenatis risus. Quisque varius orci et augue scelerisque luctus.</p>
            <Link to='/contact' >Book Now</Link>
        </article>
    </div>
    </>
  )
}

export default Tours
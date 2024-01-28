import React from 'react'
import './Hero.css'
import videoBg from '../../assets/fondo.mp4'
import imageSup from '../../assets/playa-sup.jpg'
import imageBote from '../../assets/image-bote.jpg'
import imageCasa from '../../assets/casa-playa.jpg'
import imagePlaya from '../../assets/playa-two.jpg'
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <>
    <div className='main'>
        <video src={videoBg} autoPlay loop muted />
        <div className="content">
            <h1 style={{fontWeight:'700',fontSize:'50px'}}>Welcome</h1>
            <h2 style={{color:'#fff', fontWeight:'bold'}}>Dive into Adventure with Our Boat Tours — Book Today!</h2>
            <p className='card-text'>This is a paragraph. You can write your own content here, and fill in the blanks.</p>
            <p className='card-text'>What's your story and where do you go from here? Tell the world about your business, and make this text yours.</p>
            <div className='btn-hero'>
                <Link to='/tours' target='_parent'><button className='btn btn-dark'>Learn More</button></Link>
                <Link to='/contact' target='_parent'><button className='btn btn-second'>Book A Tour</button></Link>
            </div>
        </div>
        





        <div class="contenedor dos-columnas color">
        <article class="entrada-blog">
          <div className='container-text'>
            <h1>Titulo Entrada Blog</h1>
            <p>Maecenas maximus urna vitae nisl semper, id volutpat ipsum scelerisque. Aenean nec ipsum finibus, eleifend dolor at, venenatis risus. Quisque varius orci et augue scelerisque luctus.</p>
            <Link to='/about' target='_parent'>Learn More</Link>
            </div>
        </article>
        <article class="entrada-blog">
            <img src={imageSup} alt='img' className='image-enter'/>
        </article>
    </div>
       
    </div>
    

    



  <div className='outsites'>
    <h1>Our sites</h1>
    
    </div>
    
    <div class="contenedor dos-columnas">
        <article class="entrada-blog">
            <img src={imageBote} alt='img' className='image-enter'/>
        </article>
        <article class="entrada-blog">
          
          <div className='container-text'>
            <h1>Titulo Entrada Blog</h1>
            <p>Maecenas maximus urna vitae nisl semper, id volutpat ipsum scelerisque. Aenean nec ipsum finibus, eleifend dolor at, venenatis risus. Quisque varius orci et augue scelerisque luctus.</p>
            <Link to='/contact' target='_parent'>Learn More</Link>
            </div>
        </article>
    </div>



    <div class="contenedor dos-columnas reverse">
    <article class="entrada-blog">
          <div className='container-text'>
            <h1>Titulo Entrada Blog</h1>
            <p>Maecenas maximus urna vitae nisl semper, id volutpat ipsum scelerisque. Aenean nec ipsum finibus, eleifend dolor at, venenatis risus. Quisque varius orci et augue scelerisque luctus.</p>
            <Link to='/contact' target='_parent'>Learn More</Link>
            </div>
        </article>
        <article class="entrada-blog">
            <img src={imageCasa} alt='img' className='image-enter'/>
        </article>
    </div>



    
    <div class="contenedor dos-columnas">
        <article class="entrada-blog">
          <div className='image-change'>
            <img src={imagePlaya} alt='img' className='image-enter'/>
            </div>
        </article>
        <article class="entrada-blog">
          
          <div className='container-text'>
            <h1>Titulo Entrada Blog</h1>
            <p>Maecenas maximus urna vitae nisl semper, id volutpat ipsum scelerisque. Aenean nec ipsum finibus, eleifend dolor at, venenatis risus. Quisque varius orci et augue scelerisque luctus.</p>
            <Link to='/contact' target='_parent'>Learn More</Link>
          </div>
        </article>
    </div>



    
    </>
  )
}

export default Hero
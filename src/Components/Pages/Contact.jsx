import React from 'react'
import imageBeach from '../../assets/playa-2.webp'
import './Contact.css'
const Contact = () => {
  return (
    <>
    <div className='container-all'>
      <img src={imageBeach} alt='img' className='image-header'></img>
      <div className="form-area">
        <div className="container">
          <div className="row single-form g-0">
            <div className="col-sm-12 col-lg-6">
              <div className="left">
              <span className='span-h'>Contact Us</span>
                <h2> We're looking forward to hearing from you. This is a paragraph. You can write your own content here, and fill in the blanks. 
                What's your story and where do you go from here? Tell the world about your business, and make this text yours.</h2>
              </div>
            </div>
            <div className="col-sm-12 col-lg-6">
              <div className="right">
                <form>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Your Name</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" class="form-text"></div>
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Email Address</label>
                    <input type="email" class="form-control" id="exampleInputPassword1"/>
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Message</label>
                    <textarea class="form-control" id="exampleInputPassword1"/>
                  </div>
                  
                  <button type="submit" class="btn btn-primary">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Contact
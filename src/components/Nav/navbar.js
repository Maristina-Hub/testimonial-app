import './nav.modules.css'
import logo from '../../images/Vasiti-Logo-black 1.svg'
import testimonialImg1 from '../../images/Group 81.svg'
import beautifulLadies from '../../images/black-beautiful-ladies-smiling 1.svg'
import vector3 from '../../images/Vector 3.svg'
import ellipse1 from '../../images/Ellipse 22.svg'
import ellipse2 from '../../images/Ellipse 23.svg'
import ellipse3 from '../../images/Ellipse 24.svg'
import ellipse4 from '../../images/Ellipse 22 (1).svg'
import ellipse5 from '../../images/Ellipse 23 (1).svg'
import ellipse6 from '../../images/Ellipse 24 (1).svg'
import ellipse8 from '../../images/woman-shoppingbag-card 1.svg'
import vendorImg1 from '../../images/vendorImg-1.svg'
import vendorImg2 from '../../images/vendorImg-2.svg'
import vendorImg3 from '../../images/vendorImg-3.svg'
import vendorImg4 from '../../images/vendorImg-4.svg'
import vendorImg5 from '../../images/vendorImg-5.svg'
import vendorImg6 from '../../images/vendorImg-6.svg'
import footerImg from '../../images/footerImg.svg'

const NavBar = () => {
  return (
    <>
      <div className='NavBar-Container'>
        <div className='topBar'>
          <div className='logo'>
            <img src={logo} alt='Vasiti-Logo' />
          </div>

          <div className='links'>
            <span className='bottomlink'>
              <a href='/about'>ABOUT US</a>
            </span>
            <span className='bottomlink'>
              <a href='/stories'>STORIES</a>
            </span>
            <span className='bottomlink'>
              <a href='/contact'>CONTACT</a>
            </span>
            <span className='bottomlink'>
              <a href='/login'>LOG IN </a>
            </span>
            <button>
              <a href='/signup'>SIGN UP </a>
            </button>
          </div>
        </div>

        <div className='bottomBar'>
          <span className='bottomlink'>
            <a href='/marketplace'>MARKETPLACE</a>
          </span>
          <span className='bottomlink'>
            <a href='wholesaleCenter'>WHOLESALE CENTER</a>
          </span>
          <span className='bottomlink'>
            <a href='/sellerCenter'>SELLER CENTER</a>
          </span>
          <span className='bottomlink'>
            <a href='/services'>SERVICES</a>
          </span>
          <span className='bottomlink'>
            <a href='marketplace'>MARKETPLACE</a>
          </span>
          <span className='bottomlink'>
            <a href='/internship'>INTERNSHIP</a>
          </span>
          <span className='bottomlink'>
            <a href='/events-'>EVENTS</a>
          </span>
        </div>
      </div>

      <div className='body'>
        <div className='left'>
          <div className='title'>
            <span>
              Amazing <br /> Experiences from Our Wonderful Customers
            </span>
          </div>
          <div className='subtitle'>
            <span>
              Here is what customers and vendors are saying about us, you can
              share your stories with us too.
            </span>
          </div>
        </div>

        <div className='right'>
          <img src={testimonialImg1} alt='' />
        </div>
      </div>

      <div className='body2'>
        <div className='experience'>
          <img src={beautifulLadies} alt='' />
        </div>

        <div className='experience2'>
          <span className='customer-experience'>Tolu & Joy’s Experience</span>
          <span className='customer'>CUSTOMER</span>
          <span className='experince-story'>
            I had the best experience shopping with vasiti. Usability of the
            website was great, very good customer service, an all round great
            experience. I would definately be coming back! I had the best
            experience shopping with vasiti. Usability of the website was great,
            very good customer service, an all round great experience. I would
            definately be coming back!
          </span>
          <span className='share'>Share your own story!</span>
          <object
            id='svgObject'
            className='shareimg'
            alt='rectangular-line'
            aria-labelledby='svg'
            data={vector3}
            type='image/svg+xml'
            height='10'
            width='170'
          />
        </div>
      </div>

      <div className='body3'>
        <br />
      </div>

      <div className='body4'>
        <div className='gallery'>
          <img src={ellipse1} alt='ellipse1' />

          <div>Joseph Ike</div>
          <div>
            Ikeja
            <span>Customer</span>
          </div>

          <div className='desc'>
            Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt
            qui esse pariatur duis deserunt mollit dolore cillum minim tempor
            enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut
            voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex
            duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt
            mollit dolore cillum minim tempor enim.
          </div>
        </div>

        <div className='gallery'>
          <img src={ellipse2} alt='ellipse2' />
          <div>Adetola Fashina</div>
          <div>
            Ikeja
            <span>Customer</span>
          </div>

          <div className='desc'>
            Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt
            qui esse pariatur duis deserunt mollit dolore cillum minim tempor
            enim. Elit aute irure tempor cupidatat incididunt sint deser unt ut
            voluptate aute id deserunt nisi. Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint. Velit officia consequat
            duis enim velit mollit. Exercitation veniam consequat sunt nostrud
            amet.
          </div>
        </div>

        <div className='gallery'>
          <img src={ellipse3} alt='ellipse3' />
          <div>Emmanuel Fayemi</div>
          <div>
            Ikeja
            <span>Customer</span>
          </div>

          <div className='desc'>
            Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt
            qui esse pariatur duis deserunt mollit dolore cillum minim tempor
            enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut
            voluptate aute id deserunt nisi. Elit aute irure tempor cupidatat
            incididunt sint deser unt ut voluptate aute id deserunt nisi. Amet
            minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
          </div>
        </div>

        <div className='gallery'>
          <img src={ellipse4} alt='ellipse4' />
          <div>Chisom Obilor</div>
          <div>
            Ikeja
            <span>Customer</span>
          </div>

          <div className='desc'>
            Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt
            qui esse pariatur duis deserunt mollit dolore cillum minim tempor
            enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut
            voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex
            duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt
            mollit dolore cillum minim tempor enim.
          </div>
        </div>

        <div className='gallery'>
          <img src={ellipse5} alt='ellipse5' />
          <div>Adunoluwa Adeyemi</div>
          <div>
            Ikeja
            <span>Customer</span>
          </div>

          <div className='desc'>
            Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt
            qui esse pariatur duis deserunt mollit dolore cillum minim tempor
            enim. Elit aute irure tempor cupidatat incididunt sint deser unt ut
            voluptate aute id deserunt nisi. Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint. Velit officia consequat
            duis enim velit mollit. Exercitation veniam consequat sunt nostrud
            amet.
          </div>
        </div>

        <div className='gallery'>
          <img src={ellipse6} alt='ellipse6' />
          <div>Chidi Okeke</div>
          <div>
            Ikeja
            <span>Customer</span>
          </div>

          <div className='desc'>
            Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt
            qui esse pariatur duis deserunt mollit dolore cillum minim tempor
            enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut
            voluptate aute id deserunt nisi. Elit aute irure tempor cupidatat
            incididunt sint deser unt ut voluptate aute id deserunt nisi. Amet
            minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
          </div>
        </div>
      </div>

      <div className='body5'>
        <div className='experience3'>
          <span className='vendor-experience'>Josiah’s Experience</span>
          <span className='vendor'>VENDOR</span>
          <span className='experince-story2'>
            I had the best experience shopping with vasiti. Usability of the
            website was great, very good customer service, an all round great
            experience. I would definately be coming back! I had the best
            experience shopping with vasiti. Usability of the website was great,
            very good customer service, an all round great experience. I would
            definately be coming back!
          </span>
          <span className='share2'>Share your own story!</span>
          <object
            id='svgObject'
            className='shareimg'
            alt='rectangular-line'
            aria-labelledby='svg'
            data={vector3}
            type='image/svg+xml'
            height='10'
            width='170'
          />
        </div>

        <div className='experience'>
          <img className='vendor-img' id='vendor-img' src={ellipse8} alt='' />
        </div>
      </div>

      <div className='body3'>
        <br />
      </div>

      <div className='body4'>
        <div className='gallery'>
          <img src={vendorImg1} alt='ellipse1' />

          <div>Temi Obadofin</div>
          <div>VENDOR</div>

          <div className='desc'>
            Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt
            qui esse pariatur duis deserunt mollit dolore cillum minim tempor
            enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut
            voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex
            duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt
            mollit dolore cillum minim tempor enim.
          </div>
        </div>

        <div className='gallery'>
          <img src={vendorImg2} alt='ellipse2' />
          <div>Promise Ejiofor</div>
          <div>VENDOR</div>

          <div className='desc'>
            Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt
            qui esse pariatur duis deserunt mollit dolore cillum minim tempor
            enim. Elit aute irure tempor cupidatat incididunt sint deser unt ut
            voluptate aute id deserunt nisi. Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint. Velit officia consequat
            duis enim velit mollit. Exercitation veniam consequat sunt nostrud
            amet.
          </div>
        </div>

        <div className='gallery'>
          <img src={vendorImg3} alt='ellipse3' />
          <div>Feyisola Arinola</div>
          <div>VENDOR</div>

          <div className='desc'>
            Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt
            qui esse pariatur duis deserunt mollit dolore cillum minim tempor
            enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut
            voluptate aute id deserunt nisi. Elit aute irure tempor cupidatat
            incididunt sint deser unt ut voluptate aute id deserunt nisi. Amet
            minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
          </div>
        </div>

        <div className='gallery'>
          <img src={vendorImg4} alt='ellipse4' />
          <div>Karen Ibeh</div>
          <div>VENDOR</div>

          <div className='desc'>
            Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt
            qui esse pariatur duis deserunt mollit dolore cillum minim tempor
            enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut
            voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex
            duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt
            mollit dolore cillum minim tempor enim.
          </div>
        </div>

        <div className='gallery'>
          <img src={vendorImg5} alt='ellipse5' />
          <div>Oluchi Uzo</div>
          <div>VENDOR</div>

          <div className='desc'>
            Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt
            qui esse pariatur duis deserunt mollit dolore cillum minim tempor
            enim. Elit aute irure tempor cupidatat incididunt sint deser unt ut
            voluptate aute id deserunt nisi. Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint. Velit officia consequat
            duis enim velit mollit. Exercitation veniam consequat sunt nostrud
            amet.
          </div>
        </div>

        <div className='gallery'>
          <img src={vendorImg6} alt='ellipse6' />
          <div>Amos Okafor</div>
          <div>VENDOR</div>

          <div className='desc'>
            Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt
            qui esse pariatur duis deserunt mollit dolore cillum minim tempor
            enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut
            voluptate aute id deserunt nisi. Elit aute irure tempor cupidatat
            incididunt sint deser unt ut voluptate aute id deserunt nisi. Amet
            minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
          </div>
        </div>
      </div>

      <div className='footer'>
        <div className='footer1'>
          <div className='footerimg'>
            <img src={footerImg} alt='' />
          </div>
          <div className='footerbg'></div>
        </div>
        <div className='footer2'>
          <div>
            <table>
              <tr>
                <th>Company</th>
              </tr>
              <tr>
                <td>
                  <a href='/about'>About us</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href='/terms'>Term of Use</a>
                </td>
              </tr>

              <tr>
                <td>
                  <a href='/privacy'>Privacy Policy</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href='/press'>Press & Media</a>
                </td>
              </tr>
            </table>
          </div>

          <div>
            <table>
              <tr>
                <th>Products</th>
              </tr>
              <tr>
                <td>
                  <a href='marketplace'>Marketplace</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href='/magazine'>Magazine</a>
                </td>
              </tr>

              <tr>
                <td>
                  <a href='/seller'>Seller</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href='/wholesale'>Wholesale</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href='/services'>Services</a>
                </td>
              </tr>
            </table>
          </div>

          <div>
            <table>
              <tr>
                <th>Careers</th>
              </tr>
              <tr>
                <td>
                  <a href='/campus-rep'>Become a Campus Rep</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href='/vasiti-Influencer'>Become a Vasiti Influencer</a>
                </td>
              </tr>

              <tr>
                <td>
                  <a href='/campus-writer'>Become a Campus writer</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href='/affiliate'>Become an Affiliate</a>
                </td>
              </tr>
            </table>
          </div>

          <div>
            <table>
              <tr>
                <th>Get in touch</th>
              </tr>
              <tr>
                <td>
                  <a href='/contact'>Contact us</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href='/partner'>Partner with us</a>
                </td>
              </tr>

              <tr>
                <td>
                  <a href='/advertise'>Advertise with us</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href='/help-faqs'>Help/FAQs</a>
                </td>
              </tr>
            </table>
          </div>

          <div>
            <table>
              <tr>
                <th>Join our community</th>
              </tr>
              <tr>
                <td>
                  <a href='/about'>About us</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href='/terms'>Email Newsletter</a>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>


    </>
  )
}

export default NavBar

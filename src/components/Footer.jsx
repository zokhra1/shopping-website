import { Link } from "react-router-dom";
import {
  TiSocialInstagramCircular,
  TiSocialFacebookCircular,
} from "react-icons/ti";

function Footer() {
  return (
    <footer className='mt-auto w-full bg-[rgba(237,237,237)]'>
      <div className='p-12 '>
        <div className='grid gap-10 grid-cols-4'>
          <div className='flex gap-4 flex-col'>
            <Link to='/' className='text-2xl '>
              rnd.apparel
            </Link>
            <p>
              This is the space to introduce visitors to the business or brand.
              Briefly explain who is behind it, what it does and what makes it
              unique. Share its core values and what this site has to offer.
            </p>
            <div className='flex'>
              <TiSocialInstagramCircular className='text-2xl' />
              <TiSocialFacebookCircular className='text-2xl' />
            </div>
          </div>
          <div>
            <h3 className='text-2xl '>Categories</h3>
            <ul>
              <li className='font-bold'>Women</li>
              <li>Bottoms</li>
              <li>Tops</li>
              <li className='font-bold'>Men</li>
              <li>Bottoms</li>
              <li>Tops</li>
              <li>Accessories</li>
              <li>Sale</li>
            </ul>
          </div>

          <div>
            <div>
              <h3 className='text-2xl '>Contact</h3>
              <ul>
                <li>500 Terry Francine Street</li>
                <li>San Francisco, CA 94158</li>
                <li>info@mysite.com</li>
                <li>Tel: 123-456-7890</li>
              </ul>
            </div>
            <div>
              <h3 className='text-2xl mt-4 '>Shop Policies</h3>
              <ul>
                <li>Refund Policy</li>
                <li>Shipping Policy</li>
              </ul>
            </div>
          </div>

          <div className='flex flex-col gap-4'>
            <h3 className='text-2xl '>Newsletter</h3>
            <p>Subscribe to our newsletter and get 10% off your first order</p>

            <div className=' '>
              <label className='flex items-center text-black mb-4'>
                <input type='checkbox' className='mr-2 ' />
                Yes, Subscribe me to your newsletter.
              </label>

              <button
                type='submit'
                className=' px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition duration-200'
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className='mt-20'>
          Terms & Conditions Privacy Policy Accessibility Statemen © 2035 by
          rnd.apparel. Built on Wix Studio
        </div>
      </div>
    </footer>
  );
}

export default Footer;

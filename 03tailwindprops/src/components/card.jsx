import React from 'react'
import Apple from '../assets/apple.jpg'
import App from '../App';
function Card() {
  return (
    <div>
    {/* <button className='btn-primary rounded-md p-3 bg-green-400 font-sans '>Omkar</button> */}
    <br />
    <div class="w-100 max-w-lg mx-auto bg-dark shadow-lg rounded-lg overflow-hidden">
  <div class="px-6 py-4">
  <img src={Apple} alt="" width={700} height={700} />
    <div class="font-bold text-3xl mb-2 text-dark">This is a card heading</div>
    <p class="text-white-700 text-base">This is a paragraph for the heading.</p>
  </div>
</div>

      </div>
    );
}

export default Card
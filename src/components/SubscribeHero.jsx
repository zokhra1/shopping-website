import { useState } from "react";

function SubscribeHero() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log("Email:", email);
    console.log("Subscribed:", isSubscribed);
  };

  return (
    <section className='flex justify-start items-center h-[400px] bg-[#f5f5f5] p-8'>
      <div className='w-full max-w-md'>
        <h2 className='text-3xl font-semibold mb-2'>Subscribe and save 10%</h2>
        <p className='text-lg text-black mb-6'>on your first order</p>

        <form onSubmit={handleSubmit} className='space-y-4'>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Enter your email'
            className='w-full p-2 border border-black rounded focus:outline-none focus:border-gray-500'
          />

          <label className='flex items-center text-black'>
            <input
              type='checkbox'
              checked={isSubscribed}
              onChange={(e) => setIsSubscribed(e.target.checked)}
              className='mr-2'
            />
            Yes, Subscribe me to your newsletter.
          </label>

          <button
            type='submit'
            className=' px-12 py-2 bg-black text-white rounded hover:bg-gray-800 transition duration-200'
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}

export default SubscribeHero;

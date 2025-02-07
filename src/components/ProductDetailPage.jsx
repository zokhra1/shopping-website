import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Breadcrumb from "./Breadcrump";

function ProductDetailPage() {
  const { id } = useParams(); // Get product ID from the URL
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("");

  const [activeSection, setActiveSection] = useState(null);

  const [showWarning, setShowWarning] = useState(false);

  const handleAddToCart = () => {
    if (!size) {
      setShowWarning(true); // Show warning when no size is selected
      return;
    } else {
      setShowWarning(false);
    }
    // Add to cart logic here...
  };

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`) // Fetch product details from API
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  const sizeOptions =
    product.category === "jewelery"
      ? ["6", "7", "8", "9", "10"] // Number sizes for jewelry
      : ["Small", "Medium", "Large"];

  return (
    <>
      <Breadcrumb />
      <div className=' flex gap-20 max-w-4xl mx-auto p-6 mb-20 mt-20 '>
        <div className=' min-w-80 min-h-[360px] '>
          <img
            src={product.image}
            alt={product.title}
            className='w-full object-cover mb-4'
          />
        </div>
        <div>
          <h1 className='text-5xl   mb-2'>{product.title}</h1>
          <p className='text-2xl  mb-5'>Price: ${product.price}</p>
          <p className='text-gray-700 mb-4'>{product.description}</p>

          {/* Size Selection */}
          <div className='mb-4'>
            <label className='mb-1'>Size</label>
            <select
              value={size}
              onChange={(e) => setSize(e.target.value)}
              className='w-full  border-[1px] border-black rounded-md p-2 text-lg'
            >
              <option value=''>Select</option>
              {sizeOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>

            {showWarning && (
              <p className='text-red-500 text-sm mt-1'>Please select a size</p>
            )}
          </div>

          {/* Quantity Selector */}
          <div className=' items-center gap-4'>
            <p>Quantity</p>
            <div className='flex w-[130px] items-center justify-between border border-gray-300 p-1 rounded-md'>
              <button
                className='px-3 py-1 text-xl'
                onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
              >
                -
              </button>
              <span className='px-4 text-lg'>{quantity}</span>
              <button
                className='px-3 py-1 text-xl'
                onClick={() => setQuantity((prev) => prev + 1)}
              >
                +
              </button>
            </div>
          </div>

          {/* Buttons */}
          <div className='flex flex-col gap-4 mt-5'>
            <button
              onClick={handleAddToCart}
              className='w-full border-[1px] cursor-pointer border-black py-3 text-lg rounded-md  transition-colors duration-300 hover:bg-gray-900 hover:text-white'
            >
              Add to Cart
            </button>
            <button className='w-full bg-black cursor-pointer text-white py-3 text-lg rounded-md transition-colors duration-300 hover:bg-gray-700 '>
              Buy Now
            </button>
          </div>

          <div className='mt-9'>
            {/* Expandable Sections */}
            {["Product Info", "Return & Refund Policy", "Shipping Info"].map(
              (section, index) => (
                <div key={index}>
                  <div
                    className='flex mb-5 text-lg justify-between cursor-pointer border-b py-2'
                    onClick={() =>
                      setActiveSection(activeSection === index ? null : index)
                    }
                  >
                    <p className=''>{section}</p>
                    <span className='text-[40px] font-light'>
                      {activeSection === index ? "−" : "+"}
                    </span>
                  </div>
                  {activeSection === index && (
                    <p className='text-gray-600 p-2 text-lg'>
                      {section === "Shipping Info"
                        ? "Providing straightforward information about shipping helps customers feel confident."
                        : "Additional details about the product."}
                    </p>
                  )}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetailPage;

import { useState } from "react";
import { Range } from "react-range";

const PriceFilter = () => {
  const [priceRange, setPriceRange] = useState([80, 100]); // Initial min and max

  const MIN = 0;
  const MAX = 200;

  return (
    <div className='mt-8'>
      <h3 className='text-lg font-medium mb-4'>Filter by</h3>
      <div className='border-t border-gray-300 pt-4'>
        <h4 className='text-sm  mb-2'>Price</h4>
        <div className='flex items-center justify-between text-sm mb-2'>
          <span>${priceRange[0].toFixed(2)}</span>
          <span>${priceRange[1].toFixed(2)}</span>
        </div>
        <Range
          step={1}
          min={MIN}
          max={MAX}
          values={priceRange}
          onChange={(values) => setPriceRange(values)}
          renderTrack={({ props, children }) => (
            <div
              {...props}
              className='w- h-1 bg-gray-300 rounded-lg'
              style={{
                // eslint-disable-next-line react/prop-types
                ...props.style,
              }}
            >
              {children}
            </div>
          )}
          renderThumb={({ props, index }) => (
            <div
              key={index}
              {...props}
              className='w-3 h-3 bg-black rounded-full'
              style={{
                // eslint-disable-next-line react/prop-types
                ...props.style,
              }}
            />
          )}
        />
      </div>
    </div>
  );
};

export default PriceFilter;

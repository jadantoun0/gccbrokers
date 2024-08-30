import React from 'react';
import Reveal from '@/components/animations/Reveal';
import ProductsTable from '@/components/products/ProductTable';
import {TradingSpeifications} from "@/components/products/TradingSpecifications";

const ProductsPage = () => {
  return (
    <main>
      <div className='bg-gradient-to-r from-[#1a314b] via-[#103b61] to-[#092344]'>
        <div className='h-40'></div>
        <div>
          <Reveal type='fade'>
            <p className='text-4xl text-white font-semibold text-center'>
              Explore Our Forex Offerings
            </p>
          </Reveal>
          <Reveal type='fade'>
            <p className='mt-6 text-gray-400 text-md mb-10 text-center'>
              Unlock Opportunities in the Forex Market
            </p>
          </Reveal>
        </div>
        <Reveal type='fade' direction='right'>
          <ProductsTable />
        </Reveal>
      </div>
      <TradingSpeifications />
    </main>
  )
}

export default ProductsPage
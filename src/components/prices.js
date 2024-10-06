import React from 'react';
import pricing1Image from '../images/pricing1image.webp';

const Prices = () => {
    return (
        <div className="min-h-screen bg-base-200 p-6">
  <div className="max-w-6xl mx-auto">
    <h1 className="text-5xl font-bold text-center mb-12 bg-black text-primary">Front-End Service Packages</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Basic Package */}
      <div className="card w-full bg-base-100 shadow-xl">
        <figure>
          <img src={pricing1Image} alt="Basic Package" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-primary">Basic Package</h2>
          <p className="text-base-content">
            Perfect for small projects or personal websites. Includes a responsive design and up to 3 pages.
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Choose Plan</button>
          </div>
        </div>
        <div className="card-footer text-center text-secondary font-bold text-2xl p-4">
          $499
        </div>
      </div>

      {/* Standard Package */}
      <div className="card w-full bg-base-100 shadow-xl">
        <figure>
          <img src={pricing1Image} alt="Standard Package" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-primary">Standard Package</h2>
          <p className="text-base-content">
            Ideal for medium-sized projects. Includes a responsive design, up to 5 pages, and basic SEO optimization.
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Choose Plan</button>
          </div>
        </div>
        <div className="card-footer text-center text-secondary font-bold text-2xl p-4">
          $999
        </div>
      </div>

      {/* Premium Package */}
      <div className="card w-full bg-base-100 shadow-xl">
        <figure>
          <img src={pricing1Image} alt="Premium Package" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-primary">Premium Package</h2>
          <p className="text-base-content">
            Best for large projects. Includes a responsive design, up to 10 pages, advanced SEO, and e-commerce capabilities.
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Choose Plan</button>
          </div>
        </div>
        <div className="card-footer text-center text-secondary font-bold text-2xl p-4">
          $1999
        </div>
      </div>
    </div>
  </div>
</div>
    )
}

export default Prices;

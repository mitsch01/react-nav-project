import React from 'react';

const Contact = () => {
    return (
<div className="min-h-screen bg-base-200 flex items-center justify-center p-6">
  <div className="w-full max-w-md bg-base-100 shadow-xl rounded-lg p-8">
    <h1 className="text-4xl font-bold text-center text-primary bg-black mb-6">Contact Me</h1>
    <form>
      <div className="form-control mb-4">
        <label className="label">
          <span className="label-text text-base-content">Name</span>
        </label>
        <input type="text" placeholder="Your Name" className="input input-bordered w-full" required />
      </div>
      <div className="form-control mb-4">
        <label className="label">
          <span className="label-text text-base-content">Email</span>
        </label>
        <input type="email" placeholder="Your Email" className="input input-bordered w-full" required />
      </div>
      <div className="form-control mb-4">
        <label className="label">
          <span className="label-text text-base-content">Message</span>
        </label>
        <textarea className="textarea textarea-bordered w-full" placeholder="Your Message" rows="5" required></textarea>
      </div>
      <div className="form-control mt-6">
        <button type="submit" className="btn btn-primary w-full">Send Message</button>
      </div>
    </form>
  </div>
</div>
    )
}

export default Contact;

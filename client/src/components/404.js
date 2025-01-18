import React from 'react';

const NotFound = () => (
  <section className="hero-section text-center py-5 my-5">
    <div className="container">
      <h1 className="display-1 fw-bold text-danger">404</h1>
      <p className="lead  display-6 text-muted mb-5">Whoopsies! The page you're looking for doesn't exist.</p>
      
      <div className="card shadow-lg border-0 mx-auto" style={{ maxWidth: '600px' }}>
        <div className="card-body p-4 m-2">
        <p className="lead" style={{ textAlign: 'justify' }}>
            Looks like you've taken a wrong turn! Don't worry — you can steer back to safety or hit the brakes and reach out through our contact page. We're here to help you get back on track!
        </p>
        </div>
      </div>

      <div className="mt-4">
        <a href="/" className="btn btn-primary me-3">Go Home</a>
        <a href="/contact" className="btn btn-outline-secondary">Contact Us</a>
      </div>
    </div>
  </section>
);

export default NotFound;

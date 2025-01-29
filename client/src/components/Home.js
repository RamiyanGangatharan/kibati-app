import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="hero-section text-center py-5 my-5 text-dark">
      <div className="container">
        <h1 className="display-4 fw-bold">KIBATI</h1>
        <span className="blockquote-footer"><small><i>Parts That Keep You Moving.</i></small></span>
        <p className="lead mb-4 mt-3">Your premier destination for high-quality auto parts, designed to elevate your vehicle's performance and reliability.</p>
        <p className="mb-4">At KIBATI, we pride ourselves on offering:</p>
        <div className="features-container mb-4">
            <div className="feature-item m-4">
                <h4 className="display-6">Wide Selection</h4>
                <p>Explore our range of auto parts, curated to meet the diverse needs of every vehicle.</p>
            </div>
            <div className="feature-item m-4">
                <h4 className="display-6">Exceptional Service</h4>
                <p>Our team is dedicated to providing top-notch customer support, ensuring reliable service.</p>
            </div>
            <div className="feature-item m-4">
                <h4 className="display-6">For Everyone</h4>
                <p>Whether it's a fleet of vehicles or your personal ride, we have the right parts for all situations.</p>
            </div>
            </div>

        <p className="mb-4 lead">Drive with confidence, knowing KIBATI has you're back.</p>
        <div className="d-grid gap-2 d-sm-flex justify-content-center">
          <Link to="/store" className="btn btn-outline-secondary btn-lg px-4 hover-effect me-3"> Shop Now</Link>
        </div>
      </div>
    </section>
  );
};

export default Home;

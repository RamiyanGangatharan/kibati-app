import React from 'react';
import '../css/Store.css';

const products = [
    { id: 1, title: "Product 1", img: "/img/No-image-Placeholder.svg", description: "Placeholder description" },
    { id: 2, title: "Product 2", img: "/img/No-image-Placeholder.svg", description: "Placeholder description" },
    { id: 3, title: "Product 3", img: "/img/No-image-Placeholder.svg", description: "Placeholder description" },
    { id: 4, title: "Product 4", img: "/img/No-image-Placeholder.svg", description: "Placeholder description" },
];

const Store = () => {
    return (
        <div className="container">
            {/* REPLACE WITH CMS LATER */}
            <h1 className="display-2 text-center">Marketplace</h1>
            <hr />
            <div className="container-fluid d-flex flex-wrap justify-content-center">
                {products.map((product) => (
                    <div className="card m-3" key={product.id}>
                        <div className="card-body text-center">
                            <h2 className="card-title display-6">{product.title}</h2>
                            <img className="store-image" src={product.img} alt={`Image of ${product.title}`} />
                            <p className="card-text">{product.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Store;

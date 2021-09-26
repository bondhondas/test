import React from 'react';

const Header = () => {
    return (
        <div className="text-center my-3">
            <h1 className="display-3 text-danger">Best Cheff In The World</h1>
            <h6 className="text-white">Build your own Cheff team</h6>
            <h2 className="text-danger">
                Budget
                <span className="badge bg-danger ms-2">$80000</span>
            </h2>
        </div>
    );
};

export default Header;
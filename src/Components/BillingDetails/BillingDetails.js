import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './BillingDetails.css';

const BillingDetails = () => {
    const location = useLocation();
    const navigate = useNavigate(); 
    const { selectedProducts, totalAmount } = location.state || {};

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        companyName: '',
        country: '',
        streetAddress: '',
        townCity: '',
        zipCode: '',
        phone: '',
        email: '',
        additionalInfo: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));

        setErrors(prevState => ({
            ...prevState,
            [name]: ''
        }));
    };

    const validateField = (name, value) => {
        let error = '';
        switch (name) {
            case 'firstName':
                if (!value.trim()) error = 'First Name is required';
                break;
            case 'lastName':
                if (!value.trim()) error = 'Last Name is required';
                break;
            case 'country':
                if (!value) error = 'Country / Region is required';
                break;
            case 'streetAddress':
                if (!value.trim()) error = 'Street Address is required';
                break;
            case 'townCity':
                if (!value.trim()) error = 'Town / City is required';
                break;
            case 'zipCode':
                if (!value.trim()) error = 'ZIP code is required';
                break;
            case 'phone':
                if (!value.trim()) error = 'Phone is required';
                break;
            case 'email':
                if (!value.trim()) error = 'Email address is required';
                else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = 'Email address is invalid';
                break;
            default:
                break;
        }
        return error;
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        const error = validateField(name, value);
        if (error) {
            setErrors(prevState => ({
                ...prevState,
                [name]: error
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        Object.keys(formData).forEach(key => {
            const error = validateField(key, formData[key]);
            if (error) newErrors[key] = error;
        });

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        navigate('/order-success');
        window.scrollTo({ top: 0, behavior: 'smooth' });
          
    };

    return (
        <div className="billing-container">
            <div className="billing-details">
                <h2>Billing details</h2>
                <form onSubmit={handleSubmit}>
                    <div className="billing-row">
                        <div className="billing-col">
                            <label>First Name</label>
                            <input
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                value={formData.firstName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.firstName && <p className="error">{errors.firstName}</p>}
                        </div>
                        <div className="billing-col">
                            <label>Last Name</label>
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                value={formData.lastName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.lastName && <p className="error">{errors.lastName}</p>}
                        </div>
                    </div>
                    <div className="billing-row">
                        <label>Company Name (Optional)</label>
                        <input
                            type="text"
                            name="companyName"
                            placeholder="Company Name"
                            value={formData.companyName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="billing-row">
                        <label>Country / Region</label>
                        <select
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        >
                            <option value="">Select a country</option>
                            <option value="Sri Lanka">Sri Lanka</option>
                            <option value="India">India</option>
                            <option value="United States">United States</option>
                            <option value="United Kingdom">United Kingdom</option>
                            
                        </select>
                        {errors.country && <p className="error">{errors.country}</p>}
                    </div>
                    <div className="billing-row">
                        <label>Street Address</label>
                        <input
                            type="text"
                            name="streetAddress"
                            placeholder="Street Address"
                            value={formData.streetAddress}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.streetAddress && <p className="error">{errors.streetAddress}</p>}
                    </div>
                    <div className="billing-row">
                        <label>Town / City</label>
                        <input
                            type="text"
                            name="townCity"
                            placeholder="Town / City"
                            value={formData.townCity}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.townCity && <p className="error">{errors.townCity}</p>}
                    </div>
                    <div className="billing-row">
                        <label>ZIP Code</label>
                        <input
                            type="text"
                            name="zipCode"
                            placeholder="ZIP Code"
                            value={formData.zipCode}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.zipCode && <p className="error">{errors.zipCode}</p>}
                    </div>
                    <div className="billing-row">
                        <label>Phone</label>
                        <input
                            type="text"
                            name="phone"
                            placeholder="Phone"
                            value={formData.phone}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.phone && <p className="error">{errors.phone}</p>}
                    </div>
                    <div className="billing-row">
                        <label>Email Address</label>
                        <input
                            type="text"
                            name="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.email && <p className="error">{errors.email}</p>}
                    </div>
                    <div className="billing-row">
                        <label>Additional Information</label>
                        <textarea
                            name="additionalInfo"
                            placeholder="Additional Information"
                            value={formData.additionalInfo}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                </form>
            </div>
            <div className="order-summary">
                <h2>Products</h2>
                <div className="order-summary-product">
                    <div className="order-summary-header">
                        <div className="order-summary-item-col">Name</div>
                        <div className="order-summary-item-col">Quantity</div>
                        <div className="order-summary-item-col">Price</div>
                    </div>
                    {selectedProducts && selectedProducts.map((product, index) => (
                        <div key={index} className="order-summary-item">
                            <div className="order-summary-item-col">{product.name}</div>
                            <div className="order-summary-item-col">{product.quantity}</div>
                            <div className="order-summary-item-col">₹{product.total}</div>
                        </div>
                    ))}
                </div>
                <hr />
                <div className="order-summary-total">
                    <p>Subtotal</p>
                    <p>₹{totalAmount}</p>
                </div>
                <div className="order-summary-total">
                    <h3>Total</h3>
                    <h3>₹{totalAmount}</h3>
                </div>
                <hr />
                <div className="payment-methods">
                    <label>
                        <input type="radio" name="payment" defaultChecked />
                        Direct Bank Transfer
                    </label>
                    <p className="payment-details">
                        Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                    </p>
                    <label>
                        <input type="radio" name="payment" />
                        Cash On Delivery
                    </label>
                    <p className="payment-details">
                        Pay with cash upon delivery of your order.
                    </p>
                    <label>
                        <input type="radio" name="payment" />
                        Cheque Payment
                    </label>
                    <p className="payment-details">
                        Please send your cheque to Store Name, Store Street, Store Town, Store State, Store Postcode. Your order will not be shipped until your cheque has cleared.
                    </p>
                    <label>
                        <input type="radio" name="payment" />
                        PayPal
                    </label>
                    <p className="payment-details">
                        Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account.
                    </p>
                </div>
                <button className="place-order-btn" type="submit" onClick={handleSubmit}>Place order</button>
            </div>
        </div>
    );
};

export default BillingDetails;

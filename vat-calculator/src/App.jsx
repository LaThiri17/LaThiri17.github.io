import { useState } from 'react';
import './App.css';

function App() {
  const [price, setPrice] = useState(100);
  const [discount, setDiscount] = useState(10);

  const gross = price - discount;
  const vat = (gross * 0.07).toFixed(2);

  return (
    <div style={{
      backgroundColor: '#1a1a1a',
      color: 'white',
      padding: '2rem',
      borderRadius: '1rem',
      maxWidth: '400px',
      margin: '5rem auto',
      textAlign: 'center'
    }}>
      <h2>VAT Calculator</h2>

      <div style={{ marginBottom: '1rem' }}>
        <label>Price:</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
        />
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label>Discount:</label>
        <input
          type="number"
          value={discount}
          onChange={(e) => setDiscount(Number(e.target.value))}
        />
      </div>

      <h3>Gross Price = {gross}</h3>
      <h3>VAT = {vat}</h3>
    </div>
  );
}

export default App;

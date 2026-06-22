export function Products() {
  return (
    <section id="products" className="section">
      <h2>Popular Products</h2>

      <div className="cards">
        <div className="card">
          <h3>Scientific Calculator </h3>
          <p>₹799</p>
        </div>

        <div className="card">
          <h3>Power Bank</h3>
          <p>₹1199</p>
        </div>

        <div className="card">
          <h3>Study Lamp</h3>
          <p>₹999</p>
        </div>

        <div className="card">
          <h3>Notebook Set</h3>
          <p>₹399</p>
        </div>

        <div className="card">
          <h3>Bluetooth Speaker</h3>
          <p>₹1599</p>
        </div>
        
      </div>
    </section>
  );
}

export default Products;
const Hero=()=>{
  return(
  <main className="hero">
    <div className="hero-content">
      <h1>YOUR FEET DESERVE THE BEST</h1>
      <p>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.</p>
      <div className="hero-button">
      <button>Shop Now</button>
      <button className="category">Category</button>
      </div>

      <div className="shopping">
        <p>Also Available On</p>
        <div className="brand-img">
        <img src="images/flipkart.png" alt="flikcart" />
        <img src="images/amazon.png" alt="amazon" />
        </div>
      </div>
    </div>
    <div className="hero-img">
      <img src="/images/shoe_image.png" alt="shoe_image" />
    </div>
  </main>
  )
}
export default Hero;
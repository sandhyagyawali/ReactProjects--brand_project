const Navbar =()=>{
  return(
    <nav>
    <div className="logo">
      <img src="/images/brand_logo.png" alt="brand_logo" />
    </div>
    <ul>
      <li href="#">Menu</li>
      <li href="#">Location</li>
      <li href="#">About</li>
      <li href="#">Contact</li>
    </ul>

    <button>LogIn</button>
  </nav>
  )
}

export default Navbar;
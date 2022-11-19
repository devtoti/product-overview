import '../card.css'

const Card = () => {
  return (
    <div className='card'>
      <section>
        <img
          src='./assets/image-product-desktop.jpg'
          alt='Gabrielle Perfume'
          className='card__cover'
        />
      </section>
      <section>
        <h5>Perfume</h5>
        <h2>Gabrielle Essence Eau De Parfum</h2>
        <p>
          A floral, solar and voluptuous interpretation composed by Oliver
          Polge, Prefume-Creator for the house of CHANEL.
        </p>
        <div className='card__prices'>
          <h2>$149.99</h2>
          <h6>$169.99</h6>
        </div>
        <div className='cart'>
          <img src='./assets/icon-cart.svg' alt='Cart Icon' />
          <a>Add to Cart</a>
        </div>
      </section>
    </div>
  )
}
export default Card

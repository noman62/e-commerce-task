
import Header from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import ProductList from '../components/product/ProductList'

const Home = () => {
  return (
    <>
      <div>
       <Header/>
        <ProductList />
        <Footer/>
      </div>
    </>
  )
}

export default Home

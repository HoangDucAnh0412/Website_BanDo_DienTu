import BannerCategories from "./ui/BannerCategories"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import HomeBanner from "./ui/HomeBanner";
import Hightlights from "./ui/Hightlights";
import Category from "./ui/Categories";
import ProductList from "./ui/ProductList";
import DiscountedBanner from "./ui/DiscountedBanner";
import Blog from "./ui/Blog";

function App() {


  return (
    <main>
      <BannerCategories/>
      <HomeBanner/>
      <Hightlights/>
      <Category/>
      <ProductList/>
      <DiscountedBanner/>
      <Blog/>
    </main>
  )
}

export default App

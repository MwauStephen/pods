import React from "react";
import HeroSlider from "../components/sliders/HeroSlider";
// import FeaturedSlider from "../components/sliders/FeaturedSlider";
import NewProducts from "../components/sliders/NewProducts";
import SectionsHead from "../components/common/SectionsHead";
import TopProducts from "../components/product/TopProducts";
import Services from "../components/common/Services";
import productsData from "../data/productsData";

const Home = () => {
  return (
    <main>
      <section id="hero">
        <HeroSlider />
      </section>
      <Services />

      <section id="featured" className="section">
        <div className="container">
          <SectionsHead heading="New Products" />
          <NewProducts />
        </div>
      </section>

      <section id="products" className="section">
        <div className="container">
          <SectionsHead heading="Top Products" />
          <TopProducts />
        </div>
      </section>

      {/* <Services /> */}
    </main>
  );
};

export default Home;

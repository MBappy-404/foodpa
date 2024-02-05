import { Helmet } from "react-helmet-async";
import coverImage from "../../../assets/assets/home/menuBg.jpg";
import image2 from "../../../assets/assets/home/26.jpg";
import Cover from "../../../Shared/Cover/Cover";
import breadImage from "../../../assets/assets/home/pizza-1.png";
import donutImage from "../../../assets/assets/home/donut-1.png";
import hamburgerImage from "../../../assets/assets/home/hamburger-1.png";
import pizzaImage from "../../../assets/assets/home/pizza-1.png";
import sandwichImage from "../../../assets/assets/home/sandwich-1.png";
import tacosImage from "../../../assets/assets/home/tacos-1.png";
import SectionTittle from "../../../Components/SectionTittle/SectionTittle";
import useMenuData from "../../../hooks/useMenuData";
import MenuCategory from "../MenuCategory/MenuCategory";
import { useEffect } from "react";

const Menu = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [menu,, loading] = useMenuData();

  const bread = menu.filter((item) => item?.category === "bread");
  const donut = menu.filter((item) => item?.category === "donut");
  const hamburger = menu.filter((item) => item?.category === "hamburger");
  const pizza = menu.filter((item) => item?.category === "pizza");
  const sandwich = menu.filter((item) => item?.category === "pizza");
  const tacos = menu.filter((item) => item?.category === "pizza");
  const offered = menu.filter((item) => item?.category === "offered");

  // console.log(dessert);
  return (
    <div>
      <Helmet>
        <title>Foodpa-Menu</title>
      </Helmet>
      <Cover image={coverImage} heading={"Our Menu"} active={"Menu"}></Cover>

      {/* offer  */}
      <div className="py-8">
        <SectionTittle
          subHeading={"Don't Miss"}
          heading={"Todays Offer"}
          className="py-10"
        />
        <MenuCategory loading={loading} items={offered} />
      </div>
      <div>
        <MenuCategory loading={loading} items={bread} heading="bread" coverBg={breadImage} />
      </div>
      <MenuCategory loading={loading} items={donut} heading="donut" coverBg={donutImage} />
      <MenuCategory
        items={hamburger}
        heading="hamburger"
        coverBg={hamburgerImage}
      />
      <MenuCategory loading={loading} items={pizza} heading="pizza" coverBg={pizzaImage} />
      <MenuCategory
        items={sandwich}
        heading="sandwich"
        coverBg={sandwichImage}
      />
      <MenuCategory loading={loading} items={tacos} heading="tacos" coverBg={tacosImage} />
    </div>
  );
};

export default Menu;

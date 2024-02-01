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
  const [menu] = useMenuData();

  const bread = menu.filter((item) => item?.category === "dessert");
  const donut = menu.filter((item) => item?.category === "soup");
  const hamburger = menu.filter((item) => item?.category === "salad");
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
        <MenuCategory items={offered} />
      </div>
      <div>
        <MenuCategory items={bread} heading="bread" coverBg={breadImage} />
      </div>
      <MenuCategory items={donut} heading="donut" coverBg={donutImage} />
      <MenuCategory
        items={hamburger}
        heading="hamburger"
        coverBg={hamburgerImage}
      />
      <MenuCategory items={pizza} heading="pizza" coverBg={pizzaImage} />
      <MenuCategory
        items={sandwich}
        heading="sandwich"
        coverBg={sandwichImage}
      />
      <MenuCategory items={tacos} heading="tacos" coverBg={tacosImage} />
    </div>
  );
};

export default Menu;
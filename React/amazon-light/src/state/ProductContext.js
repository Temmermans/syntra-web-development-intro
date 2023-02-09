import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
const initialProducts = [
  {
    id: "he1hda4-rahrhah-fjgjkea2-23q44qd",
    name: "Skilatten",
    price: 200,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbS1STaQJ0GVjxKIHxHeMIfybj-NnOqPUOqQ&usqp=CAU",
    description:
      "Elke skiër geniet van snelheid. Hoewel wij als Snowcountry begonnen zijn met Freeride ski's bieden wij nu ook echte race monsters aan. ",
  },
  {
    id: "fjajgj3234-afjja4jjr-ajfjfjaj23",
    name: "Snowboard",
    price: 250,
    image: `https://fglprdwebsitewebapp.azureedge.net/media/40a99ada-36e7-40b1-9469-cce685d12f23/igwkfQ/ARCHIVES%202022/2022-WK35/pages-cat/planches-niveau3/220818-35-SE-AT-cat-produit-header-assets/220818-35-SE-AT-Planche-a-neige-mobile.jpg`,
    description:
      "Snowboarden is een sport waarbij men op een board met vastgemaakte schoenen afdaalt van een besneeuwde berghelling of piste",
  },
  {
    id: "gskgalgjag-ajrlijrj322-ajgjjagj",
    name: "Snowboots",
    price: 75,
    image: "https://i1.adis.ws/s/ride/ride_2223_lasso_R2203008?w=1200",
    description:
      "A snow boot is a type of boot, generally waterproof or water-resistant. The boot, in almost ... Snowboots are used in wet, slushy, muddy, and snowy situations.",
  },
  {
    id: "gajlgj23-fkao34-eajjfj3-r421q4q",
    name: "Skibotten",
    price: 90,
    image:
      "https://images0.persgroep.net/rcs/p0J93gR3Y2cFB7jpNEJBE4AVSmY/diocontent/168102111/_fill/1200/630/?appId=21791a8992982cd8da851550a453bd7f&quality=0.7",
    beschrijving:
      "De alpineskiër staat op ski's die met een stevige binding gefixeerd worden aan een rigide skischoen die de skiër tot ruim over de enkels reikt.",
  },
];

const ProductContext = React.createContext();
export default ProductContext;

export function ProductProvider({ children }) {
  const [products, setProduct] = useState(initialProducts);
  const updateProduct = (id, product) => {
    const new_products = products.map((prod) => {
      if (prod.id === id) {
        return { ...product, id };
      }
      return prod;
    });

    setProduct(new_products);
  };
  const createProduct = (product) => {
    const id = uuidv4();
    const new_products = [...products, { ...product, id }];
    setProduct(new_products);
  };
  const deleteProduct = (id) => {
    const new_products = products.filter((product) => product.id !== id);
    setProduct(new_products);
  };

  return (
    <ProductContext.Provider
      value={{ products, createProduct, updateProduct, deleteProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
}

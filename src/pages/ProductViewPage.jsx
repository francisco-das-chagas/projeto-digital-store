
import { useParams } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import Section from "../components/Section";
import ProductListing from "../components/ProductListing";
import BuyBox from "../components/BuyBox";
import Gallery from "../components/Gallery";
import { SiteData } from "../data"; 

const ProductViewPage = () => {

  const {
    products,
    products: { items },
  } = SiteData;
  
  
  const { id } = useParams();
  const product = items.find(
    (item) => item.id === parseInt(id)
  );

  return (
    <>
      {}
      <Section
        sectionMb={3}
      >
        {}
        <Breadcrumb product={product} />

        {}
        <div className="grid">
          <div className="col">
            <Gallery product={product} products={products} />
          </div>
          <div className="col-12 xl:col-fixed xl:w-30rem">
            <BuyBox product={product} products={products} />
          </div>
        </div>
      </Section>

      {}
      <Section
        title="Produtos Relacionados"
        titleMb={2}
        sectionMb={2}
        link={{ text: "Ver todos", href: "/produtos" }}
      >
        <ProductListing
          cols={[6,4,3]}
          numProducts={4}
          data={items}
        />
      </Section>
    </>
  );
};

export default ProductViewPage;

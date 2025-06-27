// Importa o que será usado: componentes e dados
import HeroSlider from "../components/HeroSlider";
import Section from "../components/Section";
import CollectionListing from "../components/CollectionListing";
import CategoryListing from "../components/CategoryListing";
import ProductListing from "../components/ProductListing";
import SpecialOfferCard from "../components/SpecialOfferCard";
import { SiteData } from "../data"; 
const HomePage = () => {
  
  const {
    home: {
      slider,
      collections: { items: collection },
      categories: { items: category },
      offers,
    },
    products: { items: product },
  } = SiteData;
  
  return (
    <>
      {}
      <HeroSlider data={slider} />

      {}
      <Section
        sectionMb={2.8}
        titleMb={1.5}
        title="Coleções em Destaque"
      >
        <CollectionListing cols={[12, 6, 4]} data={collection} />
      </Section>

      {}
      <Section
        sectionMb={6}
        titleMb={1}
        title="Categorias em Destaque"
        titleAlign="center"
      >
        <CategoryListing cols={[4, 3, 2]} data={category} />
      </Section>

      {}
      <Section
        title="Produtos em Alta"
        titleMb={2}
        sectionMb={3}
        link={{ text: "Ver todos", href: "/produtos" }}
      >
        <ProductListing cols={[6, 3]} data={product} numProducts={8} />
      </Section>

      {}
      <Section
        sectionMb={0}
        className="bg-white pt-8 pb-5 xl:pb-6"
      >
        <SpecialOfferCard data={offers} />
      </Section>
    </>
  );
};

export default HomePage;

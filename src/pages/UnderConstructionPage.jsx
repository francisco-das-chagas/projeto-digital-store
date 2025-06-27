import { Link } from "react-router-dom";
import { Button } from "primereact/button";
import Section from "../components/Section";
import { SiteData } from "../data"; 

const UnderConstructionPage = () => {
  const {
    underconst: { 
      title, 
      description,
      button,
    },
  } = SiteData;

  return (
    <Section
      sectionMt={2}
      sectionMb={5}
      className="flex flex-column align-items-center justify-content-center text-center mx-auto xl:w-5"
    >
      {}
      <div className="text-8xl mb-1">🚧</div>

      {}
      <h2 className="text-4xl mt-0 mb-2">{title}</h2>
      <p className="mb-5 text-lg">{description}</p>

      {}
      <div className="flex flex-column xl:flex-row w-full align-items-center justify-content-center gap-3">
        {button.map(({ link, label, icon, style }, i) => (
          <Link
            key={i}
            to={link}
            title={label}
            className="w-full xl:w-auto shadow-none"
          >
            <Button
              label={label}
              icon={icon}
              className={`w-full border-pink-600 shadow-none transition-colors transition-linear transition-duration-400 ${style} hover:bg-pink-700`}
            />
          </Link>
        ))}
      </div>
    </Section>
  );
};

export default UnderConstructionPage;

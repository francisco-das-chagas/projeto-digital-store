import { useEffect } from "react";
import { Routes, Route, useLocation, matchPath } from "react-router-dom";
import Layout from "./compoments/Layout";
import HomePage from "./pages/HomePage";
import ProductListingPage from "./pages/ProductListingPage";
import ProductViewPage from "./pages/ProductViewPage";
import NotFoundPage from "./pages/NotFoundPage";
import UnderContructionPage from "./pages/UnderConstructionPage";
import { createGlobalStyle } from "styled-components";
import { SiteData } from "./data";

export const GlobalStyle = createGlobalStyle`

   *,*::before, *::after {
      outline: none;
      list-style: none;
      box-sizing: border-box;
   }

   body {
      background-color: var(--gray-50);
      margin: 0;
      padding: 0;
      font-family: 'Segoe UI', Tahoma, sans-serif;
      line-height: 1.4;
      overflow-x: hidden;
   }

   a {
      text-decoration: none;
      color: inherit;
   }
   ul, ol {
      padding: 0;
      margin: 0;
      list-style: none;
   }
   img {
      width: 100%;
      height: auto;
   }

   .max-w-36rem {max-width: 36rem}
   .max-w-75rem {max-width: 75rem}
   .grid-cols-3 {grid-template-columns: repeat(3, 1fr)}
   .rotate-340 { transform: rotate (330deg) !important; }
   .no-effect:focus, .no-effect:active {
      background-color: transparent !important;
      border: none !important;
   }
   .no-effect:focus {outline: none !important}
   .p-sidebar-mask { padding-top: 4.6rem !important ; z-index: 3 !important ;}
   
   @keyframes fadeSlideOut {
      from { opacity: 1; transform: translateX(0); }
      to { opacity :0; transform: translateX(-30px); }
   }
   .fadein {
      animation: fadeSlideIn 0.6s ease forwards;
      z-index: 1;
   }

   .fadeout {
      animation: fadeSlideOut 0.6s ease forwards;
      z-index: 1;
   }

   
   .scroll-container {
      overflow-x: auto;
      scrollbar-width: none;
   }

   .scroll-container::-webkit-scrollbar {
      height: 0;
      transition: height 0.3s ease;
   }

   .scroll-container:hover::-webkit-scrollbar { height: 8px; }
   .scroll-container::-webkit-scrollbar-thumb {
      border: .12rem solid var(--gray-600);
      transition: all 0.2s;
   }
   .p-check .p-checkbox-box {
      border-radius: .25rem;
   }

   .p-checkbox.p-highlight .p-checkbox-box,
   .p-radiobutton.p-highligh .p-radiobutton-box {
      border-color: var(--pink--600);
      background: var(--pink--600);
      color: --surface-a; 
   }

   .p-checkbox .p-checkbox-box .p-checkbox-icon,
  .p-radiobutton .p-radiobutton-box .p-radiobutton-icon {
   color: var(--surface-a);
  }

   .p-checkbox.p-highlight .p-checkbox-box .p-checkbox-icon,
   .p-radiobutton.p-highlight .p-radiobutton-icon {
      color: var(--surface-a);
   }

   label:hover .p-checkbox .p-checkbox-box,
   label:hover .p-radiobutton .p-radiobutton-box {
    border-width: .2rem;
    border-color: var(--pink-600);
  }

  .p-dropdown {
    & .p-dropdown-label { padding: .6rem 0; }
    & .p-dropdown-trigger { width: 2rem; }
  }

  .p-image-preview-indicator {
    background-color: transparent;
    & i {
      font-size: 2rem;
      padding: 3rem;
      background-color: var(--pink-600);
      color: var(--surface-a);
      opacity: 0.6;
      border-radius: 50%;
    }
  }
  .p-dropdown-panel { 
    & .p-dropdown-items {
      & .p-dropdown-item {
        &.p-highlight {
          color: var(--pink-600);
        }
      }
    }
  }
`;


const App = () => {
  const {
    products: { items: product },
    products: {
      filter: { category },
    },
    siteinfo: { menu, name: siteName },
  } = SiteData;

   const location = useLocation();
   const path = location.pathname;

   const isUnderConstruction = menu.some((route) => route.link === path);

   const isValidRoute = (path) => {
      const menuLinks = menu.map((item) => item.link);
      const extraRoutes = ["/produto/:id", "/produtos/:category"];
      return [...menuLinks, ...extraRoutes].some((pattern) =>
      matchPath({ path: pattern, end: true }, path)
      );
   };

   const smoothScrollToTop = (duration) => {
    const start = window.scrollY;
    const startTime = performance.now();

    const step = (t) => {
      const p = Math.min((t - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      window.scrollTo(0, start * (1 - eased));
      if (p < 1) requestAnimationFrame(step);
    };

     requestAnimationFrame(step);
  };
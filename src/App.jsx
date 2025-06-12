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
   
   @keyframes fade
`

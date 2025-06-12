import { useEffect } from "react";
import { Routes, Route, useLocation, matchPath } from "react-router-dom";
import Layout from "./compoments/Layout";
import HomePage from "./pages/HomePage";
import ProductListingPage from "./pages/ProductListingPage";
import ProductViewPage from "./pages/ProductViewPage";
import NotFoundPage from "./pages/NotFoundPage";
import UnderContructionPage from "./pages/UnderConstructionPage";
import {createGlobalStyle} from "styled-components";
import { SiteData } from "./data";


export const GlobalStyle = createGlobalStyle`

   *,*::before, *::after {
      outline: none;
      list-style: none;
      box-sizing: border-box;
   }

   body {
      background-color: var(--gray-50);
      
   }

`
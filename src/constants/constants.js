import Layout from "components/Layout";
import Weather from "components/features/Weather";
import Home from "components/Home";
import React from "react";
import Resources from "../containers/features/Resources";

export const MENU = {
  HOME: "Home",
  SETTINGS: "Settings",
  PROFILE: "Profile",
  FEATURES: {
    WEATHER: "Weather",
    RESOURCES: "Resources"
  }
};

export const ROUTES = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/features/weather",
    component: Weather
  },
  {
    path: "/features/resources",
    component: Resources
  }
];

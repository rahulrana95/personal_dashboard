import Layout from "components/Layout";
import Weather from "components/features/Weather";
import React from "react";

export const MENU = {
  HOME: "Home",
  SETTINGS: "Settings",
  PROFILE: "Profile",
  FEATURES: {
    WEATHER: "Weather"
  }
};

export const ROUTES = [
  {
    path: "/",
    component: Weather
  },
  {
    path: "/home",
    component: () => <div>home</div>
  },
  {
    path: "/features/weather",
    component: Weather
  }
];

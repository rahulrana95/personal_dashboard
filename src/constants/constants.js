import React from "react";
import Layout from "components/Layout";
import WeightLoss from "containers/features/WeightLoss";

export const MENU = {
  HOME: "Home",
  SETTINGS: "Settings",
  PROFILE: "Profile",
  FEATURES: {
    WEATHER: {
      name: "Weight Loss",
      icon: ''
    }
  }
};

export const ROUTES = [
  {
    path: "/",
    component: WeightLoss
  },
  {
    path: "/features/weightLoss",
    component: WeightLoss
  },
];

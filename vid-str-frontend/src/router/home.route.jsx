import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import HomeView from "../page/home/Home.view";
import AutoSwitchQuality from "../page/home/AutoSwitchQuality.view";

export const homeRoute = [
  {
    path: "/",
    element: (
      <Suspense fallback={<h6>Loading....</h6>}>
        <Outlet />
      </Suspense>
    ),
    children: [
      { element: <HomeView />, index: true },
      { element: <AutoSwitchQuality />, path: "/auto-switch-quality" },
    ],
  },
];

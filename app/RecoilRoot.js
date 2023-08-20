"use client";
import { RecoilRoot } from "recoil";

const recoilRoot = ({ children }) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

export default recoilRoot;

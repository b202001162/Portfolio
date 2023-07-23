import React from 'react'
import Navbar from "./Navbar";
import LoadingPage from "./LoadingContainer";
import Body from "./Body";

export default function Home() {
  return (
    <>
        <Navbar />
        <LoadingPage />
        <Body />
    </>
  )
}

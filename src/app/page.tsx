"use client";
import Image from "next/image";
import Button_01, {Button_02} from "./component/button";

export default function Home() {
  return (
    <>
      <div className="container mx-auto">
        <h2>Kuis Kota</h2>
        <Button_01 />
        <hr></hr>
        <Button_02 message="This is my message" buttonName="Message"/>
      </div>
    </>
  );
}

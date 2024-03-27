"use client";
import Image from "next/image";
import Button_01, {Button_02, Button_03} from "./component/button";
import Gallery from "./component/gallery";
import Form, { Form_2 } from "./component/form";
import Accordion from "./component/accordion";

export default function Home() {
  return (
    <>
      <div className="container mx-auto">
        <h2>Kuis Kota</h2>
        <Button_01 />
        <hr></hr>
        <Button_02 message="This is my message" buttonName="Message"/>
      </div>
      <br></br>
      <div className="bg-red-300" onClick={() => alert('Parent Element : Div')}>
        <Button_03 message="Child Element : Button_01" buttonName="Button_01" />
        <Button_03 message="Child Element : Button_02" buttonName="Button_02" />
      </div>
      <br></br>
      <Gallery />
      <br></br>
      <Form />
      <br></br>
      <Form_2 />
      <br></br>
      <Accordion />
    </>
  );
}

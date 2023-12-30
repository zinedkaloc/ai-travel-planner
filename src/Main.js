import React from "react";
import ImageList from './ImageList';
import { Loading, MainContent, ResponseContainer, Subtitle, Title } from "./Style";
import { ResponseData } from "./ResponseData";

export const Main = ({ loading, response, images, handleSubmit, handleChange, email }) => (
  <MainContent>
    <Title>⭐️ Travel Planner ⭐️</Title>
    {!response && <Subtitle>Fill the form to generate your itinerary</Subtitle>}

    <ResponseContainer>
      {/* <ImageList images={images}></ImageList> */}
      {loading ? <Loading /> : response && <ResponseData response={response} images={undefined} />}
    </ResponseContainer>
  </MainContent>
);

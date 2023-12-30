import React from "react";
import ResponseData from "./ResponseData";
import {
  Loading,
  MainContent,
  ResponseContainer,
  Subtitle,
  Title,
} from "./Styles";
 const Main = ({
  loading,
  response}) => <MainContent>
    <Title>⭐️ Travel Planner ⭐️</Title>
    {!response && <Subtitle>Fill the form to generate your itinerary</Subtitle>}

    <ResponseContainer>
      {loading ? <Loading /> : response && <ResponseData response={response} />}
    </ResponseContainer>
  </MainContent>;
  
  export default Main;
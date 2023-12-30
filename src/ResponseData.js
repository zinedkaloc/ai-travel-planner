import React from "react";

import { ActionButton, ButtonContainer, ResponseContainer, ResponseText, ResponseTitle } from "./Style";
import ReactMarkdown from "react-markdown";


export const ResponseData = ({ response, images }) => {
  return (
    <ResponseContainer>
      <ResponseTitle>
        <span role="img" aria-label="emoji"></span> Your travel plan is ready 🎉
      </ResponseTitle>
      <ResponseText>

        <ReactMarkdown>{response}</ReactMarkdown>
      </ResponseText>
      <ButtonContainer>
        <ActionButton
          onClick={() => {
            const blob = new Blob([response], {
              type: "text/plain;charset=utf-8",
            });
            const url = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.setAttribute("href", url);
            link.setAttribute("download", "travel-plan.txt");
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
            return false;
          }}
        >
          Download
        </ActionButton>
      </ButtonContainer>
    </ResponseContainer>
  );
};

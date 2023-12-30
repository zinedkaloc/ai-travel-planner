import React from "react";
import { Button } from "./Style";

export const GenerateButton = ({ loading, onClick }) => (
  <Button onClick={onClick} disabled={loading}>
    {loading ? "Please wait..." : "Generate"}
  </Button>
);

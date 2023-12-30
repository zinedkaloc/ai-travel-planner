import React from "react";
import {
  Button,
} from "./Styles";
export const GenerateButton = ({
  loading,
  onClick
}) => <Button onClick={onClick} disabled={loading}>
    {loading ? "Please wait..." : "Generate"}
  </Button>;
  
import React, { useState } from "react";
import { Grid, Typography, Button } from "@mui/material";

const CalcButton = ({
  value,
  type,
}: {
  value: string;
  type: "number" | "operation" | "action";
}) => {
  let buttonColor;
  let textColor = "white";

  switch (type) {
    case "number":
      buttonColor = "#393939";
      break;
    case "operation":
      buttonColor = "#f09a36";
      break;
    case "action":
      buttonColor = "#a8a8a8";
      textColor = "black";
      break;
    default:
      break;
  }

  return (
    <Grid item xs={3}>
      <Button
        sx={{
          borderRadius: "50%",
          width: "65px",
          height: "65px",
          backgroundColor: buttonColor,
          color: textColor,
        }}
        // onClick={() => doCalculation(value)}
      >
        <Typography variant="h6" fontWeight="bold">
          {value}
        </Typography>
      </Button>
    </Grid>
  );
};

export default CalcButton;

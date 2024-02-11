//Inspiration:
"use client";
import React, { useState } from "react";
import { Grid, Typography, Button } from "@mui/material";

export default function Calculator() {
  const [result, setResult] = useState<undefined | number>();
  const [display, setDisplay] = useState("0");
  const [operation, setOperation] = useState("");
  const [lastButton, setLastButton] = useState<string>();
  const [lastButtonValue, setLastButtonValue] = useState<string>("");

  const handleClick = (value: any, type: string) => {
    //Number
    if (type === "number") {
      if (lastButtonValue === "-/+" && display === "0") {
        setDisplay((parseFloat(value) * -1).toString());
      } else if (lastButton === "operation") {
        setDisplay(value);
      } else if (display === "0") {
        setDisplay(value);
        return;
      } else {
        setDisplay(display + value);
      }
    }
    //Operation
    if (type === "operation") {
      if (value === "=") {
        doCalculation();
        setResult(undefined);
        setOperation("");
      } else if (result !== undefined && operation !== "" && display !== "0") {
        doCalculation();
        setOperation(value);
      } else if (result === undefined) {
        setResult(parseFloat(display));
        setOperation(value);
      }
    }

    //Action
    if (type === "action") {
      switch (value) {
        case "C":
          setDisplay("0");
          setResult(undefined);
          setOperation("");
          break;
        case "-/+":
          setDisplay((parseFloat(display) * -1).toString());
          break;
        case "%":
          setDisplay((parseFloat(display) / 100).toString());
          break;
        default:
          break;
      }
    }
    setLastButton(type);
    setLastButtonValue(value);
    console.log({ value, type, display, result, operation });
  };

  const doCalculation = () => {
    if (result === undefined) {
      return;
    }
    let newResult;
    switch (operation) {
      case "+":
        newResult = result + parseFloat(display);
        break;
      case "-":
        newResult = result - parseFloat(display);
        break;
      case "x":
        newResult = result * parseFloat(display);
        break;
      case "÷":
        newResult = result / parseFloat(display);
        break;
      default:
        newResult = parseFloat(display);
        break;
    }
    setResult(newResult);
    setDisplay(newResult.toString());
  };

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
          onClick={() => {
            handleClick(value, type);
          }}
        >
          <Typography variant="h6" fontWeight="bold">
            {value}
          </Typography>
        </Button>
      </Grid>
    );
  };

  return (
    <Grid
      container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Grid
        item
        container
        sx={{
          backgroundColor: "black",
          flexDirection: "column",
          width: 300,
          height: 600,
        }}
      >
        <Grid
          item
          sx={{
            width: "100%",
            height: "30%",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-end",
            p: 2,
          }}
        >
          <Typography variant="h2" sx={{ color: "white" }}>
            {display}
          </Typography>
        </Grid>
        <Grid
          item
          container
          sx={{
            // backgroundColor: "red",
            width: "100%",
            height: "70%",
            p: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CalcButton type="action" value="C" />
          <CalcButton type="action" value="-/+" />
          <CalcButton type="action" value="%" />
          <CalcButton type="operation" value="÷" />

          <CalcButton type="number" value="7" />
          <CalcButton type="number" value="8" />
          <CalcButton type="number" value="9" />
          <CalcButton type="operation" value="x" />

          <CalcButton type="number" value="4" />
          <CalcButton type="number" value="5" />
          <CalcButton type="number" value="6" />
          <CalcButton type="operation" value="-" />

          <CalcButton type="number" value="1" />
          <CalcButton type="number" value="2" />
          <CalcButton type="number" value="3" />
          <CalcButton type="operation" value="+" />

          <CalcButton type="number" value="0" />
          <CalcButton type="number" value=" " />
          <CalcButton type="number" value="." />
          <CalcButton type="operation" value="=" />
        </Grid>
      </Grid>
    </Grid>
  );
}

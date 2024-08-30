import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";
import Spacer from "../spacer";

const steps = ["Order Placed", "Preparing Shipment", "Shipped", "Delivered"];

export const CustomStepper = () => {
  const activeStep = 1; // The current active step, e.g., "Preparing Shipment"

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ mt: 3 }}>
        <Typography variant="h6" gutterBottom>
          Current Status: {steps[activeStep]}
        </Typography>
        <Typography variant="body1">
          Your order is currently being prepared for shipment. We will notify
          you when it has been shipped.
        </Typography>
      </Box>
      <Spacer x={24} />
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const labelProps: {
            optional?: React.ReactNode;
            error?: boolean;
          } = {};

          return (
            <Step key={label}>
              <StepLabel
                {...labelProps}
                sx={{
                  "& .MuiStepLabel-label": {
                    color: index === activeStep ? "black" : "gray", // Active step is black, others are gray
                    fontWeight: index === activeStep ? "bold" : "normal", // Bold font for active step
                  },
                  "& .MuiStepIcon-root": {
                    color: index < activeStep ? "#3f51b5" : "gray", // Completed steps are blue, current and future steps are gray
                  },
                  "& .MuiStepConnector-line": {
                    borderColor: index < activeStep ? "#3f51b5" : "gray", // Connector color: completed steps are blue, others are gray
                  },
                }}
              >
                {label}
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </Box>
  );
};

export default CustomStepper;

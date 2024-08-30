import * as React from "react";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import { StepIconProps } from "@mui/material/StepIcon";
import { Typography, Box } from "@mui/material";
import { LocalShippingOutline, CheckedIcon } from "assets/icons";
import Spacer from "../spacer";

// Stepper connector with customized styles
const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: "#6D4E39",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: "#6D4E39",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor: "#eaeaf0",
    borderRadius: 1,
    ...theme.applyStyles("dark", {
      backgroundColor: theme.palette.grey[800],
    }),
  },
}));

// Custom step icon root component
const ColorlibStepIconRoot = styled("div")<{
  ownerState: { completed?: boolean; active?: boolean };
}>(({ theme, ownerState }) => ({
  backgroundColor: ownerState.completed
    ? "rgba(76,175,80,0.3)" // Greenish background if completed
    : ownerState.active
    ? "rgba(242,113,33,0.3)" // Orange background if active
    : "#ccc", // Default gray background
  zIndex: 1,
  color: "#fff",
  width: 50,
  height: 50,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...theme.applyStyles("dark", {
    backgroundColor: ownerState.completed
      ? theme.palette.success.main
      : ownerState.active
      ? theme.palette.warning.main
      : theme.palette.grey[700],
  }),
  variants: [
    {
      props: ({ ownerState }) => ownerState.active,
      style: {
        backgroundColor: "#6D4E39",
        boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
      },
    },
    {
      props: ({ ownerState }) => ownerState.completed,
      style: {
        backgroundColor: "#6D4E39",
        // boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
      },
    },
  ],
}));

// Custom step icon component that uses icons passed via props
function ColorlibStepIcon(props: StepIconProps & { icon: React.ReactElement }) {
  const { active, completed, className, icon } = props;

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {icon}
      {/* {completed ? <CheckedIcon /> : icon} */}
    </ColorlibStepIconRoot>
  );
}

// The customized stepper component which accepts icon and text as props
export const CustomizedSteppers = ({
  steps,
  activeStep,
  statusText,
}: {
  steps: { label: string; icon: React.ReactElement }[];
  activeStep: number;
  statusText: string;
}) => {
  return (
    <Stack sx={{ width: "100%" }} spacing={4}>
      <Spacer y={12}></Spacer>
      <Box sx={{ mt: 10, justifyContent: "center", display: "flex" }}>
        <Typography>{statusText}</Typography>
      </Box>

      <Stepper
        alternativeLabel
        activeStep={activeStep}
        connector={<ColorlibConnector />}
      >
        {steps.map((step, index) => (
          <Step key={index}>
            <StepLabel
              StepIconComponent={(props) => (
                <ColorlibStepIcon {...props} icon={step.icon} />
              )}
            >
              {step.label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Stack>
  );
};

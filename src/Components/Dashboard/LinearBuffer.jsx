import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { forwardRef, useEffect, useState } from "react";

const LinearBuffer = forwardRef(({ currentColor, progress }, ref) => {
  const [buffer, setBuffer] = useState(10);
  useEffect(() => {
    if (progress < 100) {
      const timer = setInterval(() => {
        setBuffer((prevBuffer) => {
          const newBuffer = prevBuffer + 10;
          return newBuffer > 100 ? 100 : newBuffer;
        });
      }, 200);

      return () => {
        clearInterval(timer);
      };
    }
  }, [progress]);
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        color: currentColor,
      }}
    >
      <Box sx={{ width: "100%", mr: 2 }}>
        {" "}
        <LinearProgress
          variant="buffer"
          value={progress}
          color="inherit"
          ref={ref}
          valueBuffer={buffer}
        />
      </Box>
      <span className="text-sm inline">{progress}%</span>
    </Box>
  );
});

export default LinearBuffer;

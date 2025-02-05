import React, { useState } from "react";
import { Button, Box, Typography } from "@mui/material";
import { animated, useSpring } from "react-spring";

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const handleIncrement = () => setCount((prev) => prev + 1);
  const handleDecrement = () => setCount((prev) => prev - 1);
  const handleReset = () => setCount(0);

  const bgAnimation = useSpring({
    background: `rgba(0, 0, 255, ${count * 0.1})`,
    config: { tension: 220, friction: 120 },
  });

  return (
    <animated.div
      style={{ ...bgAnimation, padding: "20px", borderRadius: "10px" }}
    >
      <Typography variant="h4">{count}</Typography>
      <Box display="flex" gap={2} mt={2}>
        <Button variant="contained" onClick={handleIncrement}>
          +
        </Button>
        <Button variant="contained" onClick={handleReset}>
          Reset
        </Button>
        <Button variant="contained" onClick={handleDecrement}>
          -
        </Button>
      </Box>
    </animated.div>
  );
};

export default Counter;

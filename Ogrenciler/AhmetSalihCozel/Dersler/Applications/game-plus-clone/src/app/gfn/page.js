import React from "react";
import Button from "../Atoms/Button";
import Typography from "../Atoms/Typography";
import Badge from "../Atoms/Badge";

export default function Home() {
  return (
      <div className="flex flex-col gap-2">
        <Typography variant="h1">Selam Canım Naber</Typography>
        <Button variant="contained">Contained Button</Button>
        <Button variant="outlined">Outlined Button</Button>
        <Button variant="dissabled">Disabled Button</Button>
        <Button variant="xlButton">Contained Button</Button>
        <Badge>40%</Badge>
      </div>
  );
}
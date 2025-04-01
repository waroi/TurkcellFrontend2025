import { useEffect, useRef, useState } from "react";

export default function Canvas() {
  const [canvas, setCanvas] = useState();
  const [drawing, setDrawing] = useState(false);

  const [coordinate, setCoordinate] = useState();

  const canvasRef = useRef();

  useEffect(() => {
    setCanvas({
      context: ((context) => {
        context.strokeStyle = "black";
        context.lineWidth = 1;

        return context;
      })(canvasRef.current.getContext("2d")),
    });
  }, []);

  useEffect(
    (events) => {
      if (canvas && canvasRef.current) {
        events = [
          (event) => setCoordinate({ x: event.offsetX, y: event.offsetY }),
          () => {
            setDrawing(true);
            canvas.context.beginPath();
          },
          () => setDrawing(false),
        ];

        canvasRef.current.addEventListener("mousemove", events[0]);
        canvasRef.current.addEventListener("mousedown", events[1]);
        canvasRef.current.addEventListener("mouseup", events[2]);
      }

      return () => {
        if (events) {
          canvasRef.current.removeEventListener("mousemove", events[0]);
          canvasRef.current.removeEventListener("mousedown", events[1]);
          canvasRef.current.removeEventListener("mouseup", events[2]);
        }
      };
    },
    [canvas]
  );

  useEffect(() => {
    if (coordinate && drawing) {
      canvas.context.lineTo(coordinate.x, coordinate.y);
      canvas.context.stroke();
    }
  }, [coordinate, drawing]);

  const color = (color) =>
    setCanvas((canvas) => {
      canvas.context.strokeStyle = color;
      return { ...canvas };
    });

  const size = (size) =>
    setCanvas((canvas) => {
      canvas.context.lineWidth = size;
      return { ...canvas };
    });

  const clear = () =>
    canvas.context.clearRect(
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height
    );

  return (
    <div id="canvas">
      <div>
        <button
          onClick={() => {
            let x = prompt("COLOR");
            color(x);
          }}
        >
          SET COLOR
        </button>
        <button
          onClick={() => {
            let x = prompt("SIZE");
            size(x);
          }}
        >
          SET SIZE
        </button>
        <button onClick={clear}>CLEAR</button>
      </div>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
}

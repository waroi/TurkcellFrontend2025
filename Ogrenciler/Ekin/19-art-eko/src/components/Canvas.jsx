import { useEffect, useRef, useState } from "react";

export default function Canvas({ word, hinted = [] }) {
  const [canvas, setCanvas] = useState();
  const [drawing, setDrawing] = useState(false);

  const [coordinate, setCoordinate] = useState();

  const canvasRef = useRef();

  useEffect((timeout, resize) => {
    timeout = setTimeout(calibrate, 500);

    resize = window.addEventListener("resize", calibrate);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("resize", resize);
    };
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

  const calibrate = (size, data) => {
    data = canvasRef.current
      .getContext("2d")
      .getImageData(0, 0, canvasRef.current.width, canvasRef.current.height);
    size = canvasRef.current.getBoundingClientRect();

    canvasRef.current.width = size.width;
    canvasRef.current.height = size.height;

    setCanvas({
      context: ((context) => {
        context.strokeStyle = "#242431";
        context.lineWidth = 5;
        context.putImageData(data, 0, 0);

        return context;
      })(canvasRef.current.getContext("2d")),
    });
  };

  const color = (event, selected) => {
    console.log(
      event.target.parentElement.parentElement.parentElement.querySelector(
        ".selected"
      )
    );

    selected = event.target.parentElement.parentElement.parentElement
      .querySelector(".selected")
      ?.classList.remove("selected");

    event.target.classList.toggle("selected");

    setCanvas((canvas) => {
      canvas.context.strokeStyle = event.target.dataset.color;
      return { ...canvas };
    });
  };

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
        <div>
          <button
            className="selected"
            onClick={color}
            data-color="#242431"
          ></button>
          <button onClick={color} data-color="#ff1b1b"></button>
          <button onClick={color} data-color="#ff9100"></button>
          <button onClick={color} data-color="#ffd100"></button>
          <button onClick={color} data-color="#00a600"></button>
          <button onClick={color} data-color="#2a30cc"></button>
          <button onClick={color} data-color="#8522a3"></button>
          <button onClick={color} data-color="#7e7e97"></button>
          <button onClick={color} data-color="#ff97d2"></button>
          <button onClick={color} data-color="#a25200"></button>
          <button onClick={color} data-color="#ffa878"></button>
          <button onClick={color} data-color="#81ff6b"></button>
          <button onClick={color} data-color="#4af2f7"></button>
          <button onClick={color} data-color="#0095f8"></button>
        </div>
        <div>
          <div>
            <button onClick={color} data-color="#fff">
              <i className="fa-solid fa-eraser"></i> Erase
            </button>
            <button onClick={clear}>
              <i className="fa-solid fa-file"></i> Clear
            </button>
          </div>
          <input
            type="range"
            min="1"
            max="15"
            defaultValue="5"
            onChange={(event) =>
              setCanvas((canvas) => {
                canvas.context.lineWidth = event.target.value;
                return { ...canvas };
              })
            }
          />
        </div>
        <div>
          <h3>
            {word.split("").map((character, index) => (
              <span
                key={index}
                className={hinted.includes(index) ? "hinted" : ""}
              >
                {character}
              </span>
            ))}
          </h3>
        </div>
        <button>
          <i className="fa-solid fa-highlighter"></i> Hint
        </button>
      </div>
      <div>
        <canvas ref={canvasRef}></canvas>
      </div>
    </div>
  );
}

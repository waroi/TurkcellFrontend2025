export default function ImageInput({ value, onChange }) {
  return (
    <div className="image-input">
      <label htmlFor="image-input" {...(value && { className: "image" })}>
        {value ? (
          <img src={value} alt="Profile" />
        ) : (
          <>
            <i className="fa-solid fa-user"></i>
            <i className="fa-solid fa-face-laugh"></i>
            <i className="fa-solid fa-plus"></i>
          </>
        )}
      </label>
      <input
        type="file"
        accept="image/*"
        id="image-input"
        onChange={(event, reader) => {
          if (event.target.files[0]) {
            reader = new FileReader();

            reader.onloadend = (image) => {
              image = new Image();
              image.src = reader.result;

              image.onload = (canvas, context, scale) => {
                canvas = document.createElement("canvas");
                context = canvas.getContext("2d");

                canvas.width = 512;
                canvas.height = 512;

                scale = Math.max(512 / image.width, 512 / image.height);

                context.drawImage(
                  image,
                  (512 - image.width * scale) / 2,
                  (512 - image.height * scale) / 2,
                  image.width * scale,
                  image.height * scale
                );

                onChange(canvas.toDataURL("image/jpeg"));
              };
            };

            reader.readAsDataURL(event.target.files[0]);
          } else onChange("");
        }}
      />
    </div>
  );
}

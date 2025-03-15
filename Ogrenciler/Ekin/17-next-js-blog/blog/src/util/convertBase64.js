export default function convertBase64(file) {
  if (file)
    return new Promise((resolve, reader) => {
      reader = new FileReader();

      reader.onloadend = () => {
        resolve(reader.result);
      };

      reader.readAsDataURL(file);
    });
  return new Promise((resolve) => {
    resolve(
      "https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg"
    );
  });
}

const previewIMG = document.querySelector('.preview-image');

previewIMG.onerror = () => {
  previewIMG.src =
    'https://github.com/furkan-firat/cinecalm/blob/main/public/defaultPoster.jpg?raw=true';
};

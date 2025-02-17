import JsonServiceApi from "../services/jsonSeviceApi.js";
import Game from "./game.js";

class Modal {
  constructor() {
    this.inputs = [];
    this.modal = document.createElement("div");
    this.modal.className = "modal fade ";
    const modal_dialog = document.createElement("div");
    modal_dialog.className = "modal-dialog";
    const modal_content = document.createElement("div");
    modal_content.className = "modal-content  bg-warning";
    const modal_img = document.createElement("div");
    modal_img.className = "modal-img";
    const modal_header = document.createElement("div");
    modal_header.className = "modal-header";
    const modal_title = document.createElement("h5");
    modal_title.className = "modal-title";
    const close_btn = document.createElement("button");
    close_btn.className = "btn-close";
    close_btn.setAttribute("data-bs-dismiss", "modal");
    close_btn.ariaLabel = "Close";
    close_btn.addEventListener("click", () =>
      this.modal
        .querySelectorAll("#addModal input")
        .forEach((input) => (input.value = ""))
    );
    const modal_body = document.createElement("div");
    modal_body.className = "modal-body";
    const modal_footer = document.createElement("div");
    modal_footer.className = "modal-footer";
    const form = document.createElement("form");
    form.className = "row g-3";
    const name = document.createElement("input");
    name.id = "name";
    name.type = "text";
    name.className = "form-control";
    name.placeholder = "Game name";
    const name_label = document.createElement("label");
    name_label.textContent = "Game Name";
    name_label.for = "name";
    const info = document.createElement("textarea");
    info.id = "info";
    info.style.height = "150px";
    info.placeholder = "Game information";
    info.className = "form-control col-12";
    const info_label = document.createElement("label");
    info_label.textContent = "Game Information";
    info_label.for = "info";
    const genres = document.createElement("input");
    genres.id = "genres";
    genres.type = "text";
    genres.className = "form-control";
    genres.placeholder = "Game genres (Action, Strategy, ...)";
    const genre_label = document.createElement("label");
    genre_label.textContent = "Categories";
    genre_label.for = "genres";
    const release = document.createElement("input");
    release.id = "release";
    release.type = "date";
    release.className = "form-control";
    const release_label = document.createElement("label");
    release_label.textContent = "Release Date";
    release_label.for = "release";
    const img_url = document.createElement("input");
    img_url.id = "img-url";
    img_url.type = "text";
    img_url.className = "form-control";
    img_url.placeholder = "Game image url";
    const img_url_label = document.createElement("label");
    img_url_label.textContent = "Game Image Url";
    img_url_label.for = "img-url";
    const company = document.createElement("input");
    company.id = "company";
    company.type = "text";
    company.className = "form-control";
    company.placeholder = "Game company";
    const company_label = document.createElement("label");
    company_label.textContent = "Company Name";
    company_label.for = "company";
    const stream_url = document.createElement("input");
    stream_url.id = "stream-url";
    stream_url.type = "text";
    stream_url.className = "form-control";
    stream_url.placeholder = "Game stream url";
    const stream_url_label = document.createElement("label");
    stream_url_label.textContent = "Game Stream Url";
    stream_url_label.for = "stream-url";
    this.inputs.push(name, genres, release, img_url, company, stream_url, info);
    const labels = [
      name_label,
      genre_label,
      release_label,
      img_url_label,
      company_label,
      stream_url_label,
      info_label,
    ];
    modal_header.append(modal_title, close_btn);
    this.inputs.forEach((input, index) => {
      const div = document.createElement("div");
      div.className = "form-floating mb-3";
      div.append(input, labels[index]);
      this.inputs[index] = div;
      form.append(div);
    });
    modal_body.append(form);
    modal_content.append(modal_header, modal_img, modal_body, modal_footer);
    modal_dialog.append(modal_content);
    this.modal.append(modal_dialog);
    const body = document.querySelector("body");
    body.append(this.modal);
  }

  detailModal(game) {
    this.modal.id = game.id + "Modal";
    const img = document.createElement("img");
    img.src = game.img_url;
    img.style.width = "100%";
    this.modal.querySelector(".modal-img").append(img);
    this.modal.querySelector(".modal-title").textContent = game.name;
    const inputs = this.modal.querySelector("form").querySelectorAll("input");
    const textarea = this.modal.querySelector("form").querySelector("textarea");
    inputs[0].value = game.name;
    inputs[1].value = game.genre;
    inputs[2].value = game.release;
    inputs[3].value = game.img_url;
    inputs[4].value = game.company;
    inputs[5].value = game.stream_url;
    textarea.value = game.information;
    const update_btn = document.createElement("button");
    update_btn.textContent = "Update";
    update_btn.className = "btn btn-primary";
    update_btn.setAttribute("data-bs-dismiss", "modal");
    update_btn.addEventListener("click", () => {
      if (this.inputCheck(inputs)) {
        JsonServiceApi.put(
          new Game(
            inputs[0].value,
            inputs[1].value,
            inputs[2].value,
            inputs[3].value,
            inputs[4].value,
            inputs[5].value,
            textarea.value,
            game.id
          )
        );
      } else {
        alert("You cannot enter empty input!");
      }
    });
    this.modal.querySelector(".modal-footer").append(update_btn);
  }
  inputCheck(inputs) {
    let bool = true;
    inputs.forEach((input) => {
      if (input.value.trim() == "") {
        bool = false;
      }
    });
    return bool;
  }
}
export default Modal;

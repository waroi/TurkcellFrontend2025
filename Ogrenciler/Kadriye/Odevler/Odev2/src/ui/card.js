import Modal from "./modal.js";
import JsonServiceApi from "../services/jsonSeviceApi.js";

class Card {
  constructor(game) {
    this.game = game;
    this.modal = new Modal().detailModal(this.game);
  }
  createCard() {
    const col = document.createElement("div");
    col.className = "col-md-6 col-lg-3";
    const card = document.createElement("div");
    card.className = "card h-100";
    const img = document.createElement("img");
    img.className = "card-img-top";
    img.src = this.game.img_url;
    const card_body = document.createElement("div");
    card_body.className = "card-body";
    const title = document.createElement("h5");
    title.className = "card-title";
    title.textContent = this.game.name;
    title.title = this.game.name;
    const text = document.createElement("p");
    text.className = "card-text";
    text.textContent = this.game.information.substring(0, 190) + "...";
    const detail_btn = document.createElement("button");
    detail_btn.className = "btn btn-primary";
    detail_btn.textContent = "Details";
    detail_btn.setAttribute("data-bs-toggle", "modal");
    detail_btn.setAttribute("data-bs-target", `#${this.game.id}Modal`);
    const card_footer = document.createElement("div");
    card_footer.className = "mt-auto d-flex justify-content-between m-3";
    const stream_link = document.createElement("a");
    stream_link.className = "btn btn-secondary mt-auto";
    stream_link.href = this.game.stream_url;
    stream_link.textContent = "Go ";
    stream_link.target = "_blank";
    const stream_icon = document.createElement("i");
    stream_icon.className = "fa-brands fa-steam";
    stream_link.append(stream_icon);
    const delete_btn = document.createElement("button");
    delete_btn.className = "btn btn-outline-danger fw-bold";
    const delete_icon = document.createElement("i");
    delete_icon.className = "fa-solid fa-trash";
    delete_btn.append(delete_icon);
    delete_btn.addEventListener("click", () => {
      try {
        JsonServiceApi.delete(this.game.id);
      } catch {
        console.log(error);
      }
    });
    card_footer.append(detail_btn, stream_link, delete_btn);
    card_body.append(title, document.createElement("hr"), text);
    card.append(img, card_body, card_footer);
    col.append(card);
    return col;
  }
}
export default Card;

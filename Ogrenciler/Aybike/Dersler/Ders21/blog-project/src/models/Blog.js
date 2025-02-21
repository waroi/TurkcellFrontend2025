export default class Blog {
  constructor(title, image, content, creator, date, category, id = "") {
    this.id = id;
    this.title = title;
    this.image = image;
    this.content = content;
    this.creator = creator;
    this.category = category;
    this.date = date;
  }
}

import React from "react";
import Input from "../Input";
import CustomButton from "../CustomButton";

const Form = ({ onChange, onSubmit, value }) => {
  return (
    <div className="form">
      <form onSubmit={onSubmit}>
        <h5 className="display-6 fs-3 mb-5 text-center">
          Post İçeriğini Düzenle
        </h5>
        <div className="mb-3">
          <Input
            id="image"
            value={value.image}
            onChange={onChange}
            label="Post Görsel URL'i"
          />
        </div>
        <div className="mb-3">
          <Input
            id="title"
            value={value.title}
            onChange={onChange}
            label="Post Başlığı"
          />
        </div>
        <div className="mb-3">
          <Input
            id="content"
            value={value.content}
            onChange={onChange}
            label="Post İçeriği"
          />
        </div>
        <div className="mb-3">
          <Input
            id="author"
            value={value.author}
            onChange={onChange}
            label="Post Yazarı"
          />
        </div>
        <div className="mb-3">
          <Input
            type="date"
            id="releaseDate"
            value={value.releaseDate}
            onChange={onChange}
            label="Post Yayınlanma Tarihi"
          />
        </div>

        <CustomButton type="submit" variant="warning" buttonText="Güncelle" />
      </form>
    </div>
  );
};

export default Form;

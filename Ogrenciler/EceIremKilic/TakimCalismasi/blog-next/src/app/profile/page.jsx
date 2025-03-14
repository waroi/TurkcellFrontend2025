"use client";
import React, { useEffect, useState } from "react";
import { uploadProfileImage } from "@/controller/StorageController";
import { getCurrentUser, getUserData } from "@/controller/AuthController";

const ProfilePage = () => {
  const [userData, setUserData] = useState(null);
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleUpload = async () => {
    if (!image) return;
    setUploading(true);
    try {
      const imageUrl = await uploadProfileImage(image);
    } catch (error) {}
    setUploading(false);
  };

  return (
    <div className="profile-page">
      <div className="container">
        <div className="col-md-6">
          <h3>Pick Image</h3>
          <input type="file" accept="image/*" onChange={handleImageChange} />
          {preview && <img src={preview} alt="Preview" width={150} />}
          <button
            className="btn btn-success mt-2"
            onClick={handleUpload}
            disabled={uploading}
          >
            {uploading ? "Uploading..." : "Upload Image"}
          </button>
        </div>
        <div className="col-md-6">
          <form>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                defaultValue={userData.fullName}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                defaultValue={userData.email}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

import React, { useState } from "react";
import { uploadJobs } from "../firebase/firebaseUpload";
import Navbar from "../components/Navbar";

const UploadJobForm = () => {
    const [job, setJob] = useState({ title: "", description: "" });

    const handleChange = (e) => {
        setJob({ ...job, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await uploadJobs(job);
            alert("İş ilanı başarıyla yüklendi!");
            setJob({ title: "", description: "" });
        } catch (error) {
            console.error("Hata oluştu:", error);
        }
    };

    return (
        <div class="container mt-5 py-5">
            <Navbar />
            <div class="card shadow p-4">
                <h2 class="mb-4 text-center">İş İlanı Yükle</h2>
                <form onSubmit={handleSubmit} class="row g-3">
                    <div class="col-12">
                        <label class="form-label">İş Başlığı</label>
                        <input type="text" class="form-control" name="title" value={job.title} onChange={handleChange} required />
                    </div>
                    <div class="col-md-6">
                        <label class="form-label">Konum</label>
                        <input type="text" class="form-control" name="location" value={job.location} onChange={handleChange} required />
                    </div>
                    <div class="col-md-6">
                        <label class="form-label">Başvuru Türü</label>
                        <input type="text" class="form-control" name="type" value={job.type} onChange={handleChange} required />
                    </div>
                    <div class="col-md-6">
                        <label class="form-label">İlan Açılış Tarihi</label>
                        <input type="date" class="form-control" name="startDate" value={job.startDate} onChange={handleChange} required />
                    </div>
                    <div class="col-md-6">
                        <label class="form-label">Son Başvuru Tarihi</label>
                        <input type="date" class="form-control" name="endDate" value={job.endDate} onChange={handleChange} required />
                    </div>
                    <div class="col-12">
                        <label class="form-label">Açıklama</label>
                        <textarea class="form-control" name="description" rows="4" value={job.description} onChange={handleChange} required></textarea>
                    </div>
                    <div class="col-12">
                        <label class="form-label">Sorumluluklar</label>
                        <textarea class="form-control" name="responsivities" rows="4" value={job.responsivities} onChange={handleChange} required></textarea>
                    </div>
                    <div class="col-12">
                        <label class="form-label">Gereksinimler</label>
                        <textarea class="form-control" name="requirements" rows="4" value={job.requirements} onChange={handleChange} required></textarea>
                    </div>
                    <div class="col-12 text-center">
                        <button type="submit" class="btn btn-primary px-4 py-2">Gönder</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UploadJobForm;

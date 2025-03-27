import React, { useState } from "react";
import { uploadJobs } from "../firebase/firebaseUpload";
import Navbar from "../components/Navbar";

const UploadJobForm = () => {
    const [job, setJob] = useState({
        title: "",
        description: "",
        location: "",
        type: "",
        startDate: "",
        endDate: "",
        area: "",
        responsivities: "",
        requirements: ""
    });

    const handleChange = (e) => {
        setJob({ ...job, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await uploadJobs(job);
            alert("İş ilanı başarıyla yüklendi!");
            setJob({
                title: "",
                description: "",
                location: "",
                type: "",
                startDate: "",
                endDate: "",
                area: "",
                responsivities: "",
                requirements: ""
            });
        } catch (error) {
            console.error("Hata oluştu:", error);
        }
    };

    return (
        <div className="container mt-5 py-5">
            <Navbar />
            <div className="card shadow p-4">
                <h2 className="mb-4 text-center">İş İlanı Yükle</h2>
                <form onSubmit={handleSubmit} className="row g-3">
                    <div className="col-12">
                        <label className="form-label">İş Başlığı</label>
                        <input type="text" className="form-control" name="title" value={job.title} onChange={handleChange} required />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Konum</label>
                        <input type="text" className="form-control" name="location" value={job.location} onChange={handleChange} required />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Başvuru Türü</label>
                        <input type="text" className="form-control" name="type" value={job.type} onChange={handleChange} required />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">İlan Açılış Tarihi</label>
                        <input type="date" className="form-control" name="startDate" value={job.startDate} onChange={handleChange} required />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Son Başvuru Tarihi</label>
                        <input type="date" className="form-control" name="endDate" value={job.endDate} onChange={handleChange} required />
                    </div>
                    <div className="col-12">
                        <label className="form-label">İş Alanı</label>
                        <select className="form-select" name="area" value={job.area} onChange={handleChange} required>
                            <option value="">Seçiniz</option>
                            <option value="front">Front-End Geliştirici</option>
                            <option value="back">Back-End Geliştirici</option>
                            <option value="yapay-zeka">Yapay Zeka Geliştirici</option>
                        </select>
                    </div>
                    <div className="col-12">
                        <label className="form-label">Açıklama</label>
                        <textarea className="form-control" name="description" rows="4" value={job.description} onChange={handleChange} required></textarea>
                    </div>
                    <div className="col-12">
                        <label className="form-label">Sorumluluklar</label>
                        <textarea className="form-control" name="responsivities" rows="4" value={job.responsivities} onChange={handleChange} required></textarea>
                    </div>
                    <div className="col-12">
                        <label className="form-label">Gereksinimler</label>
                        <textarea className="form-control" name="requirements" rows="4" value={job.requirements} onChange={handleChange} required></textarea>
                    </div>
                    <div className="col-12 text-center">
                        <button type="submit" className="btn btn-primary px-4 py-2">Gönder</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UploadJobForm;

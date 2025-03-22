import React, { useState } from "react";
import { uploadJobs } from "../firebase/firebaseUpload";

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
        <div>
            <h2>İş İlanı Yükle</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    İş Başlığı:
                    <input
                        type="text"
                        name="title"
                        value={job.title}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                <label>
                    Konum
                    <input
                        type="text"
                        name="location"
                        value={job.location}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                <label>
                    Başvuru Türü:
                    <input
                        type="text"
                        name="type"
                        value={job.type}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                <label>
                    İlan Açılış Tarihi:
                    <input
                        type="date"
                        name="startDate"
                        value={job.startDate}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                <label>
                    Son Başvuru Tarihi:
                    <input
                        type="date"
                        name="endDate"
                        value={job.endDate}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                <label>
                    Açıklama:
                    <textarea
                        name="description"
                        value={job.description}
                        onChange={handleChange}
                        required
                    ></textarea>
                </label>
                <br />
                <label>
                    Sorumluluklar:
                    <textarea
                        name="responsivities"
                        value={job.responsivities}
                        onChange={handleChange}
                        required
                    ></textarea>
                </label>
                <br />
                <label>
                    Gereksinimler:
                    <textarea
                        name="requirements"
                        value={job.requirements}
                        onChange={handleChange}
                        required
                    ></textarea>
                </label>
                <br />
                <button type="submit">Gönder</button>
            </form>
        </div>
    );
};

export default UploadJobForm;

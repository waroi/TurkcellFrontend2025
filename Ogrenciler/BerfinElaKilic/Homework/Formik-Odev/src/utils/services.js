const API_BASE_URL = 'http://localhost:3000';

export const getAllJobs = async () => {
    const response = await fetch(`${API_BASE_URL}/jobs`);
    if (!response.ok) {
        throw new Error('İlanlar yüklenirken bir hata oluştu');
    }
    return await response.json();
}

export const getJobById = async (id) => {
    const response = await fetch(`${API_BASE_URL}/jobs/${id}`);
    if (!response.ok) {
        throw new Error('İlan detayları yüklenirken bir hata oluştu');
    }
    return await response.json();
}

export const addJob = async (jobDetails) => {
    const response = await fetch(`${API_BASE_URL}/jobs`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(jobDetails),
    });
    if (!response.ok) {
        throw new Error('İlan oluşturulurken bir hata oluştu');
    }
    return await response.json();
}

export const updateJob = async (id, jobDetails) => {
    const response = await fetch(`${API_BASE_URL}/jobs/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(jobDetails),
    });
    if (!response.ok) {
        throw new Error('İlan güncellenirken bir hata oluştu');
    }
    return await response.json();
}

export const deleteJob = async (id) => {
    const response = await fetch(`${API_BASE_URL}/jobs/${id}`, {
        method: 'DELETE',
    });
    if (!response.ok) {
        throw new Error('İlan silinirken bir hata oluştu');
    }
}

export const getCandidatesByJobId = async (jobId) => {
    const response = await fetch(`${API_BASE_URL}/jobs/${jobId}/applicants`);
    if (!response.ok) {
        throw new Error('Adaylar yüklenirken bir hata oluştu');
    }
    return await response.json();
}
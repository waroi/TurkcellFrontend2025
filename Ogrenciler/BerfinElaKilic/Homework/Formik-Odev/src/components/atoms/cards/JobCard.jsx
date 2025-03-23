import React, { useEffect, useState } from "react";
import { Card, Button, CardText } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useAuth } from "../../../context/AuthContext";
import { getAllJobs } from "../../../utils/services";

const JobCard = () => {
  const [jobs, setJobs] = useState([]);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await getAllJobs();
        setJobs(response);
      } catch (error) {
        console.error("Jobs verisi alınamamdı", error);
      }
    };
    fetchJobs();
  }, []);

  return (
    <div className="mt-4">
      <div className="row">
        {jobs.map((job) => (
          <div key={job.id} className="mb-4">
            <Card className="shadow h-100 rounded-5 bg-transparent">
              <Card.Body>
                <Card.Title className="fw-bold">
                  {job.position}
                </Card.Title>
                <Card.Subtitle className="mb-2 text-secondary">
                  {job.company} - {job.location}
                </Card.Subtitle>
                <Card.Text className="badge bg-dark rounded-pill px-2 py-1">
                  {job.employmentType}
                </Card.Text>
                <Card.Text className="text-truncate">
                  {job.description}
                </Card.Text>
                <Card.Text className="fw-semibold d-inline-block px-2 bg-light rounded-pill">
                💰 Salary: {job.salaryRange}
                </Card.Text>

                <div className="d-flex justify-content-between align-items-center mt-3">
                  <Button
                    variant="primary"
                    onClick={() => navigate(`/jobs/${job.id}`)}
                  >
                    Görüntüle
                  </Button>
                  {user?.role === "admin" ? (
                    <Button
                      variant="warning"
                      onClick={() => navigate(`/jobs/edit/${job.id}`)}
                    >
                      Düzenle
                    </Button>
                  ) : (
                    <Button variant="success">Başvur</Button>
                  )}
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobCard;

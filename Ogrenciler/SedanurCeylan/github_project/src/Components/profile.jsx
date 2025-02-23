import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";

const GitHubProfile = ({ username }) => {
    const [avatar, setAvatar] = useState("");
    const [name, setName] = useState("");


    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
            .then(response => response.json())
            .then(data => {
                setAvatar(data.avatar_url);
                setName(data.name || "Bilinmeyen Kullanıcı");
            })
            .catch(error => console.error("Hata oluştu:", error));
    }, [username]);

    return (
        <div className="d-flex flex-column align-items-center">
            <img src={avatar} alt="GitHub Profil Resmi" className="rounded-circle w-75 border-dark border-3" />
            <h3 className="mt-3 profil-name">{name}</h3>
        </div>
    );
};

export default GitHubProfile;

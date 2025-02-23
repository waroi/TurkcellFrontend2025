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
        <div style={{ textAlign: "center", padding: "20px", border: "1px solid #ddd", borderRadius: "10px", width: "200px" }}>
            <img src={avatar} alt="GitHub Profil Resmi" width="100" style={{ borderRadius: "50%" }} />
            <h3>{name}</h3>
        </div>
    );
};

export default GitHubProfile;

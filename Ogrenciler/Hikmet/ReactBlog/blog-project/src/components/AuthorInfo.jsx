import React from "react";

function AuthorInfo({ avatar, author }) {
	return (
		<div className="bannerAuthorInfo">
			<span className="bannerAvatar">
				<img alt="avatar" />
			</span>
			<span>{author}</span>
			<span>February 21, 2025</span>
		</div>
	);
}

export default AuthorInfo;

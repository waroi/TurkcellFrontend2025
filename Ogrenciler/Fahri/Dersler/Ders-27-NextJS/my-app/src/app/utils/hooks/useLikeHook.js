import { BlogService } from "@/app/service/BlogService";
import { useState, useEffect } from "react";

export const useLikeHooks = (blog, userInfo) => {
    const [isLiked, setIsLiked] = useState(false)
    const [isDisliked, setIsDisliked] = useState(false)
    const [likeCount, setLikeCount] = useState(blog?.likeCount || 0)
    const [dislikeCount, setDislikeCount] = useState(blog?.dislikeCount || 0)

    useEffect(() => {
        const checkLikeStatus = async () => {
            if (userInfo?.id && blog?.id) {
                try {
                    const likedStatus = await BlogService.isLikedByUser(blog.id, userInfo.id)
                    const dislikedStatus = await BlogService.isDislikedByUser(blog.id, userInfo.id)

                    setIsLiked(likedStatus)
                    setIsDisliked(dislikedStatus)

                    const likes = await BlogService.getLikeCount(blog.id)
                    const dislikes = await BlogService.getDislikeCount(blog.id)

                    setLikeCount(likes)
                    setDislikeCount(dislikes)
                } catch (error) {
                    console.error("Beğeni durumu kontrol edilirken hata:", error)
                }
            }
        };

        checkLikeStatus();
    }, [blog?.id, userInfo?.id])

    const handleLike = async () => {
        if (!userInfo?.id) {
            alert("Beğenmek için giriş yapmalısınız!")
            return
        }


        try {
            if (isLiked) {
                await BlogService.unlikeBlog(blog.id, userInfo.id);
                setIsLiked(false);
                setLikeCount(prev => Math.max(0, prev - 1));
            } else {
                if (isDisliked) {
                    await BlogService.unlikeBlog(blog.id, userInfo.id);
                    setIsDisliked(false);
                    setDislikeCount(prev => Math.max(0, prev - 1));
                }

                await BlogService.likeBlog(blog.id, userInfo.id)
                setIsLiked(true)
                setLikeCount(prev => prev + 1)
            }
        } catch (error) {
            console.error("Beğeni işlemi sırasında hata:", error)
        }
    };

    const handleDislike = async () => {
        if (!userInfo?.id) {
            alert("Beğenmemek için giriş yapmalısınız!")
            return
        }


        try {
            if (isDisliked) {
                await BlogService.unlikeBlog(blog.id, userInfo.id)
                setIsDisliked(false)
                setDislikeCount(prev => Math.max(0, prev - 1))
            } else {
                if (isLiked) {
                    await BlogService.unlikeBlog(blog.id, userInfo.id)
                    setIsLiked(false)
                    setLikeCount(prev => Math.max(0, prev - 1))
                }

                await BlogService.unlikeBlog(blog.id, userInfo.id)
                setIsDisliked(true)
                setDislikeCount(prev => prev + 1)
            }
        } catch (error) {
            console.error("Beğenmeme işlemi sırasında hata:", error)
        }
    }

    return {
        isLiked,
        isDisliked,
        likeCount,
        dislikeCount,
        handleLike,
        handleDislike
    }
}
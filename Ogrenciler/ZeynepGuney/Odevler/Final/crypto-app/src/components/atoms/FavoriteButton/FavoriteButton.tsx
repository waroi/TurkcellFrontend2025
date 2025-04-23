'use client';

import React, { useState } from "react";

interface FavoriteButtonProps {
    coinId: number;  
    onFavoriteToggle: (coinId: number) => void;
    isFavorite: boolean;
}

export const FavoriteButton = ({ coinId, onFavoriteToggle, isFavorite }: FavoriteButtonProps) => {
    const handleClick = () => {
        onFavoriteToggle(coinId); 
    };

    return (
        <button onClick={handleClick} style={{ background: "none", border: "none", cursor: "pointer" }}>
            <img
                src={isFavorite ? "/assets/Yellow-Star.svg" : "/assets/Star.svg"} 
                alt="Favorite"
                style={{ width: 24, height: 24 }}
            />
        </button>
    );
};



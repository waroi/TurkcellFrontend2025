import { UI } from "../view/ui.js";

//Genel Constlar
export const baseUrl = "http://localhost:3000/games";
export const headers = {
    'Content-Type': 'application/json'
};

//CreateElements
export const createDiv = () => document.createElement("div");

//FormData
export const getFormData = () => {
    return {
        gameName: document.getElementById("gameName").value,
        description: document.getElementById("description").value,
        releaseDate: document.getElementById("releaseDate").value,
        developer: document.getElementById("developer").value,
        categoryIds: UI.addedCategoryIds,
        imageUrl: document.getElementById("imageUrl").value,
        steamUrl: document.getElementById("steamUrl").value,
        myPoint: document.getElementById("myPoint").value,
        isCompleted: document.getElementById("isCompleted").checked
    };
};


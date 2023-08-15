"use strict";

void (function () {
    
    async function getAlbumPhotos() {
        const albumId = new URLSearchParams(window.location.search).get("id");
        const photosContainer = document.getElementById("photosContainer");
        const albumTitle = document.getElementById("albumTitle");
        albumTitle.innerHTML = `Album #${albumId} Photos`;

        try {
            const photosResponse = await fetch(
                `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`
            );
            const photos = await photosResponse.json();

            photos.forEach((photo) => {
              
                const photoContainer = document.createElement("div");
                photoContainer.classList.add("col-md-3", "mb-4");
                photosContainer.appendChild(photoContainer);

                const photoElement = document.createElement("img");
                photoElement.src = photo.url;
                photoElement.alt = photo.title;
                photoElement.classList.add("w-100", "h-auto", "rounded");
                photoContainer.appendChild(photoElement);
            });
        } catch (error) {
            console.error("Error fetching photos:", error);
        }
    };

    getAlbumPhotos();

})();
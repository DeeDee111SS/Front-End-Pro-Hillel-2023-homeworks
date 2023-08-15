"use strict";

void (function () {

    async function getAlbums() {
        const albumList = document.getElementById("albumList");

        try {
            const albumsResponse = await fetch(
                "https://jsonplaceholder.typicode.com/albums"
            );
            const albums = await albumsResponse.json();

            albums.forEach((album) => {
                const albumItem = document.createElement("li");
                albumItem.classList.add(
                    "list-group-item",
                    "cursor-pointer",
                    "btn",
                    "btn-primary"
                );
                albumItem.textContent = album.title;
                albumItem.addEventListener("click", () => {
                    window.location.href = `pages/album.html?id=${album.id}`;
                });
                albumList.appendChild(albumItem);
            });
        } catch (error) {
            console.error("Error fetching albums:", error);
        }
    };

    getAlbums(); 

})();

document.addEventListener("DOMContentLoaded", function() {
    const currentImage = document.getElementById('current-image');
    const thumbnails = document.querySelectorAll('.thumbnail');
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');

    let currentIndex = 0;

    function updateCurrentImage(index) {
        const newSrc = thumbnails[index].src;
        currentImage.src = newSrc;
    }

    prevButton.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = thumbnails.length - 1;
        }
        updateCurrentImage(currentIndex);
    });

    nextButton.addEventListener('click', function() {
        if (currentIndex < thumbnails.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateCurrentImage(currentIndex);
    });

    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', function() {
            currentIndex = index;
            updateCurrentImage(currentIndex);
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll('img[data-src]');
    if ('IntersectionObserver' in window) {
        let observer = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    let img = entry.target;
                    img.src = img.getAttribute('data-src');
                 //   img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            });
        });
        images.forEach(function (img) {
            observer.observe(img);
        });
    } else {
        // Fallback para browsers antigos: carrega todas as imagens imediatamente
        images.forEach(function (img) {
            img.src = img.getAttribute('data-src');
            img.removeAttribute('data-src');
        });
    }
});
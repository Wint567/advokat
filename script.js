document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', function () {
        const item = this.parentElement;
        const content = item.querySelector('.accordion-content');
        const arrow = this.querySelector('.arrow');
        if (item.classList.contains('active')) {
            content.style.maxHeight = null;
            content.style.padding = "0 15px";
            item.classList.remove('active');
        } else {
            document.querySelectorAll('.accordion-item').forEach(i => {
                i.classList.remove('active');
                i.querySelector('.accordion-content').style.maxHeight = null;
                i.querySelector('.accordion-content').style.padding = "0 15px";
            });
            content.style.padding = "15px";
            item.classList.add('active');
        }
    });
});

if (document.getElementById("disain")) {
    let disain = document.getElementById("disain");
    let slides = disain.querySelectorAll('.smallPhotoDisain');
    [].forEach.call(slides, el => {
        el.addEventListener('click', ev => {
            let attrvalue = el.getElementsByTagName('img')[0].getAttribute('src');
            console.log(el.getElementsByTagName('img')[0].getAttribute('src'));
        });
    });
}

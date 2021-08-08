function script() {
    
    let boxContainer = document.querySelector('.brand-box-container__input');
    let btnMore = document.querySelector('.btn-loader');
    let boxContainerArr = ['lenovo.png', 'samsung.png', 'apple.png', 'bosh.png', 'bosh.png', 'acer.png', 'sony.png', 'viewsonic.png', 'acer.png'];
    let boxItem = document.createElement('div').classList.add('brand-box-container__item');

    if (document.documentElement.clientWidth == 1920) {
        btnMore.style.display = "none";
    }

    window.addEventListener('resize', () => {
        if (document.documentElement.clientWidth > 1400 && boxContainerArr.length < 10) {
            btnMore.style.display = "none";
        } else {
            btnMore.style.display = "block";
        }
    });
    
    function addElementItem(arr, container, classNameBlock, classNameElement) {
        for (let i = 0; i < arr.length; i++) {
            let elem = document.createElement('div');
            elem.classList.add(classNameBlock);
            elem.classList.add(classNameElement);
            elem.innerHTML = `
            <div class="block-slide__content">
                <div class="block-slide__elem logo-brand"><img src="./src/img/${boxContainerArr[i]}" class="block-slide__elem-pic"></div>
                <button class="block-slide__elem elem-button"><img src="./src/img/go.png" class="elem-button__icon"></button>
            </div>
            `;
            container.after(elem);
        };
    }
    addElementItem(boxContainerArr, boxContainer, 'brand-box-container__item', 'block-slide');
}
export default script;
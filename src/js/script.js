function script() {
    /*brand-box var*/
    let boxContainer = document.querySelector('.brand-box-container__input');
    let boxContainerArr = ['lenovo.png', 'samsung.png', 'viewsonic.png', 'bosh.png', 'bosh.png', 'acer.png', 'sony.png', 'viewsonic.png', 'acer.png'];

    /*buttons var*/
    let btnBurger = document.querySelector('.menu__burger-icon');
    let btnClose = document.querySelector('.header-sidebar-btn-logo');
    let sidebar = document.querySelector('.sidebar-position');
    let btnMore = document.querySelector('.btn-loader');

    /*sliders var*/
    let slidersBrandsArr = ['lenovo.png', 'samsung.png', 'viewsonic.png', 'bosh.png', 'bosh.png', 'acer.png', 'sony.png', 'viewsonic.png', 'acer.png'];
    let slidersServicesArr = ['Ремонт ноутбуков', 'Ремонт ПК', 'Ремонт мониторов', 'Ремонт телефонов', 'Ремонт принтеров', 'Ремонт пылесосов'];
    let slidersServicesContainer = document.querySelector('.services-wrapper');
    let sliderBrandsContainer = document.querySelector('.brands-wrapper');
    

    /*hidden btn-more*/
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

    /* show brand cards*/
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
    /*sliders*/
    function addSliderBrand(arr, container, classNameBlock, classNameElement) {
        for (let i = 0; i < arr.length; i++) {
            let elem = document.createElement('div');
            elem.classList.add(classNameBlock);
            elem.classList.add(classNameElement);
            elem.innerHTML = `
            <div class="swiper-slide__brand-content">
                <div class="swiper-slide__elem logo-brand"><img src="./src/img/${arr[i]}" alt="logo-brand" class="swiper-slide__elem-pic"></div>
                <button class="swiper-slide__elem elem-button"><img src="./src/img/go.png" alt="" class="elem-button__icon"></button>
            </div>
            `;
            container.append(elem);
        };
    }
    function addSliderServices(arr, container, classNameBlock, classNameElement) {
        for (let i = 0; i < arr.length; i++) {
            let elem = document.createElement('div');
            elem.classList.add(classNameBlock);
            elem.classList.add(classNameElement);
            elem.innerHTML = `
            <div class="swiper-slide__service-content">
                <div class="swiper-slide__elem service-title">${arr[i]}</div>
                <button class="swiper-slide__elem elem-button"><img src="./src/img/go.png" alt="" class="elem-button__icon"></button>
            </div>
            `;
            container.append(elem);
        };
    }

    /*sidebar*/
    btnBurger.addEventListener('click', e => {
        sidebar.classList.toggle('sidebar-position--active')
    })
    btnClose.addEventListener('click', e => {
        sidebar.classList.toggle('sidebar-position--active')
    })


    addElementItem(boxContainerArr, boxContainer, 'brand-box-container__item', 'block-slide');
    addSliderBrand(slidersBrandsArr, sliderBrandsContainer, 'swiper-slide', 'slide-brands');
    addSliderServices(slidersServicesArr, slidersServicesContainer, 'swiper-slide', 'slide-service');

}
export default script;
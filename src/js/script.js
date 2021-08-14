function script() {
    /*brand-box var*/
    let boxContainer = document.querySelector('.brand-box-container__input');
    let boxServicesContainer = document.querySelector('.services-box-container__input');
    let boxContainerArr = ['lenovo.png', 'samsung.png', 'viewsonic.png', 'bosh.png', 'bosh.png', 'acer.png', 'sony.png', 'viewsonic.png', 'acer.png'];

    /*buttons var*/
    let btnBurger = document.querySelector('.menu__burger-icon');
    let btnClose = document.querySelector('.header-sidebar-btn-logo');
    let sidebar = document.querySelector('.sidebar-position');
    let btnMoreBrands = document.querySelector('.btn-brands-loader');
    let btnMoreServices = document.querySelector('.btn-services-loader');

    /*sliders var*/
    let slidersBrandsArr = ['lenovo.png', 'samsung.png', 'viewsonic.png', 'bosh.png', 'bosh.png', 'acer.png', 'sony.png', 'viewsonic.png', 'acer.png'];
    let slidersServicesArr = ['Ремонт ноутбуков', 'Ремонт ПК', 'Ремонт мониторов', 'Ремонт телефонов', 'Ремонт принтеров', 'Ремонт пылесосов'];
    let slidersServicesContainer = document.querySelector('.services-wrapper');
    let sliderBrandsContainer = document.querySelector('.brands-wrapper');
    let sliderPriceContainer = document.querySelector('.price-wrapper');
    let repairServices = [
        {
            name: 'Тестирование с выдачей технического заключения',
            price: 'Бесплатно',
            term: '30 - 120 мин'
        },
        {
            name: 'Замена дисплея',
            price: '3000 руб',
            term: '30 - 120 мин'
        },
        {
            name: 'Замена динамика',
            price: '1000 руб',
            term: '30 - 120 мин'
        },
        {
            name: 'Обновление ПО',
            price: '1000 руб',
            term: '30 - 120 мин'
        },
        {
            name: 'Диагностика',
            price: '1000 руб',
            term: '30 - 120 мин'
        },
    ];
    

    /*hidden btn-more*/
    function hiddenBtnMore(btn, container, width, amount) {
        if (document.body.clientWidth > width && container.length < amount) {
            btn.style.display = "none";
        } 
        window.addEventListener('resize', () => {
            if (document.body.clientWidth > width && container.length < amount) {
                btn.style.display = "none";
            } else {
                btn.style.display = "block";
            }
        });
    }

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
    function addSliderBrands(arr, container, classNameBlock, classNameElement) {
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
                <button class="swiper-slide__elem elem-button-services"><img src="./src/img/go.png" alt="" class="elem-button__icon"></button>
            </div>
            `;
            container.append(elem);
        };
    }
    function addSliderPrice(arr, container, classNameBlock, classNameElement) {
        for (let i = 0; i < arr.length; i++) {
            let elem = document.createElement('div');
            elem.classList.add(classNameBlock);
            elem.classList.add(classNameElement);
            elem.innerHTML = `
            <div class="swiper-slide__price-content">
                <div class="swiper-slide__elem price-title"><span class="price-title__text">Ремонтные услуги</span><br>${arr[i].name}</div>
                <div class="swiper-slide__elem price-title"><span class="price-title__text">Цена</span><br>${arr[i].price}</div>
                <div class="swiper-slide__elem price-title"><span class="price-title__text">Срок</span><br>${arr[i].term}</div>
                <button class="swiper-slide__elem elem-price-services"> ЗАКАЗАТЬ <i class="fa fa-chevron-right fa-chevron-right__price" aria-hidden="true"></i></button>
            </div>
            `;
            container.append(elem);
        };
    }
    function addBoxServices(arr, container, classNameBlock, classNameElement) {
        for (let i = 0; i < arr.length; i++) {
            let elem = document.createElement('div');
            elem.classList.add(classNameBlock);
            elem.classList.add(classNameElement);
            elem.innerHTML = `
            <div class="block-services-slide__content">
                <div class="block-services-slide__elem service-title">${arr[i]}</div>
                <button class="block-services-slide__elem elem-button-services"><img src="./src/img/go.png" alt="" class="elem-button__icon"></button>
            </div>
            `;
            container.after(elem);
        };
    }

    /*sidebar*/
    btnBurger.addEventListener('click', e => {
        sidebar.classList.toggle('sidebar-position--active')
    })
    btnClose.addEventListener('click', e => {
        sidebar.classList.toggle('sidebar-position--active')
    })

    hiddenBtnMore(btnMoreBrands, boxContainerArr, 1350, 10);
    hiddenBtnMore(btnMoreServices, slidersServicesArr, 1900, 6);
    addElementItem(boxContainerArr, boxContainer, 'brand-box-container__item', 'block-slide');
    addSliderBrands(slidersBrandsArr, sliderBrandsContainer, 'swiper-slide', 'slide-brands');
    addSliderServices(slidersServicesArr, slidersServicesContainer, 'swiper-slide', 'slide-service');
    addSliderPrice(repairServices, sliderPriceContainer, 'swiper-slide', 'slide-price');
    addBoxServices(slidersServicesArr, boxServicesContainer, 'services-box-container__item', 'block-services-slide');

}
export default script;
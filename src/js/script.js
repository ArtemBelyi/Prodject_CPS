function script() {
    /*brand-box var*/
    let boxContainer = document.querySelector('.brand-box-container__input');
    let boxServicesContainer = document.querySelector('.services-box-container__input');
    let boxContainerArr = ['lenovo.png', 'samsung.png', 'viewsonic.png', 'bosh.png', 'bosh.png', 'acer.png', 'sony.png', 'viewsonic.png', 'acer.png', 'samsung.png', 'lenovo.png', 'viewsonic.png'];

    /*buttons more var*/
    let btnMoreBrands = document.querySelector('.btn-brands-loader');
    let btnMoreServices = document.querySelector('.btn-services-loader');

    /*sidebar*/
    let btnBurger = document.querySelector('.menu__burger-icon');
    let btnClose = document.querySelector('.header-sidebar-btn-logo');
    let sidebar = document.querySelector('.sidebar-position');
    let sidebarContainer = document.querySelector('.sidebar');

    /*layout*/
    let layout = document.querySelector('.layout');

    /*form-feedback*/
    let formFeedback = document.querySelector('.form-feedback-position');
    let btnFeedback = document.querySelector('.btn-feedback');
    let btnSidebarFeedback = document.querySelector('.btn-sidebar-feedback');
    let btnFeedbackClose = document.querySelector('.feedback-header__btn-close');

    /*form-call*/
    let formCall = document.querySelector('.form-call-position');
    let btnCall = document.querySelector('.btn-call');
    let btnCallClose = document.querySelector('.call-header__btn-close');
    let btnSidebarCall = document.querySelector('.btn-sidebar-call');

    /*sliders var*/
    let slidersBrandsArr = ['lenovo.png', 'samsung.png', 'viewsonic.png', 'bosh.png', 'bosh.png', 'acer.png', 'sony.png', 'viewsonic.png', 'acer.png'];
    let slidersServicesArr = ['Ремонт ноутбуков', 'Ремонт ПК', 'Ремонт мониторов', 'Ремонт телефонов', 'Ремонт принтеров', 'Ремонт пылесосов', 'Ремонт процессоров', 'Ремонт фотоаппаратов'];
    let slidersServicesContainer = document.querySelector('.services-wrapper');
    let sliderBrandsContainer = document.querySelector('.brands-wrapper');
    let sliderPriceContainer = document.querySelector('.price-wrapper');
    let boxPriceContainer = document.querySelector('.price-table-content');
    let repairServices = [
        {
            name: 'Тестирование с выдачей технического заключения',
            price: 'Бесплатно',
            term: '30-120 мин'
        },
        {
            name: 'Замена дисплея',
            price: '3000 руб',
            term: '30-120 мин'
        },
        {
            name: 'Замена динамика',
            price: '1000 руб',
            term: '30-120 мин'
        },
        {
            name: 'Обновление ПО',
            price: '1000 руб',
            term: '30-120 мин'
        },
        {
            name: 'Диагностика',
            price: '1000 руб',
            term: '30-120 мин'
        },
        {
            name: 'Ремонт процессора',
            price: '2000 руб',
            term: '30-120 мин'
        },
        {
            name: 'Замена камеры',
            price: '1500 руб',
            term: '30-120 мин'
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
    function addBoxPrice(arr, container, classNameElement) {
        for (let i = 0; i < arr.length; i++) {
            let elem = document.createElement('div');
            elem.classList.add(classNameElement);
            elem.innerHTML = `
            <div class="price-table-content__item-cell name-service"><span class="price-table-content__item-cell-text">${arr[i].name}</span></div>
            <div class="price-table-content__item-cell price"><span class="price-table-content__item-cell-text">${arr[i].price}</span></div>
            <div class="price-table-content__item-cell term">
                <span class="price-table-content__item-cell-text">${arr[i].term}</span>
                <button class="term__elem-button"> ЗАКАЗАТЬ <i class="fa fa-chevron-right fa-chevron-right__price" aria-hidden="true"></i></button>
            </div>
            `;
            container.append(elem);
        };
    }
    
    /*sidebar*/
    function toggleSidebar(display, idx) {
        sidebar.classList.toggle('sidebar-position--active')
        layout.style.display = display
        layout.style['z-index'] = idx;
    }
    function modal(modal, btn, classActive, classActiveBtn, display) {
        modal.classList.toggle(classActive)
        btn.classList.toggle(classActiveBtn)
        layout.style.display = display
    }

    /*function call*/

    btnBurger.addEventListener('click', e => {
        toggleSidebar('block', 9)
        document.body.style.overflow = 'hidden';
        sidebar.style.overflow = 'scroll'
    })
    btnClose.addEventListener('click', e => {
        toggleSidebar('none', '')
        document.body.style.overflow = '';
    })

    /*call modal*/
    btnCall.addEventListener('click', e => {
        modal(formCall, btnCallClose, 'form-call-position--active', 'call-header__btn-close--active', 'block')
        document.body.style.overflow = 'hidden';
    })
    btnCallClose.addEventListener('click', e => {
        modal(formCall, btnCallClose, 'form-call-position--active', 'call-header__btn-close--active', 'none')
        document.body.style.overflow = '';
    });

    /*feedback modal*/
    btnFeedback.addEventListener('click', e => {
        modal(formFeedback, btnFeedbackClose, 'form-feedback-position--active', 'feedback-header__btn-close--active', 'block')
        document.body.style.overflow = 'hidden';
    })
    btnFeedbackClose.addEventListener('click', e => {
        modal(formFeedback, btnFeedbackClose, 'form-feedback-position--active', 'feedback-header__btn-close--active', 'none')
        document.body.style.overflow = '';
    });
    /*layout*/
    layout.addEventListener('click', function(e) {
        if (e.target.closest('.layout')) {
            sidebar.classList.remove('sidebar-position--active')
            formFeedback.classList.remove('form-feedback-position--active')
            formCall.classList.remove('form-call-position--active')
            layout.style.display = 'none';
            document.body.style.overflow = '';
            layout.style['z-index'] = '';
        }
    });

    /*sidebar btn*/
    btnSidebarFeedback.addEventListener('click', e => {
        sidebar.classList.remove('sidebar-position--active')
        layout.style['z-index'] = '';
        modal(formFeedback, btnFeedbackClose, 'form-feedback-position--active', 'feedback-header__btn-close--active', 'block')
    });
    btnSidebarCall.addEventListener('click', e => {
        sidebar.classList.remove('sidebar-position--active')
        layout.style['z-index'] = '';
        modal(formCall, btnCallClose, 'form-call-position--active', 'call-header__btn-close--active', 'block')
    })

    //show sliders and lists
    addElementItem(boxContainerArr, boxContainer, 'brand-box-container__item', 'block-slide');
    addSliderBrands(slidersBrandsArr, sliderBrandsContainer, 'swiper-slide', 'slide-brands');
    addSliderServices(slidersServicesArr, slidersServicesContainer, 'swiper-slide', 'slide-service');
    addSliderPrice(repairServices, sliderPriceContainer, 'swiper-slide', 'slide-price');
    addBoxServices(slidersServicesArr, boxServicesContainer, 'services-box-container__item', 'block-services-slide');
    addBoxPrice(repairServices, boxPriceContainer, 'price-table-content__item');
}
export default script;
const products = [
    {
        id: 1,
        name: "Cemsan Electric Instant Water Heater – C3300",
        category: "heater",
        price: 100.00,
        image: "mehsul1.jpeg",
        phone: "077-611-02-33",
        specs: [
            "Növ: Elektrik ani su qızdırıcısı",
            "Marka/Model: Cemsan C3300",
            "Korpus: Kompakt divara quraşdırılan dizayn, ağ rəng",
            "İdarəetmə: Ön paneldə iki fırlanan düymə (temperatur və axın/sürət tənzimlənməsi)",
            "Göstəricilər: İstilik səviyyəsi üçün çoxpilləli LED işıqlar",
            "Qoşulma: Aşağı hissədən iki su xətti çıxışı üçün giriş/çıxış",
            "İstifadə sahəsi: Hamam, mətbəx və ya isti suya ehtiyac olan nöqtələrdə ani qızdırma",
            "Üstünlüklər: Suyu dərhal qızdırır, yerə qənaət edən quruluş, sadə və intuitiv idarəetmə"
        ]
    },
    {
        id: 2,
        name: "Termal İki Konturlu Qaz Kombisi",
        category: "kombi",
        price: 550.00,
        image: "mehsul2.jpeg",
        phone: "077-611-02-33",
        specs: [
            "Növ: Divardan asılan iki konturlu qaz qazanı (Kombi)",
            "Marka: Termal",
            "Funksiyalar: İsitmə və məişət isti su təminatı (iki ayrı kontur)",
            "İdarəetmə Paneli: Qara rəngli mərkəzi panel, mexaniki tənzimləmə üçün 2 fırladıcı düymə",
            "Göstəricilər: Sistem təzyiqini göstərən analoq manometr və işıqlı status indikatorları",
            "Dizayn: Ağ korpus, kompakt və şkafa/divara uyğun səliqəli görünüş",
            "Uyğunluq: Mərkəzi isitmə radiator sistemləri, mənzillər və ofislər üçün fasiləsiz isti su"
        ]
    },
    {
        id: 3,
        name: "CARDINAL Qazla İşləyən Su Qızdırıcısı – 36 kW",
        category: "heater",
        price: 115.00,
        image: "mehsul3.jpeg",
        phone: "077-611-02-33",
        specs: [
            "Növ: Qazla işləyən su qızdırıcısı (Kalonka)",
            "Marka: CARDINAL",
            "Güc: 36 kW – mənzil və fərdi evlərdə sürətli və sabit isti su təminatı",
            "İdarəetmə Paneli: İki fırlanma düyməsi (alov/istilik tənzimləməsi və su axını)",
            "Göstəricilər: Ortada rəqəmsal LED göstərici",
            "Mexaniki tənzimləmə: İsti-soyuq dərəcə və alov gücünü dəqiq seçmək imkanı",
            "Dizayn: Qapalı, kompakt təkqapılı korpus, divara asma üçün uyğun",
            "İstifadə sahəsi: Məişətdə davamlı isti su ehtiyacı olan mətbəx və hamamlar"
        ]
    },
    {
        id: 4,
        name: "ECOTHERM Divar Tipli Su Qızdırıcısı – 36L",
        category: "heater",
        price: 155.00,
        image: "mehsul4.jpeg",
        phone: "077-611-02-33",
        specs: [
            "Növ: Divar tipli su qızdırıcısı",
            "Marka: ECOTHERM",
            "Tutum: 36 litr",
            "İdarəetmə: Rəqəmsal LED displey və toxunma düymələri (On/Off, temperaturu artır/azalt)",
            "Rejimlər: “Keep warm / heating” göstəriciləri ilə iş rejimləri",
            "Üstünlüklər: Enerji effektivliyi etiketi (yüksək sinif), təhlükəsiz və davamlı iş prinsipi",
            "Texniki xüsusiyyət: Mis/bronz boru sistemi",
            "İstifadə sahəsi: Mətbəx və ya hamamda sabit isti su təminatı"
        ]
    },
    {
        id: 5,
        name: "DemirDöküm Qazla İşləyən Su Qızdırıcısı – 32L",
        category: "heater",
        price: 100.00,
        image: "mehsul5.jpeg",
        phone: "077-611-02-33",
        description: "Hamam, mətbəx və kottec tipli məkanlarda fasiləsiz isti su ehtiyacı üçün praktik həll. DemirDöküm brendinin etibarlı performansı və klassik ağ dizayn.",
        specs: [
            "Yüksək tutum: 32 litr/dəqiqəyə qədər axın",
            "Qış / Yay rejimi seçimi",
            "Qaz alovu və su temperaturu tənzimlənməsi",
            "Rəqəmsal C° göstərici ekranı",
            "Aşağı su təzyiqində işləmə mexanizmi"
        ]
    },
    {
        id: 6,
        name: "NEOterm Divar Tipli Qaz Kombi Qazanı",
        category: "kombi",
        price: 620.00,
        phone: "077-611-02-33",
        image: "mehsul6.jpeg",
        description: "Məişətdə mənzil və ofislərin mərkəzi istilik və isti su təminatı üçün uyğun, səmərəli və rahat idarə olunan kombi.",
        specs: [
            "İki konturlu sistem (istilik və isti su)",
            "Rəqəmsal LCD ekran və fırladıcı tənzimləyicilər",
            "Wi-Fi dəstəyi ilə uzaqdan idarəetmə imkanı",
            "Təhlükəsizlik sistemləri və diaqnostika",
            "Qapalı yanma kamerası və yığcam korpus"
        ]
    }
];

// Səbət localStorage-dan oxunur; qiymətlər həmişə cari məhsul siyahısından yenilənir
let cart = (() => {
    try {
        const saved = JSON.parse(localStorage.getItem('bathshop_cart')) || [];
        return saved
            .map(item => {
                const fresh = products.find(p => p.id === item.id);
                return fresh ? { ...fresh, qty: item.qty || 1 } : null;
            })
            .filter(Boolean);
    } catch (e) {
        return [];
    }
})();
let currentCategory = 'all';
let currentLang = 'az';

// Tərcümələr lüğəti (AZ, EN, RU)
const translations = {
    az: {
        heroTitle: "Eviniz üçün Ən Keyfiyyətli Banyo Məhsulları",
        heroSub: "Bakı daxili sürətli çatdırılma və rəsmi zəmanət | Əlaqə: 077 611 02 33",
        badge1: "Sürətli Çatdırılma",
        badge2: "Rəsmi Zəmanət",
        badge3: "Orijinal Məhsullar",
        productsTitle: "Məhsullarımız",
        filterAll: "Hamısı",
        filterHeater: "Qızdırıcılar",
        filterKombi: "Kombilər",
        detailsBtn: "Ətraflı",
        addToCart: "Səbətə at",
        cartTitle: "Səbətiniz",
        cartEmpty: "Səbətiniz hazırda boşdur.",
        totalLabel: "Cəmi məbləğ:",
        nameLabel: "Ad və Soyadınız:",
        namePlaceholder: "Məs: Əli Əliyev",
        phoneLabel: "Əlaqə nömrəniz:",
        completeBtn: "Sifarişi Təsdiq Et",
        locationText: "Bakı, Azərbaycan",
        toastAdded: "Məhsul səbətə əlavə edildi!"
    },
    en: {
        heroTitle: "Best Quality Bathroom Products for Your Home",
        heroSub: "Fast delivery within Baku & official warranty | Contact: 077 611 02 33",
        badge1: "Fast Delivery",
        badge2: "Official Warranty",
        badge3: "Original Products",
        productsTitle: "Our Products",
        filterAll: "All",
        filterHeater: "Heaters",
        filterKombi: "Boilers",
        detailsBtn: "Details",
        addToCart: "Add to Cart",
        cartTitle: "Your Cart",
        cartEmpty: "Your cart is currently empty.",
        totalLabel: "Total amount:",
        nameLabel: "Full Name:",
        namePlaceholder: "Ex: Ali Aliyev",
        phoneLabel: "Your Phone Number:",
        completeBtn: "Confirm Order",
        locationText: "Baku, Azerbaijan",
        toastAdded: "Added to cart!"
    },
    ru: {
        heroTitle: "Лучшие товары для ванной для вашего дома",
        heroSub: "Быстрая доставка по Баку и официальная гарантия | Контакты: 077 611 02 33",
        badge1: "Быстрая доставка",
        badge2: "Официальная гарантия",
        badge3: "Оригинальные товары",
        productsTitle: "Наши товары",
        filterAll: "Все",
        filterHeater: "Водонагреватели",
        filterKombi: "Котлы (Комби)",
        detailsBtn: "Подробнее",
        addToCart: "В корзину",
        cartTitle: "Ваша корзина",
        cartEmpty: "Ваша корзина пуста.",
        totalLabel: "Итого:",
        nameLabel: "Имя и Фамилия:",
        namePlaceholder: "Пример: Али Алиев",
        phoneLabel: "Номер телефона:",
        completeBtn: "Подтвердить заказ",
        locationText: "Баку, Азербайджан",
        toastAdded: "Товар добавлен в корзину!"
    }
};

const productsContainer = document.getElementById('products-container');
const cartModal = document.getElementById('cart-modal');
const productModal = document.getElementById('product-modal');
const modalProductDetails = document.getElementById('modal-product-details');
const cartItemsContainer = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const cartTotal = document.getElementById('cart-total');
const BACKEND_URL = "https://bathshop-api.onrender.com";

// Kateqoriya üzrə filtrləmə
function filterProducts(category) {
    currentCategory = category;

    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    const activeBtn = document.getElementById(`btn-${category}`);
    if (activeBtn) activeBtn.classList.add('active');

    renderProducts();
}

// Dil dəyişdirmə funksiyası
function changeLanguage(lang) {
    currentLang = lang;
    const t = translations[lang];

    const setText = (id, text) => {
        const el = document.getElementById(id);
        if (el) el.innerText = text;
    };

    setText('hero-title', t.heroTitle);
    setText('hero-sub', t.heroSub);
    setText('badge-1', t.badge1);
    setText('badge-2', t.badge2);
    setText('badge-3', t.badge3);
    setText('products-title', t.productsTitle);
    setText('text-all', t.filterAll);
    setText('text-heater', t.filterHeater);
    setText('text-kombi', t.filterKombi);
    setText('location-text', t.locationText);
    setText('cart-modal-title', t.cartTitle);
    setText('total-label', t.totalLabel);
    setText('name-label', t.nameLabel);
    setText('phone-label', t.phoneLabel);
    setText('complete-btn-text', t.completeBtn);

    const nameInput = document.getElementById('customer-name');
    if (nameInput) nameInput.placeholder = t.namePlaceholder;

    renderProducts();
    updateCart();
}

// Məhsulları ekrana düz
function renderProducts() {
    if (!productsContainer) return;

    const filteredProducts = currentCategory === 'all'
        ? products
        : products.filter(p => p.category === currentCategory);

    const t = translations[currentLang];

    productsContainer.innerHTML = filteredProducts.map(product => {
        const catBadge = product.category === 'kombi' ? t.filterKombi : t.filterHeater;
        return `
        <div class="product-card">
            <span class="card-badge">${catBadge}</span>
            <div class="img-wrapper" onclick="openProductModal(${product.id})">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3 class="product-title" onclick="openProductModal(${product.id})">${product.name}</h3>
                <div class="product-price">${product.price.toFixed(2)} ₼</div>
                <div class="product-actions">
                    <button class="details-btn" onclick="openProductModal(${product.id})">
                        <i class="fas fa-info-circle"></i> ${t.detailsBtn}
                    </button>
                    <button class="add-to-cart" onclick="addToCart(${product.id})">
                        <i class="fas fa-cart-plus"></i> ${t.addToCart}
                    </button>
                </div>
            </div>
        </div>
        `;
    }).join('');
}

// Məhsul detallarını modalda göstər
function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const t = translations[currentLang];

    const specsHtml = (product.specs || [])
        .map(spec => `<li>${spec}</li>`)
        .join('');

    const descHtml = product.description
        ? `<p style="color:#475569; margin-bottom:12px;">${product.description}</p>`
        : '';

    modalProductDetails.innerHTML = `
        <div class="detail-grid">
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <div class="product-price" style="margin-top:8px;">${product.price.toFixed(2)} ₼</div>
            ${descHtml}
            <div class="contact-info">
                <i class="fas fa-phone-alt"></i> Əlaqə nömrəsi: <a href="tel:${product.phone}">${product.phone}</a>
            </div>
            <div class="detail-specs">
                <strong>Texniki xüsusiyyətlər və üstünlüklər:</strong>
                <ul>${specsHtml}</ul>
            </div>
            <button class="add-to-cart" onclick="addToCart(${product.id}); closeProductModal();" style="width:100%; margin-top: 18px; padding: 14px;">
                <i class="fas fa-cart-plus"></i> ${t.addToCart}
            </button>
        </div>
    `;
    if (productModal) productModal.classList.add('active');
}

function closeProductModal() {
    if (productModal) productModal.classList.remove('active');
}

function closeSuccessModal() {
    const successModal = document.getElementById('success-modal');
    if (successModal) successModal.classList.remove('active');
}

// Kənara kliklədikdə modalı bağla
function closeOnOverlay(event, modalId) {
    if (event.target.id === modalId) {
        document.getElementById(modalId).classList.remove('active');
    }
}

// Bildiriş göstər
function showToast(msg) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.innerText = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2200);
}

// Səbətə əlavə et
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existing = cart.find(item => item.id === productId);
    if (existing) {
        existing.qty = (existing.qty || 1) + 1;
    } else {
        cart.push({ ...product, qty: 1 });
    }

    saveAndSyncCart();
    showToast(translations[currentLang].toastAdded);
}

// Miqdarı dəyişdir
function changeQty(productId, delta) {
    const itemIndex = cart.findIndex(item => item.id === productId);
    if (itemIndex === -1) return;

    cart[itemIndex].qty = (cart[itemIndex].qty || 1) + delta;
    if (cart[itemIndex].qty <= 0) {
        cart.splice(itemIndex, 1);
    }
    saveAndSyncCart();
}

// Səbətdən sil
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveAndSyncCart();
}

function saveAndSyncCart() {
    localStorage.setItem('bathshop_cart', JSON.stringify(cart));
    updateCart();
}

// Səbəti yenilə
function updateCart() {
    const totalItems = cart.reduce((sum, item) => sum + (item.qty || 1), 0);
    if (cartCount) cartCount.innerText = totalItems;

    const t = translations[currentLang];

    if (cart.length === 0) {
        if (cartItemsContainer) {
            cartItemsContainer.innerHTML = `
                <div class="empty-cart-box">
                    <i class="fas fa-shopping-basket"></i>
                    <p>${t.cartEmpty}</p>
                </div>
            `;
        }
        if (cartTotal) cartTotal.innerText = '0.00';
        return;
    }

    if (cartItemsContainer) {
        cartItemsContainer.innerHTML = cart.map(item => {
            const qty = item.qty || 1;
            return `
                <div class="cart-item">
                    <img src="${item.image}" alt="${item.name}" style="width:56px; height:56px; object-fit:contain; border-radius:8px; background:#f8fafc; margin-right:12px; flex-shrink:0;">
                    <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <small>${(item.price * qty).toFixed(2)} ₼ (${item.price.toFixed(2)} ₼ × ${qty})</small>
                </div>
                <div class="qty-controls">
                    <button class="qty-btn" onclick="changeQty(${item.id}, -1)">-</button>
                    <span>${qty}</span>
                    <button class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
                </div>
                <button class="remove-btn" onclick="removeFromCart(${item.id})" title="Sil">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
            `;
        }).join('');
    }

    const total = cart.reduce((sum, item) => sum + item.price * (item.qty || 1), 0);
    if (cartTotal) cartTotal.innerText = total.toFixed(2);
}

// Səbət pəncərəsini aç/bağla
function toggleCart() {
    if (cartModal) cartModal.classList.toggle('active');
}

// Sifarişi tamamla
async function checkoutOrder() {
    const nameInput = document.getElementById('customer-name');
    const phoneInput = document.getElementById('customer-phone');
    const errorDiv = document.getElementById('checkout-error');
    const submitBtn = document.getElementById('checkout-submit-btn');

    if (errorDiv) {
        errorDiv.style.display = 'none';
        errorDiv.textContent = '';
    }

    if (cart.length === 0) {
        if (errorDiv) {
            errorDiv.textContent = 'Səbətiniz boşdur!';
            errorDiv.style.display = 'block';
        }
        return;
    }

    const customerName = nameInput ? nameInput.value.trim() : '';
    const customerPhone = phoneInput ? phoneInput.value.trim() : '';

    if (customerName.length < 2) {
        if (errorDiv) {
            errorDiv.textContent = 'Lütfən ad və soyadınızı düzgün daxil edin!';
            errorDiv.style.display = 'block';
        }
        return;
    }

    const countrySelect = document.getElementById('country-code');
    const selectedOption = countrySelect ? countrySelect.options[countrySelect.selectedIndex] : null;
    const requiredLength = selectedOption ? parseInt(selectedOption.getAttribute('data-length')) : 9;

    const phoneRegex = new RegExp(`^\\d{${requiredLength}}$`);
    if (!phoneRegex.test(customerPhone)) {
        if (errorDiv) {
            errorDiv.textContent = `Nömrə dəqiq ${requiredLength} rəqəmdən ibarət olmalıdır!`;
            errorDiv.style.display = 'block';
        }
        return;
    }

    const countryCode = countrySelect ? countrySelect.value : '+994';
    const fullPhoneNumber = countryCode + customerPhone;
    const totalAmount = cart.reduce((sum, item) => sum + item.price * (item.qty || 1), 0);

    const orderData = {
        name: customerName,
        phone: fullPhoneNumber,
        items: cart.map(item => ({
            name: `${item.name} (x${item.qty || 1})`,
            price: parseFloat((item.price * (item.qty || 1)).toFixed(2))
        })),
        total: parseFloat(totalAmount.toFixed(2))
    };

    if (submitBtn) submitBtn.disabled = true;

    try {
        const response = await fetch(`${BACKEND_URL}/api/checkout`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(orderData)
        });

        if (response.ok) {
            cart = [];
            saveAndSyncCart();
            if (nameInput) nameInput.value = '';
            if (phoneInput) phoneInput.value = '';
            toggleCart();

            const successModal = document.getElementById('success-modal');
            if (successModal) successModal.classList.add('active');
        } else {
            throw new Error("Server error");
        }
    } catch (error) {
        console.error("Xəta:", error);
        if (errorDiv) {
            errorDiv.textContent = 'Serverlə əlaqə qurularkən xəta baş verdi. Yenidən cəhd edin.';
            errorDiv.style.display = 'block';
        }
    } finally {
        if (submitBtn) submitBtn.disabled = false;
    }
}

// Ölkə koduna görə telefon nömrəsi limitini tənzimləyən funksiya
function updatePhoneMask() {
    const countrySelect = document.getElementById('country-code');
    const phoneInput = document.getElementById('customer-phone');
    const phoneHint = document.getElementById('phone-hint');

    if (!countrySelect || !phoneInput) return;

    const selectedOption = countrySelect.options[countrySelect.selectedIndex];
    const maxLength = selectedOption.getAttribute('data-length');

    phoneInput.setAttribute('maxlength', maxLength);
    phoneInput.value = '';
    if (phoneHint) {
        phoneHint.textContent = `Nömrəni kodsuz daxil edin (${maxLength} rəqəm)`;
    }
}

// İlkin işə düşmə
renderProducts();
updateCart();
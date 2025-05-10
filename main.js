// بيانات منتجات تجريبية
const products = [
  {
    id: 1,
    name: "دورة تطوير الويب الشامل",
    price: 499,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
    description: "تعلم HTML, CSS, JavaScript, React، وكل ما تحتاجه لتصبح مطور ويب محترف مع مشاريع عملية ودعم مباشر من فريق Unlimited Team.",
    videos: [
      { title: "مقدمة تطوير الويب - Elzero Web School", url: "https://www.youtube.com/embed/3PHXvlpOkf4" },
      { title: "أساسيات HTML - Elzero Web School", url: "https://www.youtube.com/embed/UB1O30fR-EE" },
      { title: "أساسيات CSS - Elzero Web School", url: "https://www.youtube.com/embed/1Rs2ND1ryYc" },
      { title: "أساسيات JavaScript - Elzero Web School", url: "https://www.youtube.com/embed/0sSYmRImgRY" },
      { title: "مقدمة React - أكاديمية حسوب", url: "https://www.youtube.com/embed/Ke90Tje7VS0" }
    ]
  },
  {
    id: 2,
    name: "دورة الذكاء الاصطناعي وتعلم الآلة",
    price: 599,
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
    description: "ادخل عالم الذكاء الاصطناعي من أوسع أبوابه، تعلم Python، الشبكات العصبية، مشاريع عملية، وتطبيقات حقيقية مع خبراء الفريق.",
    videos: [
      { title: "مقدمة الذكاء الاصطناعي - بغداد الجديدة", url: "https://www.youtube.com/embed/5KjapFQNxUo" },
      { title: "أساسيات Python - Elzero Web School", url: "https://www.youtube.com/embed/kqtD5dpn9C8" },
      { title: "مقدمة تعلم الآلة - بغداد الجديدة", url: "https://www.youtube.com/embed/ukzFI9rgwfU" },
      { title: "الشبكات العصبية - بغداد الجديدة", url: "https://www.youtube.com/embed/aircAruvnKk" }
    ]
  },
  {
    id: 3,
    name: "دورة تطوير تطبيقات الجوال (Flutter)",
    price: 399,
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    description: "أنشئ تطبيقات أندرويد وiOS بواجهة واحدة مع Flutter، مشاريع تطبيقات حقيقية، دعم فني، وشهادة معتمدة.",
    videos: [
      { title: "مقدمة Flutter - TheNewBaghdad", url: "https://www.youtube.com/embed/1gDhl4leEzA" },
      { title: "أساسيات Dart - Elzero Web School", url: "https://www.youtube.com/embed/TxkC9Iv3vJU" },
      { title: "بناء أول تطبيق Flutter - TheNewBaghdad", url: "https://www.youtube.com/embed/7dAt-JMSCVQ" }
    ]
  },
  {
    id: 4,
    name: "دورة أساسيات البرمجة للمبتدئين",
    price: 299,
    image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=400&q=80",
    description: "ابدأ من الصفر وتعلم البرمجة خطوة بخطوة مع تمارين تفاعلية ودروس مبسطة من فريق Unlimited Team.",
    videos: [
      { title: "ما هي البرمجة؟ - Elzero Web School", url: "https://www.youtube.com/embed/8cmJ2kR4SpM" },
      { title: "مقدمة البرمجة للمبتدئين - بغداد الجديدة", url: "https://www.youtube.com/embed/5o3fMLPY7qY" },
      { title: "أول برنامج لك - Elzero Web School", url: "https://www.youtube.com/embed/1ONhXmQu7Gg" }
    ]
  }
];

// عرض المنتجات في صفحة المنتجات
if (document.getElementById('products-list')) {
  const productsList = document.getElementById('products-list');
  products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <div class="price">${product.price} ر.س</div>
      <a href="product.html?id=${product.id}" class="btn">عرض التفاصيل</a>
      <button class="btn" onclick="addToCart(${product.id})">أضف للسلة</button>
    `;
    productsList.appendChild(card);
  });
}

// عرض تفاصيل المنتج مع الفيديوهات
if (document.getElementById('product-details')) {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id'));
  const product = products.find(p => p.id === id);
  if (product) {
    const details = document.getElementById('product-details');
    let videosHtml = '';
    if (product.videos && product.videos.length > 0) {
      videosHtml = '<h3>دروس فيديو مختارة:</h3><div class="videos-list">';
      product.videos.forEach(video => {
        videosHtml += `
          <div class="video-card">
            <iframe width="100%" height="220" src="${video.url}" title="${video.title}" frameborder="0" allowfullscreen></iframe>
            <div class="video-title">${video.title}</div>
          </div>
        `;
      });
      videosHtml += '</div>';
    }
    details.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h2>${product.name}</h2>
      <div class="price">${product.price} ر.س</div>
      <p>${product.description}</p>
      <button class="btn" onclick="addToCart(${product.id})">أضف للسلة</button>
      ${videosHtml}
    `;
  }
}

// إدارة السلة
function getCart() {
  return JSON.parse(localStorage.getItem('cart') || '[]');
}
function setCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}
// تحديث رسالة السلة ورسالة الدفع لتناسب الدورات
function addToCart(id) {
  const cart = getCart();
  const item = cart.find(i => i.id === id);
  if (item) {
    item.qty += 1;
  } else {
    cart.push({ id, qty: 1 });
  }
  setCart(cart);
  alert('تمت إضافة الدورة لسلة اشتراكك!');
}

// عرض السلة
if (document.getElementById('cart')) {
  const cart = getCart();
  const cartDiv = document.getElementById('cart');
  if (cart.length === 0) {
    cartDiv.innerHTML = '<p>سلة الاشتراك فارغة.</p>';
  } else {
    let html = '<ul>';
    let total = 0;
    cart.forEach(item => {
      const product = products.find(p => p.id === item.id);
      if (product) {
        html += `<li>${product.name} × ${item.qty} = ${product.price * item.qty} ر.س</li>`;
        total += product.price * item.qty;
      }
    });
    html += `</ul><div class="price">الإجمالي: ${total} ر.س</div>`;
    cartDiv.innerHTML = html;
  }
}

// معالجة نموذج الدفع
if (document.getElementById('checkout-form')) {
  document.getElementById('checkout-form').addEventListener('submit', function(e) {
    e.preventDefault();
    localStorage.removeItem('cart');
    alert('تم الاشتراك في الدورات بنجاح! سيتم التواصل معك عبر البريد الإلكتروني.');
    window.location.href = 'index.html';
  });
}

window.addEventListener('DOMContentLoaded', function() {
  // تسجيل الدخول
  // دعم GitHub Pages: إذا لم تكن الصفحة login.html، أو لم يكن المستخدم مسجلاً الدخول، أعد التوجيه
  const isLocal = window.location.protocol === 'file:' || window.location.hostname === 'localhost';
  const isLogin = window.location.pathname.endsWith('login.html') || window.location.pathname.endsWith('/login.html');
  const isLoggedIn = sessionStorage.getItem('loggedIn') === '1';
  // دعم GitHub Pages (قد يكون المسار /index.html أو /repo/index.html)
  const path = window.location.pathname;
  if (!isLocal && !isLogin && !isLoggedIn) {
    // إذا لم يكن المستخدم مسجلاً الدخول، أعد التوجيه لمسار login.html الصحيح
    let loginPath = path.replace(/[^/]+$/, 'login.html');
    if (loginPath === path) loginPath += '/login.html';
    window.location.replace(loginPath);
  }
  if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || window.location.pathname === '/c:/majoood90/') {
    if (!sessionStorage.getItem('loggedIn')) {
      window.location.href = 'login.html';
    }
  }
  if (window.location.pathname.endsWith('login.html')) {
    const form = document.getElementById('login-form');
    if (form) {
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        sessionStorage.setItem('loggedIn', '1');
        window.location.href = 'index.html';
      });
    }
    // زر إنشاء حساب
    document.addEventListener('click', function(e) {
      if (e.target && e.target.id === 'signup-link') {
        e.preventDefault();
        document.querySelector('.login-box').innerHTML = `
          <h2>إنشاء حساب جديد</h2>
          <form id="signup-form">
            <input type="text" placeholder="اسمك الكامل" required>
            <input type="email" placeholder="البريد الإلكتروني" required>
            <input type="password" placeholder="كلمة المرور" required>
            <button type="submit" class="btn big">إنشاء الحساب</button>
          </form>
          <div class="login-info">
            <a href="#" id="back-to-login">عودة لتسجيل الدخول</a>
          </div>
        `;
        setTimeout(function() {
          document.getElementById('signup-form').addEventListener('submit', function(e) {
            e.preventDefault();
            sessionStorage.setItem('loggedIn', '1');
            window.location.href = 'index.html';
          });
          document.getElementById('back-to-login').addEventListener('click', function(e) {
            e.preventDefault();
            window.location.reload();
          });
        }, 100);
      }
    });
  }
});

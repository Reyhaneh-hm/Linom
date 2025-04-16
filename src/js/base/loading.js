/*-----------------Loading---------------*/
window.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader');
    const productList = document.querySelector('.products_list .products .items');

    loader.style.display = 'flex';

    const checkProductsLoaded = setInterval(() => {
        if (productList && productList.children.length > 0) {
            loader.style.display = 'none';
            clearInterval(checkProductsLoaded);
        }
    }, 300);

    setTimeout(() => {
        if (productList.children.length === 0) {
            loader.style.display = 'none';
            productList.innerHTML = '<p style="color: red; text-align: center;">خطا در بارگذاری محصولات.</p>';
            clearInterval(checkProductsLoaded);
        }
    }, 5000);
});



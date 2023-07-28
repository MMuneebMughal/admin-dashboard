const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");
//OPEN AND CLOSE SIDEBAR
menuBtn.addEventListener('click', () =>{
    sideMenu.style.display = 'block';
})
closeBtn.addEventListener('click', () =>{
    sideMenu.style.display = 'none';
})
//CHANGE THEME COLOR
themeToggler.addEventListener('click', () =>{
    document.body.classList.toggle('dark-theme-variables');
    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
})

//
const Orders = [
    {
        productName: 'Foldalbe Mini Drone',
        productNumber: '01',
        paymentStatus: 'Due',
        shipping: 'Panding',
    },
    {
        productName: 'Foldalbe Mini Drone',
        productNumber: '02',
        paymentStatus: 'Refunded',
        shipping: 'Declined',
    },
    {
        productName: 'Foldalbe Mini Drone',
        productNumber: '03',
        paymentStatus: 'Due',
        shipping: 'Panding',
    },
    {
        productName: 'Foldalbe Mini Drone',
        productNumber: '04',
        paymentStatus: 'Paid',
        shipping: 'Delivered',
    },
]

Orders.forEach(order =>{
    const tr = document.createElement('tr');
    const trContent = `
                        <td>${order.productName}</td>
                        <td>${order.productNumber}</td>
                        <td>${order.paymentStatus}</td>
                        <td class="${order.shipping === 'Declined' ? 'danger' : order.shipping === 'Panding' ? 'warning' : 'primary'}">${order.shipping}</td>
                        <td class="primary">Details</td>
    `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
})
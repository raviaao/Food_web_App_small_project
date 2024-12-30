const foodItems = [
    { id: 1, name: 'Grilled Chicken', category: 'chicken', price: { half: 8, medium: 12, full: 16 }, image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80' },
    { id: 2, name: 'Chicken Tikka', category: 'chicken', price: { half: 9, medium: 13, full: 17 }, image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1450&q=80' },
    { id: 3, name: 'Butter Chicken', category: 'chicken', price: { half: 10, medium: 14, full: 18 }, image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' },
    { id: 4, name: 'Mutton Curry', category: 'mutton', price: { half: 12, medium: 16, full: 20 }, image: 'https://cdn.pixabay.com/photo/2022/05/05/14/51/mutton-fry-7176341_960_720.jpg' },
    { id: 5, name: 'Mutton Biryani', category: 'mutton', price: { half: 13, medium: 17, full: 21 }, image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' },
    { id: 6, name: 'Grilled Fish', category: 'fish', price: { half: 10, medium: 14, full: 18 }, image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' },
    { id: 7, name: 'Fish and Chips', category: 'fish', price: { half: 9, medium: 13, full: 17 }, image: 'https://images.unsplash.com/photo-1579208030886-b937da0925dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' },
    { id: 8, name: 'Fish Curry', category: 'fish', price: { half: 11, medium: 15, full: 19 }, image: 'https://images.unsplash.com/photo-1626508035297-0cd27c397d67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' },
    { id: 9, name: 'Chicken Biryani', category: 'chicken', price: { half: 11, medium: 15, full: 19 }, image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' },
    { id: 10, name: 'Chicken Kebab', category: 'chicken', price: { half: 8, medium: 12, full: 16 }, image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1475&q=80' },
    { id: 11, name: 'Chicken Curry', category: 'chicken', price: { half: 9, medium: 13, full: 17 }, image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=684&q=80' },
    { id: 12, name: 'Chicken Shawarma', category: 'chicken', price: { half: 7, medium: 11, full: 15 }, image: 'https://images.unsplash.com/photo-1561651823-34feb02250e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80' },
    { id: 13, name: 'Chicken Wings', category: 'chicken', price: { half: 6, medium: 10, full: 14 }, image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1453&q=80' },
    { id: 14, name: 'Chicken Sandwich', category: 'chicken', price: { half: 5, medium: 9, full: 13 }, image: 'https://images.unsplash.com/photo-1521390188846-e2a3a97453a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' },
    { id: 15, name: 'Mutton Kebab', category: 'mutton', price: { half: 11, medium: 15, full: 19 }, image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1450&q=80' },
    { id: 16, name: 'Mutton Rogan Josh', category: 'mutton', price: { half: 14, medium: 18, full: 22 }, image: 'https://images.unsplash.com/photo-1545247181-516f71f10d00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80' },
    { id: 17, name: 'Mutton Korma', category: 'mutton', price: { half: 13, medium: 17, full: 21 }, image: 'https://images.unsplash.com/photo-1551280857-2b9bbe52acf4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' },
    { id: 18, name: 'Mutton Chops', category: 'mutton', price: { half: 15, medium: 19, full: 23 }, image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1475&q=80' },
    { id: 20, name: 'Mutton Kofta', category: 'mutton', price: { half: 12, medium: 16, full: 20 }, image: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=686&q=80' },
    { id: 21, name: 'Mutton Sheesh Kebab', category: 'mutton', price: { half: 13, medium: 17, full: 21 }, image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80' },
    { id: 22, name: 'Mutton Keema', category: 'mutton', price: { half: 11, medium: 15, full: 19 }, image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=736&q=80' },
    { id: 23, name: 'Fish Tikka', category: 'fish', price: { half: 10, medium: 14, full: 18 }, image: 'https://images.unsplash.com/photo-1626804475297-41608ea09aeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' },
    { id: 24, name: 'Fish Biryani', category: 'fish', price: { half: 12, medium: 16, full: 20 }, image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' },
    { id: 25, name: 'Fried Fish', category: 'fish', price: { half: 8, medium: 12, full: 16 }, image: 'https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80' },
    { id: 26, name: 'Fish Tacos', category: 'fish', price: { half: 7, medium: 11, full: 15 }, image: 'https://images.unsplash.com/photo-1512838243191-e81e8f66f1fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' },
    { id: 27, name: 'Fish Sandwich', category: 'fish', price: { half: 6, medium: 10, full: 14 }, image: 'https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' },
    { id: 28, name: 'Fish Stew', category: 'fish', price: { half: 10, medium: 14, full: 18 }, image: 'https://images.unsplash.com/photo-1626804475099-72e5d4ce8b4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' },
];

let cart = [];

let orders = [];

function initializePage() {
    renderFoodItems();
    setupEventListeners();
    lucide.createIcons();
}

function renderFoodItems() {
    const categories = ['chicken', 'mutton', 'fish'];
    categories.forEach(category => {
        const container = document.getElementById(`${category}-grid`);
        const items = foodItems.filter(item => item.category === category);
        container.innerHTML = items.map(item => createFoodItemCard(item)).join('');
    });
}

function createFoodItemCard(item) {
    return `
        <div class="food-card">
            <img src="${item.image}" alt="${item.name}">
            <div class="food-card-content">
                <h3>${item.name}</h3>
                <p>Half: $${item.price.half} | Medium: $${item.price.medium} | Full: $${item.price.full}</p>
                <select class="size-select" id="size-${item.id}">
                    <option value="half">Half</option>
                    <option value="medium">Medium</option>
                    <option value="full">Full</option>
                </select>
                <button class="btn add-to-cart" data-id="${item.id}">Add to Cart</button>
            </div>
        </div>
    `;
}

function setupEventListeners() {
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('add-to-cart')) {
            const itemId = parseInt(e.target.getAttribute('data-id'));
            const sizeSelect = document.getElementById(`size-${itemId}`);
            const selectedSize = sizeSelect.value;
            addToCart(itemId, selectedSize);
        }
    });

    document.getElementById('open-cart').addEventListener('click', openCart);
    document.getElementById('close-cart').addEventListener('click', closeCart);
    document.getElementById('place-order').addEventListener('click', placeOrder);
    document.getElementById('open-admin').addEventListener('click', openAdminPanel);
    document.getElementById('close-admin').addEventListener('click', closeAdminPanel);
}

//

function placeOrder() {
    const tableSelect = document.getElementById('table-select');
    const tableNumber = tableSelect.value;

    if (cart.length === 0) {
        showNotification('Your cart is empty!');
        return;
    }

    if (!tableNumber) {
        showNotification('Please select a table number');
        return;
    }

    const total = cart.reduce((sum, item) => sum + item.price[item.size] * item.quantity, 0);
    const order = {
        id: Date.now(),
        tableNumber,
        items: cart,
        total: total.toFixed(2),
        timestamp: new Date().toLocaleString()
    };

    orders.push(order);

    alert(`Order placed for Table ${tableNumber}. Total: $${total.toFixed(2)}`);
    cart = [];
    updateCartCount();
    closeCart();
    showNotification('Order placed successfully!');
}

function openAdminPanel() {
    const modal = document.getElementById('admin-modal');
    const adminOrders = document.getElementById('admin-orders');

    adminOrders.innerHTML = orders.map(order => `
        <div class="order-item">
            <h3>Order #${order.id}</h3>
            <p><strong>Table:</strong> ${order.tableNumber}</p>
            <p><strong>Time:</strong> ${order.timestamp}</p>
            <p><strong>Total:</strong> $${order.total}</p>
            <div class="order-details">
                ${order.items.map(item => `
                    <div class="order-product">
                        <p><strong>${item.name}</strong></p>
                        <p>Size: ${item.size}</p>
                        <p>Quantity: ${item.quantity}</p>
                        <p>Price: $${(item.price[item.size] * item.quantity).toFixed(2)}</p>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');

    modal.style.display = 'block';
}

function closeAdminPanel() {
    const modal = document.getElementById('admin-modal');
    modal.style.display = 'none';
}

// // ... (existing code) ...

function placeOrder() {
    const tableSelect = document.getElementById('table-select');
    const tableNumber = tableSelect.value;

    if (cart.length === 0) {
        showNotification('Your cart is empty!');
        return;
    }

    if (!tableNumber) {
        showNotification('Please select a table number');
        return;
    }

    const total = cart.reduce((sum, item) => sum + item.price[item.size] * item.quantity, 0);
    const order = {
        tableNumber,
        items: cart.map(item => ({
            name: item.name,
            size: item.size,
            quantity: item.quantity,
            price: item.price[item.size]
        })),
        total: total.toFixed(2),
        timestamp: new Date().toISOString()
    };

    fetch('/api/orders', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(order)
    })
    .then(response => response.json())
    .then(data => {
        alert(`Order placed for Table ${tableNumber}. Total: $${total.toFixed(2)}`);
        cart = [];
        updateCartCount();
        closeCart();
        showNotification('Order placed successfully!');
    })
    .catch(error => {
        console.error('Error:', error);
        showNotification('Error placing order. Please try again.');
    });
}

function openAdminPanel() {
    fetch('/api/orders')
    .then(response => response.json())
    .then(orders => {
        const modal = document.getElementById('admin-modal');
        const adminOrders = document.getElementById('admin-orders');

        adminOrders.innerHTML = orders.map(order => `
            <div class="order-item">
                <h3>Order #${order.id}</h3>
                <p><strong>Table:</strong> ${order.tableNumber}</p>
                <p><strong>Time:</strong> ${new Date(order.timestamp).toLocaleString()}</p>
                <p><strong>Total:</strong> $${order.total}</p>
                <div class="order-details">
                    ${order.items.map(item => `
                        <div class="order-product">
                            <p><strong>${item.name}</strong></p>
                            <p>Size: ${item.size}</p>
                            <p>Quantity: ${item.quantity}</p>
                            <p>Price: $${(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        `).join('');

        modal.style.display = 'block';
    })
    .catch(error => {
        console.error('Error:', error);
        showNotification('Error fetching orders. Please try again.');
    });
}

// ... (rest of the existing code) ...

function addToCart(itemId, size) {
    const item = foodItems.find(i => i.id === itemId);
    const existingItem = cart.find(i => i.id === itemId && i.size === size);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...item, size, quantity: 1 });
    }

    updateCartCount();
    showNotification(`Added ${item.name} (${size}) to cart`);
}

function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
}

function openCart() {
    const modal = document.getElementById('cart-modal');
    const cartItems = document.getElementById('cart-items').querySelector('tbody');
    const cartTotal = document.getElementById('cart-total');

    cartItems.innerHTML = cart.map(item => `
        <tr>
            <td>${item.name} (${item.size})</td>
            <td>$${item.price[item.size]}</td>
            <td>
                <button class="btn-quantity" data-id="${item.id}" data-size="${item.size}" data-action="decrease">-</button>
                ${item.quantity}
                <button class="btn-quantity" data-id="${item.id}" data-size="${item.size}" data-action="increase">+</button>
            </td>
            <td>$${(item.price[item.size] * item.quantity).toFixed(2)}</td>
            <td><button class="btn-remove" data-id="${item.id}" data-size="${item.size}">Remove</button></td>
        </tr>
    `).join('');

    const total = cart.reduce((sum, item) => sum + item.price[item.size] * item.quantity, 0);
    cartTotal.textContent = total.toFixed(2);

    modal.style.display = 'block';

    // Add event listeners for quantity buttons and remove buttons
    cartItems.addEventListener('click', handleCartAction);
}

function handleCartAction(e) {
    if (e.target.classList.contains('btn-quantity')) {
        const itemId = parseInt(e.target.getAttribute('data-id'));
        const size = e.target.getAttribute('data-size');
        const action = e.target.getAttribute('data-action');
        updateCartItemQuantity(itemId, size, action);
    } else if (e.target.classList.contains('btn-remove')) {
        const itemId = parseInt(e.target.getAttribute('data-id'));
        const size = e.target.getAttribute('data-size');
        removeFromCart(itemId, size);
    }
}

function updateCartItemQuantity(itemId, size, action) {
    const item = cart.find(i => i.id === itemId && i.size === size);
    if (item) {
        if (action === 'increase') {
            item.quantity += 1;
        } else if (action === 'decrease' && item.quantity > 1) {
            item.quantity -= 1;
        }
        updateCartCount();
        openCart(); // Refresh the cart display
    }
}

function removeFromCart(itemId, size) {
    cart = cart.filter(item => !(item.id === itemId && item.size === size));
    updateCartCount();
    openCart(); // Refresh the cart display
    showNotification('Item removed from cart');
}

function closeCart() {
    const modal = document.getElementById('cart-modal');
    modal.style.display = 'none';
}

function placeOrder() {
    const tableSelect = document.getElementById('table-select');
    const tableNumber = tableSelect.value;

    if (cart.length === 0) {
        showNotification('Your cart is empty!');
        return;
    }

    if (!tableNumber) {
        showNotification('Please select a table number');
        return;
    }

    const total = cart.reduce((sum, item) => sum + item.price[item.size] * item.quantity, 0);
    alert(`Order placed for Table ${tableNumber}. Total: $${total.toFixed(2)}`);
    cart = [];
    updateCartCount();
    closeCart();
    showNotification('Order placed successfully!');
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.className = 'notification';
    document.body.appendChild(notification);
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Initialize the page when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initializePage);
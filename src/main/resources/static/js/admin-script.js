function loadOrders() {
    fetch('/api/orders')
    .then(response => response.json())
    .then(orders => {
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
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error fetching orders. Please try again.');
    });
}

document.addEventListener('DOMContentLoaded', () => {
    loadOrders();

    document.getElementById('logout').addEventListener('click', () => {
        fetch('/admin/logout', { method: 'POST' })
        .then(() => {
            window.location.href = '/';
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Error logging out. Please try again.');
        });
    });
});
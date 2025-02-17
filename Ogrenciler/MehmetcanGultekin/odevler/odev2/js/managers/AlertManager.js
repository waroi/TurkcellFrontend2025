export class AlertManager {
    constructor() {
        this.container = document.querySelector('.container');
    }

    showAlert(message, type = 'success') {
        const alertDiv = document.createElement('div');
        alertDiv.className = `alert alert-${type} alert-dismissible fade show`;
        alertDiv.textContent = message;
        
        const closeButton = document.createElement('button');
        closeButton.type = 'button';
        closeButton.className = 'btn-close';
        closeButton.dataset.bsDismiss = 'alert';
        
        alertDiv.appendChild(closeButton);
        
        if (this.container) {
            this.container.insertAdjacentElement('afterbegin', alertDiv);
        }
        
        setTimeout(() => alertDiv.remove(), 3000);
    }
}
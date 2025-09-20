const app = {
    db: {
        project: {
            name: "Obra Principal",
            totalValue: 34000000,
            estimatedBudget: 20000000,
            transactions: []
        }
    },

    logoBase64: 'data:image/png;base64,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',

    init() {
        // Load data from localStorage
        this.loadData();
        
        // Initial UI Render
        document.getElementById('logo-img').src = this.logoBase64;
        this.updateUI();

        // Register Service Worker
        this.registerSW();
        
        // Attach Event Listeners
        document.getElementById('add-transaction-btn').addEventListener('click', () => this.openTransactionModal());
        document.getElementById('edit-project-btn').addEventListener('click', () => this.openProjectModal());
    },

    formatCurrency(amount) {
        return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }).format(amount);
    },
    
    updateUI() {
        const proj = this.db.project;
        
        document.getElementById('project-name').textContent = proj.name;

        // Calculations
        const totalGastosIncluidos = proj.transactions.filter(t => t.type === 'gasto_incluido').reduce((sum, t) => sum + t.amount, 0);
        const totalGastosExtras = proj.transactions.filter(t => t.type === 'gasto_extra').reduce((sum, t) => sum + t.amount, 0);
        const totalAbonos = proj.transactions.filter(t => t.type === 'abono_cliente').reduce((sum, t) => sum + t.amount, 0);
        
        const totalGastado = totalGastosIncluidos + totalGastosExtras;
        const presupuestoDisponible = proj.estimatedBudget - totalGastado;
        const saldoCliente = proj.totalValue - totalAbonos;

        // Update summary cards
        document.getElementById('available-budget').textContent = this.formatCurrency(presupuestoDisponible);
        document.getElementById('total-spent').textContent = this.formatCurrency(totalGastado);
        document.getElementById('client-balance').textContent = this.formatCurrency(saldoCliente);
        document.getElementById('total-value').textContent = this.formatCurrency(proj.totalValue);

        // Render transactions list
        const listEl = document.getElementById('transactions-list');
        listEl.innerHTML = ''; // Clear list

        if (proj.transactions.length === 0) {
            listEl.innerHTML = `<p class="text-gray-500 italic text-center mt-4">No hay movimientos registrados.</p>`;
            return;
        }

        proj.transactions.slice().sort((a,b) => new Date(b.date) - new Date(a.date)).forEach(t => {
            const isExpense = t.type.startsWith('gasto');
            const sign = isExpense ? '-' : '+';
            const colorClass = isExpense ? 'text-red-600' : 'text-green-600';
            const typeText = t.type.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase());

            const transactionEl = document.createElement('div');
            transactionEl.className = 'bg-white p-3 rounded-lg border flex justify-between items-center';
            transactionEl.innerHTML = `
                <div class="flex items-center space-x-3">
                    ${t.imageUrl ? `<img src="${t.imageUrl}" class="w-12 h-12 rounded-md object-cover cursor-pointer" onclick="app.showImage('${t.imageUrl}')">` : '<div class="w-12 h-12 bg-gray-200 rounded-md flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#9CA3AF" viewBox="0 0 256 256"><path d="M200,32H56A24,24,0,0,0,32,56V200a24,24,0,0,0,24,24H200a24,24,0,0,0,24-24V56A24,24,0,0,0,200,32Zm8,168a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8H200a8,8,0,0,1,8,8ZM112,88a32,32,0,1,1-32,32A32,32,0,0,1,112,88Zm-4.4,55.6L80,184H176l-32.8-54.67a8,8,0,0,0-13.6,0Z"></path></svg></div>'}
                    <div>
                        <p class="font-semibold">${t.description}</p>
                        <p class="text-xs text-gray-500">${new Date(t.date).toLocaleDateString('es-CO')} - ${typeText}</p>
                    </div>
                </div>
                <div class="text-right">
                    <p class="font-bold text-lg ${colorClass}">${sign} ${this.formatCurrency(t.amount)}</p>
                     <button onclick="app.deleteTransaction('${t.id}')" class="text-xs text-gray-400 hover:text-red-500 mt-1">Eliminar</button>
                </div>
            `;
            listEl.appendChild(transactionEl);
        });
    },

    saveData() {
        localStorage.setItem('presupuestosPXDB', JSON.stringify(this.db));
        this.showToast('Datos guardados exitosamente.');
    },

    loadData() {
        const data = localStorage.getItem('presupuestosPXDB');
        if (data) {
            this.db = JSON.parse(data);
        }
    },

    createModal(title, content) {
        const modalContainer = document.getElementById('modal-container');
        const modal = document.createElement('div');
        modal.id = 'modal';
        modal.className = 'modal fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50';
        modal.innerHTML = `
            <div class="modal-content bg-white rounded-lg shadow-xl w-full max-w-md p-6 transform scale-95">
                <div class="flex justify-between items-center mb-4">
                    <h3 class="text-xl font-bold text-primary-dark">${title}</h3>
                    <button id="close-modal-btn" class="text-gray-500 hover:text-gray-800">&times;</button>
                </div>
                <div>${content}</div>
            </div>
        `;
        modalContainer.appendChild(modal);

        // Animate modal
        setTimeout(() => {
            modal.classList.add('opacity-100');
            modal.querySelector('.modal-content').classList.remove('scale-95');
        }, 10);

        // Close listeners
        modal.addEventListener('click', (e) => {
            if (e.target.id === 'modal') this.closeModal();
        });
        document.getElementById('close-modal-btn').addEventListener('click', this.closeModal);
        return modal;
    },
    
    closeModal() {
        const modal = document.getElementById('modal');
        if (modal) {
            modal.classList.remove('opacity-100');
            modal.querySelector('.modal-content').classList.add('scale-95');
            setTimeout(() => {
                modal.parentElement.innerHTML = '';
            }, 250);
        }
    },
    
    openProjectModal() {
        const content = `
            <form id="project-form" class="space-y-4">
                <div>
                    <label for="p-name" class="block text-sm font-medium text-gray-700">Nombre de la Obra</label>
                    <input type="text" id="p-name" value="${this.db.project.name}" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-gold focus:border-primary-gold" required>
                </div>
                <div>
                    <label for="p-total" class="block text-sm font-medium text-gray-700">Valor Total ($)</label>
                    <input type="number" id="p-total" value="${this.db.project.totalValue}" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-gold focus:border-primary-gold" required>
                </div>
                <div>
                    <label for="p-budget" class="block text-sm font-medium text-gray-700">Presupuesto Estimado ($)</label>
                    <input type="number" id="p-budget" value="${this.db.project.estimatedBudget}" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-gold focus:border-primary-gold" required>
                </div>
                <div class="flex justify-end pt-2">
                    <button type="submit" class="bg-primary-dark text-white py-2 px-5 rounded-lg font-semibold hover:bg-opacity-90">Guardar Cambios</button>
                </div>
            </form>
        `;
        const modal = this.createModal('Editar Detalles de la Obra', content);
        modal.querySelector('#project-form').addEventListener('submit', (e) => {
            e.preventDefault();
            this.db.project.name = document.getElementById('p-name').value;
            this.db.project.totalValue = parseFloat(document.getElementById('p-total').value);
            this.db.project.estimatedBudget = parseFloat(document.getElementById('p-budget').value);
            this.saveData();
            this.updateUI();
            this.closeModal();
        });
    },

    openTransactionModal() {
        let imageDataUrl = null;
        const content = `
            <form id="transaction-form" class="space-y-4">
                <div>
                    <label for="t-description" class="block text-sm font-medium text-gray-700">Descripción</label>
                    <input type="text" id="t-description" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-gold focus:border-primary-gold" required>
                </div>
                <div>
                    <label for="t-amount" class="block text-sm font-medium text-gray-700">Monto ($)</label>
                    <input type="number" id="t-amount" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-gold focus:border-primary-gold" required>
                </div>
                <div>
                    <label for="t-type" class="block text-sm font-medium text-gray-700">Tipo de Movimiento</label>
                    <select id="t-type" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-gold focus:border-primary-gold">
                        <option value="gasto_incluido">Gasto Incluido</option>
                        <option value="gasto_extra">Gasto Extra</option>
                        <option value="abono_cliente">Abono del Cliente</option>
                    </select>
                </div>
                <div>
                    <label for="t-photo" class="block text-sm font-medium text-gray-700">Adjuntar Foto (Opcional)</label>
                    <input type="file" id="t-photo" accept="image/*" class="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"/>
                    <img id="t-preview" class="hidden mt-2 w-24 h-24 object-cover rounded-md">
                </div>
                <div class="flex justify-end pt-2">
                    <button type="submit" class="bg-primary-dark text-white py-2 px-5 rounded-lg font-semibold hover:bg-opacity-90">Agregar</button>
                </div>
            </form>
        `;
        const modal = this.createModal('Nuevo Movimiento', content);

        const photoInput = modal.querySelector('#t-photo');
        const previewEl = modal.querySelector('#t-preview');
        photoInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    imageDataUrl = event.target.result;
                    previewEl.src = imageDataUrl;
                    previewEl.classList.remove('hidden');
                };
                reader.readAsDataURL(file);
            }
        });

        modal.querySelector('#transaction-form').addEventListener('submit', (e) => {
            e.preventDefault();
            const newTransaction = {
                id: `txn_${Date.now()}`,
                description: document.getElementById('t-description').value,
                amount: parseFloat(document.getElementById('t-amount').value),
                type: document.getElementById('t-type').value,
                date: new Date().toISOString(),
                imageUrl: imageDataUrl
            };

            this.db.project.transactions.push(newTransaction);
            this.saveData();
            this.updateUI();
            this.closeModal();
        });
    },
    
    deleteTransaction(id) {
        if (confirm('¿Estás seguro de que quieres eliminar este movimiento?')) {
            this.db.project.transactions = this.db.project.transactions.filter(t => t.id !== id);
            this.saveData();
            this.updateUI();
            this.showToast('Movimiento eliminado.');
        }
    },

    showImage(imageUrl) {
        const content = `<img src="${imageUrl}" class="w-full h-auto rounded-lg">`;
        this.createModal('Vista Previa', content);
    },

    showToast(message) {
        const toastEl = document.getElementById('toast');
        const msgEl = document.getElementById('toast-message');
        msgEl.textContent = message;
        toastEl.classList.remove('hidden');
        setTimeout(() => {
            toastEl.classList.add('hidden');
        }, 3000);
    },

    registerSW() {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('sw.js')
                .then(reg => console.log('Service worker registered successfully', reg))
                .catch(err => console.error('Service worker registration failed', err));
        }
    }
};

app.init();

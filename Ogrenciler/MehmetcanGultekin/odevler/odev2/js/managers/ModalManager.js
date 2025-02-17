export class ModalManager {
    constructor() {
        this.gameModal = new bootstrap.Modal(document.getElementById('gameModal'));
        this.detailModal = new bootstrap.Modal(document.getElementById('gameDetailModal'));
        
        
        document.querySelector('#gameDetailModal .btn-close')
            .addEventListener('click', () => this.detailModal.hide());
            
        document.querySelector('#gameModal .btn-close')
            .addEventListener('click', () => this.gameModal.hide());
    }

    showGameModal(title = 'Yeni Oyun Ekle') {
        document.querySelector('#gameModal .modal-title').textContent = title;
        this.gameModal.show();
    }

    

    showGameDetails(game) {
        const detailContent = document.querySelector('#gameDetailModal .modal-body');
        detailContent.textContent = '';

        const mainRow = document.createElement('div');      
        const sysReqRow = document.createElement('div');    
        const tagsSection = document.createElement('div');  

        mainRow.className = 'row';

        const leftCol = document.createElement('div');
        leftCol.className = 'col-md-6';
        
        const img = document.createElement('img');
        img.src = game.image;
        img.alt = game.name;
        img.className = 'img-fluid mb-3';
        leftCol.appendChild(img);

        const rightCol = document.createElement('div');
        rightCol.className = 'col-md-6';

        const title = document.createElement('h4');
        title.textContent = game.name;

        const description = document.createElement('p');
        description.className = 'lead mb-4';
        description.textContent = game.description;

        const createInfoParagraph = (label, value) => {
            const p = document.createElement('p');
            const strong = document.createElement('strong');
            strong.textContent = label;
            p.appendChild(strong);
            p.appendChild(document.createTextNode(` ${value}`));
            return p;
        };

        const rating = createInfoParagraph('Değerlendirme:', game.rating);
        const platforms = createInfoParagraph('Platformlar:', game.platforms.join(', '));

        rightCol.append(title, description, rating, platforms);
        mainRow.append(leftCol, rightCol);

        sysReqRow.className = 'row mt-4';

        const minSysReqCol = document.createElement('div');
        minSysReqCol.className = 'col-12';

        const minSysReqTitle = document.createElement('h5');
        minSysReqTitle.textContent = 'Minimum Sistem Gereksinimleri';

        const minSysReqList = document.createElement('ul');
        minSysReqList.className = 'list-unstyled';

        const createSysReqItem = (label, value) => {
            const li = document.createElement('li');
            const strong = document.createElement('strong');
            strong.textContent = label;
            li.appendChild(strong);
            li.appendChild(document.createTextNode(` ${value}`));
            return li;
        };

        const minSysReqItems = [
            createSysReqItem('İşletim Sistemi:', game.minSystemReq.os),
            createSysReqItem('İşlemci:', game.minSystemReq.processor),
            createSysReqItem('Bellek:', game.minSystemReq.memory),
            createSysReqItem('Ekran Kartı:', game.minSystemReq.graphics),
            createSysReqItem('Depolama:', game.minSystemReq.storage)
        ];

        minSysReqItems.forEach(item => minSysReqList.appendChild(item));
        minSysReqCol.append(minSysReqTitle, minSysReqList);
        sysReqRow.appendChild(minSysReqCol);

        tagsSection.className = 'mt-3';

        const tagsTitle = document.createElement('h5');
        tagsTitle.textContent = 'Etiketler';

        const tagsContainer = document.createElement('div');
        tagsContainer.className = 'd-flex flex-wrap gap-2';

        game.tags.forEach(tag => {
            const badge = document.createElement('span');
            badge.className = 'badge bg-secondary';
            badge.textContent = tag;
            tagsContainer.appendChild(badge);
        });

        tagsSection.append(tagsTitle, tagsContainer);

        detailContent.append(mainRow, sysReqRow, tagsSection);

        document.querySelector('#gameDetailModal .modal-title').textContent = game.name;
        this.detailModal.show();
    }
}
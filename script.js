/* ДАННЫЕ СЕРВЕРА */
const CONFIG = {
    clans: {
        sherbet: [
            { name: "Tetlabot", role: "Лидер", lore: "Основатель клана. Любит красный камень." },
            { name: "Bagerca", role: "Web Master", lore: "Создатель сайта и архитектор." },
            { name: "SheR", role: "Участник", lore: "Исследователь дальних земель." }
        ],
        pumpkin: [
            { name: "Supdenix", role: "Лидер", lore: "Король тыквенных полей и основатель ордена." },
            { name: "Sanya", role: "Лидер / Адвокат", lore: "Класс: Евклид. Аллергия на Незер." },
            { name: "Zara_animations", role: "Строитель / ПвЕ", lore: "Забавный и добрый. Бывший ПвПшер. Любит рисовать и лепить." },
            { name: "Inkdb", role: "Разведчик / Боец", lore: "Хороший шахтер. Девиз: «Пиу-пау и ты сдох»." },
            { name: "MigDag", role: "Участник", lore: "Мирный выживальщик. Принцип: Добро за добро." },
            { name: "Bakonteamkg", role: "Участник", lore: "Информация засекречена." },
            { name: "Uzbeek", role: "Участник", lore: "Биография не известна." },
            { name: "Tv_Alex574", role: "Участник", lore: "Информация о субъекте отсутствует." },
            { name: "Amachan", role: "Участник", lore: "Данные удалены или не найдены." },
            { name: "Dorik2410", role: "Участник", lore: "Личное дело пусто." }
        ]
    },
    splashes: [
        "Children of Exodus!", "1.20.4!", "Слава Тыквам!", 
        "Щербет - сила!", "Don't dig down!", "Herobrine removed", 
        "Creeper? Aww man", "Сделано в 2026", "Без вайпов!",
        "Заходи к нам!", "Hello World!", "Map in progress..."
    ],
    rulesText: `
        <p><span class="rule-num">1.</span> Война будет начата если все стороны были уведомлены. Атакующая сторона обязана предоставить минимум <b>1 день</b> на подготовку.</p>
        <p><span class="rule-num">2.</span> Обязана быть причина для войны. Для объявления войны обязаны быть минимум <b>2 крупные причины</b>.</p>
        <p><span class="rule-num">3.</span> Во время грифа/войны достопримечательности, которые не несут ценности, <b>не могут быть взорваны под 0</b>. Однако разрешается проверить их на наличие схронов и сделать оскорбление.</p>
        <p><span class="rule-num">4.</span> По окончанию войны обе стороны обязаны заключить <b>Пакт о ненападении</b>.</p>
        <p><span class="rule-num">5.</span> Победившая сторона может наложить <b>репарации</b> (ресурсы) или забрать территорию.</p>
        <p><span class="rule-num">6.</span> В случае несоблюдения правил — <b>БАН/КИК всей команды</b> по решению администратора.</p>
    `,
    ores: [
        'deepslate_coal_ore', 'deepslate_copper_ore', 'deepslate_diamond_ore',
        'deepslate_gold_ore', 'deepslate_emerald_ore', 'deepslate_lapis_ore',
        'deepslate_redstone_ore', 'deepslate'
    ]
};

// ЗВУК КЛИКА (Вшит в код для мгновенной реакции)
const CLICK_SOUND = "data:audio/wav;base64,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";

const app = {
    init: function() {
        this.setupSplash();
        this.renderClans();
        this.renderRules();
        background.init();
        tooltipSystem.init();
        this.initCursor(); 
    },

    navigate: function(screenId) {
        this.playClick();
        const currentScreen = document.querySelector('.screen.active');
        const nextScreen = document.getElementById(screenId);

        if (currentScreen) {
            currentScreen.classList.remove('active');
            currentScreen.classList.add('closing');
            setTimeout(() => {
                currentScreen.classList.remove('closing');
                nextScreen.classList.add('active');
            }, 300);
        } else {
            nextScreen.classList.add('active');
        }
    },

    playClick: function() {
        const audio = new Audio(CLICK_SOUND);
        audio.volume = 0.5;
        audio.play().catch(e => {});
    },

    setupSplash: function() {
        const splashEl = document.getElementById('splashText');
        splashEl.innerText = CONFIG.splashes[Math.floor(Math.random() * CONFIG.splashes.length)];
        splashEl.addEventListener('click', () => { this.playClick(); this.setupSplash(); });
    },

    getRoleIcon: function(role) {
        const r = role.toLowerCase();
        const baseUrl = 'https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.20.1/assets/minecraft/textures/item/';
        
        let icon = 'paper.png'; 

        if (r.includes('лидер') || r.includes('король')) icon = 'golden_helmet.png'; 
        else if (r.includes('строитель') || r.includes('архитектор')) icon = 'iron_pickaxe.png'; 
        else if (r.includes('боец') || r.includes('пвп') || r.includes('пве')) icon = 'diamond_sword.png'; 
        else if (r.includes('адвокат')) icon = 'writable_book.png'; 
        else if (r.includes('разведчик')) icon = 'spyglass.png'; 
        else if (r.includes('web') || r.includes('сайт')) icon = 'redstone.png'; 
        else if (r.includes('фермер')) icon = 'golden_hoe.png'; 
        
        return baseUrl + icon;
    },

    renderClans: function() {
        const renderList = (id, countId, members) => {
            const container = document.getElementById(id);
            document.getElementById(countId).innerText = members.length;
            container.innerHTML = members.map((player) => {
                const iconSrc = this.getRoleIcon(player.role);
                // ВАЖНО: Используем onclick через app.handlePlayerClick для обработки логики Телефон/ПК
                return `
                <div class="player-slot" 
                     onclick="app.handlePlayerClick(this)"
                     data-name="${player.name}"
                     data-role="${player.role}"
                     data-lore="${player.lore}">
                     
                    <div class="player-left">
                        <img src="https://minotar.net/avatar/${player.name}/32.png" class="player-head">
                        <div class="player-name">${player.name}</div>
                    </div>
                    
                    <img src="${iconSrc}" class="role-icon" alt="role">
                </div>
            `}).join('');
        };
        renderList('list-sherbet', 'count-sherbet', CONFIG.clans.sherbet);
        renderList('list-pumpkin', 'count-pumpkin', CONFIG.clans.pumpkin);
    },

    // ОБРАБОТЧИК КЛИКА ПО ИГРОКУ
    handlePlayerClick: function(element) {
        this.playClick();
        const name = element.dataset.name;
        const role = element.dataset.role;
        const lore = element.dataset.lore;
        const url = `https://namemc.com/profile/${name}`;

        // Если ширина экрана меньше 768px (Телефон)
        if (window.innerWidth <= 768) {
            this.openMobileModal(name, role, lore, url);
        } else {
            // Если ПК - сразу открываем ссылку
            window.open(url, '_blank');
        }
    },

    // УПРАВЛЕНИЕ МОДАЛКОЙ НА ТЕЛЕФОНЕ
    openMobileModal: function(name, role, lore, url) {
        const modal = document.getElementById('mobile-player-modal');
        document.getElementById('mob-head').src = `https://minotar.net/armor/bust/${name}/64.png`;
        document.getElementById('mob-name').innerText = name;
        document.getElementById('mob-role').innerText = role;
        document.getElementById('mob-lore').innerText = lore;
        
        const btn = document.getElementById('mob-link-btn');
        btn.onclick = () => {
            this.playClick();
            window.open(url, '_blank');
        };

        modal.style.display = 'flex';
    },

    closeMobileModal: function() {
        this.playClick();
        document.getElementById('mobile-player-modal').style.display = 'none';
    },

    renderRules: function() {
        document.getElementById('rules-content').innerHTML = CONFIG.rulesText;
    },

    initCursor: function() {
        const cursor = document.getElementById('custom-cursor');
        
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });

        document.addEventListener('mousedown', () => cursor.classList.add('clicking'));
        document.addEventListener('mouseup', () => cursor.classList.remove('clicking'));
        
        document.addEventListener('mouseenter', () => cursor.style.opacity = '1');
        document.addEventListener('mouseleave', () => cursor.style.opacity = '0');
    }
};

const tooltipSystem = {
    el: document.getElementById('player-tooltip'),
    name: document.getElementById('tt-name'),
    role: document.getElementById('tt-role'),
    lore: document.getElementById('tt-lore'),
    head: document.getElementById('tt-head'),

    init: function() {
        document.body.addEventListener('mouseover', (e) => {
            const slot = e.target.closest('.player-slot');
            if (slot) this.show(slot);
        });
        document.body.addEventListener('mouseout', (e) => {
            const slot = e.target.closest('.player-slot');
            if (slot) this.hide();
        });
        document.body.addEventListener('mousemove', (e) => {
            if (this.el.style.display === 'block') this.move(e);
        });
    },
    show: function(slot) {
        // На мобильных не показываем тултип (там модалка)
        if (window.innerWidth <= 768) return;

        const name = slot.dataset.name;
        this.name.innerText = name;
        this.role.innerText = slot.dataset.role;
        this.lore.innerText = slot.dataset.lore;
        this.head.src = `https://minotar.net/armor/bust/${name}/64.png`;
        this.el.style.display = 'block';
    },
    hide: function() { this.el.style.display = 'none'; },
    move: function(e) {
        let x = e.clientX + 15;
        let y = e.clientY + 15;
        if (x + 220 > window.innerWidth) x = e.clientX - 230;
        if (y + 150 > window.innerHeight) y = e.clientY - 160;
        this.el.style.left = x + 'px';
        this.el.style.top = y + 'px';
    }
};

const background = {
    canvas: document.getElementById('bgCanvas'),
    ctx: null, images: [], loadedCount: 0, blockSize: 64, gridPositions: [], isAnimating: false,
    init: function() {
        this.ctx = this.canvas.getContext('2d');
        this.loadTextures();
        window.addEventListener('resize', () => { if (!this.isAnimating) this.startGeneration(true); });
    },
    loadTextures: function() {
        const baseUrl = 'https://assets.mcasset.cloud/1.20.4/assets/minecraft/textures/block/';
        CONFIG.ores.forEach(name => {
            const img = new Image();
            img.crossOrigin = "Anonymous";
            img.src = `${baseUrl}${name}.png`;
            img.onload = () => {
                this.images.push(img);
                this.loadedCount++;
                if (this.loadedCount === CONFIG.ores.length) this.startGeneration(false);
            };
        });
    },
    startGeneration: function(instant = false) {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.ctx.imageSmoothingEnabled = false;
        const cols = Math.ceil(this.canvas.width / this.blockSize);
        const rows = Math.ceil(this.canvas.height / this.blockSize);
        this.gridPositions = [];
        for (let y = 0; y < rows; y++) { for (let x = 0; x < cols; x++) { this.gridPositions.push({x, y}); } }
        if (instant) { this.gridPositions.forEach(pos => this.drawBlock(pos.x, pos.y)); } 
        else { this.shuffleArray(this.gridPositions); this.isAnimating = true; this.animateGeneration(); }
    },
    animateGeneration: function() {
        if (this.gridPositions.length === 0) { this.isAnimating = false; return; }
        const batchSize = 50; 
        for (let i = 0; i < batchSize; i++) {
            if (this.gridPositions.length > 0) { const pos = this.gridPositions.pop(); this.drawBlock(pos.x, pos.y); }
        }
        requestAnimationFrame(() => this.animateGeneration());
    },
    drawBlock: function(x, y) {
        if (this.images.length > 0) {
            const randomImg = this.images[Math.floor(Math.random() * this.images.length)];
            this.ctx.drawImage(randomImg, x * this.blockSize, y * this.blockSize, this.blockSize, this.blockSize);
        }
    },
    shuffleArray: function(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
};

document.addEventListener('DOMContentLoaded', () => { app.init(); });

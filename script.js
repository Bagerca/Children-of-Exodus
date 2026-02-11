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

const app = {
    init: function() {
        this.setupSplash();
        this.renderClans();
        this.renderRules();
        background.init();
        tooltipSystem.init();
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
        const audio = document.getElementById('clickSound');
        audio.currentTime = 0;
        audio.volume = 0.5;
        audio.play().catch(() => {});
    },

    setupSplash: function() {
        const splashEl = document.getElementById('splashText');
        splashEl.innerText = CONFIG.splashes[Math.floor(Math.random() * CONFIG.splashes.length)];
        splashEl.addEventListener('click', () => { this.playClick(); this.setupSplash(); });
    },

    // ЛОГИКА ИКОНОК
    getRoleIcon: function(role) {
        const r = role.toLowerCase();
        // Используем надежный CDN
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
                return `
                <div class="player-slot" 
                     onclick="window.open('https://namemc.com/profile/${player.name}', '_blank')"
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

    renderRules: function() {
        document.getElementById('rules-content').innerHTML = CONFIG.rulesText;
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
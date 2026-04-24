
// ============================
//  PAGE NAVIGATION
// ============================
function showPage(name) {
  // Hide all pages, show target page
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const targetPage = document.getElementById('page-' + name);
  if (targetPage) targetPage.classList.add('active');

  // Update active nav item via data-page attribute
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const activeNav = document.querySelector('.nav-item[data-page="' + name + '"]');
  if (activeNav) activeNav.classList.add('active');

  // Page-specific init
  if (name === 'recipes') renderRecipeDetail('negroni');
  if (name === 'cellar') renderCellar();
}

// ============================
//  TUTORIAL DETAIL
// ============================
const tutorials = {
  shake: {
    name: 'Shake · 摇酒法',
    tag: '基础手法',
    desc: '摇酒是最常见、最具观赏性的调酒技法。通过快速摇动，使冰块与液体充分接触，同时稀释、降温、融合所有原料，产生细腻泡沫。',
    steps: [
      { title: '准备摇壶与冰块', desc: '向摇壶大壶部分加入 4-6 块标准冰块（约 120g），冰块要干净、无碎冰。冰越大，稀释越慢，风味越集中。', emoji: '🧊' },
      { title: '量取原料依次加入', desc: '使用 Jigger 精确量取每种原料，按"烈度由低到高"的顺序加入：先加果汁、糖浆等辅料，最后加基酒。这样即使量错也容易处理。', emoji: '📏' },
      { title: '扣合摇壶，检查密封', desc: '将小壶以 45° 角扣在大壶上，用手掌根部用力拍紧。翻转，用拇指堵住小壶底部出口，轻拉确认不漏液。', emoji: '🔒' },
      { title: '正确握持姿势', desc: '双手握壶：惯用手拇指压住小壶底部，四指握住大壶；另一手从下方托住大壶底部。摇壶举到肩膀高度，与地面平行。', emoji: '🤝' },
      { title: '摇动 12-15 秒', desc: '用手腕发力做"推拉"往复动作，而非绕圈。听到冰块撞击声变闷（冰开始融化）即可。含蛋清配方需先 Dry Shake（无冰摇30秒），再加冰摇。', emoji: '⏱️' },
      { title: '过滤倒杯', desc: '用 Hawthorne 过滤器扣在大壶口，虎口朝上单手持壶倒出。需要极细腻口感时，再过一层细网筛（Fine Strainer）做双重过滤。', emoji: '🫗' },
    ]
  },
  stir: {
    name: 'Stir · 搅拌法',
    tag: '基础手法',
    desc: '搅拌法用于全烈酒或烈酒为主的配方（如马天尼、曼哈顿）。搅拌能稳定地混合、降温，同时保留酒液清澈度与丝滑口感，避免氧化产生的浑浊。',
    steps: [
      { title: '使用调酒杯（Mixing Glass）', desc: '选用厚壁玻璃调酒杯，预先用冰水冰杯 30 秒，倒掉融水。冰杯能减少摇制过程中冰块融化，保持浓度。', emoji: '🫙' },
      { title: '加入大量冰块', desc: '放入 4-5 块大冰块，冰块越大搅拌越顺滑。加冰后稍等 10 秒让杯壁充分冷却。', emoji: '🧊' },
      { title: '量取原料加入', desc: '依次用 Jigger 量取原料加入调酒杯。苦精类只需 2-3 dash（抖动瓶身）即可。', emoji: '💧' },
      { title: '吧匙正确握法', desc: '三指持匙：食指和中指夹住匙柄中段，拇指轻抵。匙背贴着杯壁，让匙头沿着杯壁内侧滑动，而不是在中间搅动。', emoji: '🥄' },
      { title: '圆润搅拌 30-40 圈', desc: '顺时针或逆时针均可，保持匀速。不要用力搅，让冰块随液体自然转动。目标是让液体温度降至 -3°C 左右。感受到杯外壁结霜即可停止。', emoji: '🔄' },
      { title: '用隔冰器倒入冰镇酒杯', desc: '将朱利普过滤器（Julep Strainer）扣在调酒杯中，倾斜缓慢倒入预冷好的马天尼杯或岩石杯中。', emoji: '🍸' },
    ]
  },
  build: {
    name: 'Build · 直调法',
    tag: '基础手法',
    desc: '直调法是最简单的调酒方式，直接在饮用杯中加入原料，适合高球类（Highball）或古典鸡尾酒（Old Fashioned）。原料叠加次序决定混合效果。',
    steps: [
      { title: '选择正确的杯型', desc: '古典杯（Rocks Glass）适合古典鸡尾酒；高球杯（Highball）适合长饮型。杯型影响冰块融化速度与香气挥发面积。', emoji: '🥃' },
      { title: '加入冰块', desc: '古典杯：放 1 颗大冰球（直径 5cm+）或 2-3 块方形大冰。高球杯：装满冰块防止过快稀释。不要用碎冰，融化太快。', emoji: '🧊' },
      { title: '加入基酒', desc: '用 Jigger 量取基酒倒入杯中。标准量：威士忌 45ml，金酒/伏特加 30ml。', emoji: '🥃' },
      { title: '加入辅料', desc: '苦精直接 Dash 在冰块上；糖浆沿杯壁缓缓倒入底部。高球杯的苏打水、汤力水最后加，沿匙背缓慢注入保留气泡。', emoji: '🌊' },
      { title: '轻柔搅拌 2-3 圈', desc: '用吧匙轻搅 2-3 圈混合，不要过度搅拌破坏气泡（含气泡型）或分层效果（如龙舌兰日出）。', emoji: '✨' },
      { title: '加装饰物收尾', desc: '橙皮扭转后放置杯沿，或用鸡尾酒签穿起樱桃。装饰物提升香气与视觉感受。', emoji: '🍊' },
    ]
  }
};

function showTutorialDetail(key) {
  const t = tutorials[key];
  if (!t) return;

  let html = `
    <div style="max-width:720px;">
      <div style="margin-bottom:24px;">
        <div class="tutorial-tag" style="display:inline-block;margin-bottom:8px;">${t.tag}</div>
        <h1 style="font-size:28px;font-weight:800;margin-bottom:10px;">${t.name}</h1>
        <p style="color:var(--text-sub);font-size:14px;line-height:1.8;">${t.desc}</p>
      </div>

      <div class="card">
        <div class="card-title">📸 动作演示</div>
        <div style="height:200px;background:linear-gradient(135deg,#2a2015,#1a1610);border-radius:8px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;border:1px dashed var(--border);">
          <span style="font-size:48px;">🎬</span>
          <span style="font-size:13px;color:var(--text-sub);">Images 2.0 图片演示区</span>
          <span style="font-size:11px;color:var(--text-muted);">写实风格 · 分步手法动作图</span>
          <span class="badge badge-gold" style="margin-top:4px;">✨ 点击生成实景图片</span>
        </div>
      </div>

      <div class="card" style="margin-top:20px;">
        <div class="card-title">📋 操作步骤</div>
        <div class="steps-container">
  `;

  t.steps.forEach((s, i) => {
    html += `
      <div class="step-item">
        <div class="step-num">${i+1}</div>
        <div class="step-content">
          <div class="step-title">${s.title}</div>
          <div class="step-desc">${s.desc}</div>
          <div class="step-img-placeholder">
            <span class="emoji">${s.emoji}</span>
            <span class="label">步骤 ${i+1} 演示图 · AI 生成</span>
          </div>
        </div>
      </div>
    `;
  });

  html += `</div></div></div>`;

  document.getElementById('tutorial-detail-content').innerHTML = html;
  showPage('tutorial-detail');
  document.getElementById('page-tutorial-detail').scrollTop = 0;
}

// ============================
//  RECIPE DETAIL
// ============================
const recipes = {
  negroni: {
    name: '尼格罗尼',
    emoji: '🍊',
    category: 'Negroni · 经典款 · 金酒基',
    desc: '等比三款原料造就完美平衡——金酒的植物香气、金巴利的苦橙风味、苦艾酒的草本甜蜜，搅拌后呈深琥珀色，优雅复杂。',
    method: 'Stir（搅拌法）',
    glass: '岩石杯（Rocks Glass）',
    ice: '大冰球',
    time: '3 分钟',
    ingredients: [
      { name: 'Tanqueray 金酒', amount: 30, unit: 'ml', price: 0.202, cadPrice: 43.45, cadSize: 1140, note: 'LCBO $43.45/1140ml', lcbo: true },
      { name: 'Campari 苦酒', amount: 30, unit: 'ml', price: 0.246, cadPrice: 34.80, cadSize: 750, note: 'LCBO $34.80/750ml', lcbo: true },
      { name: 'Martini Rosso 苦艾酒', amount: 30, unit: 'ml', price: 0.060, cadPrice: 18.00, cadSize: 1000, note: 'LCBO $18.00/1000ml', lcbo: true },
    ],
    garnish: { name: '橙皮扭转', price: 0.5 },
    steps: [
      { title: '冰镇调酒杯', desc: '向调酒杯中加入冰块和少量水，冰杯 30 秒后倒掉。', emoji: '🧊' },
      { title: '量取三款原料', desc: '依次用 Jigger 量取金酒 30ml、Campari 30ml、Martini Rosso 30ml，倒入冰镇调酒杯。', emoji: '📏' },
      { title: '加冰搅拌 30 圈', desc: '放入 4 块冰块，吧匙沿杯壁顺时针搅拌 30-40 圈至充分冷却，杯外壁结霜。', emoji: '🥄' },
      { title: '过滤倒入岩石杯', desc: '在岩石杯中放入大冰球，用过滤器将酒液缓缓倒入。', emoji: '🫗' },
      { title: '橙皮装饰', desc: '取一片橙皮，表皮朝上对折喷出精油到酒液表面，然后扭成螺旋状放在杯沿。', emoji: '🍊' },
    ]
  },
  mojito: {
    name: '莫吉托',
    emoji: '🌿',
    category: 'Mojito · 经典款 · 朗姆基',
    desc: '古巴国民鸡尾酒，薄荷与青柠的清新碰撞，蔗糖的甘甜与朗姆的温暖，最后一口苏打气泡在嘴里爆开，夏日的标配。',
    method: 'Build（直调法）',
    glass: '高球杯（Highball）',
    ice: '碎冰',
    time: '2 分钟',
    ingredients: [
      { name: 'Bacardi 白朗姆', amount: 45, unit: 'ml', price: 0.207, cadPrice: 29.30, cadSize: 750, note: 'LCBO $29.30/750ml', lcbo: true },
      { name: '鲜榨青柠汁', amount: 22, unit: 'ml', price: 0.20, cadPrice: null, cadSize: null, note: '鲜榨 · 超市参考价', lcbo: false },
      { name: '蔗糖糖浆', amount: 15, unit: 'ml', price: 0.05, cadPrice: null, cadSize: null, note: '自制或超市参考价', lcbo: false },
      { name: '新鲜薄荷叶', amount: 8, unit: 'g', price: 0.30, cadPrice: null, cadSize: null, note: '超市参考价', lcbo: false },
      { name: '苏打水', amount: 60, unit: 'ml', price: 0.02, cadPrice: null, cadSize: null, note: '超市参考价', lcbo: false },
    ],
    garnish: { name: '薄荷束 + 青柠角', price: 0.8 },
    steps: [
      { title: '捣压薄荷', desc: '将薄荷叶放入高球杯底部，用捣棒轻压（不要捣碎），释放精油香气。', emoji: '🌿' },
      { title: '加入青柠汁和糖浆', desc: '挤入 22ml 鲜榨青柠汁，倒入 15ml 蔗糖糖浆，轻轻混合。', emoji: '🍋' },
      { title: '加入朗姆酒', desc: '用 Jigger 量取 45ml 白朗姆酒倒入杯中。', emoji: '🥃' },
      { title: '填满碎冰', desc: '加入大量碎冰至杯口，碎冰冷却快、混合均匀。', emoji: '🧊' },
      { title: '注入苏打水', desc: '沿吧匙背面缓缓倒入 60ml 苏打水，保留气泡。轻轻翻搅 1-2 次即可。', emoji: '💦' },
      { title: '薄荷束装饰', desc: '将一束薄荷插入碎冰中，青柠角挂在杯沿，插入长吸管。', emoji: '🌿' },
    ]
  },
  margarita: {
    name: '玛格丽特',
    emoji: '🍋',
    category: 'Margarita · 经典款 · 龙舌兰基',
    desc: '墨西哥最具代表性的鸡尾酒，盐边的矿物感衬托龙舌兰的烟熏，君度的甜橙平衡青柠的酸爽。锐利、直接、令人愉悦。',
    method: 'Shake（摇酒法）',
    glass: '玛格丽特杯（Margarita Glass）',
    ice: '大冰块（摇制用）',
    time: '4 分钟',
    ingredients: [
      { name: 'Jose Cuervo 龙舌兰', amount: 45, unit: 'ml', price: 0.242, cadPrice: 34.30, cadSize: 750, note: 'LCBO $34.30/750ml', lcbo: true },
      { name: 'Cointreau 橙皮酒', amount: 22, unit: 'ml', price: 0.254, cadPrice: 36.00, cadSize: 750, note: 'LCBO ~$36.00/750ml', lcbo: true },
      { name: '鲜榨青柠汁', amount: 22, unit: 'ml', price: 0.20, cadPrice: null, cadSize: null, note: '鲜榨 · 超市参考价', lcbo: false },
    ],
    garnish: { name: '盐边 + 青柠片', price: 0.3 },
    steps: [
      { title: '盐边处理', desc: '用切开的青柠沿杯口外沿润湿一圈，然后在盐碟上旋转杯口，挂上均匀盐边。', emoji: '🧂' },
      { title: '摇壶加冰', desc: '向摇壶加入 4-5 块冰块，冰块要干净无气味。', emoji: '🧊' },
      { title: '依次量取原料', desc: '量取龙舌兰 45ml、Cointreau 22ml、鲜榨青柠汁 22ml，依次倒入摇壶。', emoji: '📏' },
      { title: '摇酒 12 秒', desc: '双手持壶用力摇 12-15 秒，直到壶身冰凉结霜，内部冰块撞击声变闷。', emoji: '🥤' },
      { title: '过滤倒杯', desc: '用 Hawthorne 过滤器扣住，倒入已挂好盐边的玛格丽特杯（无冰饮法），或倒入盛有冰块的岩石杯（on the rocks）。', emoji: '🫗' },
      { title: '青柠装饰', desc: '将半片青柠切口挂在杯沿收尾。', emoji: '🍋' },
    ]
  }
};

function renderRecipeDetail(key) {
  const r = recipes[key];
  if (!r) return;

  const totalIngCost = r.ingredients.reduce((sum, ing) => sum + ing.amount * ing.price, 0);
  const totalCost = totalIngCost + r.garnish.price;
  // Industry standard: 4x markup for crafted cocktails
  const suggest = Math.ceil(totalCost * 4);
  const premium = Math.ceil(totalCost * 5);

  let ingRows = r.ingredients.map(ing => {
    const sub = (ing.amount * ing.price).toFixed(2);
    const priceLabel = ing.lcbo && ing.cadPrice
      ? `¥${ing.price.toFixed(3)}/ml (LCBO $${ing.cadPrice}/${ing.cadSize}ml)`
      : `¥${ing.price.toFixed(2)}/ml (${ing.note})`;
    return `
      <tr style="border-bottom:1px solid rgba(46,43,36,0.5);">
        <td class="ing-name" style="padding:10px 12px;">${ing.name}</td>
        <td style="padding:10px 12px;font-size:11px;color:var(--text-muted);">${priceLabel}</td>
        <td class="ing-amount" style="padding:10px 12px;text-align:right;">${ing.amount}${ing.unit}</td>
        <td class="ing-price" style="padding:10px 12px;text-align:right;">¥${ing.price.toFixed(2)}/${ing.unit}</td>
        <td class="ing-subtotal" style="padding:10px 12px;text-align:right;">¥${sub}</td>
      </tr>
    `;
  }).join('');

  let stepsHtml = r.steps.map((s, i) => `
    <div class="step-item" style="margin-bottom:14px;padding-bottom:14px;border-bottom:1px solid var(--border);display:flex;gap:14px;">
      <div class="step-num" style="width:28px;height:28px;font-size:12px;">${i+1}</div>
      <div class="step-content">
        <div class="step-title" style="font-size:13px;">${s.title}</div>
        <div class="step-desc" style="font-size:12px;">${s.desc}</div>
      </div>
    </div>
  `).join('');

  document.getElementById('recipe-detail-panel').innerHTML = `
    <div class="recipe-detail-header">
      <div class="recipe-detail-img">
        <span style="font-size:56px;">${r.emoji}</span>
        <span style="font-size:10px;color:var(--text-muted);">AI 图片演示区</span>
        <span class="img-gen-badge" style="position:static;margin-top:4px;">✨ Images 2.0</span>
      </div>
      <div class="recipe-detail-meta">
        <div class="recipe-detail-name">${r.name}</div>
        <div class="recipe-detail-desc">${r.desc}</div>
        <div class="meta-row">
          <div class="meta-chip"><span class="meta-chip-icon">🥃</span> ${r.method}</div>
          <div class="meta-chip"><span class="meta-chip-icon">🍷</span> ${r.glass}</div>
          <div class="meta-chip"><span class="meta-chip-icon">🧊</span> ${r.ice}</div>
          <div class="meta-chip"><span class="meta-chip-icon">⏱️</span> ${r.time}</div>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-title">🌿 原料清单 & 成本</div>
      <table class="ing-table">
        <thead>
          <tr>
            <th>原料</th>
            <th>备注</th>
            <th style="text-align:right;">用量</th>
            <th style="text-align:right;">单价</th>
            <th style="text-align:right;">小计</th>
          </tr>
        </thead>
        <tbody>
          ${ingRows}
          <tr style="border-bottom:1px solid rgba(46,43,36,0.5);">
            <td style="padding:10px 12px;" colspan="2">装饰物（${r.garnish.name}）</td>
            <td style="padding:10px 12px;" colspan="2">—</td>
            <td style="padding:10px 12px;text-align:right;color:var(--text-sub);">¥${r.garnish.price}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="cost-summary">
      <div class="cost-row">
        <span class="label">原料合计</span>
        <span class="value">¥${totalIngCost.toFixed(2)}</span>
      </div>
      <div class="cost-row">
        <span class="label">装饰物</span>
        <span class="value">¥${r.garnish.price.toFixed(1)}</span>
      </div>
      <div class="cost-row total">
        <span class="label">LCBO 实际成本/杯</span>
        <span class="value">¥${totalCost.toFixed(2)}</span>
      </div>
      <div style="font-size:10px;color:var(--text-muted);margin-top:8px;margin-bottom:12px;">💡 基于 LCBO 零售价（CAD × 5.3 汇率估算）</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:12px;">
        <div style="background:rgba(0,0,0,0.2);border-radius:6px;padding:10px;text-align:center;">
          <div style="font-size:10px;color:var(--text-muted);margin-bottom:4px;">标准售价 (4× markup)</div>
          <div style="font-size:20px;font-weight:700;color:var(--gold-light);">¥${suggest}</div>
        </div>
        <div style="background:rgba(0,0,0,0.2);border-radius:6px;padding:10px;text-align:center;">
          <div style="font-size:10px;color:var(--text-muted);margin-bottom:4px;">溢价售价 (5× markup)</div>
          <div style="font-size:20px;font-weight:700;color:var(--amber);">¥${premium}</div>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-title">📋 调制步骤</div>
      <div class="recipe-steps">${stepsHtml}</div>
    </div>
  `;
}

function showRecipeDetail(key) {
  showPage('recipes');
  document.querySelectorAll('.recipe-item').forEach(el => el.classList.remove('active'));
  renderRecipeDetail(key);
}

// ============================
//  COST CALCULATOR
// ============================
function calcCost() {
  const rows = [
    [document.getElementById('c1-ml'), document.getElementById('c1-price')],
    [document.getElementById('c2-ml'), document.getElementById('c2-price')],
    [document.getElementById('c3-ml'), document.getElementById('c3-price')],
  ];

  let total = 0;
  rows.forEach(([ml, price]) => {
    if (ml && price) {
      const v = parseFloat(ml.value) * parseFloat(price.value);
      if (!isNaN(v)) total += v;
    }
  });

  // Industry standard: 3-5x markup (bars)
  // Low end (3x) for simple drinks, standard (4x) for crafted cocktails
  document.getElementById('result-cost').textContent = '¥' + total.toFixed(2);
  document.getElementById('result-suggest').textContent = '¥' + Math.ceil(total * 4);
  document.getElementById('result-premium').textContent = '¥' + Math.ceil(total * 5);
}

// ============================
//  INIT
// ============================
renderRecipeDetail('negroni');
calcCost();

// Bind nav click events via JS (more reliable than inline onclick)
document.getElementById('main-nav').addEventListener('click', function(e) {
  const navItem = e.target.closest('.nav-item');
  if (!navItem) return;
  const page = navItem.getAttribute('data-page');
  if (page) showPage(page);
});

// ============================
//  WINE CELLAR
// ============================

// Sample data — realistic Chinese collectible wine prices
// Prices based on: 阿里拍卖 / 歌德老酒行 / 云酒说 / 苏富比(2023-2024)
const cellarCollection = [
  {
    id: 1,
    name: '飞天茅台 53°',
    sub: '贵州茅台 · 2021年产 · 500ml',
    category: 'maotai',
    qty: 2,
    purchasePrice: 2800,  // 入手价/瓶
    auctionPrice: 3200,    // 拍卖成交价
    dealerPrice: 2950,    // 回收商报价
    estimate: 3050,       // 综合估价
    trend: 6,             // 近6月涨跌%
    emoji: '🏺',
    badge: '茅台',
    badgeColor: '#e74c3c',
    note: '阿里拍卖 2024秋拍',
    // Sparkline: 6 monthly price points (dealer price index)
    sparkData: [2700, 2780, 2900, 2880, 2950, 3050]
  },
  {
    id: 2,
    name: '茅台生肖鼠年 53°',
    sub: '贵州茅台 · 2020年产 · 500ml',
    category: 'maotai',
    qty: 1,
    purchasePrice: 5800,
    auctionPrice: 7800,
    dealerPrice: 7200,
    estimate: 7500,
    trend: 15,
    emoji: '🐭',
    badge: '茅台',
    badgeColor: '#e74c3c',
    note: '歌德老酒行 2024冬拍',
    sparkData: [6200, 6600, 7000, 7100, 7200, 7500]
  },
  {
    id: 3,
    name: '拉菲正牌 2010',
    sub: 'Château Lafite Rothschild · 750ml',
    category: 'wine',
    qty: 1,
    purchasePrice: 8500,
    auctionPrice: 9200,
    dealerPrice: 8700,
    estimate: 9000,
    trend: 4,
    emoji: '🍷',
    badge: '波尔多',
    badgeColor: '#7b9fe0',
    note: '苏富比 2024香港秋拍',
    sparkData: [8400, 8600, 8700, 8650, 8700, 9000]
  },
  {
    id: 4,
    name: 'Macallan 18年',
    sub: 'The Macallan 18YO Sherry Oak · 700ml',
    category: 'whisky',
    qty: 1,
    purchasePrice: 3200,
    auctionPrice: 4100,
    dealerPrice: 3850,
    estimate: 3950,
    trend: 22,
    emoji: '🥃',
    badge: '威士忌',
    badgeColor: '#c9882a',
    note: 'Whisky Auctioneer 2024Q4',
    sparkData: [3200, 3450, 3600, 3700, 3850, 3950]
  },
  {
    id: 5,
    name: '山崎 25年',
    sub: 'Yamazaki 25YO Single Malt · 700ml',
    category: 'whisky',
    qty: 1,
    purchasePrice: 18000,
    auctionPrice: 24000,
    dealerPrice: 22000,
    estimate: 23000,
    trend: -3,
    emoji: '🍶',
    badge: '威士忌',
    badgeColor: '#c9882a',
    note: "Sotheby's 香港 2024",
    sparkData: [24500, 23800, 23500, 23200, 22000, 23000]
  },
  {
    id: 6,
    name: '五粮液 1618 52°',
    sub: '宜宾五粮液 · 2019年产 · 500ml',
    category: 'baijiu',
    qty: 1,
    purchasePrice: 900,
    auctionPrice: 1100,
    dealerPrice: 980,
    estimate: 1030,
    trend: 2,
    emoji: '🥢',
    badge: '名酒',
    badgeColor: '#9b8fd4',
    note: '云酒说 2024报价',
    sparkData: [1000, 1010, 1020, 1000, 980, 1030]
  }
];

let currentFilter = 'all';
let editingId = null;

// Render sparkline bars
function sparklineHTML(data, baseColor) {
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const bars = data.map((v, i) => {
    const h = 8 + ((v - min) / range) * 28;
    const isLast = i === data.length - 1;
    return `<div class="sparkline-bar" style="height:${h}px;opacity:${isLast ? 1 : 0.35};background:${isLast ? baseColor : 'var(--border)'};"></div>`;
  }).join('');
  const startVal = '¥' + (data[0] >= 1000 ? (data[0]/1000).toFixed(1) + 'k' : data[0]);
  const endVal = '¥' + (data[data.length-1] >= 1000 ? (data[data.length-1]/1000).toFixed(1) + 'k' : data[data.length-1]);
  return `
    <div class="cellar-sparkline">${bars}</div>
    <div class="cellar-sparkline-labels">
      <span>${startVal}</span>
      <span>${endVal}</span>
    </div>`;
}

function renderCellar() {
  const grid = document.getElementById('cellar-grid');
  const filtered = currentFilter === 'all'
    ? cellarCollection
    : cellarCollection.filter(b => b.category === currentFilter);

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="cellar-empty" style="grid-column:1/-1;">
        <div class="emoji">🏺</div>
        <h3>还没有收藏酒</h3>
        <p>点击右上角「录入藏酒」，添加你的第一瓶茅台、拉菲或威士忌</p>
        <button class="btn btn-primary" onclick="openAddModal()">+ 录入藏酒</button>
      </div>`;
    updateCellarStats();
    return;
  }

  grid.innerHTML = filtered.map(b => {
    const gain = (b.estimate - b.purchasePrice) * b.qty;
    const gainClass = gain >= 0 ? 'gain' : 'loss';
    const gainSign = gain >= 0 ? '+' : '';
    const trendClass = b.trend > 0 ? 'trend-up' : b.trend < 0 ? 'trend-down' : 'trend-flat';
    const trendSign = b.trend > 0 ? '▲' : b.trend < 0 ? '▼' : '—';
    const sparkColor = b.trend >= 0 ? 'var(--green)' : 'var(--red)';

    return `
      <div class="cellar-card">
        <div class="cellar-card-img">
          <div class="bottle-emoji">${b.emoji}</div>
          <div class="cellar-card-badge" style="background:${b.badgeColor};color:#fff;">${b.badge}</div>
          <div class="cellar-card-actions">
            <button class="edit-btn" title="编辑" onclick="event.stopPropagation();openEditModal(${b.id})">✏️</button>
            <button class="del-btn" title="删除" onclick="event.stopPropagation();deleteBottle(${b.id})">🗑️</button>
          </div>
        </div>
        <div class="cellar-card-body">
          <div class="cellar-card-name">${b.name}</div>
          <div class="cellar-card-sub">${b.sub}</div>
          <div class="cellar-card-meta">
            <span class="meta-tag">×${b.qty}</span>
            <span class="meta-tag">${b.note}</span>
          </div>
          <div class="cellar-card-price-row">
            <div>
              <div style="font-size:10px;color:var(--text-muted);margin-bottom:2px;">综合估价</div>
              <div class="cellar-card-current-val">¥${b.estimate.toLocaleString()}</div>
            </div>
            <div class="cellar-card-trend ${trendClass}">
              ${trendSign} ${Math.abs(b.trend)}%
            </div>
          </div>
          ${sparklineHTML(b.sparkData, sparkColor)}
          <div style="display:flex;gap:4px;margin-bottom:8px;">
            <div style="flex:1;height:4px;border-radius:2px;background:#7b9fe0;opacity:0.5;" title="拍卖成交价: ¥${b.auctionPrice.toLocaleString()}"></div>
            <div style="flex:1;height:4px;border-radius:2px;background:var(--gold);opacity:0.5;" title="回收商报价: ¥${b.dealerPrice.toLocaleString()}"></div>
          </div>
          <div class="cellar-source-bar" style="margin-bottom:10px;">
            <span class="source-dot source-auction"></span>拍 ¥${b.auctionPrice.toLocaleString()}
            <span class="source-dot source-dealer" style="margin-left:8px;"></span>收 ¥${b.dealerPrice.toLocaleString()}
          </div>
          <div class="cellar-purchase-info">
            <span><span class="label">入手价 </span>¥${b.purchasePrice.toLocaleString()}/瓶</span>
            <span class="${gainClass}">${gainSign}¥${Math.abs(gain).toLocaleString()}</span>
          </div>
        </div>
      </div>`;
  }).join('');

  updateCellarStats();
}

function updateCellarStats() {
  const filtered = currentFilter === 'all'
    ? cellarCollection
    : cellarCollection.filter(b => b.category === currentFilter);

  const totalVal = filtered.reduce((sum, b) => sum + b.estimate * b.qty, 0);
  const totalCost = filtered.reduce((sum, b) => sum + b.purchasePrice * b.qty, 0);
  const totalGain = totalVal - totalCost;
  const totalQty = filtered.reduce((sum, b) => sum + b.qty, 0);
  const avgPrice = totalQty > 0 ? Math.round(totalVal / totalQty) : 0;

  document.getElementById('cellar-total-value').textContent = '¥' + totalVal.toLocaleString();
  document.getElementById('cellar-total-sub').textContent = `共 ${totalQty} 瓶 · 阿里拍卖 / 歌德老酒行 / 云酒说`;
  document.getElementById('cellar-count').textContent = totalQty;
  document.getElementById('cellar-gain').textContent = (totalGain >= 0 ? '+' : '') + '¥' + Math.abs(totalGain).toLocaleString();
  document.getElementById('cellar-gain').style.color = totalGain >= 0 ? 'var(--green)' : 'var(--red)';
  document.getElementById('cellar-avg').textContent = totalQty > 0 ? '¥' + avgPrice.toLocaleString() : '¥0';
}

function filterCellar(cat, el) {
  currentFilter = cat;
  document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  renderCellar();
}

function openAddModal() {
  editingId = null;
  document.getElementById('modal-title').textContent = '➕ 录入新藏酒';
  document.getElementById('f-name').value = '';
  document.getElementById('f-category').value = 'maotai';
  document.getElementById('f-vintage').value = '';
  document.getElementById('f-purchase').value = '';
  document.getElementById('f-qty').value = '1';
  document.getElementById('f-auction').value = '';
  document.getElementById('f-dealer').value = '';
  document.getElementById('f-note').value = '';
  document.getElementById('cellar-modal').classList.add('show');
}

function openEditModal(id) {
  const b = cellarCollection.find(x => x.id === id);
  if (!b) return;
  editingId = id;
  document.getElementById('modal-title').textContent = '✏️ 编辑藏酒';
  document.getElementById('f-name').value = b.name;
  document.getElementById('f-category').value = b.category;
  document.getElementById('f-vintage').value = b.sub.match(/\d{4}/)?.[0] || '';
  document.getElementById('f-purchase').value = b.purchasePrice;
  document.getElementById('f-qty').value = b.qty;
  document.getElementById('f-auction').value = b.auctionPrice;
  document.getElementById('f-dealer').value = b.dealerPrice;
  document.getElementById('f-note').value = b.note;
  document.getElementById('cellar-modal').classList.add('show');
}

function closeModal() {
  document.getElementById('cellar-modal').classList.remove('show');
  editingId = null;
}

function saveBottle() {
  const name = document.getElementById('f-name').value.trim();
  const purchase = parseFloat(document.getElementById('f-purchase').value) || 0;
  const qty = parseInt(document.getElementById('f-qty').value) || 1;
  const auction = parseFloat(document.getElementById('f-auction').value) || 0;
  const dealer = parseFloat(document.getElementById('f-dealer').value) || 0;

  if (!name) {
    alert('请输入酒款名称');
    return;
  }

  const estimate = Math.round((auction + dealer) / 2) || purchase;
  const trend = purchase > 0 ? Math.round(((estimate - purchase) / purchase) * 100) : 0;

  const catMap = {
    maotai: { emoji: '🏺', badge: '茅台', color: '#e74c3c' },
    wine: { emoji: '🍷', badge: '波尔多', color: '#7b9fe0' },
    whisky: { emoji: '🥃', badge: '威士忌', color: '#c9882a' },
    baijiu: { emoji: '🥢', badge: '名酒', color: '#9b8fd4' }
  };
  const cat = document.getElementById('f-category').value;
  const vintage = document.getElementById('f-vintage').value;
  const catInfo = catMap[cat] || catMap.baijiu;

  const bottle = {
    id: editingId || Date.now(),
    name,
    sub: catInfo.badge + (vintage ? ' · ' + vintage + '年产' : ''),
    category: cat,
    qty,
    purchasePrice: purchase,
    auctionPrice: auction,
    dealerPrice: dealer,
    estimate,
    trend,
    emoji: catInfo.emoji,
    badge: catInfo.badge,
    badgeColor: catInfo.color,
    note: document.getElementById('f-note').value || '手动录入',
    sparkData: [purchase || estimate, estimate, estimate, estimate, estimate, estimate]
  };

  if (editingId) {
    const idx = cellarCollection.findIndex(x => x.id === editingId);
    if (idx >= 0) cellarCollection[idx] = bottle;
  } else {
    cellarCollection.push(bottle);
  }

  closeModal();
  renderCellar();
}

function deleteBottle(id) {
  if (!confirm('确定删除这瓶藏酒吗？')) return;
  const idx = cellarCollection.findIndex(x => x.id === id);
  if (idx >= 0) cellarCollection.splice(idx, 1);
  renderCellar();
}

function exportCellar() {
  const filtered = currentFilter === 'all'
    ? cellarCollection
    : cellarCollection.filter(b => b.category === currentFilter);
  if (filtered.length === 0) {
    alert('酒柜为空，没有可导出的数据');
    return;
  }
  const totalVal = filtered.reduce((sum, b) => sum + b.estimate * b.qty, 0);
  const totalCost = filtered.reduce((sum, b) => sum + b.purchasePrice * b.qty, 0);
  const lines = ['名称,品类,数量,入手价,拍卖价,回收商报价,综合估价,浮盈亏,备注'];
  filtered.forEach(b => {
    const gain = (b.estimate - b.purchasePrice) * b.qty;
    lines.push(`${b.name},${b.badge},${b.qty},¥${b.purchasePrice},¥${b.auctionPrice},¥${b.dealerPrice},¥${b.estimate},¥${gain},${b.note}`);
  });
  lines.push('');
  lines.push(`合计,,,,,,¥${totalVal},¥${totalVal - totalCost}`);
  lines.push(`数据来源: 阿里拍卖 / 歌德老酒行 / 云酒说`);
  lines.push(`导出时间: ${new Date().toLocaleString('zh-CN')}`);

  const blob = new Blob(['\uFEFF' + lines.join('\n')], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `酒柜导出_${new Date().toISOString().slice(0,10)}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}

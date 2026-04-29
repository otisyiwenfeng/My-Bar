console.log('recipes.js loaded, recipes count:', typeof recipes !== 'undefined' ? recipes.length : 'undefined');
var recipes = [
  // ===== 经典 Classic (20) =====
  {
    id: 'negroni',
    name: 'Negroni',
    nameCn: '尼格罗尼',
    category: '经典',
    tags: ['苦味','经典'],
    rating: 4.8, time: '5 MIN', strength: 'Medium',
    heroImg: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=800',
    ingredients: [
      {name:'Gin 金酒',amount:'30',unit:'ml'},{name:'Campari 金巴利',amount:'30',unit:'ml'},{name:'Sweet Vermouth 甜苦艾酒',amount:'30',unit:'ml'},{name:'Orange Peel 橙皮',amount:'1',unit:'条'}
    ],
    barware: ['rocks','mixing'],
    steps: [
      {step:1,title:'准备',desc:'取古典杯，放入大冰球。'},
      {step:2,title:'倒入',desc:'将金酒、金巴利和甜苦艾酒依次倒入。'},
      {step:3,title:'搅拌',desc:'用吧勺轻轻搅拌约30秒。'},
      {step:4,title:'装饰',desc:'用橙皮擦拭杯口，放入杯中装饰。'}
    ]
  },
  {
    id: 'mojito',
    name: 'Mojito',
    nameCn: '莫吉托',
    category: '经典',
    tags: ['清爽','果味'],
    rating: 4.7, time: '6 MIN', strength: 'Light',
    heroImg: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=800',
    ingredients: [
      {name:'White Rum 白朗姆',amount:'45',unit:'ml'},{name:'Lime Juice 青柠汁',amount:'25',unit:'ml'},{name:'Mint Leaves 薄荷叶',amount:'8',unit:'片'},{name:'Sugar 白砂糖',amount:'2',unit:'勺'},{name:'Soda Water 苏打水',amount:'适量',unit:''}
    ],
    barware: ['collins','muddler'],
    steps: [
      {step:1,title:'捣碎',desc:'在高球杯中轻轻捣碎薄荷叶和糖。'},
      {step:2,title:'加酸',desc:'挤入青柠汁，加入朗姆酒搅拌。'},
      {step:3,title:'加冰',desc:'加入碎冰至杯子八分满。'},
      {step:4,title:'补气',desc:'倒入苏打水至满杯，用薄荷枝装饰。'}
    ]
  },
  {
    id: 'margarita',
    name: 'Margarita',
    nameCn: '玛格丽特',
    category: '经典',
    tags: ['清爽','果味'],
    rating: 4.6, time: '5 MIN', strength: 'Medium',
    heroImg: 'https://images.unsplash.com/photo-1563213126-a4273aed6594?w=800',
    ingredients: [
      {name:'Tequila 龙舌兰',amount:'45',unit:'ml'},{name:'Cointreau 君度',amount:'20',unit:'ml'},{name:'Lime Juice 青柠汁',amount:'20',unit:'ml'},{name:'Agave Syrup 龙舌兰糖浆',amount:'10',unit:'ml'}
    ],
    barware: ['cocktail','shaker'],
    steps: [
      {step:1,title:'盐边',desc:'用青柠角擦拭杯口，沾上盐边。'},
      {step:2,title:'摇和',desc:'所有原料加冰用力摇和15秒。'},
      {step:3,title:'过滤',desc:'双重过滤倒入冰镇的玛格丽特杯。'},
      {step:4,title:'装饰',desc:'用青柠角装饰即可享用。'}
    ]
  },
  {
    id: 'oldfashioned',
    name: 'Old Fashioned',
    nameCn: '古典鸡尾酒',
    category: '经典',
    tags: ['烟熏','经典'],
    rating: 4.9, time: '5 MIN', strength: 'Strong',
    heroImg: 'https://images.unsplash.com/photo-1470337459683-829a8306cd2b?w=800',
    ingredients: [
      {name:'Bourbon/Rye 波本/黑麦威士忌',amount:'60',unit:'ml'},{name:'Sugar 糖',amount:'1',unit:'块'},{name:'Angostura Bitters 苦精',amount:'3',unit:'滴'},{name:'Orange Peel 橙皮',amount:'1',unit:'条'}
    ],
    barware: ['rocks','muddler'],
    steps: [
      {step:1,title:'捣碎',desc:'在古典杯中捣碎糖和苦精至溶解。'},
      {step:2,title:'加酒和冰',desc:'加入大冰块，倒入威士忌。'},
      {step:3,title:'轻轻搅拌',desc:'轻轻搅拌20-30秒，降温并产生少量稀释。'},
      {step:4,title:'装饰',desc:'将橙皮油挤入酒中，放入杯中即可。'}
    ]
  },
  {
    id: 'manhattan',
    name: 'Manhattan',
    nameCn: '曼哈顿',
    category: '经典',
    tags: ['烟熏','经典'],
    rating: 4.7, time: '5 MIN', strength: 'Strong',
    heroImg: 'https://images.unsplash.com/photo-1514361763556-c1e20c56d3c8?w=800',
    ingredients: [
      {name:'Rye Whiskey 黑麦威士忌',amount:'50',unit:'ml'},{name:'Sweet Vermouth 甜苦艾酒',amount:'20',unit:'ml'},{name:'Angostura Bitters 苦精',amount:'2',unit:'滴'},{name:'Maraschino Cherry 樱桃',amount:'1',unit:'颗'}
    ],
    barware: ['cocktail','mixing'],
    steps: [
      {step:1,title:'混合',desc:'在混合杯中加入威士忌、甜苦艾酒和苦精。'},
      {step:2,title:'搅拌',desc:'加满冰块，用吧勺轻轻搅拌约25秒。'},
      {step:3,title:'过滤',desc:'将酒液过滤倒入冰镇的鸡尾酒杯。'},
      {step:4,title:'装饰',desc:'用马拉斯奇诺樱桃装饰即可。'}
    ]
  },
  {
    id: 'drymartini',
    name: 'Dry Martini',
    nameCn: '干马天尼',
    category: '经典',
    tags: ['草本','经典'],
    rating: 4.8, time: '4 MIN', strength: 'Strong',
    heroImg: 'https://images.unsplash.com/photo-1572490122747-82c7e6a89e59?w=800',
    ingredients: [
      {name:'Gin 金酒',amount:'60',unit:'ml'},{name:'Dry Vermouth 干苦艾酒',amount:'10',unit:'ml'},{name:'Olive 橄榄',amount:'3',unit:'颗'}
    ],
    barware: ['cocktail','mixing'],
    steps: [
      {step:1,title:'冰杯',desc:'将鸡尾酒杯放入冷冻室冰镇。'},
      {step:2,title:'搅拌',desc:'在混合杯中加入金酒和干苦艾酒，加冰搅拌30次。'},
      {step:3,title:'过滤',desc:'将酒液双重过滤倒入冰镇的鸡尾酒杯。'},
      {step:4,title:'装饰',desc:'用鸡尾酒签串起三颗橄榄放入杯中。'}
    ]
  },
  {
    id: 'whiskeysour',
    name: 'Whiskey Sour',
    nameCn: '威士忌酸',
    category: '经典',
    tags: ['果味','清爽'],
    rating: 4.5, time: '5 MIN', strength: 'Medium',
    heroImg: 'https://images.unsplash.com/photo-1514361763556-c1e20c56d3c8?w=800',
    ingredients: [
      {name:'Bourbon 波本威士忌',amount:'45',unit:'ml'},{name:'Lemon Juice 柠檬汁',amount:'25',unit:'ml'},{name:'Sugar Syrup 糖浆',amount:'15',unit:'ml'},{name:'Egg White 蛋清',amount:'1',unit:'个'}
    ],
    barware: ['coupe','shaker'],
    steps: [
      {step:1,title:'干摇',desc:'将所有原料不加冰放入摇酒器，干摇10秒。'},
      {step:2,title:'加冰摇',desc:'加入冰块，继续摇和15秒至充分冷却。'},
      {step:3,title:'过滤',desc:'将酒液双重过滤倒入冰镇的Coupe杯。'},
      {step:4,title:'装饰',desc:'在泡沫上滴3滴安格斯特拉苦精。'}
    ]
  },
  {
    id: 'sazerac',
    name: 'Sazerac',
    nameCn: '萨泽拉克',
    category: '经典',
    tags: ['烟熏','经典'],
    rating: 4.6, time: '5 MIN', strength: 'Strong',
    heroImg: 'https://images.unsplash.com/photo-1470337459683-829a8306cd2b?w=800',
    ingredients: [
      {name:'Rye Whiskey 黑麦威士忌',amount:'50',unit:'ml'},{name:'Absinthe 苦艾酒',amount:'少许',unit:''},{name:'Sugar 糖',amount:'1',unit:'块'},{name:'Peychaud’s Bitters',amount:'4',unit:'滴'},{name:'Lemon Peel 柠檬皮',amount:'1',unit:'条'}
    ],
    barware: ['rocks','mixing'],
    steps: [
      {step:1,title:'涂杯',desc:'用苦艾酒涂抹古典杯内壁，倒掉多余酒液。'},
      {step:2,title:'捣碎',desc:'在另一个杯中捣碎糖和苦精。'},
      {step:3,title:'加酒搅拌',desc:'加入威士忌和冰块，轻轻搅拌。'},
      {step:4,title:'过滤装饰',desc:'过滤倒入涂好苦艾酒的杯中，用柠檬皮装饰。'}
    ]
  },
  {
    id: 'boulevardier',
    name: 'Boulevardier',
    nameCn: '林荫大道',
    category: '经典',
    tags: ['烟熏','经典'],
    rating: 4.7, time: '5 MIN', strength: 'Medium',
    heroImg: 'https://images.unsplash.com/photo-1470337459683-829a8306cd2b?w=800',
    ingredients: [
      {name:'Bourbon 波本威士忌',amount:'45',unit:'ml'},{name:'Campari 金巴利',amount:'25',unit:'ml'},{name:'Sweet Vermouth 甜苦艾酒',amount:'25',unit:'ml'}
    ],
    barware: ['cocktail','mixing'],
    steps: [
      {step:1,title:'混合',desc:'在混合杯中加入所有原料。'},
      {step:2,title:'搅拌',desc:'加冰搅拌约30秒至充分冷却。'},
      {step:3,title:'过滤',desc:'过滤倒入冰镇的鸡尾酒杯。'},
      {step:4,title:'装饰',desc:'用橙皮装饰即可享用。'}
    ]
  },
  {
    id: 'beesknees',
    name: "Bee's Knees",
    nameCn: '蜜蜂之膝',
    category: '经典',
    tags: ['花香','果味'],
    rating: 4.5, time: '5 MIN', strength: 'Medium',
    heroImg: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=800',
    ingredients: [
      {name:'Gin 金酒',amount:'50',unit:'ml'},{name:'Honey Syrup 蜂蜜糖浆',amount:'20',unit:'ml'},{name:'Lemon Juice 柠檬汁',amount:'20',unit:'ml'}
    ],
    barware: ['coupe','shaker'],
    steps: [
      {step:1,title:'摇和',desc:'所有原料加冰摇和10-15秒。'},
      {step:2,title:'过滤',desc:'双重过滤倒入冰镇的Coupe杯。'},
      {step:3,title:'装饰',desc:'用柠檬皮或食用花装饰。'}
    ]
  },
  {
    id: 'french75',
    name: 'French 75',
    nameCn: '法国75',
    category: '经典',
    tags: ['清爽','气泡'],
    rating: 4.4, time: '5 MIN', strength: 'Medium',
    heroImg: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=800',
    ingredients: [
      {name:'Gin 金酒',amount:'30',unit:'ml'},{name:'Lemon Juice 柠檬汁',amount:'15',unit:'ml'},{name:'Sugar Syrup 糖浆',amount:'10',unit:'ml'},{name:'Champagne 香槟',amount:'适量',unit:''}
    ],
    barware: ['flute','shaker'],
    steps: [
      {step:1,title:'摇和',desc:'金酒、柠檬汁和糖浆加冰摇和10秒。'},
      {step:2,title:'过滤',desc:'过滤倒入香槟杯。'},
      {step:3,title:'补气',desc:'慢慢倒入香槟至满杯。'},
      {step:4,title:'装饰',desc:'用柠檬螺旋装饰即可。'}
    ]
  },
  {
    id: 'mintjulep',
    name: 'Mint Julep',
    nameCn: '薄荷朱利普',
    category: '经典',
    tags: ['清爽','草本'],
    rating: 4.3, time: '6 MIN', strength: 'Medium',
    heroImg: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=800',
    ingredients: [
      {name:'Bourbon 波本威士忌',amount:'60',unit:'ml'},{name:'Mint Leaves 薄荷叶',amount:'10',unit:'片'},{name:'Sugar 糖',amount:'2',unit:'勺'},{name:'Water 水',amount:'少许',unit:''}
    ],
    barware: ['julep','muddler'],
    steps: [
      {step:1,title:'捣碎',desc:'在朱利普杯中轻轻捣碎薄荷叶和糖。'},
      {step:2,title:'加酒',desc:'倒入波本威士忌和少许水。'},
      {step:3,title:'加冰',desc:'加满碎冰，轻轻搅拌至杯壁起霜。'},
      {step:4,title:'装饰',desc:'插上薄荷枝，用吸管享用。'}
    ]
  },
  {
    id: 'aviation',
    name: 'Aviation',
    nameCn: '飞行',
    category: '经典',
    tags: ['花香','清爽'],
    rating: 4.5, time: '5 MIN', strength: 'Medium',
    heroImg: 'https://images.unsplash.com/photo-1572490122747-82c7e6a89e59?w=800',
    ingredients: [
      {name:'Gin 金酒',amount:'45',unit:'ml'},{name:'Maraschino Liqueur 黑樱桃利口酒',amount:'15',unit:'ml'},{name:'Lemon Juice 柠檬汁',amount:'15',unit:'ml'},{name:'Crème de Violette 紫罗兰利口酒',amount:'10',unit:'ml'}
    ],
    barware: ['coupe','shaker'],
    steps: [
      {step:1,title:'摇和',desc:'所有原料加冰摇和10-15秒。'},
      {step:2,title:'过滤',desc:'双重过滤倒入冰镇的Coupe杯。'},
      {step:3,title:'装饰',desc:'用黑樱桃装饰即可。'}
    ]
  },
  {
    id: 'vieucarre',
    name: 'Vieux Carré',
    nameCn: '老广场',
    category: '经典',
    tags: ['烟熏','浓郁'],
    rating: 4.6, time: '6 MIN', strength: 'Strong',
    heroImg: 'https://images.unsplash.com/photo-1470337459683-829a8306cd2b?w=800',
    ingredients: [
      {name:'Rye Whiskey 黑麦威士忌',amount:'30',unit:'ml'},{name:'Brandy 白兰地',amount:'30',unit:'ml'},{name:'Sweet Vermouth 甜苦艾酒',amount:'30',unit:'ml'},{name:'Benedictine 廊酒',amount:'5',unit:'ml'},{name:'Bitters 苦精',amount:'2',unit:'滴'}
    ],
    barware: ['rocks','mixing'],
    steps: [
      {step:1,title:'混合',desc:'在混合杯中加入所有原料和冰块。'},
      {step:2,title:'搅拌',desc:'轻轻搅拌约30秒。'},
      {step:3,title:'过滤',desc:'过滤倒入装有冰球的古典杯。'},
      {step:4,title:'装饰',desc:'用柠檬皮装饰即可。'}
    ]
  },
  {
    id: 'darksnstormy',
    name: "Dark 'n' Stormy",
    nameCn: '暗夜风暴',
    category: '经典',
    tags: ['清爽','气泡'],
    rating: 4.3, time: '3 MIN', strength: 'Light',
    heroImg: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=800',
    ingredients: [
      {name:'Dark Rum 黑朗姆',amount:'60',unit:'ml'},{name:'Ginger Beer 姜啤',amount:'适量',unit:''},{name:'Lime Wedge 青柠角',amount:'1',unit:'块'}
    ],
    barware: ['collins','none'],
    steps: [
      {step:1,title:'加冰',desc:'在高球杯中加满冰块。'},
      {step:2,title:'倒酒',desc:'倒入黑朗姆酒。'},
      {step:3,title:'补气',desc:'慢慢倒入姜啤至满杯。'},
      {step:4,title:'装饰',desc:'用青柠角装饰即可。'}
    ]
  },
  {
    id: 'piscousour',
    name: 'Pisco Sour',
    nameCn: '皮斯科酸',
    category: '经典',
    tags: ['果味','清爽'],
    rating: 4.5, time: '5 MIN', strength: 'Medium',
    heroImg: 'https://images.unsplash.com/photo-1514361763556-c1e20c56d3c8?w=800',
    ingredients: [
      {name:'Pisco 皮斯科白兰地',amount:'45',unit:'ml'},{name:'Lime Juice 青柠汁',amount:'20',unit:'ml'},{name:'Sugar Syrup 糖浆',amount:'15',unit:'ml'},{name:'Egg White 蛋清',amount:'1',unit:'个'},{name:'Angostura Bitters 苦精',amount:'少许',unit:''}
    ],
    barware: ['coupe','shaker'],
    steps: [
      {step:1,title:'干摇',desc:'所有原料不加冰干摇10秒。'},
      {step:2,title:'加冰摇',desc:'加冰继续摇和15秒。'},
      {step:3,title:'过滤',desc:'双重过滤倒入Coupe杯。'},
      {step:4,title:'点苦精',desc:'在泡沫上滴几滴苦精做装饰。'}
    ]
  },
  {
    id: 'ginandtonic',
    name: 'Gin & Tonic',
    nameCn: '金汤力',
    category: '经典',
    tags: ['清爽','草本'],
    rating: 4.2, time: '3 MIN', strength: 'Light',
    heroImg: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=800',
    ingredients: [
      {name:'Gin 金酒',amount:'50',unit:'ml'},{name:'Tonic Water 汤力水',amount:'适量',unit:''},{name:'Lime Wedge 青柠角',amount:'1',unit:'块'}
    ],
    barware: ['collins','none'],
    steps: [
      {step:1,title:'加冰',desc:'在高球杯中加满冰块。'},
      {step:2,title:'倒金酒',desc:'倒入金酒轻轻搅拌。'},
      {step:3,title:'补汤力水',desc:'慢慢倒入汤力水至满杯。'},
      {step:4,title:'装饰',desc:'用青柠角装饰即可。'}
    ]
  },
  {
    id: 'sidecar',
    name: 'Sidecar',
    nameCn: '边车',
    category: '经典',
    tags: ['果味','经典'],
    rating: 4.5, time: '5 MIN', strength: 'Medium',
    heroImg: 'https://images.unsplash.com/photo-1572490122747-82c7e6a89e59?w=800',
    ingredients: [
      {name:'Brandy 白兰地',amount:'50',unit:'ml'},{name:'Cointreau 君度',amount:'20',unit:'ml'},{name:'Lemon Juice 柠檬汁',amount:'20',unit:'ml'}
    ],
    barware: ['coupe','shaker'],
    steps: [
      {step:1,title:'糖边',desc:'用柠檬擦拭杯口，沾上糖边。'},
      {step:2,title:'摇和',desc:'所有原料加冰摇和10-15秒。'},
      {step:3,title:'过滤',desc:'双重过滤倒入冰镇的Coupe杯。'},
      {step:4,title:'装饰',desc:'用柠檬皮装饰即可。'}
    ]
  },
  {
    id: 'brandyalexander',
    name: 'Brandy Alexander',
    nameCn: '白兰地亚历山大',
    category: '经典',
    tags: ['浓郁','奶香'],
    rating: 4.4, time: '5 MIN', strength: 'Medium',
    heroImg: 'https://images.unsplash.com/photo-1572490122747-82c7e6a89e59?w=800',
    ingredients: [
      {name:'Brandy 白兰地',amount:'30',unit:'ml'},{name:'Crème de Cacao 可可利口酒',amount:'30',unit:'ml'},{name:'Cream 奶油',amount:'30',unit:'ml'}
    ],
    barware: ['coupe','shaker'],
    steps: [
      {step:1,title:'摇和',desc:'所有原料加冰摇和10-15秒。'},
      {step:2,title:'过滤',desc:'双重过滤倒入Coupe杯。'},
      {step:3,title:'装饰',desc:'撒上肉豆蔻粉即可享用。'}
    ]
  },
  {
    id: 'whiterussian',
    name: 'White Russian',
    nameCn: '白俄罗斯',
    category: '经典',
    tags: ['浓郁','奶香'],
    rating: 4.3, time: '3 MIN', strength: 'Medium',
    heroImg: 'https://images.unsplash.com/photo-1514361763556-c1e20c56d3c8?w=800',
    ingredients: [
      {name:'Vodka 伏特加',amount:'50',unit:'ml'},{name:'Coffee Liqueur 咖啡利口酒',amount:'20',unit:'ml'},{name:'Cream 奶油',amount:'30',unit:'ml'}
    ],
    barware: ['rocks','none'],
    steps: [
      {step:1,title:'加冰',desc:'在古典杯中加满冰块。'},
      {step:2,title:'倒酒',desc:'倒入伏特加和咖啡利口酒，轻轻搅拌。'},
      {step:3,title:'淋奶油',desc:'将奶油慢慢淋在酒液表面。'},
      {step:4,title:'享用',desc:'不用搅拌，直接享用分层口感。'}
    ]
  },
  {
    id: 'blackrussian',
    name: 'Black Russian',
    nameCn: '黑俄罗斯',
    category: '经典',
    tags: ['浓郁','咖啡'],
    rating: 4.2, time: '3 MIN', strength: 'Medium',
    heroImg: 'https://images.unsplash.com/photo-1514361763556-c1e20c56d3c8?w=800',
    ingredients: [
      {name:'Vodka 伏特加',amount:'50',unit:'ml'},{name:'Coffee Liqueur 咖啡利口酒',amount:'20',unit:'ml'}
    ],
    barware: ['rocks','none'],
    steps: [
      {step:1,title:'加冰',desc:'在古典杯中加满冰块。'},
      {step:2,title:'倒酒',desc:'倒入伏特加和咖啡利口酒。'},
      {step:3,title:'搅拌',desc:'轻轻搅拌至混合均匀即可。'}
    ]
  },

  // ===== 热带 Tropical (8) =====
  {
    id: 'pina_colada',
    name: 'Piña Colada',
    nameCn: '椰林飘香',
    category: '热带',
    tags: ['热带','果味'],
    rating: 4.4, time: '5 MIN', strength: 'Medium',
    heroImg: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=800',
    ingredients: [
      {name:'White Rum 白朗姆',amount:'45',unit:'ml'},{name:'Coconut Cream 椰浆',amount:'30',unit:'ml'},{name:'Pineapple Juice 菠萝汁',amount:'45',unit:'ml'}
    ],
    barware: ['collins','shaker'],
    steps: [
      {step:1,title:'摇和',desc:'所有原料加碎冰摇和15秒。'},
      {step:2,title:'倒入',desc:'连冰带酒倒入高球杯或专用杯。'},
      {step:3,title:'装饰',desc:'用菠萝角和樱桃装饰即可。'}
    ]
  },
  {
    id: 'mai_tai',
    name: 'Mai Tai',
    nameCn: '迈泰',
    category: '热带',
    tags: ['热带','果味'],
    rating: 4.6, time: '6 MIN', strength: 'Medium',
    heroImg: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=800',
    ingredients: [
      {name:'Dark Rum 黑朗姆',amount:'30',unit:'ml'},{name:'Light Rum 白朗姆',amount:'30',unit:'ml'},{name:'Cointreau 君度',amount:'15',unit:'ml'},{name:'Lime Juice 青柠汁',amount:'20',unit:'ml'},{name:'Orgeat Syrup 杏仁糖浆',amount:'15',unit:'ml'}
    ],
    barware: ['rocks','shaker'],
    steps: [
      {step:1,title:'摇和',desc:'所有原料（除黑朗姆）加冰摇和10秒。'},
      {step:2,title:'倒入',desc:'过滤倒入装有碎冰的古典杯。'},
      {step:3,title:'淋黑朗姆',desc:'将黑朗姆慢慢淋在酒液表面。'},
      {step:4,title:'装饰',desc:'用薄荷枝和菠萝角装饰。'}
    ]
  },
  {
    id: 'zombie',
    name: 'Zombie',
    nameCn: '僵尸',
    category: '热带',
    tags: ['热带','浓郁'],
    rating: 4.3, time: '8 MIN', strength: 'Strong',
    heroImg: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=800',
    ingredients: [
      {name:'Light Rum 白朗姆',amount:'30',unit:'ml'},{name:'Dark Rum 黑朗姆',amount:'30',unit:'ml'},{name:'Apricot Brandy 杏子白兰地',amount:'15',unit:'ml'},{name:'Pineapple Juice 菠萝汁',amount:'45',unit:'ml'},{name:'Lime Juice 青柠汁',amount:'15',unit:'ml'}
    ],
    barware: ['collins','shaker'],
    steps: [
      {step:1,title:'摇和',desc:'所有原料加冰摇和15秒。'},
      {step:2,title:'倒入',desc:'过滤倒入长饮杯，加满碎冰。'},
      {step:3,title:'装饰',desc:'用薄荷枝和时令水果装饰。'}
    ]
  },
  {
    id: 'hurricane',
    name: 'Hurricane',
    nameCn: '飓风',
    category: '热带',
    tags: ['热带','果味'],
    rating: 4.3, time: '5 MIN', strength: 'Medium',
    heroImg: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=800',
    ingredients: [
      {name:'Light Rum 白朗姆',amount:'60',unit:'ml'},{name:'Passion Fruit Syrup 百香果糖浆',amount:'30',unit:'ml'},{name:'Lemon Juice 柠檬汁',amount:'30',unit:'ml'}
    ],
    barware: ['hurricane','shaker'],
    steps: [
      {step:1,title:'摇和',desc:'所有原料加冰摇和10-15秒。'},
      {step:2,title:'倒入',desc:'过滤倒入装有冰块的飓风杯。'},
      {step:3,title:'装饰',desc:'用橙片和樱桃装饰即可。'}
    ]
  },
  {
    id: 'blue_hawaii',
    name: 'Blue Hawaii',
    nameCn: '蓝色夏威夷',
    category: '热带',
    tags: ['热带','果味'],
    rating: 4.2, time: '5 MIN', strength: 'Medium',
    heroImg: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=800',
    ingredients: [
      {name:'Light Rum 白朗姆',amount:'30',unit:'ml'},{name:'Vodka 伏特加',amount:'30',unit:'ml'},{name:'Blue Curaçao 蓝橙利口酒',amount:'30',unit:'ml'},{name:'Pineapple Juice 菠萝汁',amount:'60',unit:'ml'}
    ],
    barware: ['collins','shaker'],
    steps: [
      {step:1,title:'摇和',desc:'所有原料加冰摇和10-15秒。'},
      {step:2,title:'倒入',desc:'过滤倒入装有冰块的高球杯。'},
      {step:3,title:'装饰',desc:'用菠萝角和樱桃装饰。'}
    ]
  },
  {
    id: 'caipirinha',
    name: 'Caipirinha',
    nameCn: '卡琵莉亚',
    category: '热带',
    tags: ['热带','果味'],
    rating: 4.5, time: '5 MIN', strength: 'Medium',
    heroImg: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=800',
    ingredients: [
      {name:'Cachaça 卡莎萨',amount:'60',unit:'ml'},{name:'Lime 青柠',amount:'半个',unit:''},{name:'Sugar 糖',amount:'2',unit:'勺'}
    ],
    barware: ['rocks','muddler'],
    steps: [
      {step:1,title:'捣碎',desc:'在古典杯中捣碎青柠和糖。'},
      {step:2,title:'加冰',desc:'加满碎冰，倒入卡莎萨。'},
      {step:3,title:'搅拌',desc:'轻轻搅拌至混合均匀。'},
      {step:4,title:'装饰',desc:'用青柠片装饰即可。'}
    ]
  },
  {
    id: 'tequila_sunrise',
    name: 'Tequila Sunrise',
    nameCn: '龙舌兰日出',
    category: '热带',
    tags: ['热带','果味'],
    rating: 4.3, time: '4 MIN', strength: 'Light',
    heroImg: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=800',
    ingredients: [
      {name:'Tequila 龙舌兰',amount:'60',unit:'ml'},{name:'Orange Juice 橙汁',amount:'适量',unit:''},{name:'Grenadine 红石榴糖浆',amount:'15',unit:'ml'}
    ],
    barware: ['collins','none'],
    steps: [
      {step:1,title:'加冰',desc:'在高球杯中加满冰块。'},
      {step:2,title:'倒龙舌兰和橙汁',desc:'倒入龙舌兰和橙汁，轻轻搅拌。'},
      {step:3,title:'淋糖浆',desc:'将红石榴糖浆沿杯壁慢慢倒入。'},
      {step:4,title:'装饰',desc:'用橙片装饰，欣赏日出渐变。'}
    ]
  },
  {
    id: 'daiquiri',
    name: 'Daiquiri',
    nameCn: '戴吉利',
    category: '热带',
    tags: ['清爽','果味'],
    rating: 4.6, time: '5 MIN', strength: 'Medium',
    heroImg: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=800',
    ingredients: [
      {name:'White Rum 白朗姆',amount:'45',unit:'ml'},{name:'Lime Juice 青柠汁',amount:'20',unit:'ml'},{name:'Sugar Syrup 糖浆',amount:'10',unit:'ml'}
    ],
    barware: ['coupe','shaker'],
    steps: [
      {step:1,title:'摇和',desc:'所有原料加冰摇和10-15秒。'},
      {step:2,title:'过滤',desc:'双重过滤倒入冰镇的Coupe杯。'},
      {step:3,title:'装饰',desc:'用青柠片或糖边装饰即可。'}
    ]
  },

  // ===== 现代 Modern (12) =====
  {
    id: 'espressomartini',
    name: 'Espresso Martini',
    nameCn: '浓缩马天尼',
    category: '现代',
    tags: ['咖啡','现代'],
    rating: 4.6, time: '5 MIN', strength: 'Strong',
    heroImg: 'https://images.unsplash.com/photo-1517701552459-26b6811537a1?w=800',
    ingredients: [
      {name:'Vodka 伏特加',amount:'40',unit:'ml'},{name:'Coffee Liqueur 咖啡利口酒',amount:'20',unit:'ml'},{name:'Espresso 浓缩咖啡',amount:'30',unit:'ml'},{name:'Sugar Syrup 糖浆',amount:'10',unit:'ml'}
    ],
    barware: ['cocktail','shaker'],
    steps: [
      {step:1,title:'准备',desc:'将鸡尾酒杯冰镇，准备新鲜浓缩咖啡。'},
      {step:2,title:'摇和',desc:'所有原料加满冰块用力摇和。'},
      {step:3,title:'过滤',desc:'双重过滤倒入冰镇的鸡尾酒杯。'},
      {step:4,title:'装饰',desc:'用3颗咖啡豆装饰在泡沫上。'}
    ]
  },
  {
    id: 'aperolspritz',
    name: 'Aperol Spritz',
    nameCn: '阿佩罗橙光',
    category: '现代',
    tags: ['果味','清爽'],
    rating: 4.3, time: '3 MIN', strength: 'Light',
    heroImg: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=800',
    ingredients: [
      {name:'Aperol 阿佩罗',amount:'60',unit:'ml'},{name:'Prosecco 普罗塞克',amount:'90',unit:'ml'},{name:'Soda Water 苏打水',amount:'30',unit:'ml'}
    ],
    barware: ['wine','none'],
    steps: [
      {step:1,title:'加冰',desc:'在高球杯或红酒杯中加满冰块。'},
      {step:2,title:'倒入',desc:'先倒入阿佩罗，再倒入普罗塞克。'},
      {step:3,title:'补气',desc:'最后加入苏打水，轻轻搅拌。'},
      {step:4,title:'装饰',desc:'用新鲜橙片装饰即可。'}
    ]
  },
  {
    id: 'cosmopolitan',
    name: 'Cosmopolitan',
    nameCn: '大都会',
    category: '现代',
    tags: ['果味','现代'],
    rating: 4.4, time: '5 MIN', strength: 'Medium',
    heroImg: 'https://images.unsplash.com/photo-1572490122747-82c7e6a89e59?w=800',
    ingredients: [
      {name:'Vodka 伏特加',amount:'40',unit:'ml'},{name:'Cointreau 君度',amount:'15',unit:'ml'},{name:'Cranberry Juice 蔓越莓汁',amount:'30',unit:'ml'},{name:'Lime Juice 青柠汁',amount:'10',unit:'ml'}
    ],
    barware: ['coupe','shaker'],
    steps: [
      {step:1,title:'摇和',desc:'所有原料加冰摇和10-15秒。'},
      {step:2,title:'过滤',desc:'双重过滤倒入冰镇的Coupe杯。'},
      {step:3,title:'装饰',desc:'用青柠皮或橙皮装饰即可。'}
    ]
  },
  {
    id: 'paper_plane',
    name: 'Paper Plane',
    nameCn: '纸飞机',
    category: '现代',
    tags: ['现代','苦味'],
    rating: 4.7, time: '5 MIN', strength: 'Medium',
    heroImg: 'https://images.unsplash.com/photo-1572490122747-82c7e6a89e59?w=800',
    ingredients: [
      {name:'Bourbon 波本威士忌',amount:'30',unit:'ml'},{name:'Amaro Nonino 阿玛罗',amount:'30',unit:'ml'},{name:'Aperol 阿佩罗',amount:'30',unit:'ml'},{name:'Lemon Juice 柠檬汁',amount:'30',unit:'ml'}
    ],
    barware: ['coupe','shaker'],
    steps: [
      {step:1,title:'摇和',desc:'所有原料加冰摇和10-15秒。'},
      {step:2,title:'过滤',desc:'双重过滤倒入冰镇的Coupe杯。'},
      {step:3,title:'装饰',desc:'用柠檬皮装饰即可享用。'}
    ]
  },
  {
    id: 'penicillin',
    name: 'Penicillin',
    nameCn: '盘尼西林',
    category: '现代',
    tags: ['烟熏','现代'],
    rating: 4.8, time: '6 MIN', strength: 'Medium',
    heroImg: 'https://images.unsplash.com/photo-1470337459683-829a8306cd2b?w=800',
    ingredients: [
      {name:'Scotch Whisky 苏格兰威士忌',amount:'60',unit:'ml'},{name:'Lemon Juice 柠檬汁',amount:'20',unit:'ml'},{name:'Honey Ginger Syrup 姜蜜糖浆',amount:'20',unit:'ml'},{name:'Peated Scotch 泥煤威士忌',amount:'少许',unit:''}
    ],
    barware: ['rocks','shaker'],
    steps: [
      {step:1,title:'摇和',desc:'苏格兰威士忌、柠檬汁和姜蜜糖浆加冰摇和。'},
      {step:2,title:'过滤',desc:'过滤倒入装有冰球的古典杯。'},
      {step:3,title:'淋泥煤威士忌',desc:'将少量泥煤威士忌淋在酒液表面。'},
      {step:4,title:'装饰',desc:'用糖渍姜片装饰即可。'}
    ]
  },
  {
    id: 'last_word',
    name: 'Last Word',
    nameCn: '最后之言',
    category: '现代',
    tags: ['现代','草本'],
    rating: 4.7, time: '5 MIN', strength: 'Medium',
    heroImg: 'https://images.unsplash.com/photo-1572490122747-82c7e6a89e59?w=800',
    ingredients: [
      {name:'Gin 金酒',amount:'22',unit:'ml'},{name:'Green Chartreuse 绿沙威',amount:'22',unit:'ml'},{name:'Maraschino Liqueur 黑樱桃利口酒',amount:'22',unit:'ml'},{name:'Lime Juice 青柠汁',amount:'22',unit:'ml'}
    ],
    barware: ['coupe','shaker'],
    steps: [
      {step:1,title:'摇和',desc:'所有原料加冰摇和10-15秒。'},
      {step:2,title:'过滤',desc:'双重过滤倒入冰镇的Coupe杯。'},
      {step:3,title:'装饰',desc:'用黑樱桃装饰即可。'}
    ]
  },
  {
    id: 'gold_rush',
    name: 'Gold Rush',
    nameCn: '黄金热',
    category: '现代',
    tags: ['现代','蜂蜜'],
    rating: 4.6, time: '5 MIN', strength: 'Medium',
    heroImg: 'https://images.unsplash.com/photo-1470337459683-829a8306cd2b?w=800',
    ingredients: [
      {name:'Bourbon 波本威士忌',amount:'45',unit:'ml'},{name:'Honey Syrup 蜂蜜糖浆',amount:'25',unit:'ml'},{name:'Lemon Juice 柠檬汁',amount:'25',unit:'ml'}
    ],
    barware: ['rocks','shaker'],
    steps: [
      {step:1,title:'摇和',desc:'所有原料加冰摇和10-15秒。'},
      {step:2,title:'过滤',desc:'过滤倒入装有冰球的古典杯。'},
      {step:3,title:'装饰',desc:'用柠檬皮装饰即可享用。'}
    ]
  },
  {
    id: 'southside',
    name: 'Southside',
    nameCn: '南岸',
    category: '现代',
    tags: ['清爽','草本'],
    rating: 4.5, time: '5 MIN', strength: 'Medium',
    heroImg: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=800',
    ingredients: [
      {name:'Gin 金酒',amount:'50',unit:'ml'},{name:'Lemon Juice 柠檬汁',amount:'25',unit:'ml'},{name:'Sugar Syrup 糖浆',amount:'15',unit:'ml'},{name:'Mint Leaves 薄荷叶',amount:'6',unit:'片'}
    ],
    barware: ['coupe','shaker'],
    steps: [
      {step:1,title:'捣碎',desc:'轻轻捣碎薄荷叶和糖浆。'},
      {step:2,title:'摇和',desc:'加金酒和柠檬汁，加冰摇和。'},
      {step:3,title:'过滤',desc:'双重过滤倒入冰镇的Coupe杯。'},
      {step:4,title:'装饰',desc:'用薄荷枝装饰即可。'}
    ]
  },
  {
    id: 'clover_club',
    name: 'Clover Club',
    nameCn: '三叶草俱乐部',
    category: '现代',
    tags: ['花香','果味'],
    rating: 4.4, time: '5 MIN', strength: 'Medium',
    heroImg: 'https://images.unsplash.com/photo-1572490122747-82c7e6a89e59?w=800',
    ingredients: [
      {name:'Gin 金酒',amount:'45',unit:'ml'},{name:'Raspberry Syrup 覆盆子糖浆',amount:'15',unit:'ml'},{name:'Lemon Juice 柠檬汁',amount:'15',unit:'ml'},{name:'Egg White 蛋清',amount:'1',unit:'个'}
    ],
    barware: ['coupe','shaker'],
    steps: [
      {step:1,title:'干摇',desc:'所有原料不加冰干摇10秒。'},
      {step:2,title:'加冰摇',desc:'加冰继续摇和15秒。'},
      {step:3,title:'过滤',desc:'双重过滤倒入Coupe杯。'},
      {step:4,title:'装饰',desc:'用覆盆子或柠檬皮装饰。'}
    ]
  },
  {
    id: 'ramos_gin_fizz',
    name: 'Ramos Gin Fizz',
    nameCn: '拉莫斯金酒菲士',
    category: '现代',
    tags: ['清爽','气泡'],
    rating: 4.5, time: '8 MIN', strength: 'Medium',
    heroImg: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=800',
    ingredients: [
      {name:'Gin 金酒',amount:'45',unit:'ml'},{name:'Cream 奶油',amount:'15',unit:'ml'},{name:'Lemon Juice 柠檬汁',amount:'15',unit:'ml'},{name:'Lime Juice 青柠汁',amount:'15',unit:'ml'},{name:'Sugar Syrup 糖浆',amount:'10',unit:'ml'},{name:'Orange Flower Water 橙花水',amount:'少许',unit:''},{name:'Soda Water 苏打水',amount:'适量',unit:''}
    ],
    barware: ['collins','shaker'],
    steps: [
      {step:1,title:'干摇',desc:'所有原料（除苏打水）不加冰干摇。'},
      {step:2,title:'湿摇',desc:'加冰继续摇和1分钟。'},
      {step:3,title:'过滤补气',desc:'过滤倒入高球杯，慢慢倒入苏打水。'},
      {step:4,title:'装饰',desc:'用柠檬皮装饰即可。'}
    ]
  },
  {
    id: 'corpse_reviver',
    name: 'Corpse Reviver #2',
    nameCn: '尸复生2号',
    category: '现代',
    tags: ['现代','草本'],
    rating: 4.6, time: '5 MIN', strength: 'Strong',
    heroImg: 'https://images.unsplash.com/photo-1572490122747-82c7e6a89e59?w=800',
    ingredients: [
      {name:'Gin 金酒',amount:'30',unit:'ml'},{name:'Cointreau 君度',amount:'30',unit:'ml'},{name:'Lillet Blanc 丽莱白',amount:'30',unit:'ml'},{name:'Lemon Juice 柠檬汁',amount:'15',unit:'ml'}
    ],
    barware: ['coupe','shaker'],
    steps: [
      {step:1,title:'摇和',desc:'所有原料加冰摇和10秒。'},
      {step:2,title:'过滤',desc:'双重过滤倒入冰镇的Coupe杯。'},
      {step:3,title:'装饰',desc:'用橙皮装饰即可。'}
    ]
  },
  {
    id: 'tipperary',
    name: 'Tipperary',
    nameCn: '蒂珀雷里',
    category: '现代',
    tags: ['现代','草本'],
    rating: 4.5, time: '5 MIN', strength: 'Medium',
    heroImg: 'https://images.unsplash.com/photo-1572490122747-82c7e6a89e59?w=800',
    ingredients: [
      {name:'Irish Whiskey 爱尔兰威士忌',amount:'45',unit:'ml'},{name:'Sweet Vermouth 甜苦艾酒',amount:'15',unit:'ml'},{name:'Green Chartreuse 绿沙威',amount:'15',unit:'ml'}
    ],
    barware: ['coupe','mixing'],
    steps: [
      {step:1,title:'混合',desc:'在混合杯中加入所有原料和冰块。'},
      {step:2,title:'搅拌',desc:'轻轻搅拌约25秒。'},
      {step:3,title:'过滤',desc:'过滤倒入冰镇的Coupe杯。'},
      {step:4,title:'装饰',desc:'用柠檬皮装饰即可。'}
    ]
  },

  // ===== 无酒精 Mocktail (5) =====
  {
    id: 'mocktail',
    name: 'Virgin Mojito',
    nameCn: '维珍莫吉托',
    category: '无酒精',
    tags: ['清爽','果味'],
    rating: 4.2, time: '4 MIN', strength: 'None',
    heroImg: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=800',
    ingredients: [
      {name:'Lime Juice 青柠汁',amount:'25',unit:'ml'},{name:'Mint Leaves 薄荷叶',amount:'10',unit:'片'},{name:'Sugar Syrup 糖浆',amount:'20',unit:'ml'},{name:'Soda Water 苏打水',amount:'适量',unit:''}
    ],
    barware: ['collins','muddler'],
    steps: [
      {step:1,title:'捣碎',desc:'在高球杯中轻轻捣碎薄荷叶和糖浆。'},
      {step:2,title:'加酸',desc:'挤入青柠汁，加满碎冰。'},
      {step:3,title:'补气',desc:'倒入苏打水至满杯，轻轻搅拌。'},
      {step:4,title:'装饰',desc:'用薄荷枝和青柠片装饰。'}
    ]
  },
  {
    id: 'nojito',
    name: 'Nojito',
    nameCn: '无酒精莫吉托',
    category: '无酒精',
    tags: ['清爽','草本'],
    rating: 4.1, time: '4 MIN', strength: 'None',
    heroImg: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=800',
    ingredients: [
      {name:'Lime Juice 青柠汁',amount:'20',unit:'ml'},{name:'Mint Leaves 薄荷叶',amount:'8',unit:'片'},{name:'Sugar Syrup 糖浆',amount:'15',unit:'ml'},{name:'Soda Water 苏打水',amount:'适量',unit:''}
    ],
    barware: ['collins','muddler'],
    steps: [
      {step:1,title:'捣碎',desc:'在高球杯中轻轻捣碎薄荷叶。'},
      {step:2,title:'加料',desc:'加入青柠汁和糖浆，加满碎冰。'},
      {step:3,title:'补气',desc:'倒入苏打水，轻轻搅拌。'},
      {step:4,title:'装饰',desc:'用薄荷枝装饰即可。'}
    ]
  },
  {
    id: 'shirley_temple',
    name: 'Shirley Temple',
    nameCn: '秀兰·邓波儿',
    category: '无酒精',
    tags: ['果味','无酒精'],
    rating: 4.0, time: '3 MIN', strength: 'None',
    heroImg: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=800',
    ingredients: [
      {name:'Grenadine 红石榴糖浆',amount:'15',unit:'ml'},{name:'Lime Juice 青柠汁',amount:'10',unit:'ml'},{name:'Ginger Ale 姜味汽水',amount:'适量',unit:''}
    ],
    barware: ['collins','none'],
    steps: [
      {step:1,title:'加冰',desc:'在高球杯中加满冰块。'},
      {step:2,title:'倒糖浆',desc:'倒入红石榴糖浆和青柠汁。'},
      {step:3,title:'补气',desc:'慢慢倒入姜味汽水至满杯。'},
      {step:4,title:'装饰',desc:'用马拉斯奇诺樱桃装饰。'}
    ]
  },
  {
    id: 'cucumber_cooler',
    name: 'Cucumber Cooler',
    nameCn: '黄瓜清凉饮',
    category: '无酒精',
    tags: ['清爽','草本'],
    rating: 4.3, time: '4 MIN', strength: 'None',
    heroImg: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=800',
    ingredients: [
      {name:'Cucumber 黄瓜',amount:'3',unit:'片'},{name:'Lime Juice 青柠汁',amount:'20',unit:'ml'},{name:'Sugar Syrup 糖浆',amount:'10',unit:'ml'},{name:'Soda Water 苏打水',amount:'适量',unit:''}
    ],
    barware: ['collins','muddler'],
    steps: [
      {step:1,title:'捣碎',desc:'轻轻捣碎黄瓜片和青柠汁。'},
      {step:2,title:'加冰',desc:'加满冰块，倒入糖浆。'},
      {step:3,title:'补气',desc:'倒入苏打水至满杯，轻轻搅拌。'},
      {step:4,title:'装饰',desc:'用黄瓜片装饰即可。'}
    ]
  },
  {
    id: 'berry_smash',
    name: 'Berry Smash',
    nameCn: '莓果轻捣',
    category: '无酒精',
    tags: ['果味','清爽'],
    rating: 4.2, time: '4 MIN', strength: 'None',
    heroImg: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=800',
    ingredients: [
      {name:'Mixed Berries 混合莓果',amount:'6',unit:'颗'},{name:'Lemon Juice 柠檬汁',amount:'15',unit:'ml'},{name:'Honey 蜂蜜',amount:'10',unit:'ml'},{name:'Soda Water 苏打水',amount:'适量',unit:''}
    ],
    barware: ['collins','muddler'],
    steps: [
      {step:1,title:'捣碎',desc:'在杯中轻轻捣碎莓果和蜂蜜。'},
      {step:2,title:'加酸',desc:'加入柠檬汁，加满碎冰。'},
      {step:3,title:'补气',desc:'倒入苏打水至满杯。'},
      {step:4,title:'装饰',desc:'用新鲜莓果装饰即可。'}
    ]
  }
];

// 确保全局可访问
window.recipes = recipes;

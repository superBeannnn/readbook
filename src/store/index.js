const origin = '.'
const teacherUrl = origin + '/readbook/image/teacher/',
    lessonRecommUrl = origin + '/readbook/image/lesson/',
    lessonListUrl = origin + '/readbook/image/sale/lesson',
    audioUrl = origin + '/readbook/audio/',
    audioImageUrl = origin + '/readbook/image/audio/';

const teacherList = [
    {
        imgUrl: teacherUrl + '0.png',
        name: '杨萃先',
        info: '长江商学院客座教授'
    },
    {
        imgUrl: teacherUrl + '1.png',
        name: '崔璀',
        info: '上市公司前COO'
    },
    {
        imgUrl: teacherUrl + '2.png',
        name: 'Amber',
        info: '世界500强资深顾问'
    },
    {
        imgUrl: teacherUrl + '3.png',
        name: '付立平',
        info: '正面管教讲师'
    },
    {
        imgUrl: teacherUrl + '4.png',
        name: '陈华伟',
        info: '5W+人的知识管理导师'
    },
    {
        imgUrl: teacherUrl + '5.png',
        name: '高雁鹏',
        info: '思维训练专家'
    },
    {
        imgUrl: teacherUrl + '6.png',
        name: '杨洋',
        info: '北京大学前老师'
    },

]
const lessonRecommList = [
    {
        imgUrl: lessonListUrl + '3/0.png',
        title: '听蒋勋讲红楼梦',
        jumpUrl: 'https://kt.looklook.cn/lesson/4118',
        price: '99',
        specialPrice: '69',
    },
    {  imgUrl: lessonListUrl + '4/0.png',
        title: '协和名医女性健康课，女人一生受用的健康知识',
        jumpUrl: 'https://kt.looklook.cn/lesson/4820',
        price: '99',
        specialPrice: '69',
    },
    {
        imgUrl: lessonRecommUrl + '0.png',
        title: '大神教你制作高逼格的PPT',
        jumpUrl: 'https://kt.looklook.cn/lesson/4001',
        price: '99',
        specialPrice: '69',
    },
    {
        imgUrl: lessonRecommUrl + '1.png',
        title: '大神教你最实用的时间管理术',
        jumpUrl: 'https://kt.looklook.cn/lesson/4040',
        price: '99',
        specialPrice: '69',
    },
    {
        imgUrl: lessonRecommUrl + '7.png',
        title: '大牌明星都在练的懒人瘦身法，轻松享“瘦”每一刻',
        jumpUrl: 'https://kt.looklook.cn/lesson/4593',
        price: '99',
        specialPrice: '69',
    },
    {
        imgUrl: lessonListUrl + '3/2.png',
        title: '从气质到气场，女人快速进阶必备40部书单',
        jumpUrl: 'https://kt.looklook.cn/lesson/4513',
        price: '99',
        specialPrice: '69',
    },
    {
        imgUrl: lessonRecommUrl + '3.png',
        title: '听简七说理财，给小白的极简理财课',
        jumpUrl: 'https://kt.looklook.cn/lesson/4031',
        price: '99',
        specialPrice: '69',
    },
    {
        imgUrl: lessonListUrl + '5/1.png',
        title: '小学生高效作业课：让孩子主动学习，摆脱磨蹭拖拉',
        jumpUrl: 'https://kt.looklook.cn/lesson/4819',
        price: '99',
        specialPrice: '69',
    }, 
    {
        imgUrl: lessonListUrl + '4/1.png',
        title: '成就自己，12堂语言表达魅力课让你与众不同',
        jumpUrl: 'https://kt.looklook.cn/lesson/4064',
        price: '99',
        specialPrice: '69',
    },
    {
        imgUrl: lessonRecommUrl + '4.png',
        title: '每天15分钟，21天带你写出一手漂亮好字',
        jumpUrl: 'https://kt.looklook.cn/lesson/4258',
        price: '99',
        specialPrice: '69',
    },
    {
        imgUrl: lessonListUrl + '1/1.png',
        title: '人人都需要学会的销售攻略：卖出你想卖的',
        jumpUrl: 'https://kt.looklook.cn/lesson/4562',
        price: '99',
        specialPrice: '69',
    },
    {
        imgUrl: lessonListUrl + '1/0.png',
        title: '经营自己，人人都需要的人生管理术',
        jumpUrl: 'https://kt.looklook.cn/lesson/4051',
        price: '99',
        specialPrice: '69',
    },
]
    
const packageList = [
    {
        title: '高效办公包',
        jumpUrl: 'https://kt.looklook.cn/share/group_sale/activity/8',
        info: 'PPT+Excel+Word<br>高效办公，拒绝加班',
        price: '297',
        specialPrice: '198.0',
    },
    {
        title: '家庭教育包',
        jumpUrl: 'https://kt.looklook.cn/share/group_sale/activity/13',
        info: '学霸方法+正面管教+36种教育法<br>顶级教育法，养成全能学霸',
        price: '297',
        specialPrice: '198.0',
    },
    {
        title: '升职加薪包',
        jumpUrl: 'https://kt.looklook.cn/share/group_sale/activity/12',
        info: '高效沟通+职场36计+人生管理<br>职场进阶的秘密宝典',
        price: '297',
        specialPrice: '198.0',
    },
    {
        title: '女神进化包',
        jumpUrl: 'https://kt.looklook.cn/share/group_sale/activity/9',
        info: '女性护肤+女性健康+维密健身<br>从内而外蜕变女神',
        price: '297',
        specialPrice: '198.0',
    },
    {
        title: '人文历史包',
        jumpUrl: 'https://kt.looklook.cn/share/group_sale/activity/15',
        info: '红楼+三国+史记<br>穿越千年的人生经验',
        price: '297',
        specialPrice: '198.0',
    },
    {
        title: '财富增值包',
        jumpUrl: 'https://kt.looklook.cn/share/group_sale/activity/10',
        info: '实战理财+基金增值+必备保障<br>让钱为你挣钱',
        price: '297',
        specialPrice: '198.0',
    },
    {
        title: '时尚达人包',
        jumpUrl: 'https://kt.looklook.cn/share/group_sale/activity/14',
        info: '时尚衣品+明星化妆+懒人瘦身<br>穿搭、妆容、身材一次搞定',
        price: '297',
        specialPrice: '198.0',
    },
    {
        title: '人生进阶包',
        jumpUrl: 'https://kt.looklook.cn/share/group_sale/activity/11',
        info: '时间管理+人生管理+人脉拓展<br>掌握人生，高效进阶',
        price: '297',
        specialPrice: '198.0',
    },
    {
        title: '读书大礼包',
        jumpUrl: 'https://kt.looklook.cn/share/group_sale/activity/7',
        info: '40本好书+40本名著+24本传记<br>104本好书让你听到爽',
        price: '297',
        specialPrice: '198.0',
    },
    {
        title: '必备技能包',
        jumpUrl: 'https://kt.looklook.cn/share/group_sale/activity/18',
        info: '超强销售+动人演讲+顶级文案<br>职场精英必备技能',
        price: '297',
        specialPrice: '198.0',
    },
    {
        title: '领跑同龄包',
        jumpUrl: 'https://kt.looklook.cn/share/group_sale/activity/16',
        info: '高效作业+高分作文+数学秘诀<br>快速提分，领跑同龄',
        price: '297',
        specialPrice: '198.0',
    },
    {
        title: '生活美学包',
        jumpUrl: 'https://kt.looklook.cn/share/group_sale/activity/17',
        info: '漂亮好字+空间管理+随身摄影<br>这样的日子才叫生活',
        price: '297',
        specialPrice: '198.0',
    },

]
const audioList = [
    [
        {
            audioUrl: audioUrl + '0-1.mp3',
            name: '杨萃先 ',
            id: 1,
            title: '《非你莫属》Boss团成员',
            info: '接触近千位求职者，想升职就做好这点',
            imgUrl: audioImageUrl + '0-1.png',
            jumpUrl: 'https://kt.looklook.cn/lesson/4026'
        },
    ],
    [
        {
            audioUrl: audioUrl + '1-1.mp3',
            name: 'Amber',
            id: 11,
            title: '世界500强外企资深顾问',
            info: '掌握“时间商”，把时间创造价值',
            imgUrl: audioImageUrl + '1-1.png',
            jumpUrl: 'https://kt.looklook.cn/lesson/4040'
        }, 
        {
            audioUrl: audioUrl + '1-2.mp3',
            name: '李筱懿',
            id: 12,
            title: '新女性作家 影响700万女性',
            info: '从气质到气场，快速进阶必备书单',
            imgUrl: audioImageUrl + '1-2.png',
            jumpUrl: 'https://kt.looklook.cn/lesson/4513'
        }, 
        {
            audioUrl: audioUrl + '1-3.mp3',
            name: '李源',
            id: 13,
            title: '人大历史系硕士',
            info: '一个方法解决读书记不住，记住不会用',
            imgUrl: audioImageUrl + '1-3.png',
            jumpUrl: 'https://kt.looklook.cn/lesson/4370'
        }, 
    ],
    [
        {
            audioUrl: audioUrl + '2-1.m4a',
            name: '张展鹏',
            id: 21,
            title: '一线艺人私教',
            info: '不节食也能瘦，轻松瘦身这样做',
            imgUrl: audioImageUrl + '2-1.png',
            jumpUrl: 'https://kt.looklook.cn/lesson/4593'
        }, 
        {
            audioUrl: audioUrl + '2-2.m4a',
            name: '王蓓',
            id: 22,
            title: '资深时尚大咖',
            info: '这样穿，分分钟蜕变时尚达人',
            imgUrl: audioImageUrl + '2-2.png',
            jumpUrl: 'https://kt.looklook.cn/lesson/4178'
        }, 
    ],
    [
        {
            audioUrl: audioUrl + '3-1.mp3',
            name: '崔璀',
            id: 31,
            title: '上市公司前COO',
            info: '管理思维，人人需要却人人不足的思维方法',
            imgUrl: audioImageUrl + '3-1.png',
            jumpUrl: 'https://kt.looklook.cn/lesson/4051'
        }, 
    ],
    [
        {
            audioUrl: audioUrl + '4-1.mp3',
            name: '王刚',
            id: 41,
            title: '年销售超2亿的实干精英',
            info: '屡屡打破记录的“销售五步法”',
            imgUrl: audioImageUrl + '4-1.png',
            jumpUrl: 'https://kt.looklook.cn/lesson/4562'
        }, 
    ],
    [
        {
            audioUrl: audioUrl + '5-1.mp3',
            name: '冯注龙',
            id: 51,
            title: '90后创业大神',
            info: '掌握这个技能，从此职场不求人!',
            imgUrl: audioImageUrl + '5-1.png',
            jumpUrl: 'https://kt.looklook.cn/lesson/4001'
        }, 
    ],
    [
        {
            audioUrl: audioUrl + '6-1.mp3',
            name: '何耀辉',
            id: 61,
            title: '维秘超模私人形体教练',
            info: '在家也能练出维密身材',
            imgUrl: audioImageUrl + '6-1.png',
            jumpUrl: 'https://kt.looklook.cn/lesson/4466'
        }, 
    ],

]
const lessonSaleList = [
    {
        audioInfo: audioList[1][1],
        id: 0,
        lessonList: [
            {
                imgUrl: lessonListUrl + '1/0.png',
                title: '经营自己，人人都需要的人生管理术',
                jumpUrl: 'https://kt.looklook.cn/lesson/4051',
                price: '99',
                specialPrice: '69',
            },
            {
                imgUrl: lessonListUrl + '1/1.png',
                title: '人人都需要学会的销售攻略：卖出你想卖的',
                jumpUrl: 'https://kt.looklook.cn/lesson/4562',
                price: '99',
                specialPrice: '69',
            },
            {
                imgUrl: lessonListUrl + '1/2.png',
                title: '办公神器，12堂颠覆传统的Word进阶必修课',
                jumpUrl: 'https://kt.looklook.cn/lesson/4164',
                price: '99',
                specialPrice: '69',
            },
            {
                imgUrl: lessonListUrl + '1/3.png',
                title: '提升“言值”，成为说话与演讲高手',
                jumpUrl: 'https://kt.looklook.cn/lesson/4022',
                price: '99',
                specialPrice: '69',
            },
            {
                imgUrl: lessonListUrl + '1/4.png',
                title: '大神教你零基础学PS，30堂课从入门到精通',
                jumpUrl: 'https://kt.looklook.cn/lesson/4148',
                price: '99',
                specialPrice: '69',
            },
            {
                imgUrl: lessonListUrl + '1/5.png',
                title: '用公众号增加收入，掌握最热门的职场技能',
                jumpUrl: 'https://kt.looklook.cn/lesson/4060',
                price: '99',
                specialPrice: '69',
            },
            {
                imgUrl: lessonListUrl + '1/6.png',
                title: '职场36计，最实用的升职加薪“兵法”',
                jumpUrl: 'https://kt.looklook.cn/lesson/4026',
                price: '99',
                specialPrice: '69',
            },
            {
                imgUrl: lessonListUrl + '1/7.png',
                title: '轻松易懂的财商课，教你成为经营、赚钱达人',
                jumpUrl: 'https://kt.looklook.cn/lesson/4155',
                price: '99',
                specialPrice: '69',
            },

        ]
    },
    {
        audioInfo: audioList[2][0],
        id: 1,
        lessonList: [
            // {
            //     imgUrl: lessonListUrl + '2/1.png',
            //     title: '提升衣品，12堂气质女人的速成穿搭课',
            //     jumpUrl: 'https://kt.looklook.cn/lesson/4178',
            //     price: '99',
            //     specialPrice: '69',
            // },
            {
                imgUrl: lessonListUrl + '2/2.png',
                title: '体态管理，气质女人的减压瑜伽课',
                jumpUrl: 'https://kt.looklook.cn/lesson/4077',
                price: '99',
                specialPrice: '69',
            },
            {
                imgUrl: lessonListUrl + '2/0.png',
                title: '大牌明星都在练的懒人瘦身法，轻松享“瘦”每一刻',
                jumpUrl: 'https://kt.looklook.cn/lesson/4593',
                price: '99',
                specialPrice: '69',
            },
            {
                imgUrl: lessonListUrl + '2/4.png',
                title: '一线明星御用化妆师，教你快速掌握精致妆容',
                jumpUrl: 'https://kt.looklook.cn/lesson/4295',
                price: '99',
                specialPrice: '69',
            },
            {
                imgUrl: lessonListUrl + '2/5.png',
                title: '越吃越瘦，不一样的减肥课轻松吃出好身材',
                jumpUrl: 'https://kt.looklook.cn/lesson/4297',
                price: '99',
                specialPrice: '69',
            },
            {
                imgUrl: lessonListUrl + '2/3.png',
                title: '在家就能练的健身课 | 维秘私教，带你塑造完美身材',
                jumpUrl: 'https://kt.looklook.cn/lesson/4466',
                price: '99',
                specialPrice: '69',
            },
            {
                imgUrl: lessonListUrl + '2/6.png',
                title: '不将就！女生快速上手的美颜必修课',
                jumpUrl: 'https://kt.looklook.cn/lesson/4016',
                price: '99',
                specialPrice: '69',
            },
            {
                imgUrl: lessonListUrl + '2/7.png',
                title: '更自信，气质女生的衣品必修课',
                jumpUrl: 'https://kt.looklook.cn/lesson/4042',
                price: '99',
                specialPrice: '69',
            },

        ]
    },
    {
        audioInfo: audioList[6][0],
        id: 2,
        lessonList: [
            {
                imgUrl: lessonListUrl + '3/0.png',
                title: '听蒋勋讲红楼梦',
                jumpUrl: 'https://kt.looklook.cn/lesson/4118',
                price: '99',
                specialPrice: '69',
            },
            {
                imgUrl: lessonListUrl + '3/1.png',
                title: '《史记》精读班：读完130个人物传记，收获人生经验',
                jumpUrl: 'https://kt.looklook.cn/lesson/4370',
                price: '99',
                specialPrice: '69',
            },
            {
                imgUrl: lessonListUrl + '3/2.png',
                title: '从气质到气场，女人快速进阶必备40部书单',
                jumpUrl: 'https://kt.looklook.cn/lesson/4513',
                price: '99',
                specialPrice: '69',
            },
            {
                imgUrl: lessonListUrl + '3/8.png',
                title: '听陈更品最美诗词，养成24种人生之美',
                jumpUrl: 'https://kt.looklook.cn/lesson/5025',
                price: '99',
                specialPrice: '69',
            },
            {
                imgUrl: lessonListUrl + '3/3.png',
                title: '听读书怪才讲名人传记，收获影响终生的人生经验',
                jumpUrl: 'https://kt.looklook.cn/lesson/4113',
                price: '99',
                specialPrice: '69',
            },
            {
                imgUrl: lessonListUrl + '3/4.png',
                title: '30部文学名著解读，带你听懂古典音乐',
                jumpUrl: 'https://kt.looklook.cn/lesson/4097',
                price: '99',
                specialPrice: '69',
            },
            {
                imgUrl: lessonListUrl + '3/5.png',
                title: '听读书怪才解读24部名人传记，收获最宝贵的人生经验',
                jumpUrl: 'https://kt.looklook.cn/lesson/4058',
                price: '99',
                specialPrice: '69',
            },
            {
                imgUrl: lessonListUrl + '3/6.png',
                title: '听张大春讲中国历史 · 三国篇',
                jumpUrl: 'https://kt.looklook.cn/lesson/4066',
                price: '99',
                specialPrice: '69',
            },
            {
                imgUrl: lessonListUrl + '3/7.png',
                title: '颠覆认知的八卦历史，带你体验不一样的中国文明',
                jumpUrl: 'https://kt.looklook.cn/lesson/4966',
                price: '99',
                specialPrice: '69',
            },

        ]
    },
    {
        audioInfo: audioList[1][2],
        id: 3,
        lessonList: [
            {
                imgUrl: lessonListUrl + '4/0.png',
                title: '协和名医女性健康课，女人一生受用的健康知识',
                jumpUrl: 'https://kt.looklook.cn/lesson/4820',
                price: '99',
                specialPrice: '69',
            },
            {
                imgUrl: lessonListUrl + '4/1.png',
                title: '成就自己，12堂语言表达魅力课让你与众不同',
                jumpUrl: 'https://kt.looklook.cn/lesson/4064',
                price: '99',
                specialPrice: '69',
            },
            {
                imgUrl: lessonListUrl + '4/2.png',
                title: '女性必备健康营养学，吃出健康吃出美',
                jumpUrl: 'https://kt.looklook.cn/lesson/4495',
                price: '99',
                specialPrice: '69',
            },
            {
                imgUrl: lessonListUrl + '4/3.png',
                title: '练就好声音，让你的话好听、耐听、爱听',
                jumpUrl: 'https://kt.looklook.cn/lesson/4039',
                price: '99',
                specialPrice: '69',
            },
            {
                imgUrl: lessonListUrl + '5/2.png',
                title: '脱颖而出，12堂优质女人成长课',
                jumpUrl: 'https://kt.looklook.cn/lesson/4027',
                price: '99',
                specialPrice: '69',
            },
        ]
    },
    {
        audioInfo: audioList[4][0],
        id: 4,
        lessonList: [
            {
                imgUrl: lessonListUrl + '5/1.png',
                title: '小学生高效作业课：让孩子主动学习，摆脱磨蹭拖拉',
                jumpUrl: 'https://kt.looklook.cn/lesson/4819',
                price: '99',
                specialPrice: '69',
            },
            {
                imgUrl: lessonListUrl + '5/0.png',
                title: '正面管教：35 个实用养育工具，高效自主学习力',
                jumpUrl: 'https://kt.looklook.cn/lesson/4815',
                price: '99',
                specialPrice: '69',
            },
            {
                imgUrl: lessonListUrl + '7/2.png',
                title: '人人都可以学会的超级记忆法，让你的人生更高效',
                jumpUrl: 'https://kt.looklook.cn/lesson/4055',
                price: '99',
                specialPrice: '69',
            },
            {
                imgUrl: lessonListUrl + '5/3.png',
                title: '儿童长高必修课，抓住8~14岁最后生长期',
                jumpUrl: 'https://kt.looklook.cn/lesson/4486',
                price: '99',
                specialPrice: '69',
            },
            {
                imgUrl: lessonListUrl + '5/4.png',
                title: '颠覆传统的超级作文课，让孩子轻松搞定写作',
                jumpUrl: 'https://kt.looklook.cn/lesson/4256',
                price: '99',
                specialPrice: '69',
            },
            {
                imgUrl: lessonListUrl + '5/5.png',
                title: '让你越过越幸福的婚姻心理学课',
                jumpUrl: 'https://kt.looklook.cn/lesson/4262',
                price: '99',
                specialPrice: '69',
            },
            {
                imgUrl: lessonListUrl + '5/6.png',
                title: '摆脱题海奥数班，24堂颠覆传统的数学课高效提升成绩',
                jumpUrl: 'https://kt.looklook.cn/lesson/4134',
                price: '99',
                specialPrice: '69',
            },
            {
                imgUrl: lessonListUrl + '5/7.png',
                title: '提升孩子阅读能力的100堂通识课',
                jumpUrl: 'https://kt.looklook.cn/lesson/4669',
                price: '99',
                specialPrice: '69',
            },
        ]
    },
    {
        audioInfo: audioList[5][0],
        id: 5,
        lessonList: [
            {
                imgUrl: lessonListUrl + '6/0.png',
                title: '家的空间管理术， 让房子轻松扩容30%',
                jumpUrl: 'https://kt.looklook.cn/lesson/4255',
                price: '99',
                specialPrice: '69',
            },
            {
                imgUrl: lessonListUrl + '6/1.png',
                title: '厉害了！教你用手机拍出高逼格的人像照',
                jumpUrl: 'https://kt.looklook.cn/lesson/4028',
                price: '99',
                specialPrice: '69',
            },
            {
                imgUrl: lessonListUrl + '6/2.png',
                title: '高效生活管理术，过人人羡慕的优质生活',
                jumpUrl: 'https://kt.looklook.cn/lesson/4121',
                price: '99',
                specialPrice: '69',
            },
            {
                imgUrl: lessonListUrl + '6/3.png',
                title: '随学随用的零基础生活手绘课',
                jumpUrl: 'https://kt.looklook.cn/lesson/4017',
                price: '99',
                specialPrice: '69',
            },
            {
                imgUrl: lessonListUrl + '6/4.png',
                title: '大神教你玩转手机摄影，随手拍出好照片',
                jumpUrl: 'https://kt.looklook.cn/lesson/4093',
                price: '99',
                specialPrice: '69',
            },
        ]
    },
    {
        audioInfo: audioList[6][0],
        id: 6,
        lessonList: [
            // {
            //     imgUrl: lessonListUrl + '7/0.png',
            //     title: '揭开情绪的真相，把握关系中的主动权',
            //     jumpUrl: 'https://kt.looklook.cn/lesson/4053',
            //     price: '99',
            //     specialPrice: '69',
            // },
            {
                imgUrl: lessonListUrl + '7/1.png',
                title: '教你巧用心理学，过更有效率的人生',
                jumpUrl: 'https://kt.looklook.cn/lesson/4000',
                price: '99',
                specialPrice: '69',
            },
            
            {
                imgUrl: lessonListUrl + '7/3.png',
                title: '积极心理学：30天打造普通人受益终生的高效行动力',
                jumpUrl: 'https://kt.looklook.cn/lesson/4074',
                price: '99',
                specialPrice: '69',
            },
            {
                imgUrl: lessonListUrl + '7/4.png',
                title: '升级你的学习力，让你成为有效学习的高手',
                jumpUrl: 'https://kt.looklook.cn/lesson/4072',
                price: '99',
                specialPrice: '69',
            },
        ]
    },
]
const lessonSaleData = lessonSaleList[0]

export  {
    teacherList,
    lessonRecommList,
    packageList,
    lessonSaleData,
    lessonSaleList,
}
import avadefault from './imgs/ava-default.png'

const data = [
    {
        pid: null,
        id: 'root',
        value: { name: '李士雄', title: '第一代', icon: avadefault }
    },
    {
        pid: 'root',
        id: '2-1',
        value: { name: '李 升', title: '第二代', icon: avadefault }
    },
    {
        pid: '2-1',
        id: '3-1',
        value: { name: '李 义', title: '第三代', icon: avadefault }
    },
    {
        pid: '3-1',
        id: '4-1',
        value: { name: '李德林', title: '第四代', icon: avadefault }
    },
    {
        pid: '3-1',
        id: '4-2',
        value: { name: '李德山', title: '第四代', icon: avadefault }
    },
    {
        pid: '3-1',
        id: '4-3',
        value: { name: '李德海', title: '第四代', icon: avadefault }
    },
    {
        pid: '4-3',
        id: '5-1',
        value: { name: '李 强', title: '第五代', icon: avadefault }
    },
    {
        pid: '4-3',
        id: '5-2',
        value: { name: '李 凤', title: '第五代', icon: avadefault }
    },
    {
        pid: '5-2',
        id: '6-1',
        value: { name: '李 金', title: '第六代', icon: avadefault }
    },
    {
        pid: '5-2',
        id: '6-2',
        value: { name: '李 玉', title: '第六代', icon: avadefault }
    },
    {
        pid: '6-2',
        id: '7-1',
        value: { name: '李汝椁', title: '第七代', icon: avadefault }
    },
    {
        pid: '7-1',
        id: '8-1',
        value: { name: '李汝艾', title: '第八代', icon: avadefault }
    },
    {
        pid: '7-1',
        id: '8-2',
        value: { name: '李逢艾', title: '第八代', icon: avadefault }
    },
    {
        pid: '6-2',
        id: '7-2',
        value: { name: '李汝湘', title: '第七代', icon: avadefault }
    },
    {
        pid: '7-2',
        id: '8-3',
        value: { name: '李逢秋', title: '第八代', icon: avadefault }
    },
    {
        pid: '6-2',
        id: '7-3',
        value: { name: '李汝杨', title: '第七代', icon: avadefault }
    },
    {
        pid: '7-3',
        id: '8-4',
        value: { name: '李逢年', title: '第八代', icon: avadefault }
    },
    {
        pid: '5-2',
        id: '6-3',
        value: { name: '李 宝', title: '第六代', icon: avadefault }
    },
    {
        pid: '6-3',
        id: '7-5',
        value: { name: '李汝檀', title: '第七代', icon: avadefault }
    },
    {
        pid: '6-3',
        id: '7-6',
        value: { name: '李汝挽', title: '第七代', icon: avadefault }
    },
    {
        pid: '7-6',
        id: '8-5',
        value: { name: '李逢岩', title: '第八代', icon: avadefault }
    },
    {
        pid: '7-6',
        id: '8-6',
        value: { name: '李逢时', title: '第八代', icon: avadefault }
    },
    {
        pid: '8-6',
        id: '9-1',
        value: { name: '李争荣', title: '第九代', icon: avadefault }
    },
    {
        pid: '9-1',
        id: '10-1',
        value: { name: '李一忍', title: '第十代', icon: avadefault }
    },
    {
        pid: '9-1',
        id: '10-2',
        value: { name: '李一心', title: '第十代', icon: avadefault }
    },
    {
        pid: '10-2',
        id: '11-1',
        value: { name: '李芹', title: '第十一代', icon: avadefault }
    },
    {
        pid: '11-1',
        id: '12-1',
        value: { name: '李旺学', title: '第十二代', icon: avadefault }
    },
    {
        pid: '12-1',
        id: '13-1',
        value: { name: '李大小', title: '第十三代', icon: avadefault }
    },
    {
        pid: '13-1',
        id: '14-1',
        value: { name: '李宗武', title: '第十四代', icon: avadefault }
    },
    {
        pid: '13-1',
        id: '14-2',
        value: { name: '李宗行', title: '第十四代', icon: avadefault }
    },
    {
        pid: '14-2',
        id: '15-1',
        value: { name: '李万新', title: '第十五代', icon: avadefault }
    },
    {
        pid: '15-1',
        id: '16-1',
        value: { name: '李田龙', title: '第十六代', icon: avadefault }
    },
    {
        pid: '16-1',
        id: '17-1',
        value: { name: '李德安', title: '第十七代', icon: avadefault }
    },
    {
        pid: '17-1',
        id: '18-1',
        value: { name: '李建修', title: '第十八代', icon: avadefault }
    },
    {
        pid: '17-1',
        id: '18-2',
        value: { name: '李建毕', title: '第十八代', icon: avadefault }
    },
    {
        pid: '11-1',
        id: '12-2',
        value: { name: '李纯修', title: '第十二代', icon: avadefault }
    },
    {
        pid: '12-2',
        id: '13-2',
        value: { name: '李二小', title: '第十三代', icon: avadefault }
    },
    {
        pid: '12-2',
        id: '13-0',
        value: { name: '李永登', title: '第十三代', icon: avadefault }
    },
    {
        pid: '13-0',
        id: '14-3',
        value: { name: '李宗惠', title: '第十四代', icon: avadefault }
    },
    {
        pid: '14-3',
        id: '15-2',
        value: { name: '李万林', title: '第十五代', icon: avadefault }
    },
    {
        pid: '14-3',
        id: '15-3',
        value: { name: '李万年', title: '第十五代', icon: avadefault }
    },
    {
        pid: '10-2',
        id: '11-2',
        value: { name: '李萌', title: '第十一代', icon: avadefault }
    },
    {
        pid: '11-2',
        id: '12-3',
        value: { name: '李纯学', title: '第十二代', icon: avadefault }
    },
    {
        pid: '12-3',
        id: '13-3',
        value: { name: '李三小', title: '第十三代', icon: avadefault }
    },
    {
        pid: '12-3',
        id: '13-4',
        value: { name: '李二小', title: '第十三代', icon: avadefault }
    },
    {
        pid: '12-3',
        id: '13-5',
        value: { name: '李大小', title: '第十三代', icon: avadefault }
    },
    {
        pid: '10-2',
        id: '11-3',
        value: { name: '李苞', title: '第十一代', icon: avadefault }
    },
    {
        pid: '11-3',
        id: '12-4',
        value: { name: '李纯和', title: '第十二代', icon: avadefault }
    },
    {
        pid: '12-4',
        id: '13-6',
        value: { name: '李大成', title: '第十三代', icon: avadefault }
    },
    {
        pid: '12-4',
        id: '13-7',
        value: { name: '李大儒', title: '第十三代', icon: avadefault }
    },
    {
        pid: '11-3',
        id: '12-5',
        value: { name: '李纯温', title: '第十二代', icon: avadefault }
    },
    {
        pid: '12-5',
        id: '13-8',
        value: { name: '李明廷', title: '第十三代', icon: avadefault }
    },
    {
        pid: '12-5',
        id: '13-9',
        value: { name: '李永泰', title: '第十三代', icon: avadefault }
    },
    {
        pid: '12-5',
        id: '13-10',
        value: { name: '李永安', title: '第十三代', icon: avadefault }
    },
    {
        pid: '12-5',
        id: '13-11',
        value: { name: '李永兴', title: '第十三代', icon: avadefault }
    },
    {
        pid: '11-3',
        id: '12-6',
        value: { name: '李纯性', title: '第十二代', icon: avadefault }
    },
    {
        pid: '11-3',
        id: '12-7',
        value: { name: '李纯肃', title: '第十二代', icon: avadefault }
    },
    {
        pid: '12-7',
        id: '13-12',
        value: { name: '李二只', title: '第十三代', icon: avadefault }
    },
    {
        pid: '12-7',
        id: '13-13',
        value: { name: '李国佑', title: '第十三代', icon: avadefault }
    },
    {
        pid: '4-3',
        id: '5-3',
        value: { name: '李 鸾', title: '第五代', icon: avadefault }
    },
    {
        pid: '18-1',
        id: '19-1',
        value: { name: '李从国', title: '第十九代', icon: avadefault }
    },
    {
        pid: '18-1',
        id: '19-2',
        value: { name: '李从堂', title: '第十九代', icon: avadefault }
    },
    {
        pid: '18-1',
        id: '19-3',
        value: { name: '李从竹', title: '第十九代', icon: avadefault }
    },
    {
        pid: '19-1',
        id: '20-1',
        value: { name: '从堂三子', title: '第二十代', icon: avadefault }
    },
    {
        pid: '19-1',
        id: '20-2',
        value: { name: '李小丁', title: '第二十代', icon: avadefault }
    },
    {
        pid: '19-2',
        id: '20-3',
        value: { name: '李小宁', title: '第二十代', icon: avadefault }
    },
    {
        pid: '19-2',
        id: '20-4',
        value: { name: '李小辉', title: '第二十代', icon: avadefault }
    },
    {
        pid: '19-3',
        id: '20-5',
        value: { name: '李 铎', title: '第二十代', icon: avadefault }
    },
    {
        pid: '18-2',
        id: '19-3',
        value: { name: '李小春', title: '第十九代', icon: avadefault }
    },
    {
        pid: '18-1',
        id: '19-4',
        value: { name: '李从竹', title: '第十九代', icon: avadefault }
    },
    {
        pid: '19-4',
        id: '20-6',
        value: { name: '李小刚', title: '第十九代', icon: avadefault }
    },
    {
        pid: '13-6',
        id: '14-4',
        value: { name: '李宗尧', title: '第十四代', icon: avadefault }
    },
    {
        pid: '13-6',
        id: '14-5',
        value: { name: '李宗圣', title: '第十四代', icon: avadefault }
    },
    {
        pid: '13-7',
        id: '14-6',
        value: { name: '李宗有', title: '第十四代', icon: avadefault }
    },
    {
        pid: '13-8',
        id: '14-7',
        value: { name: '李宗礼', title: '第十四代', icon: avadefault }
    },
    {
        pid: '13-10',
        id: '14-8',
        value: { name: '李宗孟', title: '第十四代', icon: avadefault }
    },
    {
        pid: '13-10',
        id: '14-9',
        value: { name: '李宗程', title: '第十四代', icon: avadefault }
    },
    {
        pid: '13-11',
        id: '14-10',
        value: { name: '李宗周', title: '第十四代', icon: avadefault }
    },
    {
        pid: '13-13',
        id: '14-11',
        value: { name: '李宗岩', title: '第十四代', icon: avadefault }
    },
    {
        pid: '15-2',
        id: '16-2',
        value: { name: '李云龙', title: '第十六代', icon: avadefault }
    },
    {
        pid: '14-4',
        id: '15-4',
        value: { name: '李万永', title: '第十五代', icon: avadefault }
    },
    {
        pid: '14-4',
        id: '15-5',
        value: { name: '李万真', title: '第十五代', icon: avadefault }
    },
    {
        pid: '14-4',
        id: '15-6',
        value: { name: '李万寿', title: '第十五代', icon: avadefault }
    },
    {
        pid: '14-4',
        id: '15-7',
        value: { name: '李万邦', title: '第十五代', icon: avadefault }
    },
    {
        pid: '14-5',
        id: '15-8',
        value: { name: '李万和（宗尧子）', title: '第十五代', icon: avadefault }
    },
    {
        pid: '14-6',
        id: '15-9',
        value: { name: '李万能', title: '第十五代', icon: avadefault }
    },
    {
        pid: '14-7',
        id: '15-10',
        value: { name: '李万川', title: '第十五代', icon: avadefault }
    },
    {
        pid: '14-7',
        id: '15-11',
        value: { name: '李万善', title: '第十五代', icon: avadefault }
    },
    {
        pid: '14-8',
        id: '15-12',
        value: { name: '李加锦', title: '第十五代', icon: avadefault }
    },
    {
        pid: '14-9',
        id: '15-13',
        value: { name: '李万景', title: '第十五代', icon: avadefault }
    },
    {
        pid: '14-9',
        id: '15-14',
        value: { name: '李万选', title: '第十五代', icon: avadefault }
    },
    {
        pid: '14-10',
        id: '15-15',
        value: { name: '李成龙', title: '第十五代', icon: avadefault }
    },
    {
        pid: '14-11',
        id: '15-16',
        value: { name: '李万猛', title: '第十五代', icon: avadefault }
    },
    {
        pid: '14-11',
        id: '15-17',
        value: { name: '李万钟', title: '第十五代', icon: avadefault }
    },
    {
        pid: '15-4',
        id: '16-3',
        value: { name: '李临明', title: '第十六代', icon: avadefault }
    },
    {
        pid: '15-4',
        id: '16-4',
        value: { name: '李天明', title: '第十六代', icon: avadefault }
    },
    {
        pid: '15-5',
        id: '16-5',
        value: { name: '李朝阳', title: '第十六代', icon: avadefault }
    },
    {
        pid: '15-5',
        id: '16-6',
        value: { name: '李朝贵', title: '第十六代', icon: avadefault }
    },
    {
        pid: '15-6',
        id: '16-7',
        value: { name: '李好龙', title: '第十六代', icon: avadefault }
    },
    {
        pid: '15-6',
        id: '16-8',
        value: { name: '李跃龙', title: '第十六代', icon: avadefault }
    },
    {
        pid: '15-7',
        id: '16-9',
        value: { name: '李东明', title: '第十六代', icon: avadefault }
    },
    {
        pid: '15-7',
        id: '16-10',
        value: { name: '李贵龙', title: '第十六代', icon: avadefault }
    },
    {
        pid: '15-7',
        id: '16-11',
        value: { name: '李成龙', title: '第十六代', icon: avadefault }
    },
    {
        pid: '15-8',
        id: '16-12',
        value: { name: '李飞龙', title: '第十六代', icon: avadefault }
    },
    {
        pid: '15-8',
        id: '16-13',
        value: { name: '李孟龙', title: '第十六代', icon: avadefault }
    },
    {
        pid: '15-9',
        id: '16-14',
        value: { name: '李见龙', title: '第十六代', icon: avadefault }
    },
    {
        pid: '15-10',
        id: '16-15',
        value: { name: '李朝彦', title: '第十六代', icon: avadefault }
    },
    {
        pid: '15-11',
        id: '16-16',
        value: { name: '李朝选', title: '第十六代', icon: avadefault }
    },
    {
        pid: '15-11',
        id: '16-17',
        value: { name: '李殿邦', title: '第十六代', icon: avadefault }
    },
    {
        pid: '15-11',
        id: '16-18',
        value: { name: '李朝忠', title: '第十六代', icon: avadefault }
    },
    {
        pid: '15-11',
        id: '16-19',
        value: { name: '李朝凤', title: '第十六代', icon: avadefault }
    },
    {
        pid: '15-12',
        id: '16-20',
        value: { name: '李朝海', title: '第十六代', icon: avadefault }
    },
    {
        pid: '15-12',
        id: '16-21',
        value: { name: '李朝伦', title: '第十六代', icon: avadefault }
    },
    {
        pid: '15-12',
        id: '16-22',
        value: { name: '李朝瑞', title: '第十六代', icon: avadefault }
    },
    {
        pid: '15-13',
        id: '16-23',
        value: { name: '李朝文', title: '第十六代', icon: avadefault }
    },
    {
        pid: '15-14',
        id: '16-24',
        value: { name: '李朝山', title: '第十六代', icon: avadefault }
    },
    {
        pid: '15-14',
        id: '16-25',
        value: { name: '李朝后', title: '第十六代', icon: avadefault }
    },
    {
        pid: '15-15',
        id: '16-26',
        value: { name: '李在田', title: '第十六代', icon: avadefault }
    },
    {
        pid: '15-16',
        id: '16-27',
        value: { name: '李朝元', title: '第十六代', icon: avadefault }
    },
    {
        pid: '15-17',
        id: '16-28',
        value: { name: '李朝先', title: '第十六代', icon: avadefault }
    },
    {
        pid: '15-17',
        id: '16-29',
        value: { name: '李朝河', title: '第十六代', icon: avadefault }
    },
    {
        pid: '15-17',
        id: '16-30',
        value: { name: '李朝群', title: '第十六代', icon: avadefault }
    },
]

type numberInfo = {
    pid: string | null,
    id: string,
    value: {
        name: string,
        title: string,
        icon: string
    }
}

let result: any = []
const hasMap: {
    [key: string]: numberInfo
} = {}
data.forEach(item => {
    hasMap[item.id] = item
})
// console.log(hasMap)
for (let i in hasMap) {
    if (hasMap[i].pid !== null) {
        if (!hasMap[hasMap[i].pid].children) {
            hasMap[hasMap[i].pid].children = []
        }
        hasMap[hasMap[i].pid].children.push(hasMap[i])
    } else {
        result.push(hasMap[i])
    }
}

export default result
// Behaviour settings the user can tune in the 调节 window (settings.html). The cat reads the
// current values from `TUNING`; the app stores only the ones that differ from `def` and pushes them
// in with `cat.options({ tune: {...} })`. Values are in the units shown in the window.
'use strict';
const TUNING_SCHEMA = [
  { group: '挂机动作', toggle: 'idleActionsOn', items: [
    { key: 'idleActionsOn', label: '启用挂机动作', type: 'toggle', def: true,
      hint: '空闲时偶尔伸懒腰、趴下歇一会儿。操作键鼠或摸猫时会停下。' },
    { key: 'idleToyOn', label: '偶尔拨弄纸团', type: 'toggle', def: true },
  ] },
  { group: '不耐烦（尾巴捶桌）', toggle: 'annoyOn', items: [
    { key: 'annoyOn', label: '会不耐烦', type: 'toggle', def: true,
      hint: '关掉后不会再生气，也不会甩尾巴捶桌。' },
    { key: 'typeRate', label: '打字多快会烦', type: 'range', min: 4, max: 20, step: 1, def: 9, unit: '键/秒',
      hint: '持续快于这个速度，烦躁会慢慢累积。' },
    { key: 'mashKeys', label: '几个键一起按算乱拍', type: 'range', min: 3, max: 8, step: 1, def: 4, unit: '个',
      hint: '0.15 秒内按下这么多键，算一次乱拍，马上烦一大截。' },
    { key: 'petLimit', label: '摸头多久会烦', type: 'range', min: 2, max: 30, step: 1, def: 4, unit: '秒' },
    { key: 'wakeAnnoy', label: '被吵醒有多烦', type: 'range', min: 0, max: 100, step: 5, def: 35, unit: '%',
      hint: '睡着时被键盘或鼠标吵醒，烦躁一下子加这么多。' },
    { key: 'crossAt', label: '烦到多少开始捶桌', type: 'range', min: 20, max: 100, step: 5, def: 60, unit: '%' },
    { key: 'calmRate', label: '消气速度', type: 'range', min: 2, max: 50, step: 1, def: 10, unit: '%/秒',
      hint: '安静 2 秒后，每秒消掉这么多烦躁。' },
    { key: 'thumpRate', label: '捶桌节奏', type: 'range', min: 1, max: 5, step: 0.1, def: 2.6, unit: '下/秒' },
  ] },
  { group: '好奇（快速移动鼠标）', toggle: 'curiousOn', items: [
    { key: 'curiousOn', label: '会好奇', type: 'toggle', def: true,
      hint: '快速移动鼠标时，猫瞪大眼睛、瞳孔放大，竖起耳朵盯着光标。' },
    { key: 'curiousSpeed', label: '鼠标多快会好奇', type: 'range', min: 300, max: 4000, step: 100, def: 1400, unit: '点/秒' },
    { key: 'pupilSize', label: '好奇时瞳孔多大', type: 'range', min: 100, max: 300, step: 10, def: 230, unit: '%',
      hint: '相对平时竖瞳的宽度。' },
    { key: 'curiousHold', label: '好奇持续多久', type: 'range', min: 0.5, max: 6, step: 0.5, def: 2, unit: '秒',
      hint: '鼠标停下后，还要盯这么久才放松。' },
  ] },
];
const TUNING = {};
for (const g of TUNING_SCHEMA) for (const it of g.items) TUNING[it.key] = it.def;

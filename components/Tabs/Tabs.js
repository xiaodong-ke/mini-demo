// components/Tabs/Tabs.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    tabs: [
      {
        id: 0,
        name: "首页",
        isActive: true
      },
      {
        id: 1,
        name: "原创",
        isActive: false
      },
      {
        id: 2,
        name: "分类",
        isActive: false
      },
      {
        id: 3,
        name: "关于",
        isActive: false
      }
    ]
  },

  /**
   * 1. 页面.js 文件中，存在事件回调函数的时候，存放在data同层级下！！！
   * 2. 组件.js 文件中，存放事件回调函数的时候，必须要存放在 methods 中！！！
   */
  methods: {
    handleItemTap(e) {
      /*
        1. 绑定点击事件，需要在 methods 中绑定
        2. 获取被点击的索引 （自定义属性）
        3. 获取原数组
        4. 对数组循环
          1. 给每一个循环项 选中属性 改为 false
          2. 给 当前的索引项 添加激活选中效果就可以了！！！
       */
      // console.log(e);
      // 2. 获取索引
      const { index } = e.currentTarget.dataset;

      // 3. 获取data中的数组
      // 解构 对 复杂类型进行结构的时候，复制了一份 变量的引用而已
      let { tabs } = this.data
      // let tabs = this.data.tabs;
      // 不要直接修改 this.data.数据
      // 最严谨的做法，重新拷贝一份 数组，再对这个数组的备份进行处理。
      // let tabs = JSON.parse(JSON.stringify(this.data.tabs));

      // 4. 循环数组
      // [].forEach 遍历数组 遍历数组的时候，修改了v，也会导致原数组被修改
      tabs.forEach((v, i) => i === index ? v.isActive = true : v.isActive = false);
      this.setData({
        tabs
      })
    }
  }
})

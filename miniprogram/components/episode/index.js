// components/epsolide/index.js
Component({
	/**
	 * 组件的属性列表
	 */
	properties: {
		index: {
			type: Number,
			observer: function (newVal, oldVal, changedPath) {
				let val = newVal < 10 ? '0' + newVal : newVal
				this.setData({
					_index: val
				})
			}
		}
	},
	//wxs 解决的方法最有效


	/**
	 * 组件的初始数据
	 */
	data: {
		year: 0,
		months: [
			'一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'
		],
		_index: ''
	},
	attached: function () {
		let date = new Date()
		let year = date.getFullYear()	//当前的年份
		let month = date.getMonth()

		this.setData({
			year: year,
			month: this.data.months[month] + ' '
		})
	},

	/**
	 * 组件的方法列表
	 */
	methods: {

	}
})

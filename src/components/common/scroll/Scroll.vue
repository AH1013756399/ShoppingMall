<template>
	<div class="wrapper" ref="wrapper">
		<div class="content">
			<slot></slot>
		</div>
	</div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
	name: 'Scroll',
	props: {
		probeType: {
			type: Number,
			defaule: 0
		},
		pullUpLoad: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			scroll: null,
			data: [],
		}
	},
	mounted() {
		this.scroll = new BScroll(this.$refs.wrapper, {
			click: true,
			probeType: this.probeType,
			pullUpLoad: this.pullUpLoad,
		})

		// 监听滚动事件
		this.scroll.on('scroll',(position) => {
			// console.log(scroll);
			this.$emit('scroll',position)
		})

		// 监听上拉事件
		this.scroll.on('pullingUp',() => {
			// console.log('aaaaaa');
			this.$emit('pullingUp')
		})
		
	},
	updated() {
		//重新计算高度
		this.scroll.refresh()
	},
	methods: {
		scrollTo(x,y,time=1000) {
			this.scroll.scrollTo(x,y,time)
		},
		finishPullUp() {
			this.scroll.finishPullUp()
		}
	}
}
</script>

<style scoped>
</style>
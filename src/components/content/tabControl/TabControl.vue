<template>
	<div class="tab-control">
		<div
			v-for="(item, index) in titles"
			:key="item"
			class="tab-item"
			:class="{ active: index === currentIndex }"
			@click="itemClick(index)"
		>
			<span>{{ item }}</span>
		</div>
	</div>
</template>

<script>
export default {
	name: 'TabControl',
	props: {
		titles: {
			type: Array,
			default() {
				return []
			},
		},
	},
	data() {
		return {
			currentIndex: 0,
		}
	},
	methods: {
		itemClick(index) {
			this.currentIndex = index
			this.$emit('tabClick', index)
		},
	},
}
</script>

<style scoped>
.tab-control {
	display: flex;
	text-align: center;
	justify-content: space-around;
	background-color: #fff;
}

.tab-item {
	color: #333;
	font-size: 0.43rem;
	height: 0.94rem;
	line-height: 1.1rem;
}

.active {
	color: #e93b3d;
	border-bottom: 2px solid #e93b3d;
}
</style>
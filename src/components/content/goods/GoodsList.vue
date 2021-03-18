<template>
	<div class="goods">
		<!-- {{ goods }} -->
		<goods-list-item v-for="item in goods" :key="item" :goods-item="item" />

	</div>
</template>

<script>
import GoodsListItem from './GoodsListItem'

export default {
	name: 'GoodsList',
	components: {
		GoodsListItem,
	},
	props: {
		goods: {
			type: Array,
			default() {
				return []
			},
		},
	},
}
</script>

<style>
.goods::after {
	content: '020';
	display: block;
	height: 0;
	clear: both;
	visibility: hidden;
} 


</style>
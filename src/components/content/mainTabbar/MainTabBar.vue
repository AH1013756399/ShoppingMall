<template >
	<tab-bar>
		<tab-bar-item path="/home" activeColor="#1296db">
			<template v-slot:item-icon>
				<img src="~assets/images/tabbar/home.png" alt="" />
			</template>
			<template v-slot:item-icon-active>
				<img src="~assets/images/tabbar/home2.png" alt="" />
			</template>
			<template v-slot:item-text>
				<div>首页</div>
			</template>
		</tab-bar-item>
		<tab-bar-item path="/category" activeColor="#1296db">
			<template v-slot:item-icon>
				<img src="~assets/images/tabbar/fl.png" alt="" />
			</template>
			<template v-slot:item-icon-active>
				<img src="~assets/images/tabbar/fl2.png" alt="" />
			</template>
			<template v-slot:item-text>
				<div>分类</div>
			</template>
		</tab-bar-item>
		<tab-bar-item path="/cart" activeColor="#1296db">
			<template v-slot:item-icon>
				<img src="~assets/images/tabbar/gw.png" alt="" />
			</template>
			<template v-slot:item-icon-active>
				<img src="~assets/images/tabbar/gw2.png" alt="" />
			</template>
			<template v-slot:item-text>
				<div>购物车</div>
			</template>
		</tab-bar-item>
		<tab-bar-item path="/profile" activeColor="#1296db">
			<template v-slot:item-icon>
				<img src="~assets/images/tabbar/me.png" alt="" />
			</template>
			<template v-slot:item-icon-active>
				<img src="~assets/images/tabbar/me2.png" alt="" />
			</template>
			<template v-slot:item-text>
				<div>我的</div>
			</template>
		</tab-bar-item>
	</tab-bar>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar'
import TabBarItem from 'components/common/tabbar/TabBarItem'
export default {
	name: 'MainTabBar',
	components: {
		TabBar,
		TabBarItem,
	},
}
</script>

<style>
</style>
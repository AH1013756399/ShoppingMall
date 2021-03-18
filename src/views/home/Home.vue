<template>
	<div id="home">
		<nav-bar class="home-nav">
			<template v-slot:left>
				<img @click="goCategory" src="~assets/images/home/fenlei.png" alt="" />
			</template>
			<template v-slot:center>
				<div>购物街</div>
			</template>
			<template v-slot:right>
				<div>登录</div>
			</template>
		</nav-bar>
		<scroll
			class="wrapper2"
			ref="scroll"
			:probe-type="3"
			@scroll="contentScroll"
			:pull-up-load="true"
			@pullingUp="loadMore"
		>
			<home-swiper :banners="banners" />
			<home-recommend-view :recommends="recommends" />
			<feature-view :showList="showList" />
			<tab-control
				class="tab-control"
				:titles="['流行', '新款', '精选']"
				@tabClick="tabClick"
			/>
			<goods-list :goods="showCoods" />
		</scroll>
		<back-top @click.native="backClick" v-show="isShowBackTop" />
	</div>
</template>

<script>
import HomeSwiper from './childComps/HomeSwiper'
import HomeRecommendView from './childComps/HomeRecommendView'
import FeatureView from './childComps/FeatureView'

import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/content/backTop/BackTop'

import { getHomeMultidata, getHomeMultidata2 } from 'network/home'

export default {
	components: {
		NavBar,
		HomeSwiper,
		HomeRecommendView,
		FeatureView,
		TabControl,
		GoodsList,
		Scroll,
		BackTop,
	},
	name: 'Home',
	data() {
		return {
			banners: [],
			recommends: [],
			showList: [],
			imgTitle: [],
			filterTitle: [],
			orgPrice: [],
			goods: {
				pop: { page: 0, list: [] },
				new: { page: 0, list: [] },
				sell: { page: 0, list: [] },
			},
			currentType: 'pop',
			isShowBackTop: false,
		}
	},
	computed: {
		showCoods() {
			return this.goods[this.currentType].list
		},
	},

	created() {
		this.getHomeMultidata()
		this.getHomeMultidata2('sell')
		this.getHomeMultidata2('pop')
		this.getHomeMultidata2('new')
		this.getHomeMultidata2('sell')
	},
	methods: {
		// 事件监听相关方法
		tabClick(index) {
			// console.log(index)
			switch (index) {
				case 0:
					this.currentType = 'pop'
					break
				case 1:
					this.currentType = 'new'
					break
				case 2:
					this.currentType = 'sell'
					break
			}
		},

		// 监听返回顶部
		backClick() {
			this.$refs.scroll.scrollTo(0, 0)
		},
		contentScroll(position) {
			// console.log(position);
			this.isShowBackTop = -position.y > 1000
		},
		loadMore() {
			console.log('aaa')
			this.getHomeMultidata2(this.currentType)
		},

		// 网络请求相关方法
		getHomeMultidata() {
			getHomeMultidata().then((res) => {
				// console.log(res)
				this.banners = res.data.banner.list
				this.recommends = res.data.recommend.list
			})
		},
		getHomeMultidata2(type) {
			const page = this.goods[type].page + 1
			getHomeMultidata2(type, page).then((res) => {
				// console.log(res)
				this.goods[type].list.push(...res.data.list)
				this.goods[type].page += 1
				this.showList = res.data.list
				this.imgTitle = res.data.list.title
				this.orgPrice = res.data.list.price

				this.$refs.scroll.finishPullUp()
				// console.log()
			})
		},
		goCategory() {
			console.log('aaaaa')
			//点击跳转至上次浏览页面
			// this.$router.go(-1)

			//指定跳转地址
			this.$router.replace('/category')
		},
	},
}
</script>

<style scoped>
@import '~assets/css/reset.css';

#home {
	height: 100vh;
	position: relative;
	/* padding: 1.18rem 0; */
}

.home-nav {
	position: fixed;
	z-index: 9;
	top: 0;
	left: 0;
	right: 0;
	font-size: 0.48rem;
	color: #fff;
	background-color: #e93b3d;
}

.right {
	padding-top: 0.03rem;
	font-size: 0.43rem;
	text-align: left;
}

.left img {
	margin-top: -0.16rem;
}

.tab-control {
	top: 1.176rem;
	position: sticky;
}

.goods {
	margin-top: 0.8rem;
	margin-left: 0.2rem;
}

.wrapper2 {
	position: absolute;
	top: 44px;
	bottom: 49px;
	left: 0;
	right: 0;
	overflow: hidden;
}
</style>
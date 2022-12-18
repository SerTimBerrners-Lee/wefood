<template>
	<div class="block_social_main">
		<div class="container">
			<div class="content_social">

				<div class="content_text">
					<h3>Подпишись на нас в соцсетях</h3>
					<p>Мы не в них много шутим, рассказываем о новинках меню и проводим конкурсы с ценными и вкусными призами.</p>
				</div>

				<div class="content_icons">
					<img src="@/assets/img/instagram.png" alt="">
					<img src="@/assets/img/telegram.png" alt="">
					<img src="@/assets/img/vk.png" alt="">
					<img src="@/assets/img/facebook.png" alt="">
				</div>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	name: "SocialBlock",

	data() {
		return {
		}
	},
	methods: {
	},
	mounted() {
	}
}
</script>

<style scoped>
/**  Social Block */
.content_social {
	width: 100%;
  min-height: 340px;
	display: flex;
	justify-content: space-around;
	align-items: center;
}

.block_social_main {
	background: #fe560e;
}

.content_text {
	width: 50%;
	padding-right: 120px;
	padding-top: 40px;
}
.content_text h3 {
	color: white;
	font-size: 30px;
}
.content_text p {
	color: white;
	margin-top: 55px;
	font-size:  20px;
}
.content_icons {
	display: flex;
}

.content_icons img {
	width: 80px;
	margin-left: 20px;
	cursor: pointer;
	filter: grayscale(1);
}
.content_icons img:first-child {
	margin: 0px;
}

.content_icons img:hover {
	animation: fadeIn;
	animation-direction: 2s;
	filter: grayscale(0);
}
</style>
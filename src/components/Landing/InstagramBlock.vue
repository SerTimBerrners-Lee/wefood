<template>
	<div class="container">
		<div class="header_instagram">
			<div>
				<h3>Отзывы</h3>
				<p>Больше отзывов по хештегу <span class="vs-color-orange"> #wefood</span></p>
			</div>
			<button class="vs-btn vs-btn-orange">Instagram</button>
		</div>
		<div class="review">
			<img src="@/assets/img/instagram/1.webp" alt="">
			<img src="@/assets/img/instagram/1-1.jpg" alt="">
			<img src="@/assets/img/instagram/2.webp" alt="">
			<img src="@/assets/img/instagram/3.webp" alt="">
		</div>
	</div>
</template>

<script>
export default {

}
</script>

<style>
.header_instagram {
	display: flex;
  justify-content: space-between;
	align-items: center;
	margin-top: 50px;
}
.header_instagram>div{
	display: flex;
	align-items: center;
	align-content: center;;
}
.header_instagram p {
	margin-left: 40px;
	text-align: center;
	margin-top: 10px;
}
.header_instagram button {
	width: 250px;
	height: 60px;
}
.review {
	display: flex;
	width: 100%;
	justify-content: space-between;
	margin-top: 20px;
}
.review>img {
	width: 23%;
}
</style>
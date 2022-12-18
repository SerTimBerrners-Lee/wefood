<template>
	<div class="container">
		<div class="main_promotion">
			<div class="description">
				<h2>ПОРАДУЙТЕ ДРУГА</h2>
				<h2>И ПОЛУЧИТЕ</h2>
				<h2 class="vs-color-orange">500 БОНУСОВ</h2>
				<h4>Дарим <strong>скидку 5%</strong> другу, а вам</h4>
				<h4><strong>500 бонусов</strong> за его первый заказ.</h4>
				<button class="vs-btn vs-btn-orange" @click="showModalRequest()">Подробнее</button>
			</div>
			<div class="bg_right">
			</div>
		</div>
		<ModalRequest 
      v-if='keyModalRequest'
      :key="keyModalRequest"
    />
	</div>
</template>

<script>
import MixRequest from '@/mixins/modal_request'; 

export default {
	name: "PromotionBlock",
	mixins: [MixRequest],
}
</script>

<style>
.main_promotion {
	background: #f2f2f2;
	height: 400px;
	border-radius: 30px;
	display: flex;
	margin-top: 20px;
	margin-bottom: 20px;
	position: relative;
	background: url(@/assets/img/11zon_cropped.png) no-repeat;
	background-size: cover;
	backdrop-filter: brightness(0.5);
	background-position-x: 360px;
}
.description {
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding-left: 40px;
	width: 50%;
	position: absolute;
	top: 35px;
	left: 30px;
	color: rgb(255, 255, 255);
}

.description>h2 {
	font-size: 40px;
	font-weight: bold;
}

.description>h4 {
	font-weight: unset;
}

.description>button {
	margin-top: 20px;
	height:  60px;
	width: 350px;
	z-index: 1;
}
.bg_right {
	position: relative;
	width: 100%;
	display: flex;
	justify-content: end;
	align-items: flex-end;
}

</style>
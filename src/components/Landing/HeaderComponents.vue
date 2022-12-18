<template>
	<div class="main_header">
		<div class="container vs-bg-graywhile">
			<div class='header'>
				<!-- header  -->
				<div class='link'>Ереван</div>
				<div class="header__center">Клиентский сервис <span class='vs-color-graywhile link'>wefood@gmail.com</span></div>
				<div class="vs-color-graywhile link">Войти в личный кабинет</div>
			</div>
		</div>

		<div class="container">
			<div class="menu">
				<!-- menu  -->
				<div class="menu__item link">
          <h3>WeFood</h3>
					<!-- <img src="@/assets/img/avatar.png" alt="avatar"> -->
				</div>
				<div class="menu__item link">
					<span>Меню и цены </span>
				</div>
				<div class="menu__item link">
					<span>Доставка и оплата</span>
				</div>
				<div class="menu__item link">
					<span>О еде</span>
				</div>
				<div class="menu__item link">
					<span>Где мы готовим?</span>
				</div>
				<div class="menu__item link">
					<span>Отзывы</span>
				</div>
				<div class="menu__item link">
					<span>Контакты</span>
				</div>
				<div class="menu__item__contact">
					<strong>+374 331 562 43</strong>
					<span class="vs-color-graywhile">Круглосуточно</span>
				</div>
				<button class="vs-btn vs-btn-output" @click="showModalRequest()">Перезвоните мне</button>
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
	name: "HeaderComponents",
  mixins: [MixRequest],
}
</script>

<style scoped>


/** Header */

.main_header {
  width: 100%;
  position: fixed;
  z-index: 2;
}


.header {
  width: 100%;
  height: 30px;
  background: #f8f8f8;
  display: flex;
  padding: 2px 10px 2px 10px;
  justify-content: space-between;
  font-size: 12px;
  left: 0;
}

.header>div {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.header>div:first-child {
  width: 40%;
  justify-content: start;
}
.header>div:last-child {
  width: 40%;
  justify-content: end;
}

.header__center {
  width: 20%;
  text-align: center;
}
.header__center span {
  margin-left: 10px;
}


/** Menu */

.menu {
  display: flex;
  width: 100%;
  height: 110px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  background: white;
  border-radius: 0px 0px 10px 10px;
  padding-left: 10px;
  padding-right: 10px;
}
.menu>div {
  margin-left: 20px;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: start;
  justify-content: center;
}
.menu>div:first-child {
  margin-left: 0px;
}

.menu>div:last-child {
  margin-right: 0px;
}

.menu__item:hover {
  color: #fe540e;
  animation: fadeIn;
  cursor: pointer;
}
.menu strong {
  font-weight: bold;
  font-size: 15px;
}

.menu__item__contact>span {
  text-align: end;
  font-size: 10px;
  width: 100%;
}

.menu>button {
  width: 230px;
}

.menu__item>img {
  width: 70px;
}


</style>
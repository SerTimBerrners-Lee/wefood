<template>
	<div class="container">
		<!-- main window  -->
		<div class="block__one">
			<div class="block__one__background"></div>
			<div class="block__one__header">
				<h1>Готовим и доставляем</h1>
				<h1 class="vs-color-graywhile">еду на целый день</h1>
				<div class="options__header">
					<div>
						<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="default icon" data-v-157d1b4f="" data-v-24411c46=""><path d="M13.6566 13.6566C16.7811 10.532 16.7811 5.46801 13.6566 2.34343C10.532 -0.781145 5.46801 -0.781145 2.34343 2.34343C-0.781145 5.46801 -0.781145 10.532 2.34343 13.6566C5.46801 16.7811 10.5353 16.7811 13.6566 13.6566ZM5.13172 6.77727L6.93072 8.57627L10.8715 4.63871L12.2657 6.03285L8.32813 9.97041L6.93072 11.3646L5.53658 9.97041L3.73758 8.17141L5.13172 6.77727Z" fill="#FB5A16" data-v-157d1b4f=""></path></svg>
						<h3 class="vs-color-orange">От 3 до 7 блюд на выбор</h3>
					</div>
					<p>Выш вкусный завтрак, обед и ужин</p>
				</div>  
				<div class="options__header">
					<div>
						<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="default icon" data-v-157d1b4f="" data-v-24411c46=""><path d="M13.6566 13.6566C16.7811 10.532 16.7811 5.46801 13.6566 2.34343C10.532 -0.781145 5.46801 -0.781145 2.34343 2.34343C-0.781145 5.46801 -0.781145 10.532 2.34343 13.6566C5.46801 16.7811 10.5353 16.7811 13.6566 13.6566ZM5.13172 6.77727L6.93072 8.57627L10.8715 4.63871L12.2657 6.03285L8.32813 9.97041L6.93072 11.3646L5.53658 9.97041L3.73758 8.17141L5.13172 6.77727Z" fill="#FB5A16" data-v-157d1b4f=""></path></svg>
						<h3 class="vs-color-orange">Выгоднее чем готовить самому</h3>
					</div>
					<p>Больше дней - ниже цена</p>
				</div> 
				<div class="options__header">
					<div>
						<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="default icon" data-v-157d1b4f="" data-v-24411c46=""><path d="M13.6566 13.6566C16.7811 10.532 16.7811 5.46801 13.6566 2.34343C10.532 -0.781145 5.46801 -0.781145 2.34343 2.34343C-0.781145 5.46801 -0.781145 10.532 2.34343 13.6566C5.46801 16.7811 10.5353 16.7811 13.6566 13.6566ZM5.13172 6.77727L6.93072 8.57627L10.8715 4.63871L12.2657 6.03285L8.32813 9.97041L6.93072 11.3646L5.53658 9.97041L3.73758 8.17141L5.13172 6.77727Z" fill="#FB5A16" data-v-157d1b4f=""></path></svg>
						<h3 class="vs-color-orange">Меню не повторяется месяц</h3>
					</div>
					<p>Яркие впечатления каждый день</p>
				</div> 
				<button class="vs-btn vs-btn-orange" @click="showModalRequest()">Выбрать рацион</button>     
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
	name: "MainLandingBlock",
	mixins: [MixRequest],
}
</script>

<style scoped>
/** Block one */

.block__one {
  width: 100%;
  height: 750px;
  margin-top: 150px;
}

.block__one__background {
  background: url(@/assets/img/bg.webp);
  background-position: 25% 75%;
  width: 100%;
  height: 100%;
  position: absolute;
  height: 900px;
  top: 0;
  z-index: -1;
}


.block__one__header {
  display: flex;
  flex-direction: column;
  padding-top: 70px;
  position: absolute;
  z-index: 1;
}
.block__one__header>.options__header:first-child {
  margin-top: 10px;
  padding-top: 10px;
}

.vs-container {
  margin-left: 100px;
  margin-right: 100px;
}

.block__one button {
  width: 250px;
  height: 61px;
  margin-top: 18px;
  font-size: 22px;
}

.options__header>div {
  display: flex;
  align-items: center;
}

.options__header>div>svg {
  margin-bottom: 0.5rem;
}

.options__header>div>h3 {
  margin-left: 10px;
}

.options__header p {
  margin-left: 30px;
}

.block__one__header>h1 {
  font-size: 44px;
}

.block__one__header>h1 {
  margin-bottom: 30px;
}

.block__one__header>h1:first-child {
  margin-bottom: 0;
}
</style>
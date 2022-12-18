<template>
	<div class="vs-bg-graywhile block_shop__main">
		<div class="container">
			<div class="block_shop">

				<div class="shop_header">
					<div class="title_header">
						<h1>Настройте меню для себя</h1>
					</div>
					<div class="header_menu">
						<div class="header_menu_items select">
							<div class="hr hr_select"></div>
							<h2>Classic</h2>
							<p>Классика домашней кухни</p>
						</div>
					</div>  
				</div>  

				<div class="vs-contrainer">
					<div class="ration_section">
						<div>
							<h4>Выберите размер рациона</h4>
							<div class="btn_selections">
								<div class="vs-btncontroll">
									<button
										class="vs-btn vs-btn-standart"
										@click="e => setBtnOption(e.target, 3)">3 блюда</button>
									<span class="vs-color-graywhile">800-1100 ккал</span>
								</div>
								<div class="vs-btncontroll">
									<button
										class="vs-btn vs-btn-standart"
										@click="e => setBtnOption(e.target, 4)">4 блюда</button>
									<span class="vs-color-graywhile">1100-1400 ккал</span>
								</div>
								<div
									class="vs-btncontroll">
									<button
										class="vs-btn vs-btn-standart"
										@click="e => setBtnOption(e.target, 5)">5 блюд</button>
									<span class="vs-color-graywhile">1500-1800 ккал</span>
								</div>
								<div
									class="vs-btncontroll">
									<button
										class="vs-btn vs-btn-standart vs-btn-standart_selected"
										@click="e => setBtnOption(e.target, 6)"
										ref="default_ration_button">6 блюд</button>
									<span class="vs-color-graywhile">1800-2000 ккал</span>
								</div>
							</div>
						</div>
						<div class="description_ration">
							<div class="text_description">
								<h6>Меню Classic</h6>
								<p>Вкусная уютная еда, домашняя классика. Пирожки, сытные каши, рагу, котлетки, азу, манты, чизкейки и многое другое.</p>
							</div>
						</div>
					</div>
				</div>


				<div class="contrainer vs-contrainer">
					<div class="dishes_section">
						<h4><span class="bonus_description_total price_bg">Примерное </span> меню на неделю:</h4>
						<div class="links_dishes">
							<span
								class="links_dishes_item vs-color-orange"
								ref="default_link_day"
								@click="e => setLinkDishes(e.target)">Понедельник</span>
							<span class="links_dishes_item" @click="e => setLinkDishes(e.target, 1)">Вторник</span>
							<span class="links_dishes_item" @click="e => setLinkDishes(e.target, 2)">Среда</span>
							<span class="links_dishes_item" @click="e => setLinkDishes(e.target, 3)">Четверг</span>
							<span class="links_dishes_item" @click="e => setLinkDishes(e.target, 4)">Пятница</span>
							<span class="links_dishes_item" @click="e => setLinkDishes(e.target, 5)">Суббота</span>
							<span class="links_dishes_item" @click="e => setLinkDishes(e.target, 6)">Воскресенье</span>
						</div>

						<div class="sliders_sections">
							<div
								class="slider_item"
								v-for="(item, inx) of selected_sliders" :key="inx">
										<img v-bind:src='getPathImage(item)' :alt="item.description" />
										<p>{{ item.description }}</p>
								</div>
						</div>

					</div>
				</div>


				<div class="vs-contrainer">
					<div class="days_section_main">
						<div class="left_section_data">
							<h4>Когда будете есть</h4>
							<div class="btn_selections">
								<div class="vs-btncontroll">
									<button
										class="vs-btn vs-btn-standart vs-btn-standart_selected"
										ref="ref_delivery_range_default"
										@click="e => setRangeDataDelivery(e.target, 7)">Каждый день</button>
								</div>
								<div class="vs-btncontroll">
									<button
										class="vs-btn vs-btn-standart"
										@click="e => setRangeDataDelivery(e.target, 5)">Понедельника-Пятница</button>
								</div>
							</div>
						</div>

						<div class="right_section_data">
							<h4>Выберите, сколько дней</h4>
							<div class="btn_selections" v-if="select_range_day_delivery == 7">
								<div class="vs-btncontroll">
									<button
										class="vs-btn vs-btn-standart vs-btn-standart_selected"
										ref="ref_day_delivery_default"
										@click="e => setColDayDelivery(e.target, 2)">
											<span class="title_btn">2</span>
											<span class="description_btn">{{ getPriceForDayDishes(2) }} Р / д </span>
										</button>
								</div>
								<div class="vs-btncontroll">
									<button
										class="vs-btn vs-btn-standart"
										@click="e => setColDayDelivery(e.target, 3)">
											<span class="title_btn">3</span>
											<span class="description_btn">{{ getPriceForDayDishes(3) }} Р / д </span>
										</button>
								</div>
								<div
									class="vs-btncontroll">
									<button
										class="vs-btn vs-btn-standart"
										@click="e => setColDayDelivery(e.target, 6)">
											<span class="title_btn">6</span>
											<span class="description_btn">{{ getPriceForDayDishes(6) }} Р / д </span>
										</button>
								</div>
								<div
									class="vs-btncontroll">
									<button
										class="vs-btn vs-btn-standart"
										@click="e => setColDayDelivery(e.target, 12)">
											<span class="title_btn">12</span>
											<span class="description_btn">{{ getPriceForDayDishes(12) }} Р / д </span>
										</button>
								</div>
								<div
									class="vs-btncontroll">
									<button
										class="vs-btn vs-btn-standart"
										@click="e => setColDayDelivery(e.target.parentElement, 24)">
											<span class="title_btn">24</span>
											<span class="description_btn">{{ getPriceForDayDishes(24) }} Р / д </span>
										</button>
								</div>
								<div
									class="vs-btncontroll">
									<button
										class="vs-btn vs-btn-standart"
										@click="e => setColDayDelivery(e.target, 30)">
											<span class="title_btn">30 + 
												<span>
													<svg data-v-76986249="" data-v-166bd7ac="" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path data-v-76986249="" d="M15.4237 7.44374H9.99414V16H15.4237V7.44374Z" fill="#FB5A16"></path> <path data-v-76986249="" d="M6.00583 7.44374H0.576276V16H6.00583V7.44374Z" fill="#FB5A16"></path> <path data-v-76986249="" d="M12.1223 2.90567C12.5474 2.31127 12.5888 1.50874 12.1594 0.863716C11.5832 -0.00196646 10.3736 -0.260402 9.46356 0.287751C9.23327 0.4265 8.84888 0.750904 8.17276 1.96062C8.11232 2.06874 8.0545 2.1753 7.99997 2.27749C7.94543 2.1753 7.88762 2.06874 7.82717 1.96062C7.15106 0.750904 6.76667 0.4265 6.53638 0.287751C5.62637 -0.260402 4.41672 -0.00193523 3.84047 0.863716C3.41108 1.50874 3.45247 2.31127 3.8776 2.90567H0V6.50612H6.0058V2.84477C5.51694 2.79945 5.12798 2.72977 4.97325 2.63633C4.68252 2.46133 4.52316 2.16193 4.52316 1.85662C4.52316 1.68818 4.57145 1.51787 4.67296 1.36534C4.81159 1.15753 5.0268 1.01347 5.2791 0.959372C5.53139 0.905622 5.79062 0.948434 6.00941 1.08C6.28076 1.24343 6.79328 2.06002 7.2299 2.9057C7.1504 2.90445 7.07057 2.90289 6.9914 2.9007V16H9.00857V2.90039C8.9294 2.90258 8.84957 2.90414 8.77007 2.90539C9.20702 2.05974 9.71917 1.24346 9.99056 1.08C10.1476 0.985309 10.3256 0.936872 10.507 0.936872C10.578 0.936872 10.6499 0.944372 10.7209 0.959372C10.9732 1.01343 11.1884 1.1575 11.327 1.36534C11.6125 1.79443 11.4778 2.36474 11.0267 2.63633C10.8723 2.72945 10.4834 2.79914 9.9942 2.84445V6.50615H16V2.90567H12.1223Z" fill="#FB5A16"></path></svg>
												</span>
											</span>
											<span class="description_btn">{{ getPriceForDayDishes(30) }} Р / д </span>
										</button>
								</div>
							</div>

							<div class="btn_selections" v-else>
								<div class="vs-btncontroll">
									<button
										class="vs-btn vs-btn-standart vs-btn-standart_selected"
										ref="ref_day_delivery_default"
										@click="e => setColDayDelivery(e.target, 5)">
											<span class="title_btn">5</span>
											<span class="description_btn">{{ getPriceForDayDishes(5) }} Р / д </span>
										</button>
								</div>
								<div class="vs-btncontroll">
									<button
										class="vs-btn vs-btn-standart"
										@click="e => setColDayDelivery(e.target, 20)">
											<span class="title_btn">20</span>
											<span class="description_btn">{{ getPriceForDayDishes(20) }} Р / д </span>
										</button>
								</div>
							</div>
						</div>
					</div>

				</div>

				<div class="vs-contrainer">
					<div class="section_action_delivery">
						<div class="price_description_days">
							<h3>5 блюд</h3>
							<h3>за <span class="price_bg vs-color-orange">1 051 Р</span> в день</h3>
							<p>1 Доставка с питанием на 2 дня</p>
						</div>
						<div class="body_price_total vs-bg-graywhile">
							<div class="price_total">
								<h6 class="vs-color-graywhile">Итого</h6>
								<h1>2 060 Р</h1>
								<p class="vs-color-orange bonus_description_total">+ 61 Р вернум бонусами</p>
							</div>
							<div class="price_btn_send">
								<button class="vs-btn vs-btn-orange" @click="showModalRequest()">Заказать</button>
							</div>
						</div>
					</div>

				</div>

			</div>
		</div>
		<ModalRequest 
      v-if='keyModalRequest'
      :key="keyModalRequest"
    />
	</div>
</template>

<script>
import { random } from 'lodash';
import { eSelectnNodes } from '@/js/index';
import MixRequest from '@/mixins/modal_request'; 

export default {
	name: "BlockShop",
	data() {
		return {
			select_btn: null,
			select_link_dishes: null,
			select_day_index: 1, // Понедельник, Вторник ....
			set_col_dishes: 6,

			all_sliders_items_array: [
				{ path: "dishes1.png", description: "Блюдо 1" },
				{ path: "dishes2.png", description: "Блюдо 2" },
				{ path: "dishes3.png", description: "Блюдо 3" },
				{ path: "dishes4.png", description: "Блюдо 4" },
				{ path: "dishes5.png", description: "Блюдо 5" },
				{ path: "dishes6.png", description: "Блюдо 6" },
				{ path: "dishes7.png", description: "Блюдо 7" },
				{ path: "dishes8.png", description: "Блюдо 8" },
				{ path: "dishes9.png", description: "Блюдо 9" },
				{ path: "dishes10.png", description: "Блюдо 10" },
				{ path: "dishes11.png", description: "Блюдо 11" },
				{ path: "dishes12.png", description: "Блюдо 12" },
				{ path: "dishes13.png", description: "Блюдо 13" },
				{ path: "dishes14.png", description: "Блюдо 14" },
				{ path: "dishes15.png", description: "Блюдо 15" },
			],
			prices_for_col_dishes: {
				dishes3: {
					day2: 850,
					day3: 660,
					day6: 610,
					day12: 550,
					day24: 520,
					day30: 500,
					weekly5: 670,
					weekly20: 560
				},
				dishes4: {
					day2: 950,
					day3: 740,
					day6: 670,
					day12: 610,
					day24: 580,
					day30: 550,
					weekly5: 750,
					weekly20: 640
				},
				dishes5: {
					day2: 1025,
					day3: 800,
					day6: 730,
					day12: 670,
					day24: 640,
					day30: 610,
					weekly5: 810,
					weekly20: 710
				},
				dishes6: {
					day2: 1100,
					day3: 860,
					day6: 800,
					day12: 730,
					day24: 700,
					day30: 670,
					weekly5: 870,
					weekly20: 780
				},
			},
			selected_sliders: [],


			select_day_delivery: 2,
			select_range_day_delivery: 7,
			set_btn_day_delivery: null,
			set_btn_range_day_delivery: null,
		}
	},
	mixins: [MixRequest],
	methods: {
		setBtnOption(e, cols = 3) {
			if (this.set_col_dishes != cols)
				this.changeCoundArrayDishes(cols);

			this.set_col_dishes = cols;
			this.select_btn = eSelectnNodes(this.select_btn, e, "vs-btn-standart_selected");
		},
		setLinkDishes(e, inx) {
			this.select_link_dishes = eSelectnNodes(this.select_link_dishes, e, "vs-color-orange");
			if (this.select_day_index !== inx)
				this.changeCoundArrayDishes(this.set_col_dishes);

			this.select_day_index = inx;
		},
		getPathImage(item) {
			return 'http://localhost:8080/img/dishes/' + item.path;
		},
		changeCoundArrayDishes(len) {
			// initial
			let second_arrays = this.all_sliders_items_array;
			this.selected_sliders = [];

			// filters
			for (let i = 0; i < len; i++) {
				const random_numeric = random(1, second_arrays.length);
				const item = this.getRandomElementArrays(second_arrays, random_numeric);

				let faileds = false;
				for (const itemOld of this.selected_sliders) {
					if (itemOld.path == item?.path) faileds = true;
				}

				if (!item || faileds) {
					i--;
					continue;
				}

				second_arrays = second_arrays.filter((_, inx) => inx !== random_numeric);
				this.selected_sliders.push(item);
			}
		},
		getRandomElementArrays(arrays, inx) {
			return arrays[inx];
		},
		setRangeDataDelivery(e, nums) {
			this.select_range_day_delivery = nums;
			this.set_btn_range_day_delivery = eSelectnNodes(this.set_btn_range_day_delivery, e, "vs-btn-standart_selected");
		},
		setColDayDelivery(e, nums) {
			let element = e;
			if (e.tagName == "DIV") {
				if (e.children[0].tagName == "BUTTON") element = e.children[0];
			} else if (e.tagName !== "BUTTON") {
				if (element.parentElement.tagName == "BUTTON")
					element = element.parentElement;
			}

			this.select_day_delivery = nums;
			this.set_btn_day_delivery = eSelectnNodes(this.set_btn_day_delivery, element, "vs-btn-standart_selected");
		},
		/**
		 * type = day | weekly
		 */
		getPriceForDayDishes(day) {
			if (this.set_col_dishes == 3)
				return getDayForObject(this.prices_for_col_dishes.dishes3);
			if (this.set_col_dishes == 4) 
				return getDayForObject(this.prices_for_col_dishes.dishes4);
			if (this.set_col_dishes == 5) 
				return getDayForObject(this.prices_for_col_dishes.dishes5);
			if (this.set_col_dishes == 6) 
				return getDayForObject(this.prices_for_col_dishes.dishes6);

			function getDayForObject(obj) {
				if (day == 2) return obj.day2;
				if (day == 3) return obj.day3;
				if (day == 6) return obj.day6;
				if (day == 12) return obj.day12;
				if (day == 24) return obj.day24;
				if (day == 30) return obj.day30;
				if (day == 5) return obj.weekly5;
				if (day == 20) return obj.weekly20;
			}
		}
	},
	mounted() {
		this.changeCoundArrayDishes(6);
		this.select_btn = this.$refs.default_ration_button;
		this.select_link_dishes = this.$refs.default_link_day;

		this.set_btn_day_delivery = this.$refs.ref_day_delivery_default;
		this.set_btn_range_day_delivery = this.$refs.ref_delivery_range_default;

	}
}
</script>

<style>
/** Block Shop */

.block_shop {
  width: 100%;
  min-height: 1500px;
  margin-top: 240px;
}

.block_shop__main {
  margin-top: 105px;
}

.shop_header {
	display: flex;
	width: 100%;
	flex-direction: row;
	background: white;
	border-radius: 10px;
	padding-left: 10px;
	align-items: center;
}
.shop_header h1 {
	font-size: 28px;
	margin-left: 30px;
}
.header_menu {
	width: 70%;
	display: flex;
  justify-content: space-around;
}
.header_menu_items {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.hr_select {
	border-top: #fe540e solid 5px;
}
.hr {
	height: 9px;
	width: 100%;
}
.select {
	color: #fe540e;
}
.vs-contrainer {
	margin-top: 60px;
	margin-left: 80px;
}

.btn_selections {
	margin-top: 33px;
}
.ration_section {
	display: flex;
	justify-content: space-between;
}
.description_ration {
	width: 415px;
	background: url(@/assets/img/classic-info-bg-lg.png) no-repeat;
	height: 250px;
	display: flex;

}
.description_ration>.text_description {
	display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
	padding-left: 100px;
	padding-right: 50px;
}
.description_ration>.text_description>p {
	font-size: 12px;
}

/** Sliders */

.sliders_sections {
	display: flex;
	overflow: hidden;
	position: absolute;
	min-width: 100%;
	left: 0px;
	justify-content: center;
}

.slider_item {
  align-items: baseline;
  display: flex;
	width: 300px;
	height: 300px;
	position: relative;
}

.slider_item>img {
	transform: rotate(90deg) translateY(-50%);
	width: 200px;
	transform-origin: 66px 80px;
}

.slider_item>p {
	position: absolute;
	bottom: 30px;
	left: 15px;
}

/** Left section data */

.right_section_data button {
	width: fit-content;
	padding: 10px;
}

.right_section_data {
	min-width: 60%;
}


.days_section_main {
	display: flex;
	margin-top: 350px;
	flex-direction: row;
	justify-content: space-between;
	width: 100%;
}

.section_action_delivery {
	display: flex;
	background: white;
	border-radius: 10px;
	padding: 20px;
	align-items: center;
	width: 100%;
}

.section_action_delivery>.price_description_days {
	width: 40%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding-left: 60px;
}

.body_price_total {
	display: flex;
	flex-direction: row;
	border-radius: 10px;
	width: 60%;
	justify-content: space-between;
	padding-left: 30px;
}
.body_price_total>.price_total {
	padding-top: 30px;
}
.body_price_total>.price_total h1 {
	font-size: 48px;
	font-weight: bold;
}

.body_price_total>.price_btn_send button {
	height: 100%;
	width: 360px;
	font-size: 44px;
}

.body_price_total>.price_btn_send button:hover {
	width: 500px;
	/* animation: lightSpeedInRight; */
	animation-duration: 2s;
}
.price_bg {
	font-weight: bold;
	font-size: 22px;
	cursor: pointer;
}

.bonus_description_total {
	border-bottom-style: dashed;
	border-width: 1px;
}

</style>
<template>
	<div :class="'bg_modal ' + show()" @click="e => clickBd(e)">
		<div class="modal_block">
			<div class="exit" @click="displa_none = true">
				<svg data-v-31bcf9ce="" data-v-3d595930="" width="15" height="15" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" view-style="modal-default" class="cross-icon"><path data-v-31bcf9ce="" d="M10 1.65728L8.34272 0L5.00001 3.34271L1.65728 0L0 1.65728L3.34273 4.99999L0 8.34272L1.65728 10L5.00001 6.65729L8.34272 10L10 8.34272L6.65727 4.99999L10 1.65728Z" fill="#181D29"></path></svg>
			</div>
			<h4>Введите номер телефона</h4>
			<p class="description_text">Это безопасно и удобно, а данные защищены шифрованием</p>
			<div class="button_control">
				<input type="text" class="form-control form-control-lg" placeholder="+374(331)000-00" >
				<button class="vs-btn vs-btn-orange" @click="displa_none = true">Подробнее</button>
			</div>
			<p class="politics">Нажимая кнопку "Далее", ты соглашаешься с условиями оферты и нашей политикой конфиденциальности.</p>
			<div class="bg_cover"></div>
		</div>
	</div>
</template>

<script>
export default {
	name: "ModalRequest",
	data() {
		return {
			displa_none: false
		}
	},
	methods: {
		show() {
			if (this.displa_none) return 'display_none';
			return '';
		},
		clickBd(e) {
			if (e.target?.classList.contains('bg_modal'))
				this.displa_none = true;
		}
	}
}
</script>

<style>
.display_none {
	display: none !important;
}
.bg_modal {
	position: fixed;
	background: #a7acb5a2;
	width: 100vw;
	height: 100vh;
	z-index: 2;
	display: flex;
  justify-content: center;
	align-items: center;
	top: 0;
	left: 0;
}
.modal_block {
	position: relative;
	padding: 20px;
	padding-left: 40px;
	padding-right: 40px;
	border-radius: 10px;
	width: 460px;
	display: flex;
	flex-direction: column;
  justify-content: center;
	min-height: 400px;
	background: #fff;
	padding-bottom: 100px;
	z-index: 3;
}
.bg_cover {
	width: 100%;
	height: 110px;
	background: url(@/assets/img/11zon_cropped2.png) no-repeat;
	background-size: 450px;
	background-position-y: bottom;
	background-position-x: center;
	position: absolute;
	bottom: 1px;
	right: 2px;
}
.button_control {
	display: flex;
	flex-direction: column;
  justify-content: center;
	width: 100%;
}
.button_control * {
	margin-top: 10px;
	width: 100%;
	height: 54px;
}
.politics {
	margin-top: 20px;
	font-size: 12px;
}
.modal_block>h4 {
	margin-top: 40px;
	margin-bottom: 20px;
}
.description_text {
	font-size: 16px;
}
.exit {
	position: absolute;
	top: 15px;
	right: 25px;
	cursor: pointer;
}
</style>
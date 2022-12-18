<template>
  <div class="main">
    
    <HeaderComponents />
    <MainLandingBlock />

    <div class="container">
      <div class="main__block_shop_description">
        <div class="block_shop_description">
          <div class="desc-first-block">
            <h6>Чем отличается от классической доставки?</h6>
            <p>Мы готовим и доставляем сразу на 3 дня, если выбираете больше дней, то получаете больше доставок.</p>
          </div>
          <div class="desc-center-block">
            <h6>Чем мы лучше доставки сейчас?</h6>
            <p>Вам не нужно думать, что добавить в корзину, это мы берем на себя.</p>
          </div>
          <div class="desc-end-block">
            <h6>Наслаждайтесь едой</h6>
            <p>Каждое блюдо герметично упаковоно, поэтому его удобно брать с собо! Хоть сырнички, хоть котлетки с пюрешкой.</p>
          </div>
        </div>
      </div>
    </div>

    <BlockShop />
    <PromotionBlock />
    <InstagramBlock />
    <SocialBlock />
  </div>
</template>

<script>
import BlockShop from '@/components/Landing/BlockShop';
import SocialBlock from '@/components/Landing/SocialBlock';
import PromotionBlock from '@/components/Landing/PromotionBlock';
import InstagramBlock from '@/components/Landing/InstagramBlock';
import HeaderComponents from '@/components/Landing/HeaderComponents';
import MainLandingBlock from '@/components/Landing/MainLandingBlock';

export default {
  name: 'LandingPage',
  components: {
    HeaderComponents,
    MainLandingBlock,
    BlockShop,
    PromotionBlock,
    InstagramBlock,
    SocialBlock,
  }
}
</script>


<style scoped>

.block_shop_description {
  display: flex;
  width: 100%;
  height: fit-content;
  justify-content: center;
  align-items: center;
  position: absolute;
}

.block_shop_description>div {
  width: 30%;
  padding: 55px;
  margin: 10px;
  padding-right: 130px;
  height: 230px;
  border-radius: 10px;
}

.block_shop_description>div>p {
  font-size: 13px;
}

.block_shop_description>div h6 {
  margin-bottom: 20px;
}

.desc-first-block>p {
  color: #986361;
}

.desc-first-block {
  background: #ffcfc5;
  box-shadow: 1px 23px 37px -23px rgba(255,207,197,0.9);
  -webkit-box-shadow: 1px 23px 37px -23px rgba(255,207,197,0.9);
  -moz-box-shadow: 1px 23px 37px -23px rgba(255,207,197,0.9);
}

.desc-first-block:hover {
  box-shadow: 1px 23px 119px -23px rgba(255,207,197,0.88);
  -webkit-box-shadow: 1px 23px 119px -23px rgba(255,207,197,0.88);
  -moz-box-shadow: 1px 23px 119px -23px rgba(255,207,197,0.88);
}

.desc-center-block {
  background: #bdb3ef;
  box-shadow: 1px 23px 37px -23px rgba(189,179,239,0.9);
  -webkit-box-shadow: 1px 23px 37px -23px rgba(189,179,239,0.9);
  -moz-box-shadow: 1px 23px 37px -23px rgba(189,179,239,0.9);
}

.desc-center-block:hover {
  box-shadow: 1px 23px 119px -23px rgba(189,179,239,0.88);
  -webkit-box-shadow: 1px 23px 119px -23px rgba(189,179,239,0.88);
  -moz-box-shadow: 1px 23px 119px -23px rgba(189,179,239,0.88);
}

.desc-center-block>p {
  color: #766198;
}

.desc-end-block {
  background: #c1dfc4;
  box-shadow: 1px 23px 37px -23px rgba(193,223,196,0.9);
  -webkit-box-shadow: 1px 23px 37px -23px rgba(193,223,196,0.9);
  -moz-box-shadow: 1px 23px 37px -23px rgba(193,223,196,0.9);
}

.desc-end-block:hover {
  background: #c1dfc4;
  box-shadow: 1px 23px 119px -23px rgba(193,223,196,0.88);
  -webkit-box-shadow: 1px 23px 119px -23px rgba(193,223,196,0.88);
  -moz-box-shadow: 1px 23px 119px -23px rgba(193,223,196,0.88);
}

.desc-end-block>p {
  color: #417367;
}

.main__block_shop_description {
  position: relative;
}

.main {
  display: flex;
  flex-direction: column;
}

</style>

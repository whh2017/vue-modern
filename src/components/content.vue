<template>
	<section class="activity-content">
		<div class="item">
			<h2><i class="left"></i>活动一<i class="right"></i></h2>
			<p>刷汇通卡单笔满500元赠一张100元摩登折扣A券，每张汇通卡每天限参与一次。</p>
			<div class="img-box">
				<img src="static/images/local/100.jpg">
			</div>
		</div>

		<div class="item pd-20">
			<h2><i class="left"></i>活动二<i class="right"></i></h2>
			<p class="tc">摩登折扣A券优惠套餐<br>
				3张100元摩登折扣A券+2张金逸影城单人2/3D通兑券
			</p>
			<div class="img-box tc">
				<img src="static/images/local/168.jpg">
				<div class="operate clearfix">
					<div class="round les fl" @click="fn_les">-</div>
					<input class="num fl" v-model="result"  @input="fn_input" maxlength="2">
					<div class="round add fl" @click="fn_add">+</div>
				</div>
			</div>
			<div class="validate flex">
				<i class="mobile"></i>
				<input class="ipt flex-1" placeholder="请输入您的手机号码">
				<button class="btn">获取验证码</button>
			</div>
			<div class="validate flex">
				<i class="code"></i>
				<input class="ipt flex-1" placeholder="请输入验证码">
			</div>
			<div class="buynow">
				<i class="other"></i>
				<a href="#">立即购买</a>
			</div>
			<h2 class="w-470"><i class="left"></i>摩登100元折扣A券兑换流程指引<i class="right"></i></h2>
			<ul class="tips-lump clearfix">
				<li class="clearfix">
					<span class="fl">1、</span>
					<span class="txt fl">购买168元套餐，手机短信收到摩登百货折扣
						A券券码。
					</span>
				</li>
				<li class="clearfix">
					<span class="fl">2、</span>
					<span class="txt fl">凭券码到摩登百货服务台/兑换专区兑换纸质
						A券。
					</span>
				</li>
			</ul>
		</div>
		
		
		<div class="item pd-20">
			<h2><i class="left"></i>活动细则<i class="right"></i></h2>
			<ul class="tips-lump clearfix">
				<li class="clearfix">
					<span class="fl">1、</span>
					<span class="txt fl">本次活动时间：2017年9月15日-9月27日
					</span>
				</li>
				<li class="clearfix">
					<span class="fl">2、</span>
					<span class="txt fl">适用范围：广州摩登5店（岗顶店、海购店、圣地店、黄埔店、花都店）
					</span>
				</li>
				<li class="clearfix">
					<span class="fl">3、</span>
					<span class="txt fl">促销内容:<br>①168元可购买2张金逸影城单人2/3D通兑券+3张100元摩登百货折扣A券，限量500份。<br>②活凡活动期间到广州任意摩登百货，刷汇通卡单笔满500元赠一张100元摩登折扣A券，每张汇通卡每天限参与一次，共限量200张。
					</span>
				</li>
				<li class="clearfix">
					<span class="fl">4、</span>
					<span class="txt fl">摩登百货100元折扣A券仅限摩登百货1换3专柜使用，需在门店服务台/兑换专区兑换成纸质券。
					</span>
				</li>
				<li class="clearfix">
					<span class="fl">5、</span>
					<span class="txt fl">本次活动涉及的所有摩登折扣A券需在2017年9月27日前兑换或使用，且A券不有与其它的活动叠加使用；金逸影城单人2/3D通兑券有限效期2个月，仅限普通2/3D电影通兑，如遇特殊影片、限价片以影城现场补差公告为准，特殊影厅、国家法定节假日兑换规则以影城现场公告为准；
					</span>
				</li>
				<li class="clearfix">
					<span class="fl">6、</span>
					<span class="txt fl">本商品为特惠产品，如发生退货要根据商品券码的使用情况来定退款金额，摩登A券一经兑换成纸质券则无法退货，详情请致电中经客服热线
					</span>
				</li>
				<li class="clearfix">
					<span class="fl">7、</span>
					<span class="txt fl">如对活动有不清晰之处，可以致电中经汇通24小时客服热线：8008830666、020-22230666（固话）/4006630666（手机）或微信留言。
					</span>
				</li>
				<li class="clearfix">
					<span class="fl">8、</span>
					<span class="txt fl">在中国法律范围内，中经汇通保留对本次活动的最终解释权。
					</span>
				</li>
			</ul>
		</div>
		<div class="store">
			<i class="other"></i>
			<a href="#">摩登百货及金逸影院门店清单</a>
		</div>
	</section>
</template>

<script>

export default {
	name: 'content',
	data () {
		return {
			result: 1,
		}
	},
	methods: {
		fn_les(){
			if(this.result>1){
				this.result--;
			}
		},
		fn_add(){
			this.result++;
		},
		fn_input(){
			this.result = this.result.replace(/[^0-9-]+/,'');
		}
	}
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->


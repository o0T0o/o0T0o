(async function() {
  // wait until document is ready
  await new Promise(resolve => {
    const timer = setInterval(() => {
      if (document && document.createElement && document.head && document.head.appendChild) { clearInterval(timer); resolve(); }
    }, 100);
  });

  // inject stylesheet
  const styleElement = document.createElement('style');
  styleElement.textContent = `
:root {
  --v_xs: 5px;
  --v_xsx: 4px;
  --v_xxs: 6px;
  --v_sm: 10px;
  --v_smx: 8px;
  --v_xsm: 12px;
  --v_md: 15px;
  --v_mdx: 14px;
  --v_xmd: 16px;
  --v_lg: 20px;
  --v_lgx: 18px;
  --v_xlg: 22px;
  --v_xl: 25px;
  --v_xlx: 24px;
  --v_xxl: 26px;
  --v_fs_1: 24px;
  --v_fs_2: 18px;
  --v_fs_3: 16px;
  --v_fs_4: 14px;
  --v_fs_5: 13px;
  --v_fs_6: 12px;
  --v_lh_xs: 1;
  --v_lh_sm: 1.25;
  --v_lh_md: 1.5;
  --v_lh_lg: 1.75;
  --v_lh_xl: 2;
  --v_height_xs: 16px;
  --v_height_sm: 24px;
  --v_height_md: 32px;
  --v_height_lg: 40px;
  --v_height_xl: 48px;
  --v_radius: 6px;
  --v_radius_sm: 4px;
  --v_radius_md: 8px;
  --v_radius_lg: 10px;
  --v_brand_pink: var(--brand_pink, #FF6699);
  --v_brand_pink_thin: var(--brand_pink_thin, #FFECF1);
  --v_brand_blue: var(--brand_blue, #00AEEC);
  --v_brand_blue_thin: var(--brand_blue_thin, #DFF6FD);
  --v_stress_red: var(--stress_red, #F85A54);
  --v_stress_red_thin: var(--stress_red_thin, #FEECEA);
  --v_success_green: var(--success_green, #2AC864);
  --v_success_green_thin: var(--success_green_thin, #E4F8EA);
  --v_operate_orange: var(--operate_orange, #FF7F24);
  --v_operate_orange_thin: var(--operate_orange_thin, #FFF0E3);
  --v_pay_yellow: var(--pay_yellow, #FFB027);
  --v_pay_yellow_thin: var(--pay_yellow_thin, #FFF6E4);
  --v_bg1: var(--bg1, #FFFFFF);
  --v_bg2: var(--bg2, #F6F7F8);
  --v_bg3: var(--bg3, #F1F2F3);
  --v_bg1_float: var(--bg1_float, #FFFFFF);
  --v_bg2_float: var(--bg2_float, #F1F2F3);
  --v_text_white: var(--text_white, #FFFFFF);
  --v_text1: var(--text1, #18191C);
  --v_text2: var(--text2, #61666D);
  --v_text3: var(--text3, #9499A0);
  --v_text4: var(--text4, #C9CCD0);
  --v_text_link: var(--text_link, #008AC5);
  --v_text_notice: var(--text_notice, #E58900);
  --v_line_light: var(--line_light, #F1F2F3);
  --v_line_regular: var(--line_regular, #E3E5E7);
  --v_line_bold: var(--line_bold, #C9CCD0);
  --v_graph_white: var(--graph_white, #FFFFFF);
  --v_graph_bg_thin: var(--graph_bg_thin, #F6F7F8);
  --v_graph_bg_regular: var(--graph_bg_regular, #F1F2F3);
  --v_graph_bg_thick: var(--graph_bg_thick, #E3E5E7);
  --v_graph_weak: var(--graph_weak, #C9CCD0);
  --v_graph_medium: var(--graph_medium, #9499A0);
  --v_graph_icon: var(--graph_icon, #61666D);
  --v_shadow: var(--shadow, #000000);
  --v_brand_pink_hover: var(--brand_pink_hover, #FF8CB0);
  --v_brand_pink_active: var(--brand_pink_active, #E84B85);
  --v_brand_pink_disabled: var(--brand_pink_disabled, #FFB3CA);
  --v_brand_blue_hover: var(--brand_blue_hover, #40C5F1);
  --v_brand_blue_active: var(--brand_blue_active, #008AC5);
  --v_brand_blue_disabled: var(--brand_blue_disabled, #80DAF6);
  --v_stress_red_hover: var(--stress_red_hover, #FA857F);
  --v_stress_red_active: var(--stress_red_active, #E23D3D);
  --v_stress_red_disabled: var(--stress_red_disabled, #FCAFAA);
  --v_text_hover: var(--text_hover, #797F87);
  --v_text_active: var(--text_active, #61666D);
  --v_text_disabled: var(--text_disabled, #C9CCD0);
  --v_line_border: var(--line_border, #C9CCD0);
  --v_line_bolder_hover: var(--line_bolder_hover, #E3E5E7);
  --v_line_bolder_active: var(--line_bolder_active, #AEB3B9);
  --v_line_bolder_disabled: var(--line_bolder_disabled, #F1F2F3)
}

@font-face {
  font-family: fanscard;
  src: url(//s1.hdslb.com/bfs/static/jinkela/mall-h5/asserts/fansCard.ttf)
}

.svg-icon {
  display: inline-flex;
  justify-content: center;
  align-items: center
}

.svg-icon svg {
  width: 100%;
  height: 100%
}

.svg-icon.use-color svg path {
  fill: currentColor;
  color: inherit
}

.top-vote-card {
  background-color: var(--graph_bg_thin);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  width: 100%;
  margin-bottom: 24px;
  padding: 12px 16px 12px 10px;
  border-radius: 6px
}

.top-vote-card__multi {
  cursor: pointer
}

.top-vote-card__multi:hover .vote-result-text {
  color: var(--brand_blue);
  transition: .2s
}

.top-vote-card-left {
  width: 40%;
  max-width: calc(40% - 30px);
  margin-right: 20px;
  word-wrap: break-word;
  font-size: 13px;
  line-height: 18px;
  color: var(--text1)
}

.top-vote-card-left__title {
  display: flex;
  align-items: center
}

.top-vote-card-left__title svg {
  margin-right: 2px;
  flex: none
}

.top-vote-card-left__title span {
  display: -webkit-box;
  float: none;
  height: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1
}

.top-vote-card-left__join {
  height: 17px;
  display: flex;
  align-items: center;
  margin-top: 4px;
  font-size: 12px;
  color: var(--text3)
}

.top-vote-card-left__join .vote-icon {
  height: 12px
}

.top-vote-card-left__join span {
  display: flex;
  align-items: center
}

.top-vote-card-right {
  width: 60%;
  font-size: var(--2fde2a28);
  line-height: 17px;
  display: flex;
  --option-height: 40px;
  --option-radius: 6px
}

.top-vote-card-right .vote-text__not-vote {
  opacity: .9
}

.top-vote-card-right .vote-text__not-vote .vui_ellipsis {
  font-weight: 400 !important
}

.top-vote-card-right .vote-text :first-child {
  font-weight: 500
}

.top-vote-card-right .vote-icon {
  flex: none
}

.top-vote-card-right .left-vote-option {
  position: relative;
  display: flex;
  min-width: 120px;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(255, 102, 153, var(--212267a6));
  height: var(--option-height);
  width: var(--38c5ebb3);
  padding-left: 10px;
  border-radius: var(--option-radius) 0 0 var(--option-radius);
  cursor: pointer;
  margin-right: 30px;
  color: var(--332a347e);
  transition: width ease-out .2s
}

.top-vote-card-right .left-vote-option .skew-vote-option {
  position: absolute;
  right: -20px;
  top: 0
}

.top-vote-card-right .left-vote-option .skew-vote-option__fill {
  left: -8px;
  background-color: #f69;
  transform: skew(21deg);
  border-top-right-radius: calc(var(--option-radius) - 2px);
  border-bottom-right-radius: var(--option-radius)
}

.top-vote-card-right .skew-vote-option {
  height: 40px;
  width: 20px;
  overflow: hidden;
  opacity: var(--212267a6);
  pointer-events: none
}

.top-vote-card-right .skew-vote-option__fill {
  pointer-events: all;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%
}

.top-vote-card-right .right-vote-option {
  position: relative;
  display: flex;
  min-width: 120px;
  align-items: center;
  flex-direction: row-reverse;
  justify-content: space-between;
  background-color: rgba(0, 174, 236, var(--212267a6));
  height: var(--option-height);
  width: var(--4b2970aa);
  padding-right: 10px;
  border-radius: 0 var(--option-radius) var(--option-radius) 0;
  cursor: pointer;
  color: var(--1e587827);
  transition: width ease-out .2s
}

.top-vote-card-right .right-vote-option .skew-vote-option {
  position: absolute;
  left: -20px;
  top: 0
}

.top-vote-card-right .right-vote-option .skew-vote-option__fill {
  left: 8px;
  background-color: #00aeec;
  transform: skew(21deg);
  border-top-left-radius: var(--option-radius);
  border-bottom-left-radius: calc(var(--option-radius) - 2px)
}

.top-vote-card-right .right-vote-option .vote-text {
  text-align: right
}

.top-vote-card-right .had_voted {
  cursor: unset
}

.reply-header .reply-notice {
  display: flex;
  align-items: center;
  position: relative;
  min-height: 40px;
  padding: 4px 10px;
  margin-bottom: 16px;
  font-size: 13px;
  border-radius: 2px;
  color: var(--Ye5_u);
  cursor: pointer
}

.reply-header .reply-notice:after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: var(--Ye5_u);
  opacity: .2
}

.reply-header .reply-notice .notice-icon {
  width: 16px;
  height: 16px;
  margin-right: 5px
}

.reply-header .reply-notice .notice-content {
  flex: 1;
  padding: 0 5px;
  vertical-align: top;
  word-wrap: break-word;
  word-break: break-all
}

.reply-header .reply-notice .notice-close-icon {
  position: relative;
  z-index: 1;
  width: 10px;
  height: 10px;
  margin-left: 5px
}

.reply-header .reply-navigation {
  margin-bottom: 22px
}

.reply-header .reply-navigation .nav-bar {
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0
}

.reply-header .reply-navigation .nav-bar .nav-title {
  display: flex;
  align-items: center
}

@media screen and (max-width: 1681px) {
  .reply-header .reply-navigation .nav-bar .nav-title {
    font-size: 20px
  }
}

@media screen and (min-width: 1681px) {
  .reply-header .reply-navigation .nav-bar .nav-title {
    font-size: 24px
  }
}

.reply-header .reply-navigation .nav-bar .nav-title .nav-title-text {
  color: var(--text1);
  font-family: PingFang SC, HarmonyOS_Medium, Helvetica Neue, Microsoft YaHei, sans-serif;
  font-weight: 500
}

@media (-webkit-max-device-pixel-ratio: 1) {
  .reply-header .reply-navigation .nav-bar .nav-title .nav-title-text {
    font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif
  }
}

.reply-header .reply-navigation .nav-bar .nav-title .total-reply {
  margin: 0 36px 0 6px;
  font-weight: 400;
  color: var(--text3)
}

@media screen and (max-width: 1681px) {
  .reply-header .reply-navigation .nav-bar .nav-title .total-reply {
    font-size: 13px
  }
}

@media screen and (min-width: 1681px) {
  .reply-header .reply-navigation .nav-bar .nav-title .total-reply {
    font-size: 14px
  }
}

.reply-header .reply-navigation .nav-bar .nav-select-reply {
  font-family: PingFang SC, HarmonyOS_Medium, Helvetica Neue, Microsoft YaHei, sans-serif;
  font-weight: 500;
  color: var(--text1)
}

@media screen and (max-width: 1681px) {
  .reply-header .reply-navigation .nav-bar .nav-select-reply {
    font-size: 13px
  }
}

@media screen and (min-width: 1681px) {
  .reply-header .reply-navigation .nav-bar .nav-select-reply {
    font-size: 16px
  }
}

@media (-webkit-max-device-pixel-ratio: 1) {
  .reply-header .reply-navigation .nav-bar .nav-select-reply {
    font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif
  }
}

.reply-header .reply-navigation .nav-bar .nav-sort {
  display: flex;
  align-items: center;
  color: var(--text3)
}

@media screen and (max-width: 1681px) {
  .reply-header .reply-navigation .nav-bar .nav-sort {
    font-size: 13px
  }
}

@media screen and (min-width: 1681px) {
  .reply-header .reply-navigation .nav-bar .nav-sort {
    font-size: 16px
  }
}

.reply-header .reply-navigation .nav-bar .nav-sort .part-symbol {
  height: 11px;
  margin: 0 12px;
  border-left: solid 1px
}

.reply-header .reply-navigation .nav-bar .nav-sort .hot-sort {
  cursor: pointer
}

.reply-header .reply-navigation .nav-bar .nav-sort .hot-sort:hover {
  color: var(--brand_blue)
}

.reply-header .reply-navigation .nav-bar .nav-sort .time-sort {
  cursor: pointer
}

.reply-header .reply-navigation .nav-bar .nav-sort .time-sort:hover {
  color: var(--brand_blue)
}

.reply-header .reply-navigation .nav-bar .nav-sort.hot .hot-sort,
.reply-header .reply-navigation .nav-bar .nav-sort.time .time-sort {
  color: var(--text1)
}

.reply-header .reply-navigation .nav-operation-warp {
  position: absolute;
  right: 0
}

/*
 * @bilibili/userAvatar
 * version: 1.2.0-beta.2. Powered by main-frontend
 * 用户头像公共组件.
 * author: wuxiuran
 */
.bili-avatar {
  display: block;
  position: relative;
  background-image: url(data:image/gif;base64,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);
  -webkit-background-size: cover;
  background-size: cover;
  border-radius: 50%;
  margin: 0;
  padding: 0
}

.bili-avatar * {
  margin: 0;
  padding: 0
}

.bili-avatar-face {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%
}

.bili-avatar-pendent-dom {
  height: 176.48%;
  width: 176.48%;
  position: absolute;
  top: -38.33%;
  left: -38.33%;
  overflow: hidden
}

.bili-avatar-pendent-dom img {
  height: 100%;
  min-width: 100%;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none
}

.bili-avatar-img {
  border: none;
  display: block;
  -o-object-fit: cover;
  object-fit: cover;
  image-rendering: -webkit-optimize-contrast
}

.bili-avatar-img-radius {
  border-radius: 50%
}

.bili-avatar-img[src=""],
.bili-avatar-img:not([src]) {
  opacity: 0
}

.bili-avatar-img.bili-avatar-img-error {
  display: none
}

.bili-avatar-right-icon {
  width: 27.5%;
  height: 27.5%;
  position: absolute;
  right: 0;
  bottom: -1px;
  -webkit-background-size: cover;
  background-size: cover;
  image-rendering: -webkit-optimize-contrast
}

.bili-avatar-nft-icon {
  position: absolute;
  width: 27.5%;
  height: 27.5%;
  right: -webkit-calc(27.5% - 1px);
  right: -moz-calc(27.5% - 1px);
  right: calc(27.5% - 1px);
  bottom: -1px;
  -webkit-background-size: cover;
  background-size: cover;
  image-rendering: -webkit-optimize-contrast
}

@-webkit-keyframes bili-avatar {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translateZ(0)
  }

  to {
    -webkit-transform: translate3d(-97.5%, 0, 0);
    transform: translate3d(-97.5%, 0, 0)
  }
}

@-moz-keyframes bili-avatar {
  0% {
    -moz-transform: translate3d(0, 0, 0);
    transform: translateZ(0)
  }

  to {
    -moz-transform: translate3d(-97.5%, 0, 0);
    transform: translate3d(-97.5%, 0, 0)
  }
}

@keyframes bili-avatar {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    transform: translateZ(0)
  }

  to {
    -webkit-transform: translate3d(-97.5%, 0, 0);
    -moz-transform: translate3d(-97.5%, 0, 0);
    transform: translate3d(-97.5%, 0, 0)
  }
}

.bili-avatar .bili-avatar-size-80 {
  width: 22px;
  height: 22px;
  bottom: -1px
}

.bili-avatar .bili-avatar-size-60,
.bili-avatar .bili-avatar-size-50,
.bili-avatar .bili-avatar-size-48 {
  width: 18px;
  height: 18px;
  bottom: -1px
}

.bili-avatar .bili-avatar-size-40,
.bili-avatar .bili-avatar-size-36 {
  width: 14px;
  height: 14px;
  bottom: -1px
}

.bili-avatar .bili-avatar-size-30,
.bili-avatar .bili-avatar-size-24 {
  width: 12px;
  height: 12px;
  bottom: -1px
}

.bili-avatar .bili-avatar-size-nft-80 {
  width: 22px;
  height: 22px;
  bottom: -1px;
  right: -webkit-calc(22px - 1px);
  right: -moz-calc(22px - 1px);
  right: 21px
}

.bili-avatar .bili-avatar-size-nft-60,
.bili-avatar .bili-avatar-size-nft-50,
.bili-avatar .bili-avatar-size-nft-48 {
  width: 18px;
  height: 18px;
  bottom: -1px;
  right: -webkit-calc(18px - 1px);
  right: -moz-calc(18px - 1px);
  right: 17px
}

.bili-avatar .bili-avatar-size-nft-40,
.bili-avatar .bili-avatar-size-nft-36 {
  width: 14px;
  height: 14px;
  bottom: -1px;
  right: -webkit-calc(14px - 1px);
  right: -moz-calc(14px - 1px);
  right: 13px
}

.bili-avatar .bili-avatar-size-nft-30,
.bili-avatar .bili-avatar-size-nft-24 {
  width: 12px;
  height: 12px;
  bottom: -1px;
  right: -webkit-calc(12px - 1px);
  right: -moz-calc(12px - 1px);
  right: 11px
}

.reply-image {
  width: var(--3414c33c);
  height: var(--822197ea)
}

.reply-image.b-img {
  background-color: inherit
}

.reply-image.b-img img {
  width: 100%;
  height: 100%
}

.opacity-enter-active,
.opacity-leave-active {
  transition: opacity .15s ease
}

.opacity-enter-from,
.opacity-leave-to {
  opacity: 0
}

.reply-box {
  display: flex;
  flex-direction: column
}

.reply-box .box-normal {
  display: flex;
  z-index: 2
}

.reply-box .box-normal .reply-box-avatar {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 48px
}

.reply-box .box-normal .reply-box-warp {
  position: relative;
  flex: 1;
  transition: .2s;
  border: 1px solid var(--line_regular);
  border-radius: 6px;
  background-color: var(--bg3);
  overflow-x: hidden
}

.reply-box .box-normal .reply-box-warp.focus-within,
.reply-box .box-normal .reply-box-warp:hover {
  border-color: var(--line_regular);
  background-color: var(--bg1)
}

.reply-box .box-normal .reply-box-warp .textarea-wrap {
  padding: 8px 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 6px;
  cursor: text;
  overflow: hidden
}

.reply-box .box-normal .reply-box-warp .textarea-wrap .vote-info {
  margin-left: 10px;
  margin-bottom: 4px;
  height: 20px;
  font-size: 12px;
  line-height: 17px;
  display: flex;
  align-items: center
}

.reply-box .box-normal .reply-box-warp .textarea-wrap .vote-info__tag {
  flex: none;
  padding: 2px 6px;
  border-radius: 2px;
  margin-right: 4px
}

.reply-box .box-normal .reply-box-warp .textarea-wrap .vote-info__tag--pink {
  background-color: var(--Pi1);
  color: var(--Pi5)
}

.reply-box .box-normal .reply-box-warp .textarea-wrap .vote-info__tag--blue {
  background-color: var(--brand_blue_thin);
  color: var(--brand_blue)
}

.reply-box .box-normal .reply-box-warp .textarea-wrap .vote-info__tag--gary {
  background-color: var(--graph_bg_regular);
  color: var(--text3)
}

.reply-box .box-normal .reply-box-warp .textarea-wrap .vote-info__text {
  max-width: calc(100% - 68px);
  color: var(--text2)
}

.reply-box .box-normal .reply-box-warp .textarea-wrap .vote-info__close {
  flex: none;
  margin-left: 4px;
  cursor: pointer
}

.reply-box .box-normal .reply-box-warp .reply-input {
  padding: 0 8px;
  width: 100%;
  height: 100%;
  border: 1px solid var(--Ga1);
  border-radius: 6px;
  background-color: var(--bg3);
  font-family: inherit;
  line-height: 20px;
  color: var(--text1);
  resize: none;
  outline: none;
  overflow-y: scroll;
  overflow-x: hidden
}

.reply-box .box-normal .reply-box-warp .reply-input.focus,
.reply-box .box-normal .reply-box-warp .reply-input:hover {
  background-color: var(--bg1);
  border-color: var(--graph_weak)
}

.reply-box .box-normal .reply-box-warp .reply-box-textarea {
  padding: 0 8px;
  width: 100%;
  height: 32px;
  border: none;
  border-radius: 6px;
  background-color: transparent;
  font-family: inherit;
  font-size: 14px;
  line-height: 32px;
  color: var(--text1);
  resize: none;
  outline: none
}

.reply-box .box-normal .reply-box-warp .reply-box-textarea::placeholder {
  color: var(--text3)
}

.reply-box .box-normal .reply-box-warp .image-content-wrap {
  background: transparent
}

.reply-box .box-expand {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 80px;
  margin-top: 10px;
  z-index: 1;
  height: 32px;
  transition: all .2s ease-in-out
}

.reply-box .box-expand.hide {
  margin-top: 0;
  height: 0;
  overflow: hidden;
  transition: all .2s ease-in-out
}

.reply-box .box-expand .box-left {
  display: flex;
  align-items: center
}

.reply-box .box-expand .reply-box-emoji {
  width: 32px;
  height: 26px;
  margin-right: 6px;
  position: relative
}

.reply-box .box-expand .reply-box-emoji .emoji-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border: 1px solid var(--line_regular);
  border-radius: 4px;
  color: var(--text3);
  cursor: pointer
}

.reply-box .box-expand .at-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 32px;
  height: 26px;
  margin-right: 6px;
  border: 1px solid var(--line_regular);
  border-radius: 4px;
  color: var(--text3);
  cursor: pointer
}

.reply-box .box-expand .image-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 32px;
  height: 26px;
  border: 1px solid var(--line_regular);
  border-radius: 4px;
  color: var(--text3);
  cursor: pointer
}

.reply-box .box-expand .image-btn.disabled {
  opacity: .4
}

.reply-box .box-expand .image-btn .image-upload-input {
  appearance: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  font-size: 0;
  user-select: auto;
  cursor: pointer
}

.reply-box .box-expand .forward-to-dynamic {
  display: flex;
  align-items: center;
  margin-left: 16px;
  font-size: 12px;
  color: var(--text3)
}

.reply-box .box-expand .forward-to-dynamic .forward-input,
.reply-box .box-expand .forward-to-dynamic .forward-label {
  cursor: pointer
}

.reply-box .box-expand .reply-box-send {
  float: right;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 70px;
  height: 32px;
  border-radius: 6px;
  cursor: pointer
}

.reply-box .box-expand .reply-box-send .send-text {
  position: absolute;
  z-index: 1;
  font-size: 16px;
  color: var(--text_white)
}

.reply-box .box-expand .reply-box-send:after {
  content: "";
  position: absolute;
  opacity: .5;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  background-color: var(--brand_blue)
}

.reply-box .box-expand .reply-box-send:hover:after {
  opacity: 1
}

.reply-box.box-active .box-normal .reply-box-warp .reply-box-textarea.send-active {
  line-height: normal
}

.reply-box.box-active .reply-box-send.send-active:after {
  opacity: 1
}

.reply-box.disabled .box-normal .reply-box-warp .disable-mask {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  border-radius: 6px;
  font-size: 12px;
  color: var(--text3);
  background-color: var(--bg3)
}

.reply-box.disabled .box-normal .reply-box-warp .disable-mask .no-login-mask {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  cursor: pointer
}

.reply-box.disabled .box-normal .reply-box-warp .disable-mask .no-login-mask .login-btn {
  padding: 4px 9px;
  margin: 0 3px;
  border-radius: 4px;
  color: var(--text_white);
  background-color: var(--brand_blue)
}

.reply-box.disabled .box-normal .reply-box-warp .disable-mask .no-login-mask .login-btn:hover {
  background-color: var(--Lb4);
  cursor: pointer
}

.reply-box.disabled .reply-box-send .send-text {
  color: var(--text3)
}

.reply-box.disabled .reply-box-send:after {
  opacity: 1;
  background-color: var(--bg3)
}

.reply-box.fixed-box {
  position: relative;
  z-index: 2;
  padding: 15px 0;
  border-top: .5px solid var(--graph_bg_thick);
  background-color: var(--bg1)
}

.reply-content-container.fold .reply-content {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4
}

.reply-content-container .reply-content {
  color: var(--text1);
  overflow: hidden;
  word-wrap: break-word;
  word-break: break-word;
  white-space: pre-wrap;
  line-height: 24px;
  vertical-align: baseline
}

.reply-content-container .reply-content .note-prefix {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1px 4px;
  border-radius: 4px;
  margin-right: 8px;
  font-size: 12px;
  color: var(--text3);
  line-height: 20px;
  vertical-align: bottom;
  background-color: var(--bg2)
}

.reply-content-container .reply-content .note-prefix .note-icon {
  width: 16px;
  height: 16px
}

.reply-content-container .reply-content .top-icon {
  top: -2px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 30px;
  height: 18px;
  border: 1px solid var(--brand_pink);
  border-radius: 3px;
  margin-right: 5px;
  font-size: 12px;
  color: var(--brand_pink)
}

.reply-content-container .reply-content .emoji-small {
  vertical-align: text-bottom
}

@media screen and (max-width: 1681px) {
  .reply-content-container .reply-content .emoji-small {
    width: 20px;
    height: 20px
  }
}

@media screen and (min-width: 1681px) {
  .reply-content-container .reply-content .emoji-small {
    width: 22px;
    height: 22px
  }
}

.reply-content-container .reply-content .emoji-large {
  width: 50px;
  height: 50px;
  vertical-align: text-bottom
}

.reply-content-container .reply-content .icon {
  width: 20px;
  height: 20px;
  vertical-align: text-top
}

@media screen and (max-width: 1681px) {
  .reply-content-container .reply-content .icon {
    line-height: 24px
  }
}

@media screen and (min-width: 1681px) {
  .reply-content-container .reply-content .icon {
    line-height: 26px
  }
}

.reply-content-container .reply-content .icon.search-word {
  width: 12px;
  display: inline-block;
  background-size: contain;
  background-repeat: no-repeat
}

.reply-content-container .reply-content .jump-link {
  vertical-align: baseline
}

@media screen and (max-width: 1681px) {
  .reply-content-container .reply-content .jump-link {
    line-height: 24px
  }
}

@media screen and (min-width: 1681px) {
  .reply-content-container .reply-content .jump-link {
    line-height: 26px
  }
}

.reply-content-container .expand-content {
  color: var(--text_link);
  cursor: pointer;
  margin-left: 4px
}

.reply-content-container .expand-content:hover {
  color: var(--brand_blue)
}

.sub-reply-item {
  position: relative;
  padding: 8px 0 8px 42px;
  border-radius: 4px
}

@media screen and (max-width: 1681px) {
  .sub-reply-item {
    font-size: 15px;
    line-height: 24px
  }
}

@media screen and (min-width: 1681px) {
  .sub-reply-item {
    font-size: 16px;
    line-height: 26px
  }
}

.sub-reply-item.show-reply {
  background-color: #dff6fb;
  animation-name: enterAnimation-jumpReply-1f8a4018;
  animation-duration: 2s;
  animation-delay: 3s;
  animation-fill-mode: forwards
}

.sub-reply-item .sub-user-info {
  display: inline-flex;
  align-items: center;
  margin-right: 9px;
  line-height: 24px;
  vertical-align: baseline;
  white-space: nowrap
}

.sub-reply-item .sub-user-info .sub-reply-avatar {
  position: absolute;
  left: 8px;
  cursor: pointer
}

.sub-reply-item .sub-user-info .sub-user-name {
  font-family: PingFang SC, HarmonyOS_Medium, Helvetica Neue, Microsoft YaHei, sans-serif;
  font-weight: 500;
  margin-right: 5px;
  color: var(--3bab3096);
  cursor: pointer
}

@media screen and (max-width: 1681px) {
  .sub-reply-item .sub-user-info .sub-user-name {
    font-size: 13px;
    line-height: 24px
  }
}

@media screen and (min-width: 1681px) {
  .sub-reply-item .sub-user-info .sub-user-name {
    font-size: 14px;
    line-height: 26px
  }
}

@media (-webkit-max-device-pixel-ratio: 1) {
  .sub-reply-item .sub-user-info .sub-user-name {
    font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif
  }
}

.sub-reply-item .sub-user-info .sub-user-level {
  cursor: pointer
}

.sub-reply-item .sub-user-info .sub-up-icon {
  cursor: default
}

.sub-reply-item .sub-reply-info {
  display: flex;
  align-items: center;
  position: relative;
  margin-top: 2px;
  font-size: 13px;
  color: var(--text3)
}

.sub-reply-item .sub-reply-info .sub-reply-time {
  margin-right: var(--7530c1e4)
}

.sub-reply-item .sub-reply-info .sub-reply-location {
  margin-right: 20px
}

.sub-reply-item .sub-reply-info .sub-reply-like {
  display: flex;
  align-items: center;
  margin-right: 19px;
  cursor: pointer
}

.sub-reply-item .sub-reply-info .sub-reply-like .sub-like-icon {
  margin-right: 5px;
  color: #9499a0
}

.sub-reply-item .sub-reply-info .sub-reply-like .sub-like-icon:hover,
.sub-reply-item .sub-reply-info .sub-reply-like .sub-like-icon.liked {
  color: #00aeec
}

.sub-reply-item .sub-reply-info .sub-reply-dislike {
  display: flex;
  align-items: center;
  margin-right: 19px
}

.sub-reply-item .sub-reply-info .sub-reply-dislike .sub-dislike-icon {
  color: #9499a0;
  cursor: pointer
}

.sub-reply-item .sub-reply-info .sub-reply-dislike .sub-dislike-icon:hover,
.sub-reply-item .sub-reply-info .sub-reply-dislike .sub-dislike-icon.disliked {
  color: #00aeec
}

.sub-reply-item .sub-reply-info .sub-reply-btn {
  cursor: pointer
}

.sub-reply-item .sub-reply-info .sub-reply-btn:hover {
  color: var(--brand_blue)
}

.sub-reply-item .sub-reply-info .sub-reply-operation-warp {
  position: absolute;
  right: 40px;
  opacity: 0
}

.sub-reply-item:hover .sub-reply-info .sub-reply-operation-warp {
  opacity: 1
}

@keyframes enterAnimation-jumpReply-1f8a4018 {
  0% {
    background-color: #dff6fb
  }

  to {
    background-color: #dff6fb00
  }
}

.sub-reply-list .view-more {
  padding-left: 8px;
  font-size: 13px;
  color: var(--text3)
}

.sub-reply-list .view-more .view-more-default .view-more-btn {
  cursor: pointer
}

.sub-reply-list .view-more .view-more-default .view-more-btn:hover {
  color: var(--brand_blue)
}

.sub-reply-list .view-more .view-more-pagination {
  color: var(--text1)
}

.sub-reply-list .view-more .view-more-pagination .pagination-page-count {
  margin-right: 10px
}

.sub-reply-list .view-more .view-more-pagination .pagination-btn {
  margin: 0 4 0 14px;
  cursor: pointer
}

.sub-reply-list .view-more .view-more-pagination .pagination-btn:hover {
  color: var(--brand_blue)
}

.sub-reply-list .view-more .view-more-pagination .pagination-page-number {
  margin: 0 4px;
  cursor: pointer
}

.sub-reply-list .view-more .view-more-pagination .pagination-page-number:hover,
.sub-reply-list .view-more .view-more-pagination .pagination-page-number.current-page {
  color: var(--brand_blue)
}

.sub-reply-list .view-more .view-more-pagination .pagination-page-dot {
  margin: 0 4px;
  cursor: default
}

.image-exhibition {
  margin-top: 8px;
  user-select: none
}

.image-exhibition .preview-image-container {
  max-width: var(--dacbf126);
  display: flex;
  flex-wrap: wrap;
  row-gap: var(--77b1c8ee);
  column-gap: var(--0c349aa2)
}

.image-exhibition .preview-image-container .image-item-wrap {
  display: flex;
  justify-content: center;
  position: relative;
  border-radius: var(--7fefecd2);
  overflow: hidden;
  cursor: zoom-in
}

.image-exhibition .preview-image-container .image-item-wrap.vertical {
  flex-direction: column
}

.image-exhibition .preview-image-container .image-item-wrap.extra-long {
  justify-content: start
}

.image-exhibition .preview-image-container .image-item-wrap .more-image {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 4px;
  bottom: 4px;
  height: 20px;
  padding: 0 6px;
  border-radius: 4px;
  font-size: 13px;
  color: var(--text_white);
  font-weight: 500;
  line-height: 18px;
  background: rgba(0, 0, 0, .7)
}

.image-exhibition .preview-image-container .client-image-item-warp:nth-child(3n+1) {
  border-bottom-right-radius: 0;
  border-top-right-radius: 0
}

.image-exhibition .preview-image-container .client-image-item-warp:nth-child(3n+2) {
  border-radius: 0
}

.image-exhibition .preview-image-container .client-image-item-warp:nth-child(3n+3) {
  border-bottom-left-radius: 0;
  border-top-left-radius: 0
}

.image-exhibition .preview-image-container .client-image-item-warp:nth-last-child(1) {
  border-bottom-right-radius: var(--7fefecd2);
  border-top-right-radius: var(--7fefecd2)
}

.image-exhibition .preview-image-container .expand-image-item-warp:nth-child(1) {
  border-radius: var(--7fefecd2) 0 0 0
}

.image-exhibition .preview-image-container .expand-image-item-warp:nth-child(3) {
  border-radius: 0 var(--7fefecd2) 0 0
}

.image-exhibition .preview-image-container .expand-image-item-warp:nth-child(7) {
  border-radius: 0 0 0 var(--7fefecd2)
}

.image-exhibition .preview-image-container .expand-image-item-warp:nth-child(9) {
  border-radius: 0 0 var(--7fefecd2) 0
}

.image-exhibition .preview-image-container .expand-image-item-warp:nth-child(3n+2) {
  border-radius: 0
}

.image-exhibition .preview-image-container .expand-image-item-warp.expand-image-two-rows:nth-child(4) {
  border-radius: 0 0 0 var(--7fefecd2)
}

.image-exhibition .preview-image-container .expand-image-item-warp.expand-image-two-rows:nth-child(6) {
  border-radius: 0 0 var(--7fefecd2) 0
}

.reply-user-sailing {
  height: 48px
}

.vote-warp {
  display: flex;
  width: 100%;
  height: 80px;
  border: .5px solid var(--graph_bg_thick);
  border-radius: 4px;
  margin: 10px 0
}

.vote-warp .vote-icon-warp {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: 80px;
  flex-shrink: 0;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  background-color: var(--brand_blue_thin)
}

.vote-warp .vote-icon-warp .vote-icon {
  width: 40px;
  height: 40px
}

.vote-warp .vote-container {
  display: flex;
  align-items: center;
  flex: 1;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  background-color: var(--bg1)
}

.vote-warp .vote-container .vote-text-warp {
  flex: 1;
  padding-left: 15px
}

.vote-warp .vote-container .vote-text-warp .vote-title {
  font-size: 14px;
  color: var(--text1)
}

.vote-warp .vote-container .vote-text-warp .vote-desc {
  margin-top: 10px;
  font-size: 12px;
  color: var(--text3)
}

.vote-warp .vote-container .vote-btn-warp {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: 90px;
  flex-shrink: 0
}

.vote-warp .vote-container .vote-btn-warp .vote-btn {
  width: 54px;
  height: 28px;
  border-radius: 4px;
  font-size: 13px;
  text-align: center;
  line-height: 28px;
  color: var(--text_white);
  background-color: var(--brand_blue);
  cursor: pointer
}

.vote-warp .vote-container .vote-btn-warp .vote-btn:hover {
  background-color: var(--Lb4)
}

.vote-dialog {
  max-height: 100vh;
  overflow-y: auto
}

.vote-dialog::-webkit-scrollbar {
  width: 4px;
  border-radius: 4px;
  background-color: transparent
}

.vote-dialog::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background-color: var(--graph_bg_thick);
  transition: .3s ease-in-out
}

.vote-dialog::-webkit-scrollbar-track {
  border-radius: 4px;
  background-color: transparent
}

.vote-dialog .vote-iframe-warp {
  height: 600px;
  padding-top: 10px;
  border-top: .5px solid var(--graph_weak)
}

.vote-dialog .vote-iframe-warp .vote-iframe {
  width: 100%;
  height: 100%
}

.reply-item {
  position: relative
}

.reply-item .login-limit-mask {
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  pointer-events: none
}

.reply-item .login-limit-mask .mask-top {
  height: 80%;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, var(--bg1) 100%)
}

.reply-item .login-limit-mask .mask-bottom {
  height: 20%;
  background: var(--bg1)
}

.reply-item.login-limit-reply-end .login-limit-mask {
  display: block
}

.reply-item .root-reply-container {
  padding: 22px 0 0 80px
}

.reply-item .root-reply-container.show-reply {
  animation-name: enterAnimation-jumpReply-7041f671;
  animation-duration: 5s;
  animation-fill-mode: forwards
}

.reply-item .root-reply-container .root-reply-avatar {
  display: flex;
  justify-content: center;
  position: absolute;
  left: 0;
  width: 80px;
  cursor: pointer
}

.reply-item .root-reply-container .content-warp {
  flex: 1;
  position: relative
}

.reply-item .root-reply-container .content-warp .reply-decorate {
  position: absolute;
  top: 0;
  right: 0;
  user-select: none;
  transform: translateY(-15px)
}

.reply-item .root-reply-container .content-warp .reply-decorate .easter-egg-label {
  width: 82px;
  height: 36px;
  transform: translateY(6px)
}

.reply-item .root-reply-container .content-warp .reply-decorate .easter-egg-label img {
  width: 100%;
  height: 100%
}

.reply-item .root-reply-container .content-warp .reply-decorate .selected-reply .selected-reply-icon {
  width: var(--213e47ca);
  height: var(--268890ba)
}

.reply-item .root-reply-container .content-warp .reply-decorate .user-sailing {
  display: flex;
  align-items: center
}

.reply-item .root-reply-container .content-warp .reply-decorate .user-sailing .user-sailing-img {
  height: 48px
}

.reply-item .root-reply-container .content-warp .reply-decorate .user-sailing .user-sailing-text {
  position: absolute;
  right: 0;
  font-size: 13px;
  color: var(--2bd55d12);
  line-height: 16px;
  word-break: keep-all;
  transform: scale(.7);
  transform-origin: center center
}

.reply-item .root-reply-container .content-warp .reply-decorate .user-sailing .user-sailing-text .sailing-text {
  font-family: fanscard
}

.reply-item .root-reply-container .content-warp .user-info {
  display: flex;
  align-items: center;
  margin-bottom: 4px
}

@media screen and (max-width: 1681px) {
  .reply-item .root-reply-container .content-warp .user-info {
    font-size: 13px
  }
}

@media screen and (min-width: 1681px) {
  .reply-item .root-reply-container .content-warp .user-info {
    font-size: 14px
  }
}

.reply-item .root-reply-container .content-warp .user-info .user-name {
  font-family: PingFang SC, HarmonyOS_Medium, Helvetica Neue, Microsoft YaHei, sans-serif;
  font-weight: 500;
  margin-right: 5px;
  color: var(--dc735352);
  cursor: pointer
}

@media (-webkit-max-device-pixel-ratio: 1) {
  .reply-item .root-reply-container .content-warp .user-info .user-name {
    font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif
  }
}

.reply-item .root-reply-container .content-warp .user-info .user-level {
  cursor: pointer
}

.reply-item .root-reply-container .content-warp .user-info .up-icon {
  cursor: default
}

.reply-item .root-reply-container .content-warp .user-info .contractor-box {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: var(--697d5c46);
  height: 12px;
  padding: 2px;
  border-radius: 2px;
  background-color: var(--brand_pink_thin)
}

.reply-item .root-reply-container .content-warp .user-info .contractor-box.originalFan {
  border: .5px solid var(--brand_pink);
  background-color: transparent
}

.reply-item .root-reply-container .content-warp .user-info .contractor-box .contractor-text {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  transform-origin: center center;
  transform: scale(.5);
  position: absolute;
  color: var(--brand_pink);
  white-space: nowrap
}

.reply-item .root-reply-container .content-warp .user-info .fan-badge {
  display: flex;
  align-items: center;
  height: 14px;
  padding-left: 5px;
  border: .5px solid var(--3d3b5a1e);
  border-radius: 10px;
  margin-left: 5px;
  background-image: var(--35269ce2)
}

.reply-item .root-reply-container .content-warp .user-info .fan-badge .badge-icon-wrap {
  display: flex;
  align-items: center;
  position: relative;
  width: var(--1f5204fd)
}

.reply-item .root-reply-container .content-warp .user-info .fan-badge .badge-icon-wrap .badge-frist-icon {
  position: absolute;
  left: -8px;
  width: 20px;
  height: 20px
}

.reply-item .root-reply-container .content-warp .user-info .fan-badge .badge-icon-wrap .badge-second-icon {
  position: absolute;
  right: 0;
  width: 8px;
  height: 11px
}

.reply-item .root-reply-container .content-warp .user-info .fan-badge .badge-name-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: var(--4f9eed68);
  height: 100%;
  margin-right: 4px
}

.reply-item .root-reply-container .content-warp .user-info .fan-badge .badge-name-wrap .badge-name {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  transform-origin: center center;
  transform: scale(.5);
  position: absolute;
  top: 50%;
  left: 50%;
  color: var(--57e6be72);
  font-weight: 500;
  white-space: nowrap;
  transform: scale(.5) translate(-50%, -50%);
  transform-origin: 0 0
}

.reply-item .root-reply-container .content-warp .user-info .fan-badge .badge-level-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 11.5px;
  height: 11.5px;
  border-radius: 50%;
  margin-right: .5px;
  background-color: var(--59f85baa)
}

.reply-item .root-reply-container .content-warp .user-info .fan-badge .badge-level-wrap .badge-level {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  transform-origin: center center;
  transform: scale(.5);
  position: absolute;
  top: 52%;
  left: 50%;
  font-family: Reeji-CloudHuPo-GBK;
  color: var(--103312b6);
  font-weight: 500;
  white-space: nowrap;
  line-height: 1;
  transform: scale(.5) translate(-50%, -43%);
  transform-origin: 0 0
}

.reply-item .root-reply-container .content-warp .vote-info {
  margin-bottom: 4px;
  height: 20px;
  font-size: 12px;
  line-height: 17px;
  display: flex;
  align-items: center
}

.reply-item .root-reply-container .content-warp .vote-info__tag {
  padding: 2px 6px;
  border-radius: 2px;
  margin-right: 4px;
  flex: none
}

.reply-item .root-reply-container .content-warp .vote-info__tag--pink {
  background-color: var(--Pi1);
  color: var(--Pi5)
}

.reply-item .root-reply-container .content-warp .vote-info__tag--blue {
  background-color: var(--brand_blue_thin);
  color: var(--brand_blue)
}

.reply-item .root-reply-container .content-warp .vote-info__tag--gray {
  background-color: var(--graph_bg_regular);
  color: var(--text3)
}

.reply-item .root-reply-container .content-warp .vote-info__text {
  color: var(--Ga7_u)
}

.reply-item .root-reply-container .content-warp .root-reply {
  position: relative;
  padding: 2px 0
}

@media screen and (max-width: 1681px) {
  .reply-item .root-reply-container .content-warp .root-reply {
    font-size: 15px;
    line-height: 24px
  }
}

@media screen and (min-width: 1681px) {
  .reply-item .root-reply-container .content-warp .root-reply {
    font-size: 16px;
    line-height: 26px
  }
}

.reply-item .root-reply-container .content-warp .root-reply .reply-content-container {
  display: block;
  overflow: hidden;
  width: 100%
}

.reply-item .root-reply-container .content-warp .root-reply .reply-info {
  display: flex;
  align-items: center;
  position: relative;
  margin-top: 2px;
  font-size: 13px;
  color: var(--text3)
}

.reply-item .root-reply-container .content-warp .root-reply .reply-info .reply-time {
  margin-right: var(--472bae2d)
}

.reply-item .root-reply-container .content-warp .root-reply .reply-info .reply-location {
  margin-right: 20px
}

.reply-item .root-reply-container .content-warp .root-reply .reply-info .reply-like {
  display: flex;
  align-items: center;
  margin-right: 19px;
  cursor: pointer
}

.reply-item .root-reply-container .content-warp .root-reply .reply-info .reply-like .like-icon {
  margin-right: 5px;
  color: #9499a0
}

.reply-item .root-reply-container .content-warp .root-reply .reply-info .reply-like .like-icon:hover,
.reply-item .root-reply-container .content-warp .root-reply .reply-info .reply-like .like-icon.liked {
  color: #00aeec
}

.reply-item .root-reply-container .content-warp .root-reply .reply-info .reply-dislike {
  display: flex;
  align-items: center;
  margin-right: 19px
}

.reply-item .root-reply-container .content-warp .root-reply .reply-info .reply-dislike .dislike-icon {
  color: #9499a0;
  cursor: pointer
}

.reply-item .root-reply-container .content-warp .root-reply .reply-info .reply-dislike .dislike-icon:hover,
.reply-item .root-reply-container .content-warp .root-reply .reply-info .reply-dislike .dislike-icon.disliked {
  color: #00aeec
}

.reply-item .root-reply-container .content-warp .root-reply .reply-info .reply-btn {
  cursor: pointer
}

.reply-item .root-reply-container .content-warp .root-reply .reply-info .reply-btn:hover {
  color: var(--brand_blue)
}

.reply-item .root-reply-container .content-warp .root-reply .reply-info .reply-operation-warp {
  position: absolute;
  right: 20px;
  display: none
}

.reply-item .root-reply-container .content-warp .root-reply .reply-tag-list {
  display: flex;
  align-items: center;
  margin-top: 6px;
  font-size: 12px;
  line-height: 17px
}

.reply-item .root-reply-container .content-warp .root-reply .reply-tag-list .reply-tag-item {
  padding: 2px 6px;
  border-radius: 2px;
  margin-right: 10px
}

.reply-item .root-reply-container:hover .content-warp .root-reply .reply-info .reply-operation-warp {
  display: block
}

.reply-item .sub-reply-container {
  padding-left: 72px
}

.reply-item .reply-box-container {
  padding: 25px 0 10px 80px
}

.reply-item .bottom-line {
  margin-left: 80px;
  border-bottom: 1px solid var(--graph_bg_thick);
  margin-top: 14px
}

.reply-item .reply-dynamic-card {
  position: absolute;
  z-index: 10;
  top: 30px;
  left: 400px
}

@keyframes enterAnimation-jumpReply-7041f671 {
  0% {
    background-color: #dff6fb
  }

  to {
    background-color: #dff6fb00
  }
}

.reply-list {
  margin-top: 14px;
  padding-bottom: 100px
}

.reply-list .reply-end-mark {
  height: 100px
}

.reply-list .reply-end,
.reply-list .reply-loading,
.reply-list .view-all-reply {
  margin-top: 20px;
  font-size: 13px;
  color: var(--text3);
  text-align: center
}

.reply-list .view-all-reply:hover {
  color: var(--brand_blue);
  cursor: pointer
}

.reply-list .login-prompt {
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(100% - 80px);
  height: 50px;
  margin: 16px 0 0 auto;
  border-radius: 6px;
  font-size: 14px;
  color: var(--brand_blue);
  background-color: var(--brand_blue_thin);
  transition: .2s;
  cursor: pointer
}

.reply-list .login-prompt:hover {
  background-color: var(--Lb2)
}

.user-card {
  position: absolute;
  top: var(--555c4a14);
  left: var(--8468e010);
  z-index: 10;
  width: 366px;
  border: .5px solid var(--graph_weak);
  border-radius: 8px;
  background-color: var(--bg1);
  box-shadow: 0 0 30px #0000001a
}

.user-card .card-bg {
  width: 100%;
  height: 85px;
  border-radius: 8px 8px 0 0;
  overflow: hidden;
  background-image: var(--71924242);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center
}

.user-card .user-card-avatar {
  display: flex;
  justify-content: center;
  position: absolute;
  width: 70px;
  margin-top: 10px;
  cursor: pointer
}

.user-card .card-content {
  display: flex;
  flex-direction: column;
  padding: 12px 20px 16px 70px
}

.user-card .card-content .card-user-info {
  display: flex;
  align-items: center;
  color: var(--text1);
  margin-bottom: 10px
}

.user-card .card-content .card-user-info .card-user-name {
  max-width: 160px;
  margin-right: 5px;
  font-size: 16px;
  font-weight: 600;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: var(--text1);
  color: var(--7ba58c95);
  text-decoration: none
}

.user-card .card-content .card-user-info .card-user-sex {
  width: 16px;
  height: 16px;
  margin-right: 5px
}

.user-card .card-content .card-user-info .card-user-level {
  margin-right: 5px;
  cursor: pointer
}

.user-card .card-content .card-user-info .card-user-vip {
  display: flex;
  justify-content: center;
  align-items: center;
  width: var(--7a718880);
  height: 16px;
  padding: 1px 4px;
  border-radius: 2px;
  color: var(--612d8511);
  background-color: var(--29ab308e);
  cursor: default
}

.user-card .card-content .card-user-info .card-user-vip .card-vip-text {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  transform-origin: center center;
  transform: scale(.5);
  white-space: nowrap;
  font-style: normal
}

.user-card .card-content .card-social-info {
  display: flex;
  align-items: center;
  font-size: 12px;
  color: var(--text1)
}

.user-card .card-content .card-social-info .card-user-attention,
.user-card .card-content .card-social-info .card-user-fans,
.user-card .card-content .card-social-info .card-user-like {
  margin-right: 18px;
  color: inherit;
  text-decoration: none
}

.user-card .card-content .card-social-info .card-user-attention .social-info-title,
.user-card .card-content .card-social-info .card-user-fans .social-info-title,
.user-card .card-content .card-social-info .card-user-like .social-info-title {
  margin-left: 3px;
  color: var(--text3)
}

.user-card .card-content .card-verify-info {
  padding-top: 10px;
  font-size: 12px;
  color: var(--text3)
}

.user-card .card-content .card-verify-info .card-verify-icon {
  vertical-align: text-bottom;
  margin-right: 3px
}

.user-card .card-content .card-sign {
  padding-top: 8px;
  font-size: 12px;
  color: var(--text3);
  word-break: break-all
}

.user-card .card-content .card-btn-warp {
  display: flex;
  margin-top: 16px;
  font-size: 14px
}

.user-card .card-content .card-btn-warp .card-attention-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 30px;
  border-radius: 4px;
  margin-right: 8px;
  color: var(--text_white);
  background-color: var(--brand_blue);
  transition: .4s;
  cursor: pointer
}

.user-card .card-content .card-btn-warp .card-attention-btn .cancel-attention-text {
  display: none;
  position: absolute
}

.user-card .card-content .card-btn-warp .card-attention-btn.attention {
  color: var(--text2);
  background-color: var(--bg3)
}

.user-card .card-content .card-btn-warp .card-attention-btn.attention:hover .attention-text {
  display: none
}

.user-card .card-content .card-btn-warp .card-attention-btn.attention:hover .cancel-attention-text {
  display: inline
}

.user-card .card-content .card-btn-warp .card-message-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 30px;
  border: 1px solid var(--graph_weak);
  border-radius: 4px;
  color: var(--text2);
  cursor: pointer
}

.user-card .card-content .card-btn-warp .card-message-btn:hover {
  border-color: var(--brand_blue);
  color: var(--brand_blue)
}

.dynamic-card {
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 10;
  top: var(--7b058890);
  left: 400px;
  width: 710px;
  height: 550px;
  border-radius: 6px;
  background-color: var(--bg1);
  box-shadow: 0 0 25px #00000026
}

.dynamic-card .card-header {
  display: flex;
  align-items: center;
  flex-basis: 50px;
  padding: 0 10px;
  border-bottom: .5px solid var(--line_light)
}

.dynamic-card .card-header .card-title {
  flex: 1;
  text-align: center;
  font-size: 16px;
  color: var(--text1)
}

.dynamic-card .card-header .close-card {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 6px;
  color: var(--text2);
  transition: .2s;
  cursor: pointer
}

.dynamic-card .card-header .close-card:hover {
  background-color: var(--bg3)
}

.dynamic-card .card-content {
  flex: 1
}

.dynamic-card .card-content::-webkit-scrollbar {
  width: 4px;
  border-radius: 4px;
  background-color: transparent
}

.dynamic-card .card-content::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background-color: var(--graph_bg_thick);
  transition: .3s ease-in-out
}

.dynamic-card .card-content::-webkit-scrollbar-track {
  border-radius: 4px;
  background-color: transparent
}

.dynamic-card .card-content .dynamic-card-iframe {
  width: 100%;
  height: 100%
}

.reply-view-image {
  position: fixed;
  z-index: 999999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(24, 25, 28, .85);
  transform: scale(1);
  user-select: none;
  cursor: default;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none
}

.reply-view-image,
.reply-view-image * {
  box-sizing: border-box
}

.reply-view-image .operation-btn .operation-btn-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 2;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  color: var(--text_white);
  background: rgba(0, 0, 0, .58);
  transition: .2s;
  cursor: pointer
}

.reply-view-image .operation-btn .operation-btn-icon:hover {
  color: var(--brand_pink)
}

.reply-view-image .operation-btn .operation-btn-icon.close-container {
  top: 16px;
  right: 16px
}

.reply-view-image .operation-btn .operation-btn-icon.last-image {
  top: 50%;
  left: 16px;
  transform: translateY(-50%)
}

.reply-view-image .operation-btn .operation-btn-icon.next-image {
  top: 50%;
  right: 16px;
  transform: translateY(-50%)
}

.reply-view-image .show-image-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 100%;
  max-height: 100%;
  padding: 0 100px;
  overflow: auto
}

.reply-view-image .show-image-wrap .loading-svga {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 42px;
  height: 42px
}

.reply-view-image .show-image-wrap.vertical {
  flex-direction: column;
  justify-content: var(--c186e874)
}

.reply-view-image .show-image-wrap .image-content {
  width: calc(100vw - 200px);
  max-width: var(--34114ac9);
  -webkit-user-drag: none
}

.reply-view-image .preview-list {
  display: flex;
  align-items: center;
  position: absolute;
  left: 50%;
  bottom: 30px;
  z-index: 2;
  padding: 6px 10px;
  border-radius: 8px;
  background: rgba(24, 25, 28, .8);
  backdrop-filter: blur(20px);
  transform: translate(-50%)
}

.reply-view-image .preview-list .preview-item-box {
  padding: 1px;
  border: 2px solid transparent;
  border-radius: 8px;
  transition: .3s;
  cursor: pointer
}

.reply-view-image .preview-list .preview-item-box.active {
  border-color: var(--brand_pink)
}

.reply-view-image .preview-list .preview-item-box .preview-item-wrap {
  display: flex;
  justify-content: center;
  overflow: hidden;
  width: 100%;
  height: 100%;
  border-radius: 6px
}

.reply-view-image .preview-list .preview-item-box .preview-item-wrap.vertical {
  flex-direction: column
}

.reply-view-image .preview-list .preview-item-box .preview-item-wrap.extra-long {
  justify-content: start
}

.reply-view-image .preview-list .preview-item-box .preview-item-wrap .item-content {
  -webkit-user-drag: none
}

.reply-view-image--transition-enter-active,
.reply-view-image--transition-leave-active {
  transition: all .3s ease
}

.reply-view-image--transition-enter-from,
.reply-view-image--transition-leave-to {
  transform: scale(.4);
  opacity: 0
}

.reply-warp {
  position: relative
}

.reply-warp .fixed-reply-box {
  position: fixed;
  bottom: 0;
  left: var(--3e88ddc5);
  z-index: 10;
  width: var(--d9a0b070)
}

.reply-warp .fixed-reply-box .reply-box-shadow {
  position: absolute;
  top: -10px;
  z-index: 1;
  width: 100%;
  height: 36px;
  border-radius: 50%;
  background-color: #00000014;
  filter: blur(10px)
}

.reply-warp .fixed-reply-box--transition-enter-active,
.reply-warp .fixed-reply-box--transition-leave-active {
  transition: opacity .5s ease
}

.reply-warp .fixed-reply-box--transition-enter-from,
.reply-warp .fixed-reply-box--transition-leave-to {
  opacity: 0
}

.bili-comment.browser-pc {
  background-color: var(--bg1)
}

.bili-comment.browser-pc * {
  font-family: PingFang SC, HarmonyOS_Regular, Helvetica Neue, Microsoft YaHei, sans-serif;
  font-weight: 400;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased
}

@media (-webkit-max-device-pixel-ratio: 1) {
  .bili-comment.browser-pc * {
    font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif
  }
}

.bili-comment.browser-pc * ul {
  padding: 0;
  margin: 0;
  list-style: none
}

.bili-comment.browser-pc * a {
  text-decoration: none;
  background-color: transparent;
  color: var(--text_link);
  cursor: pointer
}

.bili-comment.browser-pc * a:hover {
  color: var(--Lb4)
}

.bili-comment.browser-pc * i {
  font-style: normal
}

.bili-comment.browser-pc * p {
  margin: 0;
  padding: 0
}

.bili-comment.browser-pc .comment-container {
  animation-name: enterAnimation-commentContainer;
  animation-duration: 1s;
  animation-fill-mode: forwards
}

.reply-operation-client {
  display: inline-flex;
  position: relative
}

.reply-operation-client .operation-icon {
  border-radius: 4px;
  cursor: pointer
}

.reply-operation-client .operation-icon:hover {
  background-color: var(--graph_bg_thick)
}

.reply-operation-client .operation-list {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 10px;
  right: 0;
  z-index: 10;
  width: 180px;
  padding: 12px 0;
  border-radius: 6px;
  font-size: 14px;
  color: var(--text2);
  background-color: var(--bg1_float);
  box-shadow: 0 0 5px #0003
}

.reply-operation-client .operation-list .operation-option {
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 15px;
  cursor: pointer
}

.reply-operation-client .operation-list .operation-option:hover {
  background-color: var(--graph_bg_thick)
}

.reply-operation-client .operation-list .delete-reply-modal {
  position: absolute;
  top: 0;
  left: 50%;
  width: auto;
  padding: 10px 20px;
  border: 1px solid var(--graph_bg_thick);
  border-radius: 8px;
  margin-bottom: 100px;
  font-size: 12px;
  line-height: 12px;
  text-align: center;
  white-space: nowrap;
  background-color: var(--bg1);
  box-shadow: 0 0 5px #0003;
  transform: translate(-50%, -100%)
}

.reply-operation-client .operation-list .delete-reply-modal .delete-reply-btn {
  display: flex;
  justify-content: center
}

.reply-operation-client .operation-list .delete-reply-modal .delete-reply-btn .comfirm-delete {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 20px;
  border-radius: 4px;
  margin-right: 20px;
  color: var(--text_white);
  background-color: var(--brand_blue)
}

.reply-operation-client .operation-list .delete-reply-modal .delete-reply-btn .comfirm-delete:hover {
  background-color: var(--Lb4)
}

.reply-operation-client .operation-list .delete-reply-modal .delete-reply-btn .cancel-delete {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 20px
}

.reply-operation-client .operation-list .delete-reply-modal .delete-reply-btn .cancel-delete:hover {
  color: var(--brand_blue)
}

.select-reply-dialog-client .select-dialog-content {
  text-align: left
}

.select-reply-dialog-client .cancel-select-reply {
  width: 130px;
  margin-right: 20px
}

.select-reply-dialog-client .comfirm-select-reply {
  width: 130px
}

.close-reply-dialog-client .close-reply-dialog-content {
  text-align: left
}

.close-reply-dialog-client .cancel-close-reply {
  width: 130px;
  margin-right: 20px
}

.close-reply-dialog-client .comfirm-close-reply {
  width: 130px
}

.close-danmaku-dialog-client .close-danmaku-dialog-content {
  text-align: left
}

.close-danmaku-dialog-client .cancel-close-danmaku {
  width: 130px;
  margin-right: 20px
}

.close-danmaku-dialog-client .comfirm-close-danmaku {
  width: 130px
}

.blacklist-dialog-client .blacklist-dialog-content {
  text-align: center
}

.blacklist-dialog-client .comfirm-pull-blacklist {
  margin-right: 20px
}

.reply-header-client .reply-notice {
  display: flex;
  align-items: center;
  position: relative;
  height: 40px;
  padding: 11px 14px;
  margin-bottom: 10px;
  font-size: 12px;
  border-radius: 2px;
  color: var(--text_notice);
  background-color: var(--Or0);
  cursor: pointer
}

.reply-header-client .reply-notice .notice-content {
  flex: 1;
  position: relative;
  padding: 0 5px;
  line-height: 18px;
  vertical-align: top;
  word-wrap: break-word;
  word-break: break-all;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: 2s
}

.reply-header-client .reply-navigation {
  margin: 12px 0
}

.reply-header-client .reply-navigation .nav-bar {
  display: flex;
  align-items: center;
  position: relative;
  list-style: none;
  margin: 0;
  padding: 0
}

.reply-header-client .reply-navigation .nav-bar .nav-select-reply {
  font-size: 12px;
  color: var(--text1)
}

.reply-header-client .reply-navigation .nav-bar .nav-sort {
  display: flex;
  align-items: center;
  font-size: 12px;
  color: var(--text3)
}

.reply-header-client .reply-navigation .nav-bar .nav-sort .part-symbol {
  height: 10px;
  margin: 0 8px;
  border-left: solid 1px
}

.reply-header-client .reply-navigation .nav-bar .nav-sort .hot-sort {
  cursor: pointer
}

.reply-header-client .reply-navigation .nav-bar .nav-sort .hot-sort:hover {
  color: var(--brand_blue)
}

.reply-header-client .reply-navigation .nav-bar .nav-sort .time-sort {
  cursor: pointer
}

.reply-header-client .reply-navigation .nav-bar .nav-sort .time-sort:hover {
  color: var(--brand_blue)
}

.reply-header-client .reply-navigation .nav-bar .nav-sort.hot .hot-sort,
.reply-header-client .reply-navigation .nav-bar .nav-sort.time .time-sort {
  color: var(--text1)
}

.reply-header-client .reply-navigation .nav-operation-warp {
  position: absolute;
  right: 0
}

.reply-box-client {
  display: flex;
  flex-direction: column
}

.reply-box-client .reply-box-warp {
  position: relative;
  flex: 1
}

.reply-box-client .reply-box-warp .reply-box-textarea {
  width: 100%;
  height: 32px;
  padding: 5px 12px;
  border: 1px solid transparent;
  border-radius: 6px;
  line-height: 20px;
  color: var(--text1);
  background-color: var(--bg2);
  resize: none;
  outline: none;
  transition: .2s
}

.reply-box-client .reply-box-warp .reply-box-textarea::placeholder {
  color: var(--text4)
}

.reply-box-client .reply-box-warp .reply-box-textarea.focus,
.reply-box-client .reply-box-warp .reply-box-textarea:hover {
  border-color: var(--brand_pink)
}

.reply-box-client .box-operation-warp {
  display: flex;
  align-items: center;
  margin-top: 10px;
  height: 32px
}

.reply-box-client .box-operation-warp .reply-box-emoji {
  position: relative;
  margin-right: auto
}

.reply-box-client .box-operation-warp .reply-box-emoji .box-emoji-icon {
  cursor: pointer
}

.reply-box-client .box-operation-warp .reply-box-send {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 70px;
  height: 100%;
  border-radius: 4px;
  cursor: pointer
}

.reply-box-client .box-operation-warp .reply-box-send .send-text {
  position: absolute;
  z-index: 1;
  color: var(--text_white)
}

.reply-box-client .box-operation-warp .reply-box-send:after {
  content: "";
  position: absolute;
  opacity: .5;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  background-color: var(--brand_pink)
}

.reply-box-client .box-operation-warp .reply-box-send:hover:after {
  opacity: 1
}

.reply-box-client.box-active .reply-box-warp .reply-box-textarea {
  height: 60px
}

.reply-box-client.box-active .reply-box-send.send-active:after {
  opacity: 1
}

.reply-box-client.disabled .reply-box-warp .disable-mask {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  border-radius: 6px;
  font-size: 12px;
  color: var(--text3);
  background-color: var(--bg3)
}

.reply-box-client.disabled .reply-box-warp .disable-mask .no-login-mask {
  cursor: pointer
}

.reply-box-client.disabled .box-operation-warp .reply-box-send {
  cursor: not-allowed
}

.reply-box-client.disabled .box-operation-warp .reply-box-send .send-text {
  color: var(--text3)
}

.reply-box-client.disabled .box-operation-warp .reply-box-send:after {
  opacity: 1;
  background-color: var(--bg3)
}

.note-prefix {
  vertical-align: -3px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 3px;
  line-height: 19px;
  border-radius: 4px;
  margin-right: 6px;
  font-size: 12px;
  color: var(--text3);
  background-color: var(--bg2)
}

.note-prefix .note-icon {
  width: 16px;
  height: 16px
}

.reply-content-client {
  color: var(--text1);
  overflow: hidden;
  word-wrap: break-word;
  word-break: break-word;
  white-space: pre-wrap;
  vertical-align: baseline;
  transition: .2s
}

.reply-content-client.root {
  line-height: 25px
}

.reply-content-client.need-view-more {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden
}

.reply-content-client.sub {
  line-height: 20px
}

.reply-content-client .top-icon {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 30px;
  height: 18px;
  border: 1px solid var(--brand_pink);
  border-radius: 3px;
  margin-right: 5px;
  font-size: 12px;
  color: var(--brand_pink);
  vertical-align: 1px
}

.reply-content-client .emoji-small {
  width: 20px;
  height: 20px;
  vertical-align: text-bottom
}

.reply-content-client .emoji-large {
  width: 36px;
  height: 36px;
  vertical-align: text-bottom
}

.reply-content-client .jump-link {
  vertical-align: baseline
}

.reply-content-client .icon {
  width: 20px;
  height: 20px;
  vertical-align: text-top
}

.reply-content-client .icon.vote {
  width: 16px;
  height: 16px;
  margin-right: 3px;
  vertical-align: text-bottom
}

.reply-content-client .icon.search-word {
  width: 12px;
  display: inline-block;
  background-size: contain;
  background-repeat: no-repeat
}

.view-more-reply {
  font-size: 12px;
  color: var(--text_link);
  line-height: 17px;
  cursor: pointer
}

.view-more-reply:hover {
  color: var(--Lb4)
}

.sub-reply-item-client {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  position: relative;
  max-height: 42px;
  padding: 3px 0;
  font-size: 14px;
  overflow: hidden
}

.sub-reply-item-client .sub-user-info {
  display: inline-flex;
  align-items: center;
  color: var(--text2);
  line-height: 20px;
  vertical-align: baseline;
  white-space: nowrap
}

.sub-reply-item-client .sub-user-info .sub-user-name {
  margin-right: 5px;
  font-size: 14px;
  cursor: pointer
}

.sub-reply-item-client .sub-user-info .sub-up-icon {
  margin-right: 4px;
  cursor: default
}

.sub-reply-list-client {
  border-radius: 4px;
  padding: 7px 10px;
  margin-top: 12px;
  background-color: var(--bg2_float)
}

.sub-reply-list-client .view-more {
  margin-top: 4px;
  cursor: pointer
}

.sub-reply-list-client .view-more .view-more-text {
  font-size: 12px;
  color: var(--text_link)
}

.sub-reply-list-client .view-more .view-more-text:hover {
  color: var(--Lb4)
}

.content-warp--blacklist .reply-content {
  display: inline-flex;
  align-items: center;
  padding: 4px;
  border-radius: 4px;
  color: var(--text1);
  background-color: var(--bg2_float)
}

.content-warp--blacklist .reply-content .ban-icon {
  margin-right: 4px
}

.content-warp--blacklist .reply-header {
  display: flex;
  align-items: center;
  margin-bottom: 8px
}

.content-warp--blacklist .reply-header .root-reply-avatar {
  display: flex;
  justify-content: center;
  position: absolute;
  left: 0;
  cursor: pointer
}

.content-warp--blacklist .reply-header .root-reply-avatar .blacklist-avatar {
  width: 30px;
  height: 30px
}

.content-warp--blacklist .reply-header .reply-info .balcklist-name {
  color: var(--text1)
}

.reply-item-client {
  position: relative;
  padding: 10px 0 14px 42px;
  border-bottom: 1px solid var(--line_light)
}

.reply-item-client .content-warp {
  flex: 1;
  position: relative
}

.reply-item-client .content-warp .reply-header {
  display: flex;
  align-items: center;
  margin-bottom: 8px
}

.reply-item-client .content-warp .reply-header .root-reply-avatar {
  display: flex;
  justify-content: center;
  position: absolute;
  left: -42px;
  cursor: pointer
}

.reply-item-client .content-warp .reply-header .reply-info {
  display: flex;
  flex-direction: column
}

.reply-item-client .content-warp .reply-header .reply-info .user-info {
  display: flex;
  align-items: center;
  font-size: 13px;
  color: var(--text2)
}

.reply-item-client .content-warp .reply-header .reply-info .user-info .user-name {
  margin-right: 5px;
  color: var(--be794234);
  cursor: pointer
}

.reply-item-client .content-warp .reply-header .reply-info .user-info .user-level {
  margin-right: 5px;
  cursor: pointer
}

.reply-item-client .content-warp .reply-header .reply-info .user-info .up-icon {
  cursor: default
}

.reply-item-client .content-warp .reply-header .reply-info .reply-time {
  font-size: 12px;
  color: var(--text3)
}

.reply-item-client .content-warp .root-reply {
  position: relative;
  font-size: 15px;
  line-height: 25px;
  transition: .2s
}

.reply-item-client .content-warp .root-reply .reply-operation-warp {
  display: flex;
  align-items: center;
  position: relative;
  margin-top: 12px;
  font-size: 13px;
  color: var(--text3);
  line-height: 16px
}

.reply-item-client .content-warp .root-reply .reply-operation-warp .reply-like {
  display: flex;
  align-items: center;
  margin-right: 19px;
  cursor: pointer
}

.reply-item-client .content-warp .root-reply .reply-operation-warp .reply-like .like-icon {
  margin-right: 5px;
  color: var(--text3)
}

.reply-item-client .content-warp .root-reply .reply-operation-warp .reply-like .like-icon:hover,
.reply-item-client .content-warp .root-reply .reply-operation-warp .reply-like .like-icon.liked {
  color: var(--brand_pink)
}

.reply-item-client .content-warp .root-reply .reply-operation-warp .reply-dislike {
  display: flex;
  align-items: center;
  margin-right: 19px
}

.reply-item-client .content-warp .root-reply .reply-operation-warp .reply-dislike .dislike-icon {
  color: var(--text3);
  cursor: pointer
}

.reply-item-client .content-warp .root-reply .reply-operation-warp .reply-dislike .dislike-icon:hover,
.reply-item-client .content-warp .root-reply .reply-operation-warp .reply-dislike .dislike-icon.disliked {
  color: var(--brand_pink)
}

.reply-item-client .content-warp .root-reply .reply-operation-warp .reply-icon {
  color: var(--text3);
  cursor: pointer
}

.reply-item-client .content-warp .root-reply .reply-operation-warp .reply-icon:hover {
  color: var(--brand_pink)
}

.reply-item-client .content-warp .root-reply .reply-operation-warp .more-operation {
  display: none;
  position: absolute;
  right: 20px
}

.reply-item-client .content-warp .reply-item-box {
  margin-top: 12px
}

.reply-item-client .content-warp .reply-tag-list {
  display: flex;
  align-items: center;
  margin-top: 12px;
  font-size: 12px;
  line-height: 14px
}

.reply-item-client .content-warp .reply-tag-list .reply-tag-item {
  padding: 5px 6px;
  border-radius: 2px;
  margin-right: 10px;
  color: var(--text2);
  background-color: var(--bg2_float)
}

.reply-item-client:hover .content-warp .root-reply .reply-operation-warp .more-operation {
  display: block
}

.reply-list {
  position: relative;
  margin-top: 14px;
  padding-bottom: 100px
}

.reply-list .reply-empty {
  margin-top: 100px;
  text-align: center;
  font-size: 14px;
  color: var(--text3)
}

.reply-list .reply-end-mark {
  height: 100px
}

.reply-list .reply-end,
.reply-list .reply-loading {
  margin-top: 20px;
  font-size: 13px;
  color: var(--text3);
  text-align: center
}

.fixed-reply-box {
  bottom: 0;
  z-index: 20;
  width: 100%
}

.fixed-reply-box .reply-box-wrap {
  background-color: var(--bg1);
  padding: 14px 0;
  border-top: 1px solid var(--line_light)
}

.fixed-reply-box .reply-box-shadow {
  position: absolute;
  top: -10px;
  z-index: -1;
  height: 36px;
  border-radius: 50%;
  background-color: #00000014;
  filter: blur(10px);
  width: calc(100% - 72px);
  left: 50%;
  transform: translate(-50%)
}

.reply-detail {
  flex: 1
}

.reply-detail .reply-header {
  display: flex;
  align-items: center;
  position: sticky;
  z-index: 9;
  top: 0;
  left: 0;
  height: 46px;
  border-bottom: 1px solid var(--line_light);
  margin-bottom: 14px;
  background-color: var(--bg1)
}

.reply-detail .reply-header .return-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border-radius: 4px;
  margin-right: 4px;
  color: var(--text1);
  cursor: pointer
}

.reply-detail .reply-header .return-icon:hover {
  background-color: var(--graph_bg_thick)
}

.reply-detail .reply-header .reply-title {
  font-size: 16px;
  font-weight: 600;
  color: var(--text1)
}

.dialog-reply {
  flex: 1
}

.dialog-reply .reply-header {
  display: flex;
  align-items: center;
  position: sticky;
  z-index: 9;
  top: 0;
  left: 0;
  height: 46px;
  border-bottom: 1px solid var(--line_light);
  margin-bottom: 14px;
  background-color: var(--bg1)
}

.dialog-reply .reply-header .return-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border-radius: 4px;
  margin-right: 4px;
  color: var(--text1);
  cursor: pointer
}

.dialog-reply .reply-header .return-icon:hover {
  background-color: var(--graph_bg_thick)
}

.dialog-reply .reply-header .reply-title {
  font-size: 16px;
  font-weight: 600;
  color: var(--text1)
}

.bili-comment.client {
  background-color: var(--bg1)
}

.bili-comment.client * {
  box-sizing: border-box;
  font-family: PingFang SC, HarmonyOS_Regular, Helvetica Neue, Microsoft YaHei, sans-serif;
  -webkit-font-smoothing: antialiased
}

.bili-comment.client * ul {
  list-style: none
}

.bili-comment.client * a {
  text-decoration: none;
  background-color: transparent;
  color: var(--text_link);
  cursor: pointer
}

.bili-comment.client * a:hover {
  color: var(--Lb4)
}

.bili-comment.client * i {
  font-style: normal
}
  `;
  document.head.appendChild(styleElement);
})();
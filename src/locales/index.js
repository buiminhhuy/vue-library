/**
 * Import Dependency
 * https://medium.com/hong-kong-tech/dynamic-translate-using-vue-i18n-vuejs-c730093a63e2
 */
import Vue from 'vue'
import VueI18n from 'vue-i18n'

//Element UI
import Element from 'element-ui'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'

/**
 * Import Language
 */
import en from './i18n/en_US'
import cn from './i18n/zh_CN'

/**
 * Config
 */
Vue.use(VueI18n)

/**
 * Export
 */
const i18n = new VueI18n({
	locale: 'en',
	messages: {
		en: {
            lang: en,
            ...enLocale // Or use `Object.assign({ message: 'hello' }, enLocale)`
		},
		cn: {
            lang: cn,
            ...zhLocale // Or use `Object.assign({ message: '你好' }, zhLocale)`
		}
	}
})

Vue.use(Element, {
    i18n: (key, value) => i18n.t(key, value)
  })


export default i18n
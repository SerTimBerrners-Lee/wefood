import { random } from 'lodash';

export default {
	data() {
		return {
			keyModalRequest: null
		}
	},
	methods: {
		showModalRequest() {
			this.keyModalRequest = random(1, 999);
			console.log(this.keyModalRequest)
    }
	}
}
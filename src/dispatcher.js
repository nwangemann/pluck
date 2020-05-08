var WebStorage = require('react-webstorage')

var webStorage = new WebStorage(window.localStorage ||
	window.sessionStorage 
);

dispatcher.register(function (payload) {
	switch (payload.actionType) {
	case 'A':
		webStorage.setItem(payload.key, payload.item);
		break;
	case 'B':
		webStorage.removeItem(payload.key);
		break;
	case 'C': 
		webStorage.clear();
		break;
	default:
		return;
	}
});
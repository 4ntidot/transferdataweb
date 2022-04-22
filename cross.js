let cookie = localStorage;
export default class Transfer {
	constructor() {
	}
	send(target, cross) {
		cookie.setItem("wc-${cross.toLowerCase}", {"origin":window.location.pathname, "target":target, "cross":cross});
	}
	receive(cross) {
		var currentCross = cookie.getItem("wc-${cross.toLowerCase}");
		var target = cross.target;
		if ((!target || target == window.location.pathname) && currentCross) {
			return {"error":false, "cross":currentCross};
		} else if (target != window.location.pathname) {
			return {"error":true, "details":"The cross you want to receive is not sent to this page."};
		} else if (!currentCross) {
			return {"error":true, "details":"This cross doesn't exist."};
		} else {
			return {"error":true, "details":"Unknown Error"};
		}
	}
	receiveFrom(target, cross) {
		var currentCross = cookie.getItem("wc-${cross.toLowerCase}");
		if (currentCross.origin = target) {
			return {"error":false, "cross":currentCross};
		} else if (!currentCross) {
			return {"error":true, "details":"This cross doesn't exist."};
		} else if (currentCross.origin != target) {
			return {"error":true, "details":"This cross doesn't come from the file you want it to come from."};
		} else {
			return {"error":true, "details":"Unknown Error"};
		}
	}
}
import gsap from "gsap";

const lightScheme = {
	'--base-color': '#1AA5A7',
	'--receding-color': '#025051',
	'--text-color': '#77FAFC',
	'--text-header-color': '#A8F7F8',
	'--gar-brightness': '200%',
	'--gar-saturate': '40%',
	'--gar-hue': '0deg',
};

const darkScheme = {
	'--base-color': '#9B0B00',
	'--receding-color': '#560600',
	'--text-color': '#E71000',
	'--text-header-color': '#F54949',
	'--gar-brightness': '100%',
	'--gar-saturate': '120%',
	'--gar-hue': '145deg',
};

class ColorManager {
	setLight = () => {
		this.setScheme(lightScheme);
	}

	setDark = () => {
		this.setScheme(darkScheme);
	}

	setScheme(scheme) {
		for (let prop in scheme) {
			gsap.to("html", 1, { duration: 1, [prop]: scheme[prop]});
			//document.documentElement.style.setProperty(prop, scheme[prop]);
		}
	}
}

export default ColorManager;
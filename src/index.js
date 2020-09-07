import './css/styles.css';
import menuItemsArray from './menu.json'
import templateMenuItems from './template/menu__item.hbs'
import { ThemeSwitch } from './js/theme_switch.js'


const refs = {
    menuList: document.querySelector(".js-menu"),
    switchInput: document.querySelector(".js-switch-input"),
    body: document.querySelector("body")
}
const themeOptions = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

const template = templateMenuItems(menuItemsArray);
refs.menuList.insertAdjacentHTML('beforeend', template);

const themeSwitch = new ThemeSwitch(refs.body, themeOptions);

const recoveryFromSave = () => {
    const condition = localStorage.getItem("DARK")
    if (condition === "true") {
        refs.switchInput.checked = true;
        themeSwitch.swithDarckTheme();
    }
    if (condition === "false") {
        refs.switchInput.checked = false;
        themeSwitch.swithLightTheme();
    }

}

recoveryFromSave();

const handlerCheckBox = (event) => {
    if (event.target.checked) {
        themeSwitch.swithDarckTheme()
        localStorage.setItem("DARK", "true")
    }
    if (!event.target.checked) {
        themeSwitch.swithLightTheme()
        localStorage.setItem("DARK", "false")
    }


}

refs.switchInput.addEventListener('change', handlerCheckBox);
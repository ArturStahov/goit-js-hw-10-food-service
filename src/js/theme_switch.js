export class ThemeSwitch {
    constructor(bodyRef, themeOptions) {
        this.bodyRef = bodyRef;
        this.themeOptions = themeOptions;

    }
    swithDarckTheme() {
        this.bodyRef.classList.add(this.themeOptions.DARK)
        this.bodyRef.classList.remove(this.themeOptions.LIGHT)

    }
    swithLightTheme() {
        this.bodyRef.classList.add(this.themeOptions.LIGHT)
        this.bodyRef.classList.remove(this.themeOptions.DARK)
    }



}
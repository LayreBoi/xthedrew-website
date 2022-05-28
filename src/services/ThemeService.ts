import headerTransparent from './HeaderTransparent';

interface iColorTheme {
    colorfg: `#${string}`;
    colorbg: `#${string}`;
    colortx: `#${string}`;
}

class ThemeService {
    public currnCol: iColorTheme;
    public darkMode: boolean | null = localStorage.getItem('thememode') == 'dark' ? true : ('light' ? false : null);
    
    private lighCol: iColorTheme = {
        colorfg: '#EEEEEE',
        colorbg: '#FFFFFF',
        colortx: '#000000'
    }

    private darkCol: iColorTheme = {
        colorfg: '#222222',
        colorbg: '#000000',
        colortx: '#FFFFFF'
    }

    constructor () {
        if (this.darkMode == null) {
            localStorage.setItem('thememode', 'light');
            this.darkMode = false;
        }

        this.currnCol = this.darkMode ? this.darkCol : this.lighCol;

        console.log({
            dark: this.darkMode,
            themeStg: localStorage.getItem('thememode'),
            currentColor: this.currnCol
        })
    }

    public switchTheme(): void {
        console.log('Theme changed');
        this.darkMode = !this.darkMode;
        console.log(this.darkMode);
        localStorage.setItem('thememode', this.darkMode ? 'dark' : 'light');
        this.reloadTheme();
    }

    public reloadTheme(): void {
        console.log('Theme reloaded');
        this.currnCol = this.darkMode ? this.darkCol : this.lighCol;
    }

    public getCSS(): string {
        console.log('Getting Theme...')
        return  `--color-bg: ${this.currnCol.colorbg};`+
                `--color-fg: ${this.currnCol.colorfg};`+
                `--color-tx: ${this.currnCol.colortx};`+
                `--invert-xtd: invert(${this.darkMode ? '1' : '0'});`+
                `--headerbg: ${headerTransparent.getCSS() ? 'none' : this.currnCol.colorbg};`+
                `--hide-bg: ${!headerTransparent.getCSS() ? '0' : '0.75'};`
    }
}

const themeSVC = new ThemeService();
export default themeSVC;
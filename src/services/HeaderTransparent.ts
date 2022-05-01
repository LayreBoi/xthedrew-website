import router from '../router';

class HeaderTransparent {
    transparent: boolean;
    constructor (isAtHome: boolean) {
        this.transparent = isAtHome;
        console.log(`You're ${!isAtHome ? 'not' : ''} @ home page`);
    }

    // I could've done it directly by making this.transparent public, but maybe on the next update.
    public getCSS(): boolean {
        return this.transparent;
    }

    public setCSS(value: boolean): void {
        this.transparent = value;
    }
}

const transHeader = new HeaderTransparent(router.currentRoute.value.path == '/');
export default transHeader;
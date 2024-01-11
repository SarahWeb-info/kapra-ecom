export default function handleResize() {
    let windowWidth = window.innerWidth;

    if (windowWidth < 992) {
        return true;
    } else {
        return false;
    }
};
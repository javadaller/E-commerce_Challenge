export function cart(): void {
    const cart = document.getElementById('cart') as HTMLElement | null;
    const div = document.getElementById('cartEmpty') as HTMLElement | null;

    if (cart && div) {
        cart.addEventListener('mouseoverclick', () => {
            div.style.display = 'block';
        });
    }
}
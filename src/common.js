const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
})

export function getFormattedPrice(price) {
    return formatter.format(price);
}
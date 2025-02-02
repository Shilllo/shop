export function getProductBadge(status: { type: string; value?: number }) {
    if (status.type === 'DISCOUNT') return `- ${status.value}%`;
    if (status.type === 'SOLD_OUT') return status.type.split('_').join(' ');
    return null;
}

export function combineClasses(
  ...classes: (string | undefined | null | false)[]
): string {
  return classes.filter(Boolean).join(" ");
}

export function formatCurrency(
  amount: number,
  currency: string = "USD"
): string {
  return new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency,
  }).format(amount);
}

export function formatNumber(
  number: number,
  options: Intl.NumberFormatOptions = {}
): string {
  return new Intl.NumberFormat("tr-TR", options).format(number);
}

export function formatPercentage(percentage: number): string {
  return new Intl.NumberFormat("tr-TR", {
    style: "percent",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(percentage / 100);
}

export function shortenAddress(address: string, chars: number = 4): string {
  return `${address.substring(0, chars)}...${address.substring(
    address.length - chars
  )}`;
}

export function getTimeAgo(date: Date): string {
  const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);

  let interval = seconds / 31536000;
  if (interval > 1) return Math.floor(interval) + " yıl önce";

  interval = seconds / 2592000;
  if (interval > 1) return Math.floor(interval) + " ay önce";

  interval = seconds / 86400;
  if (interval > 1) return Math.floor(interval) + " gün önce";

  interval = seconds / 3600;
  if (interval > 1) return Math.floor(interval) + " saat önce";

  interval = seconds / 60;
  if (interval > 1) return Math.floor(interval) + " dakika önce";

  return Math.floor(seconds) + " saniye önce";
}

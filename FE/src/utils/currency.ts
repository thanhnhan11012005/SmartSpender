/**
 * Format number to Vietnamese Dong currency format
 * @param amount - Amount in VND
 * @returns Formatted string (e.g., "1.500.000 ₫")
 */
export const formatVND = (amount: number): string => {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

/**
 * Format number to abbreviated VND format for charts/UI
 * @param amount - Amount in VND
 * @returns Abbreviated formatted string (e.g., "5T" for 5 trillion, "1.5T")
 */
export const formatVNDAbbreviated = (amount: number): string => {
  if (amount >= 1_000_000_000) {
    return new Intl.NumberFormat("vi-VN", {
      notation: "compact",
      compactDisplay: "short",
      currency: "VND",
      style: "currency",
      minimumFractionDigits: 0,
      maximumFractionDigits: 1,
    }).format(amount);
  }
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

/**
 * Format number to compact VND format for chart Y-axis labels
 * @param amount - Amount in VND
 * @returns Compact formatted string (e.g., "5T", "1.5 Tr", "500k")
 */
export const formatVNDCompact = (amount: number): string => {
  const absAmount = Math.abs(amount);
  
  if (absAmount >= 1_000_000_000) {
    // Billions: 1T, 2.5T
    const value = amount / 1_000_000_000;
    return value % 1 === 0 ? `${value}T` : `${value.toFixed(1)}T`;
  } else if (absAmount >= 1_000_000) {
    // Millions: 1 Tr, 2.5 Tr
    const value = amount / 1_000_000;
    return value % 1 === 0 ? `${value} Tr` : `${value.toFixed(1)} Tr`;
  } else if (absAmount >= 1_000) {
    // Thousands: 500k, 1.5k
    const value = amount / 1_000;
    return value % 1 === 0 ? `${value}k` : `${value.toFixed(1)}k`;
  }
  
  return `${amount}`;
};

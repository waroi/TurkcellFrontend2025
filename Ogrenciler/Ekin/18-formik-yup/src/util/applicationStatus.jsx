export function getStatusBadge(status) {
  switch (status) {
    case "accepted":
      return "bg-success text-white";
    case "denied":
      return "bg-danger text-white";
    case "pending":
    default:
      return "bg-secondary text-white";
  }
}

export function getStatusLabel(status) {
  switch (status) {
    case "accepted":
      return "Onaylandı";
    case "denied":
      return "Reddedildi";
    case "pending":
    default:
      return "Beklemede";
  }
}

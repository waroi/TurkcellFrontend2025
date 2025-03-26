export function getStatusBadge(status, result) {
  if (typeof result == "undefined")
    switch (status) {
      case "accepted":
        return "bg-success text-white";
      case "denied":
        return "bg-danger text-white";
      case "pending":
      default:
        return "bg-secondary text-white";
    }
  else return result >= 80 ? "bg-success text-white" : "bg-danger text-white";
}

export function getStatusLabel(status, result) {
  if (typeof result == "undefined")
    switch (status) {
      case "accepted":
        return "Onaylandı";
      case "denied":
        return "Reddedildi";
      case "pending":
      default:
        return "Beklemede";
    }
  else return (result >= 80 ? "Başarılı" : "Başarısız") + ` ${result}%`;
}

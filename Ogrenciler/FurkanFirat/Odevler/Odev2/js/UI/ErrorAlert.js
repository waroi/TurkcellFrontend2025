export default class ErrorAlert {
  static createErrorAlert(text) {
    const alertContainer = document.createElement('div');
    alertContainer.classList.add('col-12', 'text-center');

    const alert = document.createElement('div');
    alert.classList.add('alert', 'alert-danger');
    alert.textContent = text;

    alertContainer.append(alert);
    return alertContainer;
  }
}

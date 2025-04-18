/*--------------------Alert--------------------*/
function showAlert(message, type = "success", duration = 5000) {
  const container = document.getElementById("custom-alert-container");

  const alert = document.createElement("div");
  alert.classList.add("custom-alert", type);

  const icons = {
    success: "custom-icon-success",
    warning: "custom-icon-warning",
    error: "custom-icon-error"
  };

  alert.innerHTML = `
    <div class="alert-content">
      <button class="close">&times;</button>
      <span class="custom-icon ${icons[type] || ''}"></span>
      <p class="message">${message}</p>
    </div>
    <div class="progress">
      <div class="bar"></div>
    </div>
  `;

  alert.querySelector(".close").addEventListener("click", () => {
    removeAlert(alert, true);
  });

  container.appendChild(alert);

  const bar = alert.querySelector(".bar");
  if (bar) {
    bar.style.transition = `width ${duration}ms linear`;
    setTimeout(() => {
      bar.style.width = "0%";
    }, 10);
  }

  const timeoutId = setTimeout(() => {
    removeAlert(alert);
  }, duration);

  function removeAlert(el, instant = false) {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "all 0.3s ease";

    if (instant) {
      setTimeout(() => {
        el.remove();
      }, 100);
    } else {
      setTimeout(() => {
        el.remove();
      }, 1700);
    }

    clearTimeout(timeoutId);
  }
}

showAlert("با موفقیت ثبت شد", "success", 7000);
showAlert("هشدار، این کارو نکن", "warning", 5000);
showAlert("خطا، با موفقیت ثبت نشد", "error", 10000);

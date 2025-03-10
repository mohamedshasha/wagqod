function updateTotal() {
  let quantitySelect = document.getElementById("quantity");
  let customQuantityInput = document.getElementById("customQuantity");
  let quantity = quantitySelect.value === "other" ? parseInt(customQuantityInput.value) || 0 : parseInt(quantitySelect.value);
  let pricePerLitre = 2782;
  let totalPrice = quantity * pricePerLitre;
  document.getElementById("total").value = totalPrice.toLocaleString() + " جنيه";

  // إظهار حقل الكمية المخصصة إذا اختار المستخدم "أدخل كمية أخرى"
  customQuantityInput.style.display = quantitySelect.value === "other" ? "block" : "none";
}

  
      function submitOrder() {
          let name = document.getElementById("name").value;
          let phone = document.getElementById("phone").value;
          let location = document.getElementById("location").value;
          let quantity = document.getElementById("quantity").value;
          let time = document.getElementById("time").value;
          let total = document.getElementById("total").value;
          let kind = document.getElementById("kind").value;
  
          if (name === "" || phone === "" || location === "") {
              alert("يرجى ملء جميع الحقول المطلوبة!");
              return;
          }
  
          alert(` اضغط على زر "اطلب الآن" لاكمال الطلب\n\n العميل: ${name}\n رقم الهاتف: ${phone}\n الموقع: ${location}\n⛽ الكمية: ${quantity}\n إجمالي السعر: ${total}`);
      }
  
      function sendWhatsAppNotification(clientName, fuelAmount, location, phoneNumber, totalPrice, kind, windowName) {
          let message = `طلب وقود جديد:\nنوع المنشأة: ${kind}\nالعميل: ${clientName}\nرقم الهاتف: ${phoneNumber}\n⛽ الكمية: ${fuelAmount} لتر\nإجمالي السعر: ${totalPrice}\nالموقع: ${location}`;            let encodedMessage = encodeURIComponent(message);
          let whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
          window.open(whatsappURL, windowName, "_blank");
      }
  
      document.getElementById("orderButton").addEventListener("click", () => {
          let name = document.getElementById("name").value;
          let quantity = document.getElementById("quantity").value;
          let location = document.getElementById("location").value;
          let kind = document.getElementById("kind").value;
          let phone = document.getElementById("phone").value;
          let total = document.getElementById("total").value;
          if (name === "" || phone === "" || location === "") {
              alert("يرجى ملء جميع الحقول المطلوبة!");
              return;
          }
  
          // إرسال إلى الرقم الأول
          sendWhatsAppNotification(name, quantity, location, "917060768", total, kind);
  
      });
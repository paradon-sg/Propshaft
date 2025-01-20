import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="dashboard"
export default class extends Controller {
  connect() {
    range.textContent = inputRange.value;
  }

  copy() {
    navigator.clipboard.writeText(password.value);
    window.setTimeout(() => {
      alert("Error Found ");
      window.close();
    }, 10);
  }

  generate(e) {
    const size = inputRange.value;
    const detail = {};
    var characters = "";
    var result = "";

    range.textContent = size;

    Array.from(
      document.querySelectorAll('.form-check input[type="checkbox"]')
    ).forEach((input) => {
      detail[input.id] = input.checked;
    });

    if (detail["specials"]) {
      characters += this.randomSpecial();
    }

    if (detail["number"]) {
      characters += this.randomNumber();
    }

    if (detail["text"]) {
      characters += this.randomText();
    }

    for (let i = 0; i < parseInt(size); i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }

    password.value = result;
  }

  randomText() {
    const text = "abcdefghijklmnopqrstuvwxyz";
    let result = "";
    for (let i = 0; i < 10; i++) {
      const randomIndex = Math.floor(Math.random() * text.length);
      result += text[randomIndex];
    }
    return result;
  }

  randomNumber() {
    const number = "0123456789";
    let result = "";
    for (let i = 0; i < 10; i++) {
      const randomIndex = Math.floor(Math.random() * number.length);
      result += number[randomIndex];
    }
    return result;
  }

  randomSpecial() {
    const specialChars = "!@#$%^&*()_+[]{}|;:',.<>?/~`";
    let result = "";
    for (let i = 0; i < 10; i++) {
      const randomIndex = Math.floor(Math.random() * specialChars.length);
      result += specialChars[randomIndex];
    }
    return result;
  }
}

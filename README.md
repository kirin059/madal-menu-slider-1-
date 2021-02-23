# modal-menu-slider 만들기 (1)
## javascript

![image](https://user-images.githubusercontent.com/71425369/108859768-e6f11880-7630-11eb-9d88-cd43aee553c9.png)

---

1️⃣ `modal` show & close 기능 구현

classList 메서드(add/remove) 활용하여 `click`하면 show & close 기능 구현하기

```js
// modal
const open = document.getElementById("open");  // open 버튼
const close = document.getElementById("close"); //modal close버튼
const modal = document.getElementById("modal"); // modal창


// Show modal
open.addEventListener("click", () => modal.classList.add("show-modal"));

// Hide modal
close.addEventListener("click", () => modal.classList.remove("show-modal"));

// Hide modal on outside click
window.addEventListener("click", (e) => (e.target == modal ? modal.classList.remove("show-modal") : false));
// (modal이 열린 상태에서) close 버튼을 제외하고, nav-bar 이외의 window 아무 곳이나 클릭하면 모달창이 닫히는 기능
```


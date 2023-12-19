passwordValidation();

function passwordValidation() {
  const passwordNode1 = document.querySelector("#pwd");
  const passwordLabelNode1 = document.querySelector(`label[for="pwd"]`);
  const passwordNode2 = document.querySelector("#pwd-confirm");
  const passwordLabelNode2 = document.querySelector(`label[for="pwd-confirm"]`);
  const pwdNode = document.querySelector("#pwd-group");
  const pwdErrorNode = document.querySelector(".pwd-error-message");
  
  const VALID_CONTENT = `<br>`;
  const INVALID_CONTENT = "Error passwords do not match.";

  pwdNode.addEventListener("change", () => {
    if (passwordNode1.value == "" || passwordNode2.value == "") {
      passwordNode1.classList.remove("invalid");
      passwordNode2.classList.remove("invalid");
      passwordLabelNode1.classList.remove("invalid");
      passwordLabelNode2.classList.remove("invalid");
      pwdErrorNode.innerHTML = VALID_CONTENT;
    } else if (passwordNode1.value == passwordNode2.value) {
      passwordNode1.classList.remove("invalid");
      passwordNode2.classList.remove("invalid");
      passwordLabelNode1.classList.remove("invalid");
      passwordLabelNode2.classList.remove("invalid");
      pwdErrorNode.innerHTML = VALID_CONTENT;
    } else {
      passwordNode1.classList.add("invalid");
      passwordNode2.classList.add("invalid");
      passwordLabelNode1.classList.add("invalid");
      passwordLabelNode2.classList.add("invalid");
      pwdErrorNode.innerHTML = INVALID_CONTENT;
    }
  });
}
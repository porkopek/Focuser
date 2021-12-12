(function () {
  'use strict';

  const keys = {
    escape: 27,
  };

  let index = 0;

  let isValidInput = (element) => {
    while (element) {
      let nodeName = element.nodeName.toLowerCase();

      if (nodeName === 'body' || nodeName.includes('document')) return true;

      let rect = element.getBoundingClientRect();
      if (rect.height == 0 || rect.width == 0) return false;
      element = element.parentNode;
    }
    return true;
  };

  const inputSelector =
    "input[type='input'],input[type='search'],input[type='text'],input[type='tel'],input[type='email'],input[type='password'],[contenteditable],textarea";

  function focusInput(e) {
    e.preventDefault();
    e.stopPropagation();

    let allInputs = [...document.querySelectorAll(inputSelector)];
    let validInputs = allInputs.filter((el) => isValidInput(el));

    if (validInputs?.length === 0) {
      validInputs = allInputs;
    }
    if (!validInputs) return;

    if (index > validInputs.length - 1) {
      index = validInputs.length - 1;
    }

    let input = validInputs[index];

    if (e.keyCode === keys.escape) {
      if (input) {
        input.focus();
        input.setSelectionRange(0, input.value.length);
        index++;
        if (index >= validInputs.length) index = 0;
      }
    }
  }

  document.addEventListener('keyup', focusInput);
})();

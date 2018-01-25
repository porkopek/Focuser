/**
 * Set the focus on page first search box
 * after pressing shift key
 * For those who love to use their keyboards
 */

(function() {
  'use strict';

  //shift keyCode
  const keys = {
    shift: 16,
    escape: 27
  };

  //if input is type searchable
  let input =
    document.querySelector("input[type='input']") ||
    document.querySelector('input[type="search"]') ||
    document.querySelector("input[type='text']");

  const thisUrl = document.location.href;

  //some especial cases that I use and have more than an input textbox
  if (thisUrl.includes('priberam.pt')) {
    input = document.getElementById(
      'wordMeaningContentPlaceHolder_wordMeaningControl_SearchWordTextBox'
    );
  } else if (thisUrl.includes('academia.gal/dicionario')) {
    input = document.querySelector('input.search.ui-autocomplete-input');
  }

  //focus the input textbox if user presses escape key
  function focusInput(e) {
    if (e.keyCode === keys.escape) {
      if (input) {
        input.focus();
        input.setSelectionRange(0, input.value.length);
      }
    }
  }

  document.addEventListener('keyup', focusInput);
})();

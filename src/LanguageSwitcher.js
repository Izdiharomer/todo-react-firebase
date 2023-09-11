import React from 'react';

function LanguageSwitcher({ changeLanguage }) {
  return (
    <div className='language_switcher'>
      <input
        id="language-toggle"
        placeholder="tr"
        className="check-toggle check-toggle-round-flat"
        type="checkbox"
        onChange={(e) => {
          const languageText = document.getElementById('language-text');
          if (e.target.checked) {
            changeLanguage('tr');
            languageText.style.color = 'white';
          } else {
            changeLanguage('en');
            languageText.style.color = '';
          }
        }}
      />
      <label htmlFor="language-toggle"></label>
      <span id="language-text" className="on">Tr</span>
    </div>
  );
}

export default LanguageSwitcher;

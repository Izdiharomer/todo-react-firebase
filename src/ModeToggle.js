import React from 'react';

function ModeToggle({ theme, toggleTheme, t }) {
  return (
    <button
      onClick={toggleTheme}
      style={{
        backgroundColor: theme === 'light' ? '#ffffff' : '#000000',
        color: theme === 'light' ? '#000000' : '#ffffff',
        padding: '2%',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
      }}
    >
      {theme === 'light' ? t('dark-mode') : t('light-mode')}
    </button>
  );
}

export default ModeToggle;

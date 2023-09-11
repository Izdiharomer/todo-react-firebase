import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "title": "Todo App",
      "message": "Please type a todo here",
      "placeholder": "Add todo here",
      "app.todos": "You have {{count}} todos",
      "dark-mode": "Dark mode",
      "light-mode": "Light mode",
    }
  },
  tr: {
    translation: {
      "title": "yapılacaklar uygulaması",
      "message": "Lütfen buraya bir yapılacak iş yazın",
      "placeholder":"Görev Ekleyin",
      "app.todos": "Toplam {{count}} göreviniz var",
      "dark-mode": "Karanlık Mod",
  "light-mode": "Aydınlık Mod"
    }
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'tr',
    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;
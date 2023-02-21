import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
// Створення екземпляра
const player = new Player(iframe);
const STORAGE_KEY = 'videoplayer-current-time';

// Відновлення відтворення зі збереженої позиції під час перезавантаження сторінки. Якщо пустий localStorage - getItem повертає null. Засетиться 0.
const saveTime = localStorage.getItem(STORAGE_KEY) || 0;
player.setCurrentTime(saveTime);

// Відстежування події timeupdate - оновлення часу відтворення
player.on('timeupdate', throttle(onPlay, 2000));

function onPlay(e) {
  console.log(e.seconds);
  const time = e.seconds;
  // Зберігаємо поточний час відтворення у локальне сховище
  localStorage.setItem(STORAGE_KEY, time);
}

// Ознайомся з документацією бібліотеки Vimeo плеєра.
// Додай бібліотеку як залежність проекту через npm.
// Ініціалізуй плеєр у файлі скрипта як це описано в секції pre-existing player, але враховуй, що у тебе плеєр доданий як npm пакет, а не через CDN.
// Вивчи документацію методу on() і почни відстежувати подію timeupdate - оновлення часу відтворення.
// Зберігай час відтворення у локальне сховище. Нехай ключем для сховища буде рядок "videoplayer-current-time".
// Під час перезавантаження сторінки скористайся методом setCurrentTime() з метою відновлення відтворення зі збереженої позиції.
// Додай до проекту бібліотеку lodash.throttle і зроби так, щоб час відтворення оновлювався у сховищі не частіше, ніж раз на секунду.

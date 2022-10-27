// index.js
import { logger } from "./logger.js";
import { mailSender } from "./mail-sender.js";
import Observable from "./observable.js";

// Add logger to subscribers
Observable.subscribe(logger);
Observable.subscribe(mailSender);

// Add event listener to button
// and notify to all subscribes
// when someone click it
document.getElementById('click-me-button').addEventListener('click', () => {
  Observable.notify('This is not spam, this is a testing feature.');
});

#!/usr/bin/env node

const EventEmitter = require('events');

class MyEmitter extends EventEmitter { }

class Book {
  constructor(title, chapters) {
    this.title = typeof title === "undefined" ? "anonymous book" : title;
    this.chapters = typeof chapters === "undefined" ? [] : chapters;
  }
}

class Chapter {
  constructor(title) {
    this.title = title;
    this.title = title;
  }
}

(async () => {
  const myEmitter = new MyEmitter();
  myEmitter.on('add_chapter', (c, b) => {
    console.log(`chapter "${c}" was added to book "${b}"`);
  });

  const perfume = new Book("Perfume");

  [1, 2, 3, 4, 5, 6, 7, 8, 9].map(c => {
    const ch = new Chapter(`ch ${c}`)
    perfume.chapters.push(ch);

    return myEmitter.emit('add_chapter', ch.title, perfume.title);
  });
})();

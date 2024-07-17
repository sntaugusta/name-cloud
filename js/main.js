const queryStrings = new URLSearchParams(globalThis?.location?.search);
const querySheetId = 'sheetId';
const queryApiKey = 'apiKey';
const queryRepeatRows = 'repeatRows';
const queryRepeatNames = 'repeatNames';
const queryDelay = 'delay';
const queryFontSize = 'fontSize';
const queriesRequire = [querySheetId, queryApiKey];

const delayBetweenMiliseconds = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const getElement = (key) => document.querySelector(key);

if (queriesRequire.every((item) => queryStrings.get(item))) {
  const sheetId = queryStrings.get(querySheetId);
  const apiKey = queryStrings.get(queryApiKey);
  const range = queryStrings.get('range') || 'A1:T20';
  const rows = Number(queryStrings.get(queryRepeatRows)) || 3;
  const repeat = Number(queryStrings.get(queryRepeatNames)) || 2;
  const delay = Number(queryStrings.get(queryDelay)) || 1;
  const fontSize = Number(queryStrings.get(queryFontSize)) || 20;
  fetch(`https://content-sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`)
    .then((e) => e.json())
    .then(({ values }) => {
      const namesByColumn = [];

      values.forEach((item) => {
        item.forEach((text, i) => {
          if (!namesByColumn[i]) {
            namesByColumn[i] = [];
          }
          namesByColumn[i].push(text);
        });
      });
      [...new Array(rows)].forEach(() => {
        namesByColumn.forEach((row) => {
          getElement('.name-list').insertAdjacentHTML(
            'beforeend',
            `<div class="name-row" style="animation-duration: ${60 * delay * repeat}s;"></div>`,
          );
          [...new Array(repeat * 2)].forEach(() => {
            row.forEach((data, j) => {
              getElement('.name-list .name-row:last-child').insertAdjacentHTML(
                'beforeend',
                `<div class="name" style="
                        animation: name-row-bottom 0.6s ${
                          delayBetweenMiliseconds(400, 3500 * repeat) + 1200
                        }ms forwards;
                        font-size: ${fontSize}px;
                        line-height: ${fontSize * 0.9}px;
                      ">${data}</div>`,
              );
            });
          });
        });
      });
    });
} else {
  queriesRequire.forEach((item) => {
    if (!queryStrings.get(item)) {
      console.error(`🚨"${item}" is require query-string`);
    }
  });
}

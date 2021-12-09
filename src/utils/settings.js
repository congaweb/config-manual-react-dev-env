export const settings = {
  clickDocumentReloadBrowser() {
    document.addEventListener('click', () => {
      window.location.reload();
    });
  },
  setDocumentTitle(newTitle) {
    document.title = newTitle;
  },
  autoPlaySound({
    src,
    id = 'bgm',
    resolve,
    reject = (errorLog) => {
      console.error(errorLog);
    },
  } = {}) {
    document.body.insertAdjacentHTML(
      'beforeend',
      `<audio id=${id} src=${src} autoplay></audio>`
    );

    window.navigator.mediaDevices
      .getUserMedia({
        audio: true,
      })
      .then((/* stream */) => {
        console.log('play audio');
        resolve(document.getElementById(id));
      })
      .catch(({ message }) => reject(message));
  },
};

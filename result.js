function displayNone(ele) {
  ele.classList.remove('d-block');
  ele.classList.add('d-none');
}

function displayBlock(ele) {
  ele.classList.remove('d-none');
  ele.classList.add('d-block');
}

const page = {
  home: document.getElementById('home'),
  result: document.getElementById('result'),
};

function seeResult() {
  let omikujiData = randomSet();
  displayNone(page.home);
  displayBlock(page.result);
  page.result.append(makeResult(omikujiData));
}

function backToHome() {
  displayBlock(page.home);
  displayNone(page.result);
  page.result.innerHTML = '';
}

function makeResult(omikujiData) {
  const container = document.createElement('div');
  container.classList.add('overflow-scroll', 'p-2');

  const temp = document.createElement('div');
  temp.classList.add(
    'd-flex',
    'vh100',
    'justify-content-center',
    'align-items-center',
    'flex-column'
  )

  const omikuji = document.createElement('div');
  omikuji.classList.add(
    'omikuji',
    'bg-white',
    'd-flex',
    'align-items-center',
    'flex-column',
    'my-3',
  );

  omikuji.innerHTML = `
              <div>
                <h5 class="text-danger yuji-syuku pt-3">
                  ソフトウェア開発みくじ
                </h5>
              </div>
              <div>
                <hr class="line-red" />
                <img class="illust" src="${omikujiData["url"]}" />
                <hr class="line-red" />
              </div>
              <div>
                <h1 class="text-danger yuji-syuku text-center p-3">
                  ${omikujiData["結果"]}
                </h1>
              </div>
              <div>
              <p class="text-danger yuji-syuku p-3">
              ${omikujiData["詳細"]}
              </p>
              </div>
              <div class="mb-3">
                <hr class="line-red" />
                <p class="text-danger yuji-syuku text-center">✿ ラッキー言語 ✿</p>
                <h5 class="text-danger yuji-syuku text-center">${omikujiData["言語"]}</h5>
                <hr class="line-red" />
                <p class="text-danger yuji-syuku text-center">
                  ✿ ラッキーデータベース ✿
                </p>
                <h5 class="text-danger yuji-syuku text-center">${omikujiData["データベース"]}</h5>
                <hr class="line-red" />
                <p class="text-danger yuji-syuku text-center">
                  ✿ ラッキーエディタ ✿
                </p>
                <h5 class="text-danger yuji-syuku text-center">
                  ${omikujiData["エディタ"]}
                </h5>
              </div>
              <div class="mb-3">
                <button
                  id="re-draw-omikuji"
                  type="button"
                  class="btn btn-danger rounded-pill yuji-syuku"
                >
                  もう一度おみくじを引く
                </button>
              </div>
  `;

  omikuji
    .querySelectorAll('#re-draw-omikuji')[0]
    .addEventListener('click', function () {
      backToHome();
    });
  temp.append(container)
  container.append(omikuji);
  return temp;
}



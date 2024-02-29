const favoriteMovies = [
  {
    title: '소스코드',
    poster_link:
      'https://i.namu.wiki/i/Uay_gE_YLkTTjANNV0RudvFLYBMRazBZXgdRDAII38T5_taBoflYbvB25xORYY1fKn6v6VCJMhPJE-Hwkth9xiIMB9cfhmnITX9UeWuyiZVamCS4mKz3mU7GrIHY8s8Nn-KbAUjkSJ-wLloxIr0uRg.webp',
    plot: '2011년에 개봉한 미국의 SF 영화. 주어진 8분의 시간을 계속 반복하여 열차를 폭파한 테러리스트를 추적한다는 기본 설정을 바탕으로, 그 8분간을 어떻게 활용하느냐에 따라 전혀 다른 전개가 펼쳐지는 이색적인 영화이다.',
    link: 'https://namu.wiki/w/%EC%86%8C%EC%8A%A4%20%EC%BD%94%EB%93%9C(%EC%98%81%ED%99%94)',
  },
  {
    title: '라이프 오브 파이',
    poster_link:
      'https://i.namu.wiki/i/PHlLwZvAdPNO6kwPeF2-Ng6wwVRYayq3g6bva6ZRUsTvmdscVQ4WvBWeI-RkpzG6LA3v8BPvpMIhaTDAqgooJfoARhXmX40LKt8H5ldvl-3JpmI09YPYiNL8zk3OFSZr4ZWMRs3GX8Ec1XAxBN9GXg.webp',
    plot: '영화판에서 프랑스 선원을 맡은 배우가 프랑스의 국민배우 제라르 드빠르디유이다. 일부에서는 후반부에 언급되는 두 번째 이야기에서의 비중 때문에 대배우를 캐스팅한 것이 아닌지 추측하고 있다.    ',
    link: 'https://namu.wiki/w/%EB%9D%BC%EC%9D%B4%ED%94%84%20%EC%98%A4%EB%B8%8C%20%ED%8C%8C%EC%9D%B4',
  },
  {
    title: '더 울프 오브 월 스트리트',
    poster_link:
      'https://i.namu.wiki/i/W5sdQl69bfbSI46U2BJjEb3vfcarT787PVnWF3pElfgIJZX1u1F792-hmMtmaIwkLvkQxBZSzPP4kxujWVAD7fHElqIXA1Gepyu0MTKPX8MniTdjvK8czVCzzqPEh9ZP3DarjxH_wfrP2RhtCkML8g.webp',
    plot: '뉴욕 롱아일랜드의 주식투자자로 1990년대에 월 스트리트와 투자은행 등에서 대규모 주식 사기를 일으켜 징역 22개월(영화에서는 36개월)을 살았던 조던 벨포트의 놀라운 실화를 바탕으로 제작한 영화이다.',
    link: 'https://namu.wiki/w/%EB%8D%94%20%EC%9A%B8%ED%94%84%20%EC%98%A4%EB%B8%8C%20%EC%9B%94%20%EC%8A%A4%ED%8A%B8%EB%A6%AC%ED%8A%B8',
  },
];

function main() {
  drawMovieTable();
  drawMovieCheckbox();

  setupRegisterButton();
}

main();

function drawMovieTable() {
  const favoriteMoviesElement = document.getElementById('favorite-movies');

  const favoriteMoviesHTML = favoriteMovies
    .map((movie, idx) => {
      return `
      <tr>
        <td>
          <div>${idx + 1}</div>
        </td>
        <td>
          <div>${movie.title}</div>
        </td>
        <td class="movie-img">
          <img src="${movie.poster_link}" alt="${movie.title}" />
        </td>
        <td>
          <p>${movie.plot}</p>
        </td>
        <td>
          <a href="${movie.link}" target="_blank">클릭</a>
        </td>
      </td>
    `;
    })
    .join('');

  favoriteMoviesElement.insertAdjacentHTML('beforeend', favoriteMoviesHTML);
}

function drawMovieCheckbox() {
  const guestBookFavoriteMoviesElement = document.getElementById(
    'guestbook-favorite-movies'
  );

  const guestBookElementMoviesHtml = favoriteMovies
    .map((movie) => {
      return `
      <div>
        <input
          type="checkbox"
          class="guestbook-favorite-movies-checkbox"
          id="${movie.title}"
          value="${movie.title}"
        />
        <label for="${movie.title}">${movie.title}</label>
      </div>
    `;
    })
    .join('');

  guestBookFavoriteMoviesElement.innerHTML = guestBookElementMoviesHtml;
}

function setupRegisterButton() {
  const registerButton = document.querySelector('#guestbook-register-button');
  registerButton.addEventListener('click', function () {
    const nameInput = document.getElementById('name');
    const checkedMovies = document.querySelectorAll(
      '.guestbook-favorite-movies-checkbox:checked'
    );

    const userName = nameInput.value.trim();
    const userPreferences = Array.from(checkedMovies).map(
      (movie) => movie.value
    );

    const visitor = {
      name: userName,
      preferences: userPreferences,
    };

    checkPreferences(visitor);
  });
}

function checkPreferences(visitor) {
  let matchedPreferences = 0;

  for (const movie of favoriteMovies) {
    if (visitor.preferences.includes(movie.title)) {
      matchedPreferences++;
    }
  }

  if (matchedPreferences > 0) {
    alert(
      `${visitor.name}님, 저와 ${matchedPreferences}개의 취향이 같으시네요!`
    );
  } else {
    alert(`${visitor.name}님, 취향이 일치하는 영화가 없네요.`);
  }
}

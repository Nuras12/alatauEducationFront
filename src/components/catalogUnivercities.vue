<template>
  <section class="catalog">
    <div class="catalog__finder">
      <div class="catalog__searchbar searchbar">
        <input type="text" name="searchbar__input" class="searchbar__input" placeholder="Поиск">
        <button class="searchbar__btn"><img src="../assets/search.png" alt="Find" class="searchbar__btn-img"></button>
      </div>

      <div class="catalog__filter filter">
        <p class="filter__text">Фильтр: </p>
        <span class="filter__chose"></span>
        <select name="filter__select" id="filterSelect" class="filter__select">
          <option value="">Город</option>
          <option value="">Город 2</option>
          <option value="">Город 3</option>
          <option value="">Город 4</option>
        </select>
      </div>
    </div>

    <div class="catalog__content">
      <div class="card">
        <img src="../assets/card.png" alt="card" class="card__img">
        <h3 class="card__title">Пекинский университет</h3>
      </div>

      <div class="card">
        <img src="../assets/card.png" alt="card" class="card__img">
        <h3 class="card__title">Шанхайский
          университет</h3>
      </div>

      <div class="card">
        <img src="../assets/card.png" alt="card" class="card__img">
        <h3 class="card__title">Гонгконгский
          университет</h3>
      </div>

      <div class="card">
        <img src="../assets/card.png" alt="card" class="card__img">
        <h3 class="card__title">Пекинский университет</h3>
      </div>

      <div class="card">
        <img src="../assets/card.png" alt="card" class="card__img">
        <h3 class="card__title">Шанхайский
          университет</h3>
      </div>

      <div class="card">
        <img src="../assets/card.png" alt="card" class="card__img">
        <h3 class="card__title">Гонгконгский
          университет</h3>
      </div>

      <div class="card">
        <img src="../assets/card.png" alt="card" class="card__img">
        <h3 class="card__title">Пекинский университет</h3>
      </div>

      <div class="card">
        <img src="../assets/card.png" alt="card" class="card__img">
        <h3 class="card__title">Шанхайский
          университет</h3>
      </div>

      <div class="card">
        <img src="../assets/card.png" alt="card" class="card__img">
        <h3 class="card__title">Гонгконгский
          университет</h3>
      </div>

      <div class="card">
        <img src="../assets/card.png" alt="card" class="card__img">
        <h3 class="card__title">Пекинский университет</h3>
      </div>

      <div class="card">
        <img src="../assets/card.png" alt="card" class="card__img">
        <h3 class="card__title">Шанхайский
          университет</h3>
      </div>

      <div class="card">
        <img src="../assets/card.png" alt="card" class="card__img">
        <h3 class="card__title">Гонгконгский
          университет</h3>
      </div>
    </div>
  </section>
</template>
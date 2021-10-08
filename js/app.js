document.addEventListener('DOMContentLoaded', () => {
  const random = getRandomInt(1, 151)
  fetchData(random)
});

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
}

const fetchData = async (id) => {
  try {
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await resp.json();

    drawCard(data);
  }
  catch (error) {
    console.log(error);
  }
}

const drawCard = (pokemon) => {
  console.log(pokemon);
  const flex = document.querySelector(".flex")
  const template = document.querySelector("#template-card").content
  const clone = template.cloneNode(true)
  const fragment = document.createDocumentFragment()

  clone.querySelector(".card-body-img").setAttribute('src', pokemon.sprites.other.dream_world.front_default)
  clone.querySelector(".card-body-name").innerHTML = `${pokemon.name} <span>${pokemon.stats[0].base_stat} hp </span>`
  clone.querySelector(".card-body-text").textContent = `${pokemon.base_experience} Exp`
  clone.querySelectorAll(".card-footer-social h3")[0].textContent = `${pokemon.stats[1].base_stat}K`
  clone.querySelectorAll(".card-footer-social h3")[1].textContent = `${pokemon.stats[3].base_stat}K`
  clone.querySelectorAll(".card-footer-social h3")[2].textContent = `${pokemon.stats[2].base_stat}K`



  fragment.appendChild(clone);
  flex.appendChild(fragment);
}
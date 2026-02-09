function selectArtist(artist) {
  const result = document.getElementById("result");
  result.innerText = `Locked in. ${artist} it is ❤️`;
  result.style.opacity = 1;

  document.querySelectorAll(".card").forEach(card => {
    card.classList.add("selected");
  });
}

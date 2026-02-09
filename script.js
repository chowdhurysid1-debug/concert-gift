function selectArtist(artist) {
  document.getElementById("result").innerText =
    `Locked in. ${artist} it is ❤️`;

  document.querySelectorAll(".card").forEach(card => {
    card.classList.add("selected");
  });
}

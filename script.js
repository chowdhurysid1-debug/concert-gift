* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  background: radial-gradient(circle at top, #111, #000);
  color: white;
  min-height: 100vh;
  display: flex;
  justify-content: center;
}

.container {
  width: 100%;
  max-width: 1100px;
  padding: 60px 20px;
  text-align: center;
  animation: fadeIn 1s ease forwards;
}

h1 {
  font-size: 2.6rem;
  margin-bottom: 10px;
}

.subtitle {
  color: #bdbdbd;
  margin-bottom: 50px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 30px;
}

.card {
  background: #141414;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  transform: translateY(30px);
  opacity: 0;
  animation: slideUp 0.8s ease forwards;
}

.card:nth-child(1) { animation-delay: 0.1s; }
.card:nth-child(2) { animation-delay: 0.2s; }
.card:nth-child(3) { animation-delay: 0.3s; }
.card:nth-child(4) { animation-delay: 0.4s; }
.card:nth-child(5) { animation-delay: 0.5s; }
.card:nth-child(6) { animation-delay: 0.6s; }

.card img {
  width: 100%;
  height: 190px;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.card h3 {
  margin: 16px 0 6px;
  font-size: 1.2rem;
}

.card span {
  display: block;
  font-size: 0.9rem;
  color: #a5a5a5;
  margin-bottom: 18px;
}

.card:hover {
  transform: translateY(-8px) scale(1.03);
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.6);
}

.card:hover img {
  transform: scale(1.1);
}

.card.selected {
  opacity: 0.25;
  pointer-events: none;
}

#result {
  margin-top: 45px;
  font-size: 1.4rem;
  opacity: 0;
  animation: fadeUp 0.7s ease forwards;
}

@keyframes slideUp {
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

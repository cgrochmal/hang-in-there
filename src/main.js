// query selector variables go here 👇

// we've provided you with some data to work with 👇
var images = [
  "./assets/bees.jpg",
  "./assets/bridge.jpg",
  "./assets/butterfly.jpg",
  "./assets/cliff.jpg",
  "./assets/elephant.jpg",
  "./assets/flock.jpg",
  "./assets/fox.jpg",
  "./assets/frog.jpg",
  "./assets/horse.jpg",
  "./assets/lion.jpg",
  "./assets/mountain.jpg",
  "./assets/pier.jpg",
  "./assets/puffins.jpg",
  "./assets/pug.jpg",
  "./assets/runner.jpg",
  "./assets/squirrel.jpg",
  "./assets/tiger.jpg",
  "./assets/turtle.jpg"
]
var titles = [
  "determination",
  "success",
  "inspiration",
  "perspiration",
  "grit",
  "empathy",
  "feelings",
  "hope",
  "believe",
  "try",
  "conviction",
  "accomplishment",
  "achievement",
  "ambition",
  "clarity",
  "challenge",
  "commitment",
  "confidence",
  "action",
  "courage",
  "focus",
  "breathe",
  "gratitude",
  "imagination",
  "kindness",
  "mindfulness",
  "knowledge",
  "opportunity",
  "passion",
  "patience",
  "practice",
  "smile",
  "trust",
  "understanding",
  "wisdom"
]
var quotes = [
  "Don’t downgrade your dream just to fit your reality, upgrade your conviction to match your destiny.",
  "You are braver than you believe, stronger than you seem and smarter than you think.",
  "You are confined only by the walls you build yourself.",
  "The one who has confidence gains the confidence of others.",
  "Act as if what you do makes a difference. It does.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Never bend your head. Always hold it high. Look the world straight in the eye.",
  "What you get by achieving your goals is not as important as what you become by achieving your goals.",
  "Believe you can and you're halfway there.",
  "When you have a dream, you've got to grab it and never let go.",
  "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
  "No matter what you're going through, there's a light at the end of the tunnel.",
  "It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.",
  "Life is like riding a bicycle. To keep your balance, you must keep moving.",
  "Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong.",
  'Limit your "always" and your "nevers."',
  "You are never too old to set another goal or to dream a new dream.",
  "Try to be a rainbow in someone else's cloud.",
  "You do not find the happy life. You make it.",
  "Inspiration comes from within yourself. One has to be positive. When you're positive, good things happen.",
  "Sometimes you will never know the value of a moment, until it becomes a memory.",
  "The most wasted of days is one without laughter.",
  "You must do the things you think you cannot do.",
  "It isn't where you came from. It's where you're going that counts.",
  "It is never too late to be what you might have been.",
  "Happiness often sneaks in through a door you didn't know you left open.",
  "We must be willing to let go of the life we planned so as to have the life that is waiting for us.",
  "Never limit yourself because of others’ limited imagination never limit others because of your own limited imagination.",
  "Be the change that you wish to see in the world.",
  "Let us make our future now, and let us make our dreams tomorrow's reality.",
  "You don't always need a plan. Sometimes you just need to breathe, trust, let go, and see what happens.",
  "If I cannot do great things, I can do small things in a great way.",
  "Don't wait. The time will never be just right.",
  "With the right kind of coaching and determination you can accomplish anything.",
  "If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely.",
  "No matter what people tell you, words and ideas can change the world.",
  "Each person must live their life as a model for others.",
  "A champion is defined not by their wins but by how they can recover when they fall."
]
var savedPosters = []
var currentPoster

const sectionMainPoster = document.querySelector('.main-poster')
const sectionCreatePoster = document.querySelector('.poster-form')
const sectionSavedPosters = document.querySelector('.saved-posters')
const articleSavedPostersGrid = document.querySelector('.saved-posters-grid')

// event listeners go here 👇

window.onload = function onLoad() {  
  renderRandomPoster()
}

/**
 * Updates DOM with Poster with random title, quote, and image.
 */
function renderRandomPoster() {
  const randomPoster = getRandomPoster()
  renderMainPoster(randomPoster)
}


// NAVIGATION

/** 
 * Hide poster form and saved posters, and show main poster.
 */
function showMainPoster() {
  sectionCreatePoster.classList.add('hidden')
  sectionSavedPosters.classList.add('hidden')
  sectionMainPoster.classList.remove('hidden')
}

/** 
 * Hide saved posters and main poster, and show poster form.
 */
function showPosterForm() {
  sectionMainPoster.classList.add('hidden')
  sectionSavedPosters.classList.add('hidden')
  sectionCreatePoster.classList.remove('hidden')
}

/** 
 * Hide poster form and main poster, and show saved posters.
 */
function showSavedPosters() {
  sectionMainPoster.classList.add('hidden')
  sectionCreatePoster.classList.add('hidden')
  sectionSavedPosters.classList.remove('hidden')
}

// CREATE POSTER FORM

/**
 * Save and render a poster if all fields are provided.
 * @param {Event} e onsubmit event handler.
 */
function submitPoster(e) {
  e.preventDefault()

  const newPosterUrl = document.getElementById('poster-image-url').value
  const newPosterTitle = document.getElementById('poster-title').value
  const newPosterQuote = document.getElementById('poster-quote').value

  // do nothing if all fields aren't filled out
  if (newPosterUrl && newPosterTitle && newPosterQuote) {
    const newPoster = new Poster(newPosterUrl, newPosterTitle, newPosterQuote)
    // save and render new poster
    savePoster(newPoster)
    renderMainPoster(newPoster)
    // reset form <input> values
    document.querySelector('.poster-form form').reset()
  }
}

// functions and event handlers go here 👇
// (we've provided one for you to get you started)!

// DATA HELPERS

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length)
}

/**
 * Generates a Poster with a random image, title, and quote from the data above.
 * @returns {Poster}
 */
function getRandomPoster() {
  const randomImageURL = images[getRandomIndex(images)]
  const randomTitle = titles[getRandomIndex(titles)]
  const randomQuote = quotes[getRandomIndex(quotes)]

  return new Poster(randomImageURL, randomTitle, randomQuote)
}

/**
 * Saves poster data and appends a new .mini-poster to the saved posters grid.
 * @param {Poster} poster 
 */
function savePoster(poster) {
  savedPosters.push(poster)
  const divMiniPoster = getMiniPosterElement(poster)
  articleSavedPostersGrid.append(divMiniPoster)
}

// RENDER HELPERS

/**
 * Updates DOM with provided Poster.
 * @param {Poster} poster
 */
function renderMainPoster(poster) {
  const imgPoster = document.querySelector('.poster-img')
  imgPoster.src = poster.imageURL

  const h1Title = document.querySelector('.poster-title')
  h1Title.innerText = poster.title

  const h3Quote = document.querySelector('.poster-quote')
  h3Quote.innerText = poster.quote

  showMainPoster()
}

/**
 * Returns a .mini-poster DOM node for use in the saved posters grid.
 * @param {Poster} poster 
 * @returns {Element} <div class="min-poster"> + children
 */
function getMiniPosterElement(poster) {
  // create container
  const divMiniPoster = document.createElement('div')
  divMiniPoster.className = 'mini-poster'
  
  // create and append children
  const h2PosterTitle = document.createElement('h2')
  h2PosterTitle.innerText = poster.title

  const h4PosterText = document.createElement('h4')
  h4PosterText.innerText = poster.quote

  const imgContents = document.createElement('img')
  imgContents.src = poster.imageURL
  
  divMiniPoster.append(imgContents, h2PosterTitle, h4PosterText)
  return divMiniPoster;
}
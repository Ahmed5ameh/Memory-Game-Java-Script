document.addEventListener('DOMContentLoaded', () => {
    //Store all the game cards here each one as an object
    //Array of objects (each object is a card)
    const cardArray = [
      {
        name: '1',
        img: 'game_images/1.gif'
      },

      {
        name: '2',
        img: 'game_images/2.gif'
      },

      {
        name: '3',
        img: 'game_images/3.gif'
      },

      {
        name: '4',
        img: 'game_images/4.gif'
      },

      {
        name: '5',
        img: 'game_images/5.gif'
      },

      {
        name: '6',
        img: 'game_images/6.gif'
      },

      {
        name: '1',
        img: 'game_images/1.gif'
      },

      {
        name: '2',
        img: 'game_images/2.gif'
      },

      {
        name: '3',
        img: 'game_images/3.gif'
      },

      {
        name: '4',
        img: 'game_images/4.gif'
      },

      {
        name: '5',
        img: 'game_images/5.gif'
      },

      {
        name: '6',
        img: 'game_images/6.gif'
      }
    ]
  
    cardArray.sort(() => 0.5 - Math.random())       //Shuffle/Randomize cards every time
  
    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []        //We save the cards that the player will choose here
    let cardsChosenId = []
    let cardsWon = []           //We save the cards that he already revealed here
  
    //Create game board
    function createBoard() {
      for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'game_images/Moon.gif')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
      }
    }
  
    //check for matches
    function checkForMatch() {
      const cards = document.querySelectorAll('img')
      const optionOneId = cardsChosenId[0]
      const optionTwoId = cardsChosenId[1]
      
      if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'game_images/Moon.gif')
        cards[optionTwoId].setAttribute('src', 'game_images/Moon.gif')
        //alert('You have clicked the same image!')
      }
      else if (cardsChosen[0] === cardsChosen[1]) {
        //alert('You found a match')
        cards[optionOneId].setAttribute('src', 'game_images/white.png')
        cards[optionTwoId].setAttribute('src', 'game_images/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
      } else {
        cards[optionOneId].setAttribute('src', 'game_images/Moon.gif')
        cards[optionTwoId].setAttribute('src', 'game_images/Moon.gif')
        //alert('Sorry, try again')
      }
      cardsChosen = []
      cardsChosenId = []
      resultDisplay.textContent = cardsWon.length
      if  (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'Congratulations! You found them all!'
      }
    }
  
    //Flip your card
    function flipCard() {
      let cardId = this.getAttribute('data-id')
      cardsChosen.push(cardArray[cardId].name)
      cardsChosenId.push(cardId)
      this.setAttribute('src', cardArray[cardId].img)
      if (cardsChosen.length ===2) {
        setTimeout(checkForMatch, 500)
      }
    }
  
    createBoard()
  })
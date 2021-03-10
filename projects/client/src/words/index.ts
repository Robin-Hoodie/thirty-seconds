const BATCH_AMOUNT = 5;

const words = {
  available: [
    "De Euromast",
    "Hyves",
    "Hilary Clinton",
    "Najib Amhali",
    "De Marathon van New York",
    "Noorwegen",
    "KBC",
    "KRC Genk",
    "Afrikaanse Olifant",
    "Eminem",
    "Sabaton",
  ],
  unavailable: [],
};

export const getBatchOfWordsRandom = () => {
  if (words.available.length < BATCH_AMOUNT) {
    throw new Error(`There are less than ${BATCH_AMOUNT} words available`);
  }
  const batchOfWords = [];
  for (let i = 0; i < BATCH_AMOUNT; i++) {
    const randomWord = getRandomWord();
    batchOfWords.push(randomWord);
    words.available = words.available.filter((word) => randomWord !== word);
  }
  return batchOfWords;
};

const getRandomWord = () => {
  const randomIndex = Math.floor(Math.random() * words.available.length);
  return words.available[randomIndex];
};

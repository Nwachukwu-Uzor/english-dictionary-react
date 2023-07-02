import React, { useState } from "react";
import { Header, Container, WordSearch, WordResponse } from "../components";

const dummyResponse = [
  {
    word: "advance",
    phonetic: "/ədˈvaːns/",
    phonetics: [
      { text: "/ədˈvaːns/", audio: "" },
      { text: "/ədˈvaːns/", audio: "" },
      { text: "/ədˈvɑːns/", audio: "" },
      {
        text: "/ədˈvæns/",
        audio:
          "https://api.dictionaryapi.dev/media/pronunciations/en/advance-us.mp3",
        sourceUrl: "https://commons.wikimedia.org/w/index.php?curid=1446810",
        license: {
          name: "BY-SA 3.0",
          url: "https://creativecommons.org/licenses/by-sa/3.0",
        },
      },
    ],
    meanings: [
      {
        partOfSpeech: "noun",
        definitions: [
          {
            definition: "A forward move; improvement or progression.",
            synonyms: [],
            antonyms: [],
            example: "an advance in health or knowledge",
          },
          {
            definition:
              "An amount of money or credit, especially given as a loan, or paid before it is due; an advancement.",
            synonyms: [],
            antonyms: [],
          },
          {
            definition: "An addition to the price; rise in price or value.",
            synonyms: [],
            antonyms: [],
            example: "an advance on the prime cost of goods",
          },
          {
            definition:
              "(in the plural) An opening approach or overture, especially of an unwelcome or sexual nature.",
            synonyms: [],
            antonyms: [],
          },
        ],
        synonyms: [],
        antonyms: ["regress", "regression"],
      },
      {
        partOfSpeech: "verb",
        definitions: [
          {
            definition: "To promote or advantage.",
            synonyms: [],
            antonyms: [],
          },
          {
            definition: "To move forward in space or time.",
            synonyms: [],
            antonyms: [],
          },
          { definition: "To raise, be raised.", synonyms: [], antonyms: [] },
        ],
        synonyms: [
          "accelerate",
          "adduce",
          "aggrandize",
          "allege",
          "assign",
          "elevate",
          "exalt",
          "heighten",
          "improve",
          "raise",
        ],
        antonyms: ["regress", "retract"],
      },
      {
        partOfSpeech: "adjective",
        definitions: [
          {
            definition: "Completed before necessary or a milestone event.",
            synonyms: [],
            antonyms: [],
            example:
              "He made an advance payment on the prior shipment to show good faith.",
          },
          {
            definition: "Preceding",
            synonyms: [],
            antonyms: [],
            example: "The advance man came a month before the candidate.",
          },
          {
            definition: "Forward",
            synonyms: [],
            antonyms: [],
            example: "The scouts found a site for an advance base.",
          },
        ],
        synonyms: [],
        antonyms: [],
      },
    ],
    license: {
      name: "CC BY-SA 3.0",
      url: "https://creativecommons.org/licenses/by-sa/3.0",
    },
    sourceUrls: ["https://en.wiktionary.org/wiki/advance"],
  },
];

export const Main: React.FC = () => {
  const [word, setWord] = useState("");
  const [definitionResponse, setDefinitionResponse] = useState(
    dummyResponse[0]
  );

  const handleWordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWord(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(word);
  };
  return (
    <>
      <Container>
        <Header />
        <WordSearch
          word={word}
          handleChange={handleWordChange}
          onSubmit={handleSubmit}
        />
        <WordResponse definitionResponse={definitionResponse} />
      </Container>
    </>
  );
};

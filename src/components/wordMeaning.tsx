import React from "react";
import { Meaning } from "../@types";

interface Props {
  meaning: Meaning;
}

export const WordMeaning: React.FC<Props> = ({ meaning }) => {
  return (
    <article>
      <div className="flex justify-between gap-2 lg:gap-8 items-center mb-3 mt-2">
        <h2 className="text-lg lg:text-xl font-medium">
          {meaning?.partOfSpeech}
        </h2>
        <hr className="flex-1 border border-gray-300" />
      </div>
      {meaning?.definitions?.length ? (
        <div className="my-2 lg:my-4">
          <h2 className="text-sm lg:text-base font-medium text-gray-text mb-1">
            Meaning
          </h2>
          <ul className="px-2 lg:px-4">
            {meaning?.definitions?.map((definition) => (
              <li key={definition?.definition} className="my-1 lg:my-2">
                <div className="flex gap-2 items-baseline lg:gap-4">
                  <span className="h-1.5 w-1.5 inline-block bg-accent-purple rounded-full"></span>
                  <span>{definition?.definition}</span>
                </div>
                {definition?.example?.length ? (
                  <p className="ml-3 lg:ml-5 text-gray-text">"{definition?.example}"</p>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      {meaning?.synonyms?.length ? (
        <div className="flex gap-2 lg:gap-6">
          <h2 className="text-sm lg:text-base font-medium text-gray-text">
            synonyms
          </h2>
          <div className="flex items-center flex-wrap gap-x-2">
            {meaning?.synonyms?.map((synonym, index) => (
              <h2
                key={`${synonym}-${index}`}
                className="text-sm lg:text-base font-medium text-accent-purple"
              >
                {synonym}
              </h2>
            ))}
          </div>
        </div>
      ) : null}
      {meaning?.antonyms?.length ? (
        <div className="flex gap-2 lg:gap-6">
          <h2 className="text-sm lg:text-base font-medium text-gray-text">
            antonyms
          </h2>
          <div className="flex items-center flex-wrap gap-x-2">
            {meaning?.antonyms?.map((antonym, index) => (
              <h2
              key={`${antonym}-${index}`}
                className="text-sm lg:text-base font-medium text-accent-purple"
              >
                {antonym}
              </h2>
            ))}
          </div>
        </div>
      ) : null}
    </article>
  );
};

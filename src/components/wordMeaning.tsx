import React from "react";
import { Meaning } from "../@types";

interface Props {
  meaning: Meaning;
}

export const WordMeaning: React.FC<Props> = ({ meaning }) => {
  return (
    <article>
      <div className="flex justify-between gap-2 lg:gap-8 items-center mb-3 mt-2">
        <h2 className="text-lg lg:text-xl font-medium text-gray-400">
          {meaning?.partOfSpeech}
        </h2>
        <hr className="flex-1 border border-gray-300" />
      </div>
      {meaning?.definitions?.length ? (
        <div className="my-2 lg:my-4">
          <h2 className="text-base lg:text-lg font-medium text-gray-text mb-1">
            Meaning
          </h2>
          <ul className="px-2 lg:px-4">
            {meaning?.definitions?.map((definition) => (
              <li
                key={definition?.definition}
                className="flex items-center gap-2 lg:gap-4"
              >
                <span className="h-1.5 w-1.5 inline-block bg-accent-purple rounded-full"></span>
                {definition?.definition}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      {meaning?.synonyms?.length ? <div></div> : null}
    </article>
  );
};

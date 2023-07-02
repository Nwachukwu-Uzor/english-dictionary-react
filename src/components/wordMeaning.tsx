import React from "react";
import { Meaning } from "../@types";

interface Props {
  meaning: Meaning;
}

export const WordMeaning: React.FC<Props> = ({ meaning }) => {
  return (
    <article>
      <div className="flex justify-between gap-2 lg:gap-8 items-center">
        <h2 className="text-lg lg:txt-xl font-medium text-gray-text">
          {meaning?.partOfSpeech}
        </h2>
        <hr className="flex-1 text-red-500" />
      </div>
      {meaning?.definitions ? (
        <div>
          <ul>
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
    </article>
  );
};

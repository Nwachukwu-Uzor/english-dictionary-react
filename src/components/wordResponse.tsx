import React from "react";
import { DictionaryResult } from "../@types";

interface Props {
  definitionResponse: DictionaryResult;
}

export const WordResponse: React.FC<Props> = ({ definitionResponse }) => {
  return (
    <section className="my-3">
      <article className="flex justify-between items-center">
        <div className="text-2xl lg:text-4xl font-bold">
          <h1>{definitionResponse?.word}</h1>
          <p
            className={`mt-1 text-sm lg:text-lg text-accent-purple font-medium`}
          >
            {definitionResponse?.phonetic ??
              definitionResponse?.phonetics?.[0]?.text}
          </p>
        </div>
      </article>
    </section>
  );
};

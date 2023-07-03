import React, { useMemo } from "react";
import { DictionaryResult, Phonetic } from "../@types";
import { BsFillPlayFill } from "react-icons/bs";
import { WordMeaning } from ".";

interface Props {
  definitionResponse: DictionaryResult;
}

export const WordResponse: React.FC<Props> = ({ definitionResponse }) => {
  const audioLink = useMemo<string | null | undefined>(() => {
    const responseWithAudio = definitionResponse?.phonetics?.filter(
      (ph) => ph?.audio
    ) as Phonetic[];
    if (responseWithAudio?.length === 0) {
      return null;
    }

    const [firstResponse] = responseWithAudio;
    return firstResponse?.audio;
  }, [definitionResponse]);

  const handlePlayAudio = () => {
    if (!audioLink) {
      return;
    }
    const audio = new Audio(audioLink);

    audio?.play();
  };
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
        <div
          className="h-8 w-8 lg:h-12 lg:w-12 flex items-center justify-center bg-accent-purple/30 rounded-full active:opacity-20 duration-150 cursor-pointer hover:opacity-60"
          onClick={handlePlayAudio}
        >
          <BsFillPlayFill className="text-accent-purple text-xl lg:text-3xl" />
        </div>
      </article>
      <div className="my-2 flex flex-col gap-2">
        {definitionResponse?.meanings?.map((meaning) => (
          <WordMeaning meaning={meaning} key={meaning?.partOfSpeech} />
        ))}
      </div>
      <div className="mt-4 lg:mt-8">
        <hr className="border-gray-text" />
        <div className="flex items-center justify-between mt-2 lg:mt-4">
          <h2 className="text-sm lg:text-base font-medium text-gray-text">
            source
          </h2>
          {definitionResponse?.sourceUrls?.map((sourceUrl) => (
            <a
              key={sourceUrl}
              href={sourceUrl}
              target="_blank"
              className="underline hover:opacity-50 cursor-pointer"
            >
              {sourceUrl}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

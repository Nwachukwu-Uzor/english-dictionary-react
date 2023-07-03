import React from "react";

export const WordNotFound: React.FC = () => {
  return (
    <article className="flex flex-col justify-center items-center gap-2 min-h-[50vh] text-center">
      <img src="/not-found-emoji.svg" className="h-10 lg:h-20" />
      <h2 className="text-lg lg:text-xl font-medium">No Definitions Found</h2>
      <h2 className="text-sm lg:text-base font-medium text-gray-text">
        Sorry pal, we couldn't find definitions for the word you were looking
        for. You can try the search again at later time or head to the web
        instead.
      </h2>
    </article>
  );
};

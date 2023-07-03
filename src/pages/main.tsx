import React, { useState } from "react";
import { Spinner } from "flowbite-react";

import {
  Header,
  Container,
  WordSearch,
  WordResponse,
  WordNotFound,
} from "../components";
import { DictionaryResult } from "../@types";
import { dictionaryBaseApi } from "../constant";
import axios from "axios";

export const Main: React.FC = () => {
  const [word, setWord] = useState("");
  const [isEmptyWord, setIsEmptyWord] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [definitionResponse, setDefinitionResponse] =
    useState<DictionaryResult | null>(null);

  const handleWordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWord(event.target.value);
    setIsEmptyWord(false);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsError(false);
    if (!word?.trim()?.length) {
      setIsEmptyWord(true);
    }

    const endpoint = `${dictionaryBaseApi}/${word}`;
    setIsLoading(true);
    try {
      const {data} = await axios.get<DictionaryResult[] | null>(endpoint);
      if(!data) {
        throw new Error("No response returned")
      }
      const [firstWord] = data;
      console.log(data);
      setDefinitionResponse(firstWord)
    } catch (error) {
      console.log(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <Container>
        <Header />
        <WordSearch
          word={word}
          isEmptyWord={isEmptyWord}
          handleChange={handleWordChange}
          onSubmit={handleSubmit}
        />
        {isLoading ? (
          <div className="flex items-center justify-center min-h-[50vh]">
            <Spinner color="purple" size="xl" />
          </div>
        ) : isError ? (
          <WordNotFound />
        ) : isEmptyWord ? null : definitionResponse ? (
          <WordResponse definitionResponse={definitionResponse} />
        ) : null}
      </Container>
    </>
  );
};

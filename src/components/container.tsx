import React from "react";

interface Props {
  children: React.ReactNode;
}

export const Container: React.FC<Props> = ({ children }) => {
  return (
    <section className="flex items-center justify-center">
      <div className="w-[90%] max-w-[700px]">{children}</div>
    </section>
  );
};

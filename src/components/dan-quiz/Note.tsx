import React from "react";
import { Detail } from "./Detail";
import { Toggle } from "./Toggle";
import { Button } from "./Button";

export const Note: React.FC<{ note: string }> = ({ note }) => {
  return (
    <div>
      <Toggle>
        <Detail note={note} />
        <Button />
      </Toggle>
    </div>
  );
};

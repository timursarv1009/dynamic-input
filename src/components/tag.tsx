import React from "react";
import { Close } from "./icons";

interface IProps {
  text: string;
  onClick?: () => void;
}

export default function Tag(props: IProps) {
  const { text, onClick } = props;
  return (
    <div className="app_tag_item">
      <p className="app_tag_item__p">{text}</p>

      {onClick && (
        <button className="app_tag_item__close" onClick={onClick}>
          <Close />
        </button>
      )}
    </div>
  );
}

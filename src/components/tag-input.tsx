"use client";
import React, { useRef, useState } from "react";
import Tag from "./tag";

const defaultTags = ["React", "Next.js", "Tailwind", "JavaScript", "CSS"];

interface ISelected {
  text: string;
  type: "tag" | "plain";
}

export default function TagInput() {
  const [selectedTags, setSelectedTags] = useState<ISelected[]>([]);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleAddTag = (item: ISelected) => {
    setSelectedTags([...selectedTags, item]);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputRef.current) return;

    const text = inputRef.current?.value.trim();

    if (text.length === 0) {
      alert("Input must contain at least one character.");
      return;
    }

    handleAddTag({ text, type: "plain" });
    inputRef.current.value = "";
  };

  const handleRemoveItem = (index: number) => {
    const updatedItems = [...selectedTags];
    updatedItems.splice(index, 1);
    setSelectedTags([...updatedItems]);
  };

  return (
    <div className="">
      <div
        className="app_input_box"
        onClick={() => {
          inputRef.current?.focus();
        }}
      >
        {selectedTags.map((item, index) => {
          if (item.type === "tag") {
            return (
              <Tag
                key={index}
                text={item.text}
                onClick={() => {
                  handleRemoveItem(index);
                }}
              />
            );
          }

          return (
            <p key={index} className="app_tag_item__p">
              {item.text}
            </p>
          );
        })}

        <form onSubmit={handleSubmit}>
          <input
            ref={inputRef}
            type="text"
            name="tag"
            className="app_input_box__input"
            onKeyDown={(e) => {
              if (e.key === "Backspace" && inputRef.current?.value === "") {
                handleRemoveItem(selectedTags.length - 1);
              }
            }}
          />
        </form>
      </div>
      <div className="app_default_tags">
        {defaultTags.map((item, index) => (
          <button
            key={index}
            className="app_default_tags__btn"
            onClick={() => {
              handleAddTag({ text: item, type: "tag" });
            }}
          >
            <Tag text={item} />
          </button>
        ))}
      </div>
    </div>
  );
}

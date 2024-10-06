import { Editor } from "@tiptap/core";
import { CommandItem, Range } from "../types";

const createHeadingCommand =
  (level: number) =>
  ({ editor, range }: { editor: Editor; range: Range }) => {
    editor
      .chain()
      .focus()
      .deleteRange(range)
      .setNode("heading", { level })
      .run();
  };

const defaultCommandItems: CommandItem[] = [
  {
    title: "Paragraph",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-pilcrow"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M13 4v16" />
        <path d="M17 4v16" />
        <path d="M19 4h-9.5a4.5 4.5 0 0 0 0 9h3.5" />
      </svg>
    ),
    command: ({ editor, range }) =>
      editor
        .chain()
        .focus()
        .deleteRange(range)
        .setParagraph()
        .unsetAllMarks()
        .run(),
  },
  {
    title: "Heading 1",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-h-1"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M19 18v-8l-2 2" />
        <path d="M4 6v12" />
        <path d="M12 6v12" />
        <path d="M11 18h2" />
        <path d="M3 18h2" />
        <path d="M4 12h8" />
        <path d="M3 6h2" />
        <path d="M11 6h2" />
      </svg>
    ),
    command: createHeadingCommand(1),
  },
  {
    title: "Heading 2",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-h-2"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M17 12a2 2 0 1 1 4 0c0 .591 -.417 1.318 -.816 1.858l-3.184 4.143l4 0" />
        <path d="M4 6v12" />
        <path d="M12 6v12" />
        <path d="M11 18h2" />
        <path d="M3 18h2" />
        <path d="M4 12h8" />
        <path d="M3 6h2" />
        <path d="M11 6h2" />
      </svg>
    ),
    command: createHeadingCommand(2),
  },
  {
    title: "Heading 3",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-h-3"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M19 14a2 2 0 1 0 -2 -2" />
        <path d="M17 16a2 2 0 1 0 2 -2" />
        <path d="M4 6v12" />
        <path d="M12 6v12" />
        <path d="M11 18h2" />
        <path d="M3 18h2" />
        <path d="M4 12h8" />
        <path d="M3 6h2" />
        <path d="M11 6h2" />
      </svg>
    ),
    command: createHeadingCommand(3),
  },
  {
    title: "Bold",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-bold"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M7 5h6a3.5 3.5 0 0 1 0 7h-6z" />
        <path d="M13 12h1a3.5 3.5 0 0 1 0 7h-7v-7" />
      </svg>
    ),
    command: ({ editor, range }) =>
      editor.chain().focus().deleteRange(range).toggleBold().run(),
  },
  {
    title: "Italic",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-italic"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M11 5l6 0" />
        <path d="M7 19l6 0" />
        <path d="M14 5l-4 14" />
      </svg>
    ),
    command: ({ editor, range }) =>
      editor.chain().focus().deleteRange(range).toggleItalic().run(),
  },
  {
    title: "Bullet List",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-list"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M9 6l11 0" />
        <path d="M9 12l11 0" />
        <path d="M9 18l11 0" />
        <path d="M5 6l0 .01" />
        <path d="M5 12l0 .01" />
        <path d="M5 18l0 .01" />
      </svg>
    ),
    command: ({ editor, range }) =>
      editor.chain().focus().deleteRange(range).toggleBulletList().run(),
  },
  {
    title: "Numbered List",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-list-numbers"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M11 6h9" />
        <path d="M11 12h9" />
        <path d="M12 18h8" />
        <path d="M4 16a2 2 0 1 1 4 0c0 .591 -.5 1 -1 1.5l-3 2.5h4" />
        <path d="M6 10v-6l-2 2" />
      </svg>
    ),
    command: ({ editor, range }) =>
      editor.chain().focus().deleteRange(range).toggleOrderedList().run(),
  },
  {
    title: "Code",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-code"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M7 8l-4 4l4 4" />
        <path d="M17 8l4 4l-4 4" />
        <path d="M14 4l-4 16" />
      </svg>
    ),
    command: ({ editor, range }) =>
      editor.chain().focus().deleteRange(range).toggleCode().run(),
  },
  {
    title: "Blockquote",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-quote"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M10 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5" />
        <path d="M19 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5" />
      </svg>
    ),
    command: ({ editor, range }) =>
      editor.chain().focus().deleteRange(range).toggleBlockquote().run(),
  },
];

export default defaultCommandItems;

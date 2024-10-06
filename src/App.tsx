import "./App.css";
import { useState } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Editor, Range } from "@tiptap/core";
import { CustomCommandItem } from "./types";
import SlashSuggestion from "./utils/slashSuggestion";
import filterCommandItems from "./utils/filterCommandItems";

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

const customCommandItems: CustomCommandItem[] = [
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
];

function App() {
  const [content, setContent] = useState<string>(
    `<p>Artificial Intelligence (AI) is transforming industries at a rapid pace. From healthcare to finance, AI is being used to automate processes and improve efficiency. One of the key areas where AI is making an impact is in data analysis. With the ability to process large datasets quickly, AI algorithms can identify patterns and insights that humans might miss. This allows businesses to make more informed decisions. AI is also being used in customer service, with chatbots and virtual assistants providing 24/7 support. In addition, AI-powered tools are helping with language translation, image recognition, and even creative writing. However, the rise of AI also raises important ethical questions. How do we ensure that AI systems are used responsibly and fairly? These are questions that society must grapple with as AI continues to evolve.</p>`
  );

  const editor = useEditor({
    extensions: [
      StarterKit,
      SlashSuggestion.configure({
        commandItems: customCommandItems,
        suggestion: {
          items: ({ query }: { query: string }) =>
            filterCommandItems(query, customCommandItems),
        },
      }),
    ],
    content: content,
    onUpdate: ({ editor }: { editor: Editor }) => {
      setContent(editor.getHTML());
    },
  });

  return <EditorContent editor={editor} className="editor-content" />;
}

export default App;

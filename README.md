# Slash Suggestion

The Slash Suggestion is an extension for text editors that provides a customizable command palette triggered by typing a slash ("/"). Built on top of the Tiptap editor and utilizing the `@tiptap/suggestion` plugin.

## Key Features

- Customizable trigger character (default: "/")
- Filterable command items
- Keyboard navigation support
- Custom rendering of suggestion list

## Installation

```bash
npm install tiptap-slash-react
```

## Basic Usage

### TypeScript

```typescript
import { useEditor } from "@tiptap/react";
import { SlashSuggestion, filterCommandItems } from "tiptap-slash-react";
import "tiptap-slash-react/dist/index.css";

const editor = useEditor({
  extensions: [
    SlashSuggestion.configure({
      suggestion: {
        items: ({ query }: { query: string }) => filterCommandItems(query),
      },
    }),
  ],
});
```

### JavaScript

```javascript
import { useEditor } from "@tiptap/react";
import { SlashSuggestion, filterCommandItems } from "tiptap-slash-react";
import "tiptap-slash-react/dist/index.css";

const editor = useEditor({
  extensions: [
    SlashSuggestion.configure({
      suggestion: {
        items: ({ query }) => filterCommandItems(query),
      },
    }),
  ],
});
```

## Customization

To add custom commands, you can define a `CustomCommandItem` interface (in TypeScript) or object structure (in JavaScript):

```typescript
interface CustomCommandItem {
  title: string;
  icon?: React.ReactNode;
  command: (props: { editor: Editor; range: Range }) => void;
}
```

#### TypeScript

```typescript
import { useEditor } from "@tiptap/react";
import { SlashSuggestion, filterCommandItems, CustomCommandItem } from "tiptap-slash-react";
import "tiptap-slash-react/dist/index.css";

const customCommands: CustomCommandItem[] = [
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
  // More custom commands...
];

const editor = useEditor({
  extensions: [
    SlashSuggestion.configure({
      commandItems: customCommands,
      suggestion: {
        items: ({ query }: { query: string }) =>
          filterCommandItems(query, customCommands),
      },
    }),
  ],
});
```

#### JavaScript

```javascript
import { useEditor } from "@tiptap/react";
import { SlashSuggestion, filterCommandItems } from "tiptap-slash-react";
import "tiptap-slash-react/dist/index.css";

const customCommands = [
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
  // More custom commands...
];

const editor = useEditor({
  extensions: [
    SlashSuggestion.configure({
      commandItems: customCommands,
      suggestion: {
        items: ({ query }) => filterCommandItems(query, customCommands),
      },
    }),
  ],
});
```

## Conclusion

The Slash Suggestion component provides a flexible and powerful way to add command suggestions to your Tiptap editor. 

# Slash Suggestion Component Documentation

## Overview

The Slash Suggestion component is a feature-rich extension for text editors that provides a customizable command palette triggered by typing a slash ("/"). It's built on top of the Tiptap editor and uses the `@tiptap/suggestion` plugin.

## Key Components

### 1. SlashSuggestion

The main extension that integrates the slash suggestion functionality into the Tiptap editor.

#### Features:
- Customizable trigger character (default: "/")
- Filterable command items
- Keyboard navigation support
- Custom rendering of suggestion list

#### Usage:
```typescript
import { SlashSuggestion } from './path-to-slash-suggestion';

const editor = new Editor({
  extensions: [
    SlashSuggestion.configure({
      commandItems: customCommandItems,
      // Other options...
    }),
    // Other extensions...
  ],
});
```

### 2. CommandsList

A React component that renders the list of available commands.

#### Features:
- Keyboard navigation (up/down arrows)
- Mouse interaction
- Disabled item support
- Smooth scrolling to selected item

### 3. RenderSuggestions

A utility function that handles the rendering of the suggestion popup using Tippy.js.

### 4. filterCommandItems

A utility function that filters the command items based on the user's input.

### 5. DefaultCommandItems

A set of predefined command items for common heading levels (H1 to H5).

## Types

The component uses several TypeScript interfaces to ensure type safety:

- `CommandItem`: Represents a single command in the suggestion list.
- `CustomCommandItem`: A variant of CommandItem with a required `command` property.
- `Range`: Represents a text range in the editor.
- `CommandsListProps`: Props for the CommandsList component.
- `RenderSuggestionsProps`: Props for the suggestion renderer.
- `SlashSuggestionOptions`: Configuration options for the SlashSuggestion extension.

## Customization

You can customize the SlashSuggestion component by:

1. Providing custom command items
2. Modifying the suggestion options
3. Styling the command list and items using CSS

## Example: Adding Custom Commands

```typescript
import { SlashSuggestion, CustomCommandItem } from './path-to-slash-suggestion';

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

const editor = new Editor({
  extensions: [
    SlashSuggestion.configure({
      commandItems: [...DefaultCommandItems, ...customCommands],
    }),
    // Other extensions...
  ],
});
```

## Best Practices

1. Keep the command list concise and relevant to improve user experience.
2. Provide clear and descriptive titles for each command.
3. Use icons to make commands easily recognizable.
4. Implement proper keyboard navigation support for accessibility.
5. Consider adding categories or separators if you have many commands.

## Performance Considerations

- The `CommandsList` component is memoized to prevent unnecessary re-renders.
- Command filtering is performed on each keystroke, so keep the filtering logic efficient for large command sets.

## Accessibility

The component supports keyboard navigation, which is crucial for accessibility. Ensure that any custom styling maintains a clear focus state for keyboard users.

## Browser Compatibility

This component should work in all modern browsers that support ES6+ features. For older browsers, consider using appropriate polyfills or transpilation.
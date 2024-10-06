import { Extension } from "@tiptap/core";
import Suggestion, { SuggestionOptions } from "@tiptap/suggestion";
import RenderSuggestions from "../components/RenderSuggestions";
import { filterCommandItems} from "./filterCommandItems";
import { CommandItem, SlashSuggestionOptions } from "../types";

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    slashSuggestion: {
      setSlashSuggestion: () => ReturnType;
    }
  }
}

const SlashSuggestion = Extension.create<SlashSuggestionOptions>({
  name: "slash-suggestion",

  addOptions() {
    return {
      suggestion: {
        char: "/",
        command: ({ editor, range, props }: { editor: any; range: any; props: any }) => {
          props.command({ editor, range });
        },
        items: ({ query }: { query: string }) => {
          return filterCommandItems(query, this.parent().commandItems);
        },
        render: () => {
          let component: ReturnType<typeof RenderSuggestions>;
          
          return {
            onStart: (props: any) => {
              component = RenderSuggestions();
              component.onStart(props);
            },
            onUpdate(props: any) {
              component.onUpdate(props);
            },
            onKeyDown(props: any) {
              if (props.event.key === "Escape") {
                return true;
              }
              return component.onKeyDown?.(props) ?? false;
            },
            onExit() {
              component.onExit();
            },
          };
        },
      },
      commandItems: [] as CommandItem[],
    };
  },

  addProseMirrorPlugins() {
    return [
      Suggestion({
        editor: this.editor,
        ...this.options.suggestion,
        render: RenderSuggestions,
      } as SuggestionOptions),
    ];
  },
});

export default SlashSuggestion;
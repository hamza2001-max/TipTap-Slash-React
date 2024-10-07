import { ReactRenderer } from "@tiptap/react";
import tippy, { Instance as TippyInstance } from "tippy.js";
import CommandsList from "./CommandsList";
import { SuggestionKeyDownProps } from "@tiptap/suggestion";
import { RenderSuggestionsProps } from "../types";

const RenderSuggestions = () => {
  let reactRenderer: ReactRenderer;
  let popup: TippyInstance[];

  return {
    onStart: (props: RenderSuggestionsProps) => {
      reactRenderer = new ReactRenderer(CommandsList, {
        props,
        editor: props.editor,
      });

      if (!props.clientRect) return;

      popup = tippy("body", {
        getReferenceClientRect: props.clientRect,
        appendTo: () => document.body,
        content: reactRenderer.element,
        showOnCreate: true,
        interactive: true,
        trigger: "manual",
        placement: "bottom-start",
      });
    },
    onUpdate(props: RenderSuggestionsProps) {
      reactRenderer.updateProps(props);

      if (!props.clientRect) return;

      popup[0].setProps({
        getReferenceClientRect: props.clientRect,
      });
    },
    onKeyDown(props: SuggestionKeyDownProps): boolean {
      if (props.event.key === "Escape") {
        popup[0].hide();
        return true;
      }

      return (reactRenderer.ref as any)?.onKeyDown(props);
    },
    onExit() {
      popup[0].destroy();
      reactRenderer.destroy();
    },
  };
};

export default RenderSuggestions;

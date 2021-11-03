import {
  TextInput,
  DropdownButton,
  DropdownMenu,
  Box,
} from "@primer/components";
import React from "react";

export function FavoriteColorStory() {
  const items = React.useMemo(
    () => [{ text: "🔵 Cyan" }, { text: "🔴 Magenta" }, { text: "🟡 Yellow" }],
    []
  );
  const [selectedItem, setSelectedItem] = React.useState();

  return (
    <>
      <h1>Favorite Color</h1>
      <TextInput placeholder="Input for focus testing" sx={{ mb: 2 }} />
      <div id="favorite-color-label">Please select your favorite color:</div>
      <DropdownMenu
        renderAnchor={({
          children,
          "aria-labelledby": ariaLabelledBy,
          ...anchorProps
        }) => (
          <DropdownButton
            aria-labelledby={`favorite-color-label ${ariaLabelledBy}`}
            {...anchorProps}
          >
            {children}
          </DropdownButton>
        )}
        placeholder="🎨"
        items={items}
        selectedItem={selectedItem}
        onChange={setSelectedItem}
      />
    </>
  );
}

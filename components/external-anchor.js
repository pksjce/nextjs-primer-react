import React from "react";
import { DropdownButton, DropdownMenu, Box } from "@primer/components";

export function ExternalAnchorStory() {
  const items = React.useMemo(
    () => [{ text: "🔵 Cyan" }, { text: "🔴 Magenta" }, { text: "🟡 Yellow" }],
    []
  );
  const [selectedItem, setSelectedItem] = React.useState();
  const anchorRef = React.useRef();
  const [open, setOpen] = React.useState(false);

  return (
    <Box display="flex" flexDirection="column" alignItems="flex-start">
      <Box display="flex" flexDirection="row">
        <DropdownButton onClick={() => setOpen(true)}>
          Click me to open the dropdown
        </DropdownButton>
        <Box
          ref={anchorRef}
          bg="papayawhip"
          p={4}
          ml={40}
          borderRadius={2}
          display="inline-block"
        >
          Anchored on me!
        </Box>
      </Box>
      <DropdownMenu
        renderAnchor={null}
        anchorRef={anchorRef}
        open={open}
        onOpenChange={setOpen}
        placeholder="🎨"
        items={items}
        selectedItem={selectedItem}
        onChange={setSelectedItem}
      />
    </Box>
  );
}

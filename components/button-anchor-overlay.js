import { useState } from "react";
import { Box, useAnchoredPosition, DropdownButton } from "@primer/components";

export const ButtonWithAnchoredOverlay = ({ portalContainerName }) => {
  const [open, setOpen] = useState(false);

  return (
    <AnchoredOverlay
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      width="small"
      height="auto"
      renderAnchor={(props) => (
        <DropdownButton {...props}>Kitten, please</DropdownButton>
      )}
      overlayProps={{ portalContainerName }}
    >
      <Box
        width="100%"
        height="100%"
        backgroundColor="thistle"
        display="flex"
        flexDirection="column"
      >
        <img src={`//placekitten.com/200/300`} alt="kitten" />
      </Box>
    </AnchoredOverlay>
  );
};

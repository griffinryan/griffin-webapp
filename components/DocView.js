import React from "react";
import { Box, Center, useColorModeValue } from "@chakra-ui/react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

const DocView = ({ fileUrl }) => {
  return (
    <Center mt={8} mb={16}>
      <Box
        width={{ base: "100%", md: "80%", lg: "70%" }}
        height="80vh"
        bg={useColorModeValue("whiteAlpha.800", "blackAlpha.800")}
        borderRadius="lg"
        boxShadow="lg"
        overflow="hidden"
      >
        <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
          <Viewer fileUrl={fileUrl} />
        </Worker>
      </Box>
    </Center>
  );
};

export default DocView;

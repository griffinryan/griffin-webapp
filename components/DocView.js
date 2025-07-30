import React, { useState } from "react";
import { Box, Center, Text, useColorModeValue } from "@chakra-ui/react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

// Set up the PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const DocView = ({ fileUrl }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <Center mt={8} mb={16}>
      <Box
        width={{ base: "100%", md: "80%", lg: "70%" }}
        height="80vh"
        bg={useColorModeValue("whiteAlpha.800", "blackAlpha.800")}
        borderRadius="lg"
        boxShadow="lg"
        overflow="auto"
        p={4}
      >
        <Document
          file={fileUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={<Text>Loading PDF...</Text>}
          error={<Text>Failed to load PDF</Text>}
        >
          <Page 
            pageNumber={pageNumber} 
            width={Math.min(window.innerWidth * 0.8, 800)}
            renderTextLayer={true}
            renderAnnotationLayer={true}
          />
        </Document>
        {numPages && (
          <Text mt={4} textAlign="center">
            Page {pageNumber} of {numPages}
          </Text>
        )}
      </Box>
    </Center>
  );
};

export default DocView;
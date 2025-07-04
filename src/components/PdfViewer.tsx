'use client';

// Adicione useRef e useEffect aos seus imports do React
import { useState, useRef, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

// CSS para a biblioteca
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Aponta para o worker que estará na pasta 'public'
pdfjs.GlobalWorkerOptions.workerSrc = `/pdf.worker.min.mjs`;

interface PdfViewerProps {
  file: string;
}

export default function PdfViewer({ file }: PdfViewerProps) {
  const [numPages, setNumPages] = useState<number | null>(null);
  
  // NOVO: Estados para guardar a referência do contêiner e sua largura
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  // NOVO: Hook para medir a largura do contêiner e atualizar quando a janela mudar de tamanho
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth);
      }
    };

    // Define a largura inicial
    updateWidth();

    // Adiciona um listener para o evento de redimensionamento da janela
    window.addEventListener('resize', updateWidth);

    // Remove o listener quando o componente for desmontado para evitar vazamento de memória
    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, []);


  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  return (
    // NOVO: Adicione a ref ao div principal
    <div ref={containerRef}>
      <Document
        file={file}
        onLoadSuccess={onDocumentLoadSuccess}
        loading={<p>Carregando o Plano de Metas...</p>}
        error={<p>Falha ao carregar o PDF.</p>}
      >
        {Array.from(new Array(numPages || 0), (el, index) => (
          <Page
            key={`page_${index + 1}`}
            pageNumber={index + 1}
            renderTextLayer={false}
            // NOVO: Passe a largura medida para a página do PDF
            width={containerWidth}
          />
        ))}
      </Document>
    </div>
  );
}
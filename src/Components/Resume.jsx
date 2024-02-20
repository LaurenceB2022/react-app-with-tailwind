import React from 'react'
import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import pdf from './Laurence_s_Resume.pdf'
import pdf2 from '../assets/Profile-1.pdf'
import { PDFViewer } from '@react-pdf/renderer';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

const Resume = () => {
    const [numPages, setNumPages] = useState();
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess(){
        setNumPages(numPages);
    }

    return (
        <div className='w-full h-screen bg-black'>
            <div className='h-8 w-8 flex flex-col justify-center items-center bg-slate-400'>
                <PDFViewer>
                    <Document onLoadSuccess={onDocumentLoadSuccess}>
                        <Page pageNumber={pageNumber} />
                    </Document>
                </PDFViewer>
                
            </div>
        </div>
    )
}
export default Resume;
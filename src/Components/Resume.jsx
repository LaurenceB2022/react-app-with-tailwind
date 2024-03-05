import React from 'react'
import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import pdf2 from '../assets/TestResume.pdf'
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
        <div className='w-full pt-20 h-full bg-black overflow-auto flex flex-col justify-center items-center'>
            
            <div className='w-full h-fit pd-10 mt-10 flex items-center justify-center'>
                <iframe src={pdf2} width='700em' height='850em'/>
            </div>
            
            {/*<div className=' h-[50vh] w-[50vh] bg-slate-400'>
                
                <Document file={pdf2} onLoadSuccess={onDocumentLoadSuccess}>
                    <Page pageNumber={1} />
                </Document>            
            </div> */}
        </div>
    )
}
export default Resume;
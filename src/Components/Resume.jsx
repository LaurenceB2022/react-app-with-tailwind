import React from 'react'
import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import pdf2 from '../assets/TestResume.pdf'
import { PDFViewer } from '@react-pdf/renderer';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

const Resume = () => {
    const [numPages, setNumPages] = useState();
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess(){
        setNumPages(numPages);
    }

    return (
        <div className='w-full pt-20 h-screen bg-black overflow-auto flex flex-col justify-center items-center'>
            
            <div className='relative top-[10em] bg-black pd-10 mt-10 flex items-center justify-center'>
                <object className="bg-black" data={pdf2} width='700em' height='850em'>

                </object>
                
                {/*<iframe src={pdf2} width='700em' height='850em'/> */}
            </div>
            
            {/*<div className=' h-[50vh] w-[50vh] bg-slate-400'>
                
                <Document file={pdf2} >
                    <Page pageNumber={1} />
                </Document>            
            </div> */}
        </div>
    )
}
export default Resume;
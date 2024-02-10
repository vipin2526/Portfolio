import React from 'react'
import '../Local/Css/Resume.css'
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";


export default function Resume() {
  const docs = [
    {
      uri: require("./resume.pdf"),
      fileType: "pdf",
      fileName: "resume"
    },
  ];
  return (
    <div className='vipbox container mb-0' id='resume' >
      <div className="resumBox ">
        <ul className='heading'>
          <li className="headingTital">RESUME</li>
          <li className='headingIcon' onClick={() => (window.open('https://docs.google.com/document/d/1dULLBOPFl-7Unh0R4sqwCvzxyuiOhzlE4VfqtwZjYnU/export?format=pdf'))}>
            < img src="/download.png" alt="Sorrrrry not found" height={40} />
          </li>
        </ul>



        <div className="resume">
          <DocViewer pluginRenderers={DocViewerRenderers} documents={docs}
            style={{ width: "800", height: "500" }}
            config={{ header: { disableHeader: true, disableHeaderControl: true } }} />
        </div>
      </div>

    </div >
  )
}
import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import Upload from '../../assets/images/Upload.png'
import './styles.scss'
import Microsoft_Office_Excel from '../../assets/images/Microsoft_Office_Excel.png';
import UploadedData from '../UploadedData';
import Load from '../../assets/images/Load.png'

const FileUpload = () => {
  const [excelData, setExcelData] = useState(null);
  const [droppedFile, setDroppedFile] = useState(null);
  const [removeFile, setRemoveFile] = useState(false);
  const [isUploaded, setUpload] = useState(false);
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  // const [tableContent, setTableContent] = useState(null);

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    setButtonDisabled(false);
    setDroppedFile(file);
    setExcelData(null);
  };

  const handleRemoveFile = () => {
    setDroppedFile(null);
    setRemoveFile(false);
    setExcelData(null);
  };

  const handleFileUpload = () => {
    if (droppedFile) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });

        // Assuming the first sheet is the one you want to read
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];

        // Convert sheet data to JSON
        const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
        setExcelData(jsonData);
        console.log(isUploaded);
        setDroppedFile(null);
        setUpload(true);
        setTimeout(() => {
          setUpload(false);
          setButtonDisabled(true);
        }, 1000);
      };

      reader.readAsArrayBuffer(droppedFile);
      
    }
  };

  const handleInputChange = (event) => {
    const file = event.target.files[0];
    setButtonDisabled(false);
    setDroppedFile(file);
    setExcelData(null);
    //handleFileUpload(file);
  };

  return (
    <>
      <div className='form'>
        <div className='form__wrapper' onDrop={handleDrop} onDragOver={(event) => event.preventDefault()}>
          <div className='form__wrapper__content'>
            <img src={Microsoft_Office_Excel} alt='Excel-logo' className='form__wrapper__content__image'/>
              {droppedFile ? (
                <div className='form__wrapper__content__placeholder-content'>
                  <p className='form__wrapper__content__placeholder-content__placeholder'>{droppedFile.name}</p>
                  <button className='form__wrapper__content__placeholder-content__remove-btn' onClick={handleRemoveFile}>Remove</button>
                </div>
                ) : (
                  <p className='form__wrapper__content__placeholder-content__placeholder'>
                    Drop your excel sheet here or <span> </span>
                      <label style={{color: '#605BFF', cursor: 'pointer'}}>
                         browse
                        <input type="file" onChange={handleInputChange} accept='.csv .xls .xlsx' style={{display: 'none'}}/>
                      </label> 
                  </p>
              )}
          </div>
        </div>
        <div className='form__button'>
          <button onClick={handleFileUpload} className='form__button__submit' disabled={isButtonDisabled} style={{opacity : isButtonDisabled ? '0.5' : '1'}}>
            {
              isUploaded ? (
                <img src={Load} alt='load-icon' className='form__button__submit__icon'/>
              ) : (
                <>
                <img src={Upload} alt='upload' className='form__button__submit__icon'/> 
                <p>Upload</p>
                </>
              )
            }
          </button>
        </div>
      </div>
      {
        excelData && <UploadedData excelData={excelData}/>
      }
    </>
  );
};

export default FileUpload;

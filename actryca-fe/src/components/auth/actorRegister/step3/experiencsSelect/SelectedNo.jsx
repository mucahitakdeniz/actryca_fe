import React, { useRef, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { FileUp, FileVideo2, Trash2 } from 'lucide-react';

const SelectedNo = ({ onSaveVideo }) => {
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    onSaveVideo(file);
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    onSaveVideo(null);
  };

  return (
    <Box className="flex flex-col justify-center items-start gap-1 self-stretch">
      {selectedFile ? (
        <Box className="w-full flex items-center gap-2 p-2 border border-primary-200 rounded-lg">
          <FileVideo2 size={24} className="text-primary-600" />
          <Typography>{selectedFile.name}</Typography>
          <Trash2 size={20} className="cursor-pointer text-red-600" onClick={handleRemoveFile} />
        </Box>
      ) : (
        <Box
          onClick={handleClick}
          className="border border-dashed border-primary-200 p-6 w-full flex flex-col items-center justify-center cursor-pointer"
        >
          <FileUp size={48} className="text-primary-600 mb-4" />
          <Typography className="text-primary-900 font-sans text-[14px] font-normal">
            Videoyu sürükleyin ya da yükleyin
          </Typography>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="video/*"
            style={{ display: 'none' }}
          />
        </Box>
      )}
    </Box>
  );
};

export default SelectedNo;

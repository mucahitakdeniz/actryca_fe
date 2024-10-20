import React, { useRef, useState, useEffect } from 'react';
import { Box, Typography, LinearProgress, IconButton } from '@mui/material';
import { FileUp, FileVideo2, Trash2, RefreshCcw, CheckCircle2 } from 'lucide-react';

const SelectedNo = ({ onSaveVideo = () => { } }) => {
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadStatus, setUploadStatus] = useState('idle');
  const [showCheckIcon, setShowCheckIcon] = useState(true);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setUploadStatus('uploading');
      setShowCheckIcon(true);
      simulateUpload(file);
    }
  };

  const simulateUpload = (file) => {
    setUploadProgress(0);
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          const isSuccess = Math.random() > 0.7; //deneme amaçlı oranı yüksek tuttum. apiye bağlanınca zaten silinecek burası.
          setUploadStatus(isSuccess ? 'success' : 'error');
          onSaveVideo(isSuccess ? file : null);
          return 100;
        }
        return prev + 10;
      });
    }, 300);
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    setUploadProgress(0);
    setUploadStatus('idle');
    setShowCheckIcon(true);
    onSaveVideo(null);
  };

  const handleRetry = () => {
    if (selectedFile) {
      setUploadStatus('uploading');
      setUploadProgress(0);
      setShowCheckIcon(true);
      simulateUpload(selectedFile);
    }
  };

  useEffect(() => {
    if (uploadStatus === 'success') {
      const timer = setTimeout(() => {
        setShowCheckIcon(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [uploadStatus]);

  return (
    <Box className="flex flex-col gap-4 p-4 w-full">
      {uploadStatus === 'idle' && (
        <Box
          onClick={handleClick}
          className="border border-dashed border-primary-200 p-6 w-full flex flex-col items-center justify-center cursor-pointer"
        >
          <FileUp size={48} className="text-primary-600 mb-2" />
          <Typography className="text-primary-900 font-sans text-[14px] font-normal">
            Videoyu sürükleyin ya da <span className="text-primary-600 underline">yükleyin</span>
          </Typography>
          <Typography className="text-primary-500 text-[12px] mt-2">
            Desteklenen dosya formatları: MP4, AVI, MOV.
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

      {uploadStatus === 'uploading' && selectedFile && (
        <Box className="w-full flex items-center gap-3 p-2 border border-primary-200 rounded-lg">
          <FileVideo2 size={24} className="text-primary-600" />
          <Box className="flex-1">
            <Box className="flex flex-col gap-1">
              <Typography className="text-primary-900 font-sans text-[14px] font-medium leading-[130%]">{selectedFile.name}</Typography>
              <Typography className="text-[#989692] font-sans text-[12px] leading-[130%]">{selectedFile.size / 1000} KB</Typography>
            </Box>

            <LinearProgress variant="determinate" value={uploadProgress} className="mt-2" />
          </Box>
          <Typography>{uploadProgress}%</Typography>
          <IconButton onClick={handleRemoveFile}>
            <Trash2 size={24} className="text-primary-600" />
          </IconButton>
        </Box>
      )}

      {uploadStatus === 'error' && selectedFile && (
  <Box className="w-full flex items-center gap-2 p-2 border border-red-200 rounded-lg">
    <FileVideo2 size={24} className="text-[#f42500]" />
    <Box className="flex-1">
      <Box className="flex flex-col gap-1">
        <Typography className="text-primary-900 font-sans text-[14px] font-medium leading-[130%]">
          {selectedFile.name}
        </Typography>
        <Typography className="text-[#989692] font-sans text-[12px] leading-[130%]">
          {selectedFile.size / 1000} KB
        </Typography>
      </Box>
      <LinearProgress
        variant="determinate"
        value={uploadProgress}
        sx={{
          '& .MuiLinearProgress-bar': {
            backgroundColor: '#f42500',
          },
          height: 4,
        }}
        className="mt-2"
      />
    </Box>
    <Box className="flex flex-col items-end">
      <IconButton onClick={handleRetry}>
        <RefreshCcw size={24} className="text-primary-600" />
      </IconButton>
      <Typography className="text-[#f42500]">{uploadProgress}%</Typography>
    </Box>
  </Box>
)}



      {uploadStatus === 'success' && selectedFile && (
        <Box className="flex flex-col gap-2 w-full">
          <video
            src={URL.createObjectURL(selectedFile)}
            controls
            className="rounded-lg border border-primary-200 w-full"
          />
          <Box className="flex items-center justify-between w-full gap-3 p-2 border border-primary-200 rounded-lg">
            <FileVideo2 size={24} className="text-primary-600" />
            <Box className="flex-1">
              <Box className="flex flex-col gap-1">
                <Typography className="text-primary-900 font-sans text-[14px] font-medium leading-[130%]">{selectedFile.name}</Typography>
                <Typography className="text-[#989692] font-sans text-[12px] leading-[130%]">{selectedFile.size / 1000} KB</Typography>
              </Box>
            </Box>
            {showCheckIcon ? (
              <CheckCircle2 size={24} className="text-green-600" />
            ) : (
              <IconButton onClick={handleRemoveFile}>
                <Trash2 size={24} className="text-primary-600" />
              </IconButton>
            )}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default SelectedNo;

import React, { useRef, useState, useEffect } from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';
import { FileUp, FileVideo2, Trash2, CircleCheck, RefreshCw } from 'lucide-react';

const SelectedNo = () => {
    const fileInputRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [uploadState, setUploadState] = useState('');
    const [videoPreviewUrl, setVideoPreviewUrl] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const [showTrashIcon, setShowTrashIcon] = useState(false);
    const [showPercentage, setShowPercentage] = useState(true);

    const MAX_FILE_SIZE_MB = 10;
    const MAX_FILE_SIZE = MAX_FILE_SIZE_MB * 1024 * 1024;

    const handleClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            if (file.size > MAX_FILE_SIZE) {
                setErrorMessage(`Dosya boyutu ${MAX_FILE_SIZE_MB} MB'den büyük olamaz.`);
                setUploadState('error');
                return;
            }
            setSelectedFile(file);
            setVideoPreviewUrl(URL.createObjectURL(file));
            startUpload(file);
        }
    };

    const handleDragOver = (event) => {
        event.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (event) => {
        event.preventDefault();
        setIsDragging(false);
        const files = event.dataTransfer.files;
        if (files.length > 0) {
            const file = files[0];
            if (file.size > MAX_FILE_SIZE) {
                setErrorMessage(`Dosya boyutu ${MAX_FILE_SIZE_MB} MB'den büyük olamaz.`);
                setUploadState('error');
                return;
            }
            setSelectedFile(file);
            setVideoPreviewUrl(URL.createObjectURL(file));
            startUpload(file);
        }
    };

    const handleRemoveFile = () => {
        setSelectedFile(null);
        setUploadProgress(0);
        setUploadState('');
        setVideoPreviewUrl(null);
        setErrorMessage('');
        setShowPercentage(true);
    };

    const startUpload = (file) => {
        setUploadState('uploading');
        setErrorMessage('');

        const interval = setInterval(() => {
            setUploadProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setUploadState('success');
                    setShowTrashIcon(false);
                    setTimeout(() => {
                        setShowTrashIcon(true);
                    }, 1000);
                    setTimeout(() => {
                        setShowPercentage(false);
                    }, 1000);
                    return 100;
                }
                return prev + 10;
            });
        }, 500);

        setTimeout(() => {
            const shouldFail = Math.random() > 0.8;
            if (shouldFail) {
                clearInterval(interval);
                setUploadState('error');
            }
        }, 5000);
    };

    const retryUpload = () => {
        if (selectedFile) {
            setUploadProgress(0);
            setShowPercentage(true);
            startUpload(selectedFile);
        }
    };

    const formatFileSize = (size) => {
        return `${(size / 1024).toFixed(2)} KB`;
    };

    const getProgressBarColor = () => {
        switch (uploadState) {
            case 'uploading':
                return '#6f42c1';
            case 'error':
                return '#e74c3c';
            case 'success':
                return '#27ae60';
            default:
                return '#ddd';
        }
    };

    const getIcon = () => {
        switch (uploadState) {
            case 'uploading':
                return <CircularProgress size={20} />;
            case 'error':
                return <RefreshCw size={20} className="text-error-500 cursor-pointer text-primary-600" onClick={retryUpload} />;
            case 'success':
                return showTrashIcon ? (
                    <Trash2 size={20} className="text-primary-600 cursor-pointer" onClick={handleRemoveFile} />
                ) : (
                    <CircleCheck size={20} className="text-success-500 text-green-500" />
                );
            default:
                return <Trash2 size={20} className="text-primary-600" onClick={handleRemoveFile} />;
        }
    };

    useEffect(() => {
        if (videoPreviewUrl && selectedFile) {
            // Video ön izlemesi oluşturulduğunda herhangi bir işlem yapılabilir.
        }
    }, [videoPreviewUrl, selectedFile]);

    return (
        <Box className="flex flex-col justify-center items-start gap-1 self-stretch">
            {selectedFile ? (
                <Box className="w-full">
                {uploadState === 'success' && videoPreviewUrl && (
                        <Box className="w-full mt-4">
                            
                            <video
                                src={videoPreviewUrl}
                                controls
                                className="w-full h-auto rounded-lg"
                            />
                        </Box>
                    )}
                    <Box className="flex items-center gap-2 mt-4 p-2 border border-primary-200 rounded-lg w-full">
                        <FileVideo2 size={24} className="text-primary-600" />
                        <Box className="flex-grow">
                            <Typography className="text-primary-900 font-sans text-[14px] font-normal leading-normal">
                                {selectedFile.name}
                            </Typography>
                            <Typography className="text-primary-600 font-sans text-[12px] font-normal leading-tight">
                                {formatFileSize(selectedFile.size)}
                            </Typography>
                        </Box>
                        {getIcon()}
                    </Box>

                   
                    <Box className="w-full mt-4">
                        <Box className="w-full h-2 rounded-lg" style={{ backgroundColor: '#f0f0f0' }}>
                            <Box
                                className="h-2 rounded-lg"
                                style={{
                                    width: `${uploadProgress}%`,
                                    backgroundColor: getProgressBarColor(),
                                    transition: 'width 0.3s ease',
                                }}
                            />
                        </Box>
                        {showPercentage && (
                            <Typography className="text-primary-900 font-sans text-[12px] font-normal mt-1 leading-tight text-right">
                                {uploadProgress}%
                            </Typography>
                        )}
                        {errorMessage && (
                            <Typography className="text-red-600 font-sans text-[12px] font-normal mt-1 leading-tight">
                                {errorMessage}
                            </Typography>
                        )}
                    </Box>

                    
                </Box>
            ) : (
                <Box
                    onClick={handleClick}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    className={`border border-dashed border-primary-200 rounded-lg p-6 w-full flex flex-col items-center justify-center text-center cursor-pointer ${
                        isDragging ? 'bg-primary-50' : 'bg-white'
                    }`}
                >
                    <FileUp size={48} className="text-primary-600 mb-4" />
                    <Typography className="text-primary-900 font-sans text-[14px] font-normal leading-normal mb-2">
                    Videoyu sürükleyin ya da <span className="text-primary-600 underline">yükleyin</span> 
                    </Typography>
                    <Typography className="text-primary-300 font-sans text-[12px] font-normal leading-[18px] mt-2">
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
        </Box>
    );
};

export default SelectedNo;

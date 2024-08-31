"use client";
import React, { useRef, useState, useEffect } from 'react';
import { Box, Typography, Button, CircularProgress } from '@mui/material';
import { FileUp, Trash2, FileText, CircleCheck, RefreshCw } from 'lucide-react';

const SelectedNo = () => {
    const fileInputRef = useRef(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [uploadState, setUploadState] = useState('');
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
            validateFile(file);
        }
    };

    const validateFile = (file) => {
        const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
        
        if (!allowedTypes.includes(file.type)) {
            setErrorMessage('Sadece PDF, DOC, veya DOCX dosyaları kabul edilir.');
            setSelectedFile(null);
        } else if (file.size > MAX_FILE_SIZE) {
            setErrorMessage(`Dosya boyutu ${MAX_FILE_SIZE_MB} MB'den büyük olamaz.`);
            setUploadState('error');
            return;
        } else {
            setErrorMessage('');
            setSelectedFile(file);
            startUpload(file);
        }
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

    const handleDelete = () => {
        setSelectedFile(null);
        setUploadProgress(0);
        setUploadState('');
        setErrorMessage('');
        setShowPercentage(true);
    };

    const retryUpload = () => {
        if (selectedFile) {
            setUploadProgress(0);
            setShowPercentage(true);
            startUpload(selectedFile);
        }
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
                    <Trash2 size={20} className="text-primary-600 cursor-pointer" onClick={handleDelete} />
                ) : (
                    <CircleCheck size={20} className="text-success-500 text-green-500" />
                );
            default:
                return <Trash2 size={20} className="text-primary-600" onClick={handleDelete} />;
        }
    };

    return (
        <Box className="flex flex-col justify-center items-start gap-1 self-stretch">
            <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,.doc,.docx"
                style={{ display: 'none' }}
                onChange={handleFileChange}
            />
            {!selectedFile ? (
                <>
                    <Typography className="text-primary-600 font-sans text-[16px] font-bold leading-6">
                        ENDİŞELENMEYİN!
                    </Typography>
                    <Box className="flex items-start gap-2 mb-2">
                        <FileText size={24} className="text-primary-600" />
                        <Typography className="text-primary-900 font-sans text-[16px] font-normal leading-6">
                            Eğer bir deneyiminiz yoksa, yazdığınız herhangi bir çalışmanızı <strong>PDF formatında</strong> yükleyebilirsiniz.
                        </Typography>
                    </Box>
                    <Box className="flex items-start gap-2 mb-2">
                        <FileText size={24} className="text-primary-600" />
                        <Typography className="text-primary-900 font-sans text-[14px] font-normal leading-normal">
                            Profesyonel bir senaryo, senaryo örneği veya yazdığınız herhangi bir kısa hikaye veya yazı olabilir.
                        </Typography>
                    </Box>
                    <Box
                        className={`flex flex-col items-center justify-center p-6 border-dashed gap-[21px] border border-primary-300 rounded-2xl w-full ${uploadState === 'error' ? 'bg-red-50' : 'bg-white'}`}
                        onDragOver={(e) => e.preventDefault()}
                    >
                        <FileUp size={48} className="text-primary-600 mb-2" />
                        <Typography className="text-primary-900 font-sans text-[14px] font-normal leading-normal mb-4">
                            Dosyayı sürükleyin ya da{' '}
                            <span onClick={handleClick} className="text-primary-600 font-medium cursor-pointer underline">
                                yükleyin
                            </span>
                        </Typography>
                        {errorMessage && (
                            <Typography className="text-red-600 font-sans text-[12px] font-normal leading-[18px] mt-2">
                                {errorMessage}
                            </Typography>
                        )}
                        <Typography className="text-primary-300 font-sans text-[12px] font-normal leading-[18px] mt-2">
                            Dosya boyutunun maksimum 10MB olmasına dikkat edin.
                        </Typography>
                    </Box>
                </>
            ) : (
                <>
                    <Box
                        className="flex flex-col justify-center border border-primary-300 border-dashed rounded-xl p-4 w-full gap-[21px]"
                    >
                        <FileText size={48} className="text-primary-600 m-auto" />
                        <Typography className="text-primary-900 font-sans text-[14px] font-normal leading-normal ">
                            {selectedFile.name}
                        </Typography>
                        <Typography className="text-primary-500 font-sans text-[12px] font-normal leading-[18px] mt-1 ">
                            {(selectedFile.size / 1024).toFixed(2)} KB
                        </Typography>
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
                    <Box className="flex justify-between items-center mt-4 gap-2 w-full">
                        <Button
                            variant="contained"
                            onClick={handleClick}
                            className="px-4 py-[10px] w-[124px]"
                        >
                            Değiştir
                        </Button>
                        {getIcon()}
                    </Box>
                </>
            )}
        </Box>
    );
};

export default SelectedNo;

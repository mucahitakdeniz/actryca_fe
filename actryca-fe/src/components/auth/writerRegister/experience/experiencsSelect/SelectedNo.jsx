"use client";
import React, { useRef, useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { FileUp, Trash2, FileText } from 'lucide-react';

const SelectedNo = () => {
    const fileInputRef = useRef(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const [error, setError] = useState('');

    const handleClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        validateFile(file);
    };

    const validateFile = (file) => {
        const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
        const maxSize = 10 * 1024 * 1024; // 10MB

        if (file) {
            if (!allowedTypes.includes(file.type)) {
                setError('Sadece PDF, DOC, veya DOCX dosyaları kabul edilir.');
                setSelectedFile(null);
            } else if (file.size > maxSize) {
                setError('Dosya boyutu maksimum 10MB olmalıdır.');
                setSelectedFile(null);
            } else {
                setError('');
                setSelectedFile(file);
            }
        }
    };

    const handleDelete = () => {
        setSelectedFile(null);
        setError('');
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
                    <Typography className="text-primary-600 font-sans text-[16px] font-normal font-bold leading-6">
                        ENDİŞELENMEYİN!
                    </Typography>
                    <Box className="flex items-start gap-2 mb-2">
                        <FileText size={24} className="text-primary-600" />
                        <Typography className="text-primary-900 font-sans text-[16px] font-normal leading-6">
                            Eğer bir deneyiminiz yoksa, yazdığınız herhangi bir çalışmanızı <strong> PDF formatında </strong>yükleyebilirsiniz.
                        </Typography>
                    </Box>
                    <Box className="flex items-start gap-2 mb-2">
                        <FileText size={24} className="text-primary-600" />
                        <Typography className="text-primary-900 font-sans text-[14px] font-normal leading-normal">
                            Profesyonel bir senaryo, senaryo örneği veya yazdığınız herhangi bir kısa hikaye veya yazı olabilir.
                        </Typography>
                    </Box>
                    <Box
                        className={`flex flex-col items-center justify-center p-6 border-dashed gap-[21px] border border-primary-300 rounded-2xl w-full`}
                        onDragOver={(e) => e.preventDefault()}
                    >
                        <FileUp size={48} className="text-primary-600 mb-2" />
                        <Typography className="text-primary-900 font-sans text-[14px] font-normal leading-normal mb-4">
                            Dosyayı sürükleyin ya da{' '}
                            <span onClick={handleClick} className="text-primary-600 font-medium cursor-pointer underline">
                                yükleyin
                            </span>
                        </Typography>
                        {error && (
                            <Typography className="text-red-600 font-sans text-[12px] font-normal leading-[18px] mt-2">
                                {error}
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
                    <Box className="flex justify-between items-center mt-4 gap-2 w-full">
                        <Button
                            variant="contained"
                            onClick={handleClick}
                            className="px-4 py-[10px] w-[124px]"
                        >
                            Değiştir
                        </Button>
                        <Button
                            variant="outlined"
                            onClick={handleDelete}
                            className="px-4 py-[10px] w-[124px]"
                        >
                            Sil
                        </Button>
                    </Box>
                </>
            )}
        </Box>
    );
};

export default SelectedNo;

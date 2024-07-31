import React, { useRef, useState } from 'react';
import { Box, Button, Typography, TextField } from '@mui/material';
import { Clapperboard, Notebook, Video, FileUp } from 'lucide-react';

const SelectedNo = () => {
    const fileInputRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);

    const handleClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedFile(file);
            console.log(file);
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
            setSelectedFile(files[0]);
            console.log(files[0]);
        }
    };

    return (
        <Box className="flex flex-col justify-center items-start gap-1 self-stretch">
            <Typography className="text-primary-600 font-sans text-[16px] font-normal font-bold leading-6">
                ENDİŞELENMEYİN!
            </Typography>

            <Box className="flex items-start gap-2 mb-2">
                <Clapperboard size={24} className="text-primary-600" />
                <Typography className="text-primary-900 font-sans text-[16px] font-normal leading-6">
                    Eğer daha önceki projeleriniz yoksa, <strong>audition videosu</strong> yükleyerek kendinizi tanıtabilirsiniz.
                </Typography>
            </Box>

            <Box className="flex items-start gap-2 mb-2">
                <Notebook size={24} className="text-primary-600" />
                <Typography className="text-primary-900 font-sans text-[14px] font-normal leading-normal">
                    Kendi <span className="text-primary-600 font-medium">seçtiğiniz bir metni</span> ya da bizim sağladığımız örnek metinlerden birini kullanabilirsiniz.
                </Typography>
            </Box>

            <Box className="flex flex-col gap-4 mb-4 w-full">
                <Box className="flex items-center gap-4 w-full">
                    <Button className="flex-1 rounded-lg border border-primary-50 bg-[#eee] text-primary-900">
                        Örnek Metin 1
                    </Button>
                    <Button className="flex-1 rounded-lg border-primary-50 bg-[#fff] text-primary-900">
                        Örnek Metin 2
                    </Button>
                </Box>

                <Box className="flex flex-col items-start gap-3 mb-2">
                    <Typography className="text-primary-900 font-sans text-[14px] font-normal leading-normal">
                        Karakterin <strong>dramatik</strong> bir sahnedeki monologunu içerir.
                    </Typography>
                    <Box className="flex gap-3 items-center">
                        <Typography className="text-primary-600 font-sans text-[14px] font-normal leading-normal underline cursor-pointer">
                            Örnek Metin 1 indir
                        </Typography>
                        <FileUp className="text-primary-600" />
                    </Box>
                </Box>

                <Box className="flex items-start gap-2 mb-2">
                    <Video size={24} className="text-primary-600" />
                    <Typography className="text-primary-900 font-sans text-[14px] font-normal leading-normal mb-2">
                        Videoda kendinizi <strong>kısaca tanıtın</strong> ve ardından seçtiğiniz metni oynayın. Video <strong>maksimum 3 dakika</strong> olmalıdır.
                    </Typography>
                </Box>
            </Box>

            <Box
                className={`flex flex-col items-center justify-center p-6 border-dashed gap-[21px] border border-primary-300 rounded-2xl w-full ${isDragging ? 'bg-primary-100' : ''}`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
            >
                <FileUp size={48} className="text-primary-600 mb-2" />
                <Typography className="text-primary-900 font-sans text-[14px] font-normal leading-normal mb-4">
                    Videoyu sürükleyin ya da <span onClick={handleClick} className="text-primary-600 font-medium cursor-pointer underline">yükleyin</span>
                </Typography>
                <TextField
                    inputRef={fileInputRef}
                    type="file"
                    inputProps={{ accept: 'video/*' }}
                    style={{ display: 'none' }}
                    onChange={handleFileChange}
                />
                {selectedFile && (
                    <Typography className="text-primary-900 font-sans text-[14px] font-normal leading-normal mt-2">
                        {selectedFile.name}
                    </Typography>
                )}
                <Typography className="text-name-300 font-sans text-[12px] font-normal leading-[18px] mt-2">
                    Desteklenen dosya formatları: MP4, AVI, MOV.
                </Typography>
            </Box>
        </Box>
    );
};

export default SelectedNo;

import React from 'react';
import Image from 'next/image';

import {
    Box,
    Button,
    Typography,
    Avatar
} from '@mui/material';

const FirstSection = () => {
    return (    
        <Box sx={{ display: "inline-flex", width: "100vw", flexDirection: { xs: "column", lg: "row" }, alignItems: "center", gap: "42px"}}>
            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: "88px", padding: "180px 72px" }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: "40px", alignItems: "flex-start"}}>
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "32px",  }}>
                        <Typography variant="h2" sx={{ color: 'primary.main', fontFamily: 'DM Serif Text', fontSize: { xs: 32, lg: 88 }, fontWeight: 400, lineHeight: { xs: "40px", lg: "78px" }, letterSpacing: '1.76px' }}>
                            Yeteneklerinizi Sergileyin
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'primary.main', fontFamily: 'DM Serif Text', fontSize: "18px", fontWeight: 500, lineHeight: '28px' }}>
                            Actryca, yetenekli oyuncular ve yazarlar için bir buluşma noktasıdır. Kariyerinizi yükseltin, yeteneklerinizi paylaşın ve menajerlik desteği alın. Menajersiz de katılabilir ve hayallerinizi gerçekleştirebilirsiniz
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', gap: "16px", alignItems: "flex-start" }}>
                        <Button
                            href="#"
                            variant="contained"
                            sx={{ height: "48px", borderRadius: 1, backgroundColor: 'primary.main', px: "24px", py: "16px", display: 'flex', alignItems: 'center', justifyContent: "center", gap: "10px", '&:hover': { transform: 'scale(1.05)' } }}
                        >
                            <Typography variant="button" sx={{ color: 'white', fontWeight: 700, fontSize: "16px", fontStyle: "normal", lineHeight: "16px", fontFamily: "DM Serif Text" }}>
                                Profil Oluştur
                            </Typography>
                        </Button>
                        <Button
                            href="#"
                            variant="outlined"
                            sx={{ height: 48, borderRadius: 1, borderColor: 'primary.main', px: 3, py: 1, display: 'flex', alignItems: 'center', gap: 1, '&:hover': { transform: 'scale(1.05)' } }}
                        >
                            <Typography variant="button" sx={{ color: 'primary.main', fontSize: 16, fontWeight: 700 }}>
                                Actryca Menajeriniz Olsun
                            </Typography>
                        </Button>
                    </Box>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: "flex-start", gap: "12px" }}>
                    <Box sx={{ position: 'relative', width: 144, height: 48 }}>
                        <Avatar
                            src="/images/firstSectionAssets/Ellipse_3.png"
                            alt="Avatar 1"
                            sx={{ width: 48, height: 48, border: "3px solid", borderColor: 'primary.main', position: 'absolute', left: 0, top: 0, zIndex: 1 }}
                        />
                        <Avatar
                            src="/images/firstSectionAssets/Ellipse_4.png"
                            alt="Avatar 2"
                            sx={{ width: 48, height: 48, border: "3px solid", borderColor: 'primary.main', position: 'absolute', left: 36, top: 0, zIndex: 2 }}
                        />
                        <Avatar
                            src="/images/firstSectionAssets/Ellipse_5.png"
                            alt="Avatar 3"
                            sx={{ width: 48, height: 48, border: "3px solid", borderColor: 'primary.main', position: 'absolute', left: 72, top: 0, zIndex: 3 }}
                        />
                    </Box>
                    <Typography variant="body2" sx={{ color: 'primary.main', fontSize: "16px", fontWeight: 500, lineHeight: "24px", fontFamily: "DM Serif Text" }}>
                        100.000+ yetenekli oyuncu ve yazar bize katıldı.
                    </Typography>
                </Box>
            </Box>

            <Box sx={{ flex: 1,  width: "687px", height: "653px", position: 'relative',  borderRadius: 1}}>
                <Image
                    src="/images/firstSectionAssets/man-in-shape.png"
                    alt="Your Company"
                    layout="fill"
                />
            </Box>
        </Box>
    )
}

export default FirstSection;

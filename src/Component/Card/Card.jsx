import { CardMedia,Typography, Box } from '@mui/material';
import Card from '@mui/material/Card';
export default function CardComponent({item}) {
    return(
        <Card
            sx= {{
                position: 'relative',  
                transition: '0.5s ease-in-out',
                cursor: 'pointer', 
                '&:hover':{
                    transform: 'scale(1.1)'
                },
                '&:hover .hideTitle': {  
                    opacity:0
                },
                '&:hover .card-overlay': {  
                    opacity:1
                },
            }}
        >
              <Box
                className= 'card-overlay'
                sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: 'flex',
                flexDirection: 'column', 
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',   
                opacity: 0,
                transition: 'opacity 0.3s',
                color: '#fff', 
                }}
            >
                <Typography 
                    variant="h6"  
                    sx={{ 
                        textAlign: 'center',
                        py: 1, 
                        textShadow: '1px 1px 3px black',
                        fontFamily: '"Times New Roman", Times , serif',
                    }}
                >
                    {item.title}
                </Typography>
                <Typography 
                    sx={{
                        textAlignLast: 'center', 
                        textAlign: 'justify', 
                        textShadow: '1px 1px 2px #000000',
                        color: '#d3d2d2',
                        fontFamily: '"Times New Roman", Times , serif',
                    }} 
                    p= {3}
                >
                    {item.content}
                </Typography>
            </Box>
            <CardMedia 
            className='cardmedia'
                image={item.pic}
                sx={{ height: 350,width:350 }} 
            />
            <Typography
                className= 'hideTitle'
                sx={{
                    position: 'absolute',
                    bottom: 0, 
                    left: 0,
                    textAlign: 'center',
                    py: '5px',
                    fontSize: '20px',
                    fontWeight: 500,
                    transition: '0.5s linear',
                    backgroundColor: 'white',
                    color: '#11343c',
                    width: '100%',
                  fontFamily: '"Times New Roman", Times , serif',
                }} 
            >
                {item.title}                
            </Typography>
        </Card>
    );
};
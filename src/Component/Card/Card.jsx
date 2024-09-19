import { CardMedia } from '@mui/material';
import Card from '@mui/material/Card';
export default function CardComponent({item}) {
    return(
        <Card>
            <CardMedia 
                image={item.pic}
                sx={{ height: 325,width:325 }}
            />
        </Card>
    );
};
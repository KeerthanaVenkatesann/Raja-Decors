import { Container } from "@mui/material";
import CardComponent from "../../Component/Card/Card";
import cleaningImg from "./cleaningImg";

export default function Service() {
    return(
        <> 
         <Container
            sx={{
                display:'grid',
                gap:4,
                gridTemplateColumns:'auto auto auto',
                justifyContent:'center',
                alignItems:'center',
                minHeight:'100vh',
                height:'100%',
                my:5,
            }}
         >
            {
                cleaningImg.map(
                    (value) => (
                        <CardComponent item={value}/>
                    )
                )
            }
         </Container>
        </>
    );
};
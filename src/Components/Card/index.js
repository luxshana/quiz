import  React, {useState} from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { dataSet } from "../../Constants/jsonData";
import { Button, Typography,Card,CardContent} from "@mui/material";



export default function RowAndColumnSpacing() {
  const [showComponents, setShowComponents] = useState(false);

  const handleClick = () => {
    setShowComponents(!showComponents);
  };
  return (
    <>
      <Grid container spacing={3}>
        {dataSet.map((data) => (
          <Grid item xs={12} md={4} >
            <Card sx={{ p: 3, m: 3, textAlign: "center", }}>
                <CardContent>
              <Typography fontWeight={600} sx={{ p: 2 }} variant="h5">{data.name}</Typography>
              {/* <Typography  sx={{}}>{data.Para}</Typography> */}
              <Box>
                        <img
                            src={data.Para}
                            alt="Mas Logo"
                            style={{
                                Width: '75px',
                                height: '75px',
                                borderRadius: '30%',
                                border: '2px  #D9D9D9',
                            }}
                        />
                    </Box>
              <Button  href={data.href} variant="contained" fullWidth color="success"  sx={{m:2}}>
               Quiz
              </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

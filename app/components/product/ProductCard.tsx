import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

import BuyNow from '../background/utils/BuyNow';
import Rating from '../utils/Rating';
import { ProductProps } from './ProductComponent';

import './product.css';




const ProductCard = (props:ProductProps)=>{

    const {title,description,price,images,rating,id} = props

    return (
        <Card sx={{ maxWidth: 300,  }}>
        <CardActionArea>
            <div style={{height: '180px', width: '100%'}}>
            <img src={images[0] || "Image"} alt="Image" style={{objectFit: 'contain', height: '180px', width: '100%'}}  />

            </div>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {title || "Title"}
            <Rating rating = {rating || 4} fillColor="#FF6347" borderColor="#2E2E2E" />
            </Typography>
            <Typography variant="body1" color="text.secondary">
            {description || 'Discription'}
            </Typography>
            <Typography variant='h3' component='div' >
            {`$ ${price || 100}`}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
          <BuyNow id={id} />
          </Button>
        </CardActions>
      </Card>
       
      );
}
export default ProductCard;
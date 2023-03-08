import {Card,CardBody,CardImg,CardSubtitle,CardText,CardTitle} from 'reactstrap'
const Image = (props)=>{
     const { image } = props
    return(  
      <Card>
        <CardImg width="80px" src={image.link} alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
        </CardBody>
      </Card>

    );
}

export default Image;
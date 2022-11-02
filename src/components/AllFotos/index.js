import React from 'react';
import aws from '../../constants';

const AllFotos = ({
  classname1,
  classname2,
  onImageClick,
  name,
}) => {

  const imagePath = `${aws.root}thumbs/`;
  const returnImages = arr => {
    switch (arr) {
      case 'enc' :
        return aws.enc;
      case 'puf' :
        return aws.puf;
      case 'hre' : 
        return aws.hre;
      default:
      return aws.fotos;
    }
  }
  const Images = returnImages(name).map((image, ind) => {
    return (
      <div key={ind} className={classname2} onClick={() => onImageClick(image)}>
        <img src={`${imagePath}${image}.png`} alt={image} />
      </div>
    )
  })
  return(
    <div className={classname1}>
      {Images}
    </div>
  )
};
export default AllFotos;

// import React, { useState } from 'react'
// import { instance } from '../../../redux/actions';
// import { ImgWrapper } from '../../../styles';
// export default function ArxitektorChild() {
//   const [pictureId, setPictureId] = useState("")
//   const [image, setImage] = useState("")
//   const getAttachments = () => {
//     instance
//       .get(`api/v1/file/get/${pictureId}`)
//       .then((res) => {
//         console.log(res.data);
//         setImage(res.data);
//         setPictureId(res.data)
//         console.log("image", image);
//       })
//       .catch((err) => console.log(err));
//   };
//   const handleFile = (e) => {
//     const formData = new FormData();
//     formData.append("files", e);
//     instance
//       .post("api/v1/file/saveAttachments", formData)
//       .then((res) => {
//         console.log(res.data.data);
//         setPictureId(res?.data.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
//   return (
//     <>
//       <input
//         type="file"
//         onChange={(e) => handleFile(e.target.files[0])}
//       />
//       <ImgWrapper>
//         <img src='http://ec2-35-158-135-234.eu-central-1.compute.amazonaws.com/api/v1/file/get/8580b88b-76c2-4cd0-9934-8bd5ec4907d8' />

//       </ImgWrapper>
//     </>
//   )
// }

import React from "react";
import Doctor from "../Doctor/Doctor";

const doctors = [
  {
    id: 1,
    name: "PROF. DR. S. M. G. KIBRIA",
    speciality:
      "Senior Consultant General, Laparoscopic and Vascular Suregon, Coordinator Vascular Surgery",
    img: "https://img1.wsimg.com/isteam/ip/cfb2ee50-4977-4a74-9e22-d3c9e4f1131f/36457f77-b87a-412a-ba97-679be2d9c771.jpg/:/rs=h:500,cg:true,m",
  },
  {
    id: 2,
    name: "DR. REYAN ANIS",
    speciality: "Interventional Cardiology",
    img: "https://www.uhlbd.com/backend/web/product_uploads/1527920169_2_dr%20reyan.jpg",
  },

  {
    id: 3,
    name: "DR. ABUL HASAN MUHAMMAD BASHAR",
    speciality: "Vascular Surgery, NICVD",
    img: "https://www.bdspecializedhospital.com/storage/app/public/media/1557718206.jpg",
  },
  {
    id: 4,
    name: "Lutfor Rahman",
    speciality: "Cardiac surgeon",
    img: "https://upload.wikimedia.org/wikipedia/commons/1/10/Lutfor_Rahman.png",
  },
  {
    id: 5,
    name: "DR. A. M. SHAFIQUE",
    speciality: "Cardiology",
    img: "https://www.uhlbd.com/backend/web/product_uploads/1614502376_2_Shafique%20Sir_Final%20Image-%203Copy.jpg",
  },

  {
    id: 6,
    name: "Dr. Jesmin Hossain",
    speciality: "Pediatric Cardiology",
    img: "https://www.nhf.org.bd/images/doctor_images/2041.jpg",
  },
  {
    id: 7,
    name: "Dr. Iffat Ara Begum",
    speciality: "Radiology & Imaging",
    img: "https://www.nhf.org.bd/images/doctor_images/2046.jpg",
  },
];

const Doctors = () => {
  return (
    <div id="doctors" className="container">
      <h2 className="text-green-700 m-20 font-bold text-4xl ">Our Doctors</h2>
      <div className="doctors">
        {doctors.map((doctor) => (
          <Doctor key={doctor.id} doctor={doctor}></Doctor>
        ))}
      </div>
    </div>
  );
};

export default Doctors;

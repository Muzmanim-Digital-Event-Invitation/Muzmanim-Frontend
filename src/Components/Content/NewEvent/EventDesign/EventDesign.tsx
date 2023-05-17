import "./EventDesign.scss";
import bgImage1 from "../../../../assets/invitation-bg-1.jpg";
import bgImage2 from "../../../../assets/invitation-bg-2.jpg";
import bgImage3 from "../../../../assets/invitation-bg-3.jpg";
import bgImage4 from "../../../../assets/invitation-bg-4.jpg";
import { GiDiamondRing, GiBabyBottle } from 'react-icons/gi';
import { TbWashDrycleanOff } from 'react-icons/tb';
import { MdOutlineOutdoorGrill, MdEventAvailable, MdOutlineMilitaryTech } from 'react-icons/md';
import { FaBirthdayCake } from 'react-icons/fa';
import { BsGenderFemale, BsGenderMale, BsTrophy } from 'react-icons/bs';
import DeleteIcon from '@mui/icons-material/Delete';

import { useEffect, useState } from "react";
import { IoMdColorPalette } from 'react-icons/io';

import Button from '@mui/material/Button';

import { useForm } from "react-hook-form";
import Invite from "../../../Invite/Invite";
import { useSelector } from "react-redux";


interface ownProps {
    stepNumber: number;
    setStepNumber: Function;
}

function EventDesign(props: ownProps): JSX.Element {

    const { register, handleSubmit, watch } = useForm<any>();
    const [bgColor, setBgColor] = useState<string>();
    const [background, setBackground] = useState<string>(null);
    const watchBackground = watch("background", null);
    const watchFont = watch("font", null);
    const watchIcon = watch("icon", null);
    const dataPlaceHolder = useSelector((state: any) => state.newEvent)

    // const dataPlaceHolder = {
    //     id: 1,
    //     userEmail: 'hen,daniel47@gmail.com',
    //     eventType: 'ewdding',
    //     hallName: 'אולמות דניאל',
    //     name1: 'דוד ביטון',
    //     name2: 'סימה עציוני',
    //     food: true,
    //     vegetarian: true,
    //     vegan: true,
    //     kids: true,
    //     regular: true,
    //     city: 'כפר סבא',
    //     street: 'נלקין 9',
    //     eventDate: '2023-05-14',
    //     eventStartHour: '19:00'
    // }

    function colorSelection(e: any) {
        setBgColor(e.target.value);
        setBackground(e.target.value);
    }

    function onSubmit(data: any) {
        console.log(data);
    }

    useEffect(() => {
        setBackground(watchBackground);
    }, [watchBackground])


    const [uploadedImages, setUploadedImages] = useState([]);
    const [imageSrc, setImageSrc] = useState<any>();
  
    const handleFileUpload = (e: any) => {
        const file = e.target.files[0];
        const reader = new FileReader();
      
        reader.onloadend = () => {
            setUploadedImages(prevImages => [reader.result, ...prevImages]);
            setImageSrc(reader.result);
        };
      
        if (file) {
          reader.readAsDataURL(file);
        }
    }
      
      const handleRadioChange = (e: any) => {
        setImageSrc(e.target.value);
      };
    
    
      useEffect(() => {
        if (uploadedImages.length > 0) {
          const radios = document.getElementsByName('image');
          (radios[radios.length - (uploadedImages.length + 1)] as HTMLInputElement).checked = true;
        }
      }, [uploadedImages]);

      const handleDelete = () => {
        // Uncheck all radio buttons
        const radios = document.getElementsByName('image');
        for(let i = 0; i < radios.length; i++){
            (radios[i] as HTMLInputElement).checked = false;
        }
    
        // Clear image source
        setImageSrc(null);
    };
      
    return (
        <div className="EventDesign">
            <form className="design-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-section">
                    <h3>רקע</h3>
                    <div className="bg-selection">
                        <div className="radio-input-wraper">
                            <div className="color-selector">
                                <input className="color-selector-input" id="color-selector-input" type="color" onChange={(e: any) => colorSelection(e)} />
                                <label className="color-selector-label" htmlFor="color-selector-input"><IoMdColorPalette /></label>
                            </div>
                            <input type="radio" id="select-bg-clr" {...register("background")} defaultValue={"#ffe4c4"} value={bgColor} />
                            <label className="radio-label bg-option" htmlFor="select-bg-clr" style={{ backgroundColor: bgColor }} />
                        </div>
                        <div className="radio-input-wraper">
                            <img className="bg-image" src={bgImage1} alt="bg-image" />
                            <input type="radio" id="select-bg1" {...register("background")} value={bgImage1} />
                            <label className="radio-label bg-option" htmlFor="select-bg1" />
                        </div>
                        <div className="radio-input-wraper">
                            <img className="bg-image" src={bgImage2} alt="bg-image" />
                            <input type="radio" id="select-bg2" {...register("background")} value={bgImage2} />
                            <label className="radio-label bg-option" htmlFor="select-bg2" />
                        </div>
                        <div className="radio-input-wraper">
                            <img className="bg-image" src={bgImage3} alt="bg-image" />
                            <input type="radio" id="select-bg3" {...register("background")} value={bgImage3} />
                            <label className="radio-label bg-option" htmlFor="select-bg3" />
                        </div>
                        <div className="radio-input-wraper">
                            <img className="bg-image" src={bgImage4} alt="bg-image" />
                            <input type="radio" id="select-bg4" {...register("background")} value={bgImage4} />
                            <label className="radio-label bg-option" htmlFor="select-bg4" />
                        </div>
                    </div>
                </div>
                <div className="form-section">
                    <h3>פונט</h3>
                    <div className="font-selection">
                        <div className="radio-input-wraper font-option font-1">
                            <input type="radio" id="select-font1" {...register("font")} value={1} />
                            <label className="radio-label font-option" htmlFor="select-font1">משמח</label>
                        </div>
                        <div className="radio-input-wraper font-option font-2">
                            <input type="radio" id="select-font2" {...register("font")} value={2} />
                            <label className="radio-label font-option" htmlFor="select-font2">משוגע</label>
                        </div>
                        <div className="radio-input-wraper font-option font-3">
                            <input type="radio" id="select-font3" {...register("font")} value={3} />
                            <label className="radio-label font-option" htmlFor="select-font3">כיף</label>
                        </div>
                        <div className="radio-input-wraper font-option font-4">
                            <input type="radio" id="select-font4" {...register("font")} value={4} />
                            <label className="radio-label font-option" htmlFor="select-font4">חגיגי</label>
                        </div>
                    </div>
                </div>



                <div className="form-section">
                <h3>אייקון</h3>
                <div className="icons-section">
                    <div className="radio-input-wraper icon-option">
                        <input type="radio" id="select-icon1" {...register("icon")} value="" />
                        <label className="radio-label icon-option" htmlFor="select-icon1"><TbWashDrycleanOff/></label>
                    </div>
                    <div className="radio-input-wraper icon-option">
                        <input type="radio" id="select-icon2" {...register("icon")} value="<GiDiamondRing/>" />
                        <label className="radio-label icon-option" htmlFor="select-icon2"><GiDiamondRing/></label>
                    </div>
                    <div className="radio-input-wraper icon-option">
                        <input type="radio" id="select-icon3" {...register("icon")} value="<GiBabyBottle/>" />
                        <label className="radio-label icon-option" htmlFor="select-icon3"><GiBabyBottle/></label>
                    </div>
                    <div className="radio-input-wraper icon-option">
                        <input type="radio" id="select-icon4" {...register("icon")} value="<MdOutlineOutdoorGrill/>" />
                        <label className="radio-label icon-option" htmlFor="select-icon4"><MdOutlineOutdoorGrill/></label>
                    </div>
                    <div className="radio-input-wraper icon-option">
                        <input type="radio" id="select-icon5" {...register("icon")} value="<FaBirthdayCake/>" />
                        <label className="radio-label icon-option" htmlFor="select-icon5"><FaBirthdayCake/></label>
                    </div>
                    <div className="radio-input-wraper icon-option">
                        <input type="radio" id="select-icon6" {...register("icon")} value="<BsGenderMale/>" />
                        <label className="radio-label icon-option" htmlFor="select-icon6"><BsGenderMale/></label>
                    </div>
                    <div className="radio-input-wraper icon-option">
                        <input type="radio" id="select-icon7" {...register("icon")} value="<BsGenderFemale/>" />
                        <label className="radio-label icon-option" htmlFor="select-icon7"><BsGenderFemale/></label>
                    </div>
                    <div className="radio-input-wraper icon-option">
                        <input type="radio" id="select-icon8" {...register("icon")} value="<MdEventAvailable/>" />
                        <label className="radio-label icon-option" htmlFor="select-icon8"><MdEventAvailable/></label>
                    </div>
                    <div className="radio-input-wraper icon-option">
                        <input type="radio" id="select-icon9" {...register("icon")} value="<BsTrophy/>" />
                        <label className="radio-label icon-option" htmlFor="select-icon9"><BsTrophy/></label>
                    </div>
                    <div className="radio-input-wraper icon-option">
                        <input type="radio" id="select-icon10" {...register("icon")} value="<MdOutlineMilitaryTech/>" />
                        <label className="radio-label icon-option" htmlFor="select-icon10"><MdOutlineMilitaryTech/></label>
                    </div>
                </div>
            </div>


                <div className="form-section">
                    <div className="image-title-and-delete-button">
                        <h3>תמונה</h3>
                        <button className="delete-image-icon" onClick={handleDelete}>
                        <DeleteIcon className="delete-icon"     />
                            ללא תמונה
                        </button>
                    </div>
                    
                    <div className="image-selection">
                        <div className=" upload_image">
                        <img className="image-image" src="https://cdn-icons-png.flaticon.com/512/685/685686.png?w=826&t=st=1684263121~exp=1684263721~hmac=ea65ad0b3a4c22c98deea1a6e261e8241ef13e4f2e35dde580cc7b3d751e478f" alt="image-image" />
                        <input type="file" className="input_upload_image" onChange={handleFileUpload} />
                        </div>
                        {uploadedImages.map((image, index) => (
                        <div className="radio-input-wraper" key={index}>
                            <img className="image-image" src={image} alt="Uploaded" />
                            <input type="radio" id={`uploaded-image${index}`} {...register("image")} value={image} onChange={handleRadioChange} />
                            <label className="radio-label image-option" htmlFor={`uploaded-image${index}`} />
                        </div>
                        ))}
                    <div className="radio-input-wraper">
                    <img className="image-image" src="https://img.freepik.com/free-photo/wedding-bouquet-white-roses-with-paniculata_24972-170.jpg?w=1380&t=st=1684262437~exp=1684263037~hmac=92ebe4ad10dd751fed81faf8ddb9d78c6d0c6bce52d1fc314a5fcae817f915f7" alt="image-image" />
                    <input type="radio" id="select-image-1" {...register("image")} value="https://img.freepik.com/free-photo/wedding-bouquet-white-roses-with-paniculata_24972-170.jpg?w=1380&t=st=1684262437~exp=1684263037~hmac=92ebe4ad10dd751fed81faf8ddb9d78c6d0c6bce52d1fc314a5fcae817f915f7" onChange={handleRadioChange} />
                    <label className="radio-label image-option" htmlFor="select-image-1" />
                    </div>

                        <div className="radio-input-wraper">
                            <img className="image-image" src="https://img.freepik.com/free-photo/holding-hands_1112-1531.jpg?w=1380&t=st=1684262918~exp=1684263518~hmac=1b75200e65511126c03556aa69439be08257259f27eab67152586f3b8478ac8e" alt="image-image"  />
                            <input type="radio" id="select-image-2" {...register("ïmage")} value="https://img.freepik.com/free-photo/holding-hands_1112-1531.jpg?w=1380&t=st=1684262918~exp=1684263518~hmac=1b75200e65511126c03556aa69439be08257259f27eab67152586f3b8478ac8e" onChange={handleRadioChange} />
                            <label className="radio-label image-option" htmlFor="select-image-2" />
                        </div>
                        <div className="radio-input-wraper">
                            <img className="image-image" src="https://img.freepik.com/free-photo/barbecue-grill-party-tasty-food-wooden-desk_176420-1836.jpg?w=1380&t=st=1684262959~exp=1684263559~hmac=9872a80a667870ca0808b3d17c728376ace0b681f8e309b392fe9478ae6c34f0" alt="image-image" />
                            <input type="radio" id="select-image-3" {...register("ïmage")} value="https://img.freepik.com/free-photo/barbecue-grill-party-tasty-food-wooden-desk_176420-1836.jpg?w=1380&t=st=1684262959~exp=1684263559~hmac=9872a80a667870ca0808b3d17c728376ace0b681f8e309b392fe9478ae6c34f0" onChange={handleRadioChange} />
                            <label className="radio-label image-option" htmlFor="select-image-3" />
                        </div>
                        
                </div>
                </div>
{/* 
                <div className="form-section">
                <h3>תמונה</h3>
                <div className="image-section">
                    <input type="file" onChange={(e: any) => handleFileUpload(e)} />
                </div>
                </div> */}

{/* 
                <div className="form-section">
                    <h3>תמונה</h3>
                    <div className="image-section">
                        <input type="file" />
                    </div>
                </div> */}
            </form >
            <div className="preview-wraper">
                <Invite
                    eventData={dataPlaceHolder}
                    background={background}
                    font={watchFont}
                    icon={watchIcon}
                    image={imageSrc}
                />
            </div>

            {/* <div className="formbold-form-confirm">
                <button className="formbold-confirm-btn " onClick={() => stepBack()}>חזור אחורה</button>
                <button type="submit" className="formbold-confirm-btn active" > שלב הבא</button>
            </div> */}
        </div>
    );
}

export default EventDesign;

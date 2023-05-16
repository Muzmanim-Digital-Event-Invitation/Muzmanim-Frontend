import "./EventDesign.scss";
import bgImage1 from "../../../../assets/invitation-bg-1.jpg"
import bgImage2 from "../../../../assets/invitation-bg-2.jpg"
import bgImage3 from "../../../../assets/invitation-bg-3.jpg"
import bgImage4 from "../../../../assets/invitation-bg-4.jpg"
import { useEffect, useState } from "react";
import { IoMdColorPalette } from 'react-icons/io';
import { GiDiamondRing, GiBabyBottle } from 'react-icons/gi';
import { TbWashDrycleanOff } from 'react-icons/tb';
import { MdOutlineOutdoorGrill, MdEventAvailable, MdOutlineMilitaryTech } from 'react-icons/md';
import { FaBirthdayCake } from 'react-icons/fa';
import { BsGenderFemale, BsGenderMale, BsTrophy } from 'react-icons/bs';

import { useForm } from "react-hook-form";
import Invite from "../../../Invite/Invite";
import { useDispatch, useSelector } from "react-redux";


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

{/* 
                <div className="form-section">
                    <h3>אייקון</h3>
                    <div className="icons-section">
                        <div className="icon-option">
                            <div className="icon">❤️</div>
                        </div>
                        <div className="icon-option">
                            <div className="icon"><GiDiamondRing/></div>
                        </div>
                        <div className="icon-option">
                            <div className="icon">🌻</div>
                        </div>
                        <div className="icon-option">
                            <div className="icon">🌯</div>
                        </div>
                        <div className="icon-option">
                            <div className="icon">❤️</div>
                        </div>
                        <div className="icon-option">
                            <div className="icon">☎️</div>
                        </div>
                        <div className="icon-option">
                            <div className="icon">🌻</div>
                        </div>
                        <div className="icon-option">
                            <div className="icon">🌯</div>
                        </div>
                        <div className="icon-option">
                            <div className="icon">❤️</div>
                        </div>
                        <div className="icon-option">
                            <div className="icon">☎️</div>
                        </div>
                    </div>
                </div> */}
                <div className="form-section">
                    <h3>תמונה</h3>
                    <div className="image-section">
                        <input type="file" />
                    </div>
                </div>
            </form >
            <div className="preview-wraper">
                <Invite
                    eventData={dataPlaceHolder}
                    background={background}
                    font={watchFont}
                    icon={watchIcon}
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

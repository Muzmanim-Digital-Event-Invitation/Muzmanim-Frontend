import "./EventDesign.scss";
import bgImage1 from "../../../../assets/invitation-bg-1.jpg"
import bgImage2 from "../../../../assets/invitation-bg-2.jpg"
import bgImage3 from "../../../../assets/invitation-bg-3.jpg"
import bgImage4 from "../../../../assets/invitation-bg-4.jpg"
import { useEffect, useState } from "react";
import { IoMdColorPalette } from 'react-icons/io';
import { useForm } from "react-hook-form";


interface ownProps {
    stepNumber: number;
    setStepNumber: Function;
}

function EventDesign(props: ownProps): JSX.Element {

    const { register, handleSubmit, watch } = useForm<any>();
    const [bgColor, setBgColor] = useState<string>();
    const watchBackground = watch("background", null);

    useEffect(() => {
        console.log(watchBackground);
    }, [watchBackground])

    function colorSelection(e: any) {
        setBgColor(e.target.value);
    }

    function onSubmit(data: any) {
        console.log(data);
    }

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
                        <div className="font-option">
                            פונט
                        </div>
                        <div className="font-option">
                            פונט
                        </div>
                        <div className="font-option">
                            פונט
                        </div>
                        <div className="font-option">
                            פונט
                        </div>
                    </div>
                </div>
                <div className="form-section">
                    <h3>אייקון</h3>
                    <div className="icons-section">
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
                </div>
                <div className="form-section">
                    <h3>תמונה</h3>
                    <div className="image-section">
                        <input type="file" />
                    </div>
                </div>
            </form >
            <div className="preview-wraper">
                <div
                    className="preview"
                    style={{
                        backgroundImage: `url(${watchBackground})`,
                        backgroundColor: watchBackground
                    }}
                ></div>
            </div>
        </div >
    );
}

export default EventDesign;

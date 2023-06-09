import { useState, useEffect } from "react";
import "./EventType.scss";
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from "react-redux";
import { newEventAction } from "../../../../App/newEventSlice";
import { config } from "../../../../Services/config";
import { FormControl, InputLabel, Select, MenuItem, createTheme, ThemeProvider } from '@mui/material';



function EventType({ stepNumber, setStepNumber }: { stepNumber: number, setStepNumber: (sn: number) => void }): JSX.Element {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const eventType = useSelector((state: any) => state.newEvent)
  const [isFood, setIsFood] = useState(eventType && eventType.food ? true : false);
  const dispatch = useDispatch();

  const [eventTypeNumber, setEventTypeNumber] = useState(eventType && eventType.eventType ? eventType.eventType : "");
  function stepForward() {
    setStepNumber(stepNumber + 1);
  }

  useEffect(() => {
    console.log(eventType);
    window.scrollTo({ top: 0, behavior: 'smooth' });

  }, [])

  function onSubmit(data: any) {
    if (!data.food) {
      data.kids = false;
      data.regular = false;
      data.vegan = false;
      data.vegetarian = false;
    }
    // console.log(data);
    const mergedData = { ...eventType, ...data };
    dispatch(newEventAction(mergedData));
    // dispatch(newEventAction(data))
    stepForward();
  }

  const options = Object.keys(config.eventTypeMapping).map((key: string) => ({
    value: parseInt(key),
    label: config.eventTypeMapping[parseInt(key)].label,
    icon: config.getIconComponent(config.eventTypeMapping[parseInt(key)].icon)
  }));


  

  const theme = createTheme({
    direction: 'rtl',
    components: {
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            '& fieldset': {
              textAlign: 'right',
            },
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          formControl: {
            right: "-10px",
            '&[data-shrink="false"]': {
              right: '25px',
            },
          },
        },
      },
      MuiSelect: {
        styleOverrides: {
          icon: {
            left: 0,
            right: 'unset',
            color: 'inherit',
          },
        },
      },
    },
  });
  

  return (
    <div className="EventType">
      <div className="formbold-main-wrapper">
        <div className="formbold-form-wrapper">
          <form onSubmit={handleSubmit(onSubmit)}>
            
            <div className="formbold-input-flex">
              <p>סוג האירוע:</p>

              <ThemeProvider theme={theme}>
              <FormControl sx={{ m: 1, minWidth: 150 }} size="small">
                <InputLabel id="demo-select-small-label">בחר סוג אירוע</InputLabel>
                <Select
                 {...register("eventType", { required: true })}
                labelId="demo-select-small-label"
                id="demo-select-small"
                defaultValue={eventType && eventType.eventType ? eventType.eventType : ""}
                label="בחר סוג אירוע"
                onChange={(e: any) => setEventTypeNumber(e.target.value)}
                              >
                {options.map((option) => (
                <MenuItem key={option.value} value={option.value}   sx={{ gap: '10px' }}> 
                  {option.icon && <option.icon />} {option.label}
                </MenuItem>
              ))}

              </Select>

              </FormControl>
            </ThemeProvider>

            </div>
              {errors.eventType && <span className="error-message" id="error-eventType">זהו שדה חובה</span>}

            <div className="formbold-input-flex">
              <div>
                <label htmlFor="name1" className="formbold-form-label">שם</label>
                <input type="text" defaultValue={eventType && eventType.name1 ? eventType.name1 : ""} id="name1" className="formbold-form-input" {...register("name1", { required: true })} />
              </div>
                {errors.name1 && <span className="error-message">זהו שדה חובה</span>}
              
              {eventTypeNumber == "2" ?
                <div>
                  <label htmlFor="name2" className="formbold-form-label">שם שני (אופציונלי)</label>
                  <input type="text" defaultValue={eventType && eventType.name2 ? eventType.name2 : ""} id="name2" className="formbold-form-input" {...register("name2")} />
                  {errors.name2 && <span className="error-message">זהו שדה חובה</span>}
                </div>
                : <></>}
            </div>

            <div className="formbold-input-flex">
              <div>
                <label htmlFor="hallName" className="formbold-form-label">שם המתחם</label>
                <input type="text" defaultValue={eventType && eventType.hallName ? eventType.hallName : ""} id="hallName" className="formbold-form-input" {...register("hallName", { required: true })} />
                {errors.hallName && <span className="error-message">זהו שדה חובה</span>}
              </div>
            </div>

            <div className="formbold-input-flex">
              <label htmlFor="supportCheckbox" className="formbold-form-label">האם יוגש אוכל באירוע?</label>
              <div className="formbold-checkbox-wrapper">
                <label htmlFor="supportCheckbox" className="formbold-checkbox-label">

                  <div className="formbold-relative">
                    <input
                      type="checkbox"
                      id="supportCheckbox"
                      className="formbold-input-checkbox"
                      defaultChecked={eventType && eventType.food ? eventType.food : ""}
                      {...register("food")}
                      onClick={() => setIsFood(!isFood)}
                    />

                    <div className="formbold-checkbox-inner">
                      <span className="formbold-opacity-0">
                        <svg
                          width="11"
                          height="8"
                          viewBox="0 0 11 8"
                          className="formbold-stroke-current"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.81868 0.688604L4.16688 5.4878L2.05598 3.29507C1.70417 2.92271 1.1569 2.96409 0.805082 3.29507C0.453266 3.66742 0.492357 4.24663 0.805082 4.61898L3.30689 7.18407C3.54143 7.43231 3.85416 7.55642 4.16688 7.55642C4.47961 7.55642 4.79233 7.43231 5.02688 7.18407L10.0696 2.05389C10.4214 1.68154 10.4214 1.10233 10.0696 0.729976C9.71776 0.357624 9.17049 0.357625 8.81868 0.688604Z"
                            fill="white"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </label>
              </div>
            </div>

            {
              isFood ?
                <div className="formbold-form-label" style={{ display: "flex", gap: "40px" }}>
                  <div className="formbold-checkbox-wrapper">
                    <label htmlFor="regular" className="formbold-form-label">
                      {" "}
                      מנה רגילה{" "}
                    </label>
                    <input id="regular" type="checkbox"   {...register("regular", { value: false })} defaultChecked={eventType && eventType.regular ? true : false} />
                  </div>
                  <div className="formbold-checkbox-wrapper">
                    <label htmlFor="vegan" className="formbold-form-label">
                      {" "}
                      טבעוני{" "}
                    </label>
                    <input id="vegan" type="checkbox"  {...register("vegan", { value: false })} defaultChecked={eventType && eventType.vegan ? true : false} />
                  </div>
                  <div className="formbold-checkbox-wrapper">
                    <label htmlFor="vegetarian" className="formbold-form-label">
                      {" "}
                      צמחוני{" "}
                    </label>
                    <input id="vegetarian" type="checkbox"   {...register("vegetarian", { value: false })} defaultChecked={eventType && eventType.vegetarian ? true : false} />
                  </div>
                  <div className="formbold-checkbox-wrapper">
                    <label htmlFor="kids" className="formbold-form-label">
                      {" "}
                      מנת ילדים{" "}
                    </label>
                    <input id="kids" type="checkbox"  {...register("kids", { value: false })} defaultChecked={eventType && eventType.kids ? true : false} />
                  </div>
                </div>
                : <></>
            }

            {/* <div className="formbold-input-flex"></div> */}
            <div className="formbold-form-confirm">
            <button type="submit" className=" formbold-btn ">
              לשלב הבא
            </button>
            </div>
          </form>
        </div>
      </div>
      {/* <button onClick={() => stepBack()}>Step Back</button>
          <button onClick={() => stepForward()}>Step Forward</button> */}
    </div>
  );
}

export default EventType;

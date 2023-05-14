import { EventModel } from "../../../../../../Models/EventModel";
import { servicesFunctions } from "../../../../../../Services/ServicesFunctions";
import "./EditEventInfo.scss";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {useNavigate} from "react-router-dom";
import { config } from "../../../../../../Services/config";
import { ThemeProvider } from "@emotion/react";
import { createTheme, FormControl, InputLabel, Select, MenuItem } from "@mui/material";

function EditEventInfo(): JSX.Element {
  const { id } = useParams();
  const [event, setEvent] = useState<EventModel>();
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();
  const [isFood, setIsFood] = useState<boolean>();
  const [eventTypeNumber, setEventTypeNumber] = useState(event && event.eventType ? event.eventType : "");
  const navigate = useNavigate();
  useEffect(() => {
    console.log(id);
    
    servicesFunctions.getSpesificEvent(id).then((res) => {
      setEvent(res);
      setIsFood(res?.food);
      setEventTypeNumber(res.eventType)

      if (res) {
        setValue("eventType", res.eventType);
        setValue("name1", res.name1);
        setValue("name2", res.name2);
        setValue("hallName", res.hallName);
        setValue("city", res.city);
        setValue("street", res.street);
        setValue("eventDate", res.eventDate);
        setValue("eventStartHour", res.eventStartHour);
        setValue("food", res.food);
        setValue("regular", res.regular);
        setValue("vegan", res.vegan);
        setValue("vegetarian", res.vegetarian);
        setValue("kids", res.kids);
      }
    });
  }, []);

  function onSubmit(data: any) {
    console.log(data);
    data.eventDate = servicesFunctions.extractDateFromISOString(data.eventDate)
    servicesFunctions.editEvent(data, id).then(() => {
        navigate("/eventManagement/" + id)
    })
  }

  // const options = Object.keys(config.eventTypeMapping).map((key) => (
  //   <option value={key} selected={key === config.eventTypeMapping}>{config.eventTypeMapping[key]}</option>
  // ));


  
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
            right: "-5px",
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
    <div className="EditEventInfo">
      <div className="formbold-main-wrapper">
        <div className="formbold-form-wrapper">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="edit_form_container">
              <div>
                <div className="formbold-input-flex" style={{marginBottom: "0"}}>
                  <label className="formbold-form-label">סוג האירוע:</label>


                  
              <ThemeProvider theme={theme}>
              <FormControl sx={{ m: 1, minWidth: 150 }} size="small">
                <InputLabel id="demo-select-small-label">בחר סוג אירוע</InputLabel>
                <Select
                    {...register("eventType", { required: event && event.eventType ? false : true  })}
                    labelId="demo-select-small-label"
                id="demo-select-small"
                value={eventTypeNumber}
                label="בחר סוג אירוע"
                onInput={(e: any) => setEventTypeNumber(e.target.value)}
                              >
                {options.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.icon && <option.icon />} {option.label}
                </MenuItem>
              ))}

              </Select>

              </FormControl>
            </ThemeProvider>


{/* 

                  <select
                    {...register("eventType", { required: event && event.eventType ? false : true  })}
                    onInput={(e: any) => setEventTypeNumber(e.target.value)}
                    value={eventTypeNumber}
                        >
                    <option value="">בחר סוג אירוע</option>
                    {options}
                  </select> */}
                  {errors.eventType && (
                    <span className="error-message">זהו שדה חובה</span>
                  )}
                </div>

                <div className="formbold-input-flex">
                  <div>
                    <label htmlFor="name1" className="formbold-form-label">
                      שם
                    </label>
                    <input
                      type="text"
                      defaultValue={event && event.name1 ? event.name1 : ""}
                      id="name1"
                      className="formbold-form-input"
                      {...register("name1", { required: event && event.name1 ? false : true })}
                    />
                    {errors.name1 && (
                      <span className="error-message">זהו שדה חובה</span>
                    )}
                  </div>
                  </div>
                <div className="formbold-input-flex">
                  {eventTypeNumber == "2" ? (
                    <div>
                      <label htmlFor="name2" className="formbold-form-label">
                        שם שני (אופציונלי)
                      </label>
                      <input
                        type="text"
                        defaultValue={event && event.name2 ? event.name2 : ""}
                        id="name2"
                        className="formbold-form-input"
                        {...register("name2")}
                      />
                      {errors.name2 && (
                        <span className="error-message">זהו שדה חובה</span>
                      )}
                    </div>
                  ) : (
                    <></>
                  )}
                </div>

                <div className="formbold-input-flex">
                  <div>
                    <label htmlFor="hallName" className="formbold-form-label">
                      שם המתחם
                    </label>
                    <input
                      type="text"
                      defaultValue={
                        event && event.hallName ? event.hallName : ""
                      }
                      id="hallName"
                      className="formbold-form-input"
                      {...register("hallName", { required: event && event.hallName ? false : true  })}
                    />
                    {errors.hallName && (
                      <span className="error-message">זהו שדה חובה</span>
                    )}
                  </div>
                </div>

                <div className="formbold-input-flex">
                  <label
                    htmlFor="supportCheckbox"
                    className="formbold-form-label"
                  >
                    האם יוגש אוכל באירוע?
                  </label>
                  <div className="formbold-checkbox-wrapper">
                    <label
                      htmlFor="supportCheckbox"
                      className="formbold-checkbox-label"
                    >
                      <div className="formbold-relative">
                        <input
                          type="checkbox"
                          id="supportCheckbox"
                          className="formbold-input-checkbox"
                          checked={event && event.food ? true : false}
                          {...register("food")}
                          onClick={() => setIsFood(!event.food)}
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

                {isFood ? (
                  <div
                    className="formbold-form-label"
                    style={{ display: "flex", gap: "40px" }}
                  >
                    <div className="formbold-checkbox-wrapper">
                      <label htmlFor="regular" className="formbold-form-label">
                        {" "}
                        מנה רגילה{" "}
                      </label>
                      <input
                        id="regular"
                        type="checkbox"
                        {...register("regular", { value: false })}
                        defaultChecked={event && event.regular ? true : false}
                      />
                    </div>
                    <div className="formbold-checkbox-wrapper">
                      <label htmlFor="vegan" className="formbold-form-label">
                        {" "}
                        צמחוני{" "}
                      </label>
                      <input
                        id="vegan"
                        type="checkbox"
                        {...register("vegan", { value: false })}
                        defaultChecked={event && event.vegan ? true : false}
                      />
                    </div>
                    <div className="formbold-checkbox-wrapper">
                      <label
                        htmlFor="vegetarian"
                        className="formbold-form-label"
                      >
                        {" "}
                        טבעוני{" "}
                      </label>
                      <input
                        id="vegetarian"
                        type="checkbox"
                        {...register("vegetarian", { value: false })}
                        defaultChecked={
                          event && event.vegetarian ? true : false
                        }
                      />
                    </div>
                    <div className="formbold-checkbox-wrapper">
                      <label htmlFor="kids" className="formbold-form-label">
                        {" "}
                        מנת ילדים{" "}
                      </label>
                      <input
                        id="kids"
                        type="checkbox"
                        {...register("kids", { value: false })}
                        defaultChecked={event && event.kids ? true : false}
                      />
                    </div>
                  </div>
                ) : (
                  <></>
                )}
              </div>

              {/* <div className="formbold-input-flex"></div> */}

              <div>
                <div className="formbold-form-step-1 active">
                  <div className="formbold-input-flex">
                    <div>
                      <label htmlFor="city" className="formbold-form-label">
                        {" "}
                        עיר{" "}
                      </label>
                      <input
                        defaultValue={event && event.city ? event.city : ""}
                        type="text"
                        id="city"
                        className="formbold-form-input"
                        {...register("city")}
                      />
                    </div>
                  </div>
                  <div>
                    <div>
                      <label htmlFor="street" className="formbold-form-label">
                        רחוב
                      </label>
                      <input
                        defaultValue={event && event.street ? event.street : ""}
                        type="text"
                        id="street"
                        className="formbold-form-input"
                        {...register("street")}
                      />
                    </div>
                  </div>
                </div>

                <div className="formbold-input-flex">
                  <div>
                    <label htmlFor="eventDate" className="formbold-form-label">
                      תאריך
                    </label>
                    <input
                      value={
                        event && event.eventDate
                          ? new Date(event.eventDate)
                              .toISOString()
                              .split("T")[0]
                          : ""
                      }
                      type="date"
                      id="eventDate"
                      className="formbold-form-input"
                      {...register("eventDate")}
                    />
                  </div>
                </div>

                <div className="formbold-input-flex">
                  <div>
                    <label
                      htmlFor="eventStartHour"
                      className="formbold-form-label"
                    >
                      שעת התחלה
                    </label>
                    <input
                      defaultValue={
                        event && event.eventStartHour
                          ? event.eventStartHour
                          : ""
                      }
                      type="time"
                      id="eventStartHour"
                      className="formbold-form-input"
                      {...register("eventStartHour")}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="formbold-form-confirm">
              <button className="  formbold-btn " onClick={() => navigate("/eventManagement/" + id)}>ביטול</button>
              <button type="submit" className="  formbold-btn active">
                {" "}
                עדכן
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditEventInfo;

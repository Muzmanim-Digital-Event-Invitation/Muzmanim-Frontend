import "./EditAndDeleteGuestMenu.css";
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from "react";
import { GuestModel } from "../../../../../Models/GuestModel";
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { servicesFunctions } from "../../../../../Services/ServicesFunctions";
import Dialog from '@mui/material/Dialog';
import EditGuestModal from "./EditGuestModal/EditGuestModal";
import { EventModel } from "../../../../../Models/EventModel";


function EditAndDeleteGuestMenu( { guest, refresh, setRefresh, id, event }: { guest: GuestModel, refresh: boolean, setRefresh: (e: boolean) => void, id: string, event: EventModel }): JSX.Element {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [deleteGuestOpen, setDeleteGuestOpen] = useState(false);
    const [editGuestOpen, setEditGuestOpen] = useState(false);

    const handleClickOpenGuestDelete = () => {
      setDeleteGuestOpen(true);
    };
  
    const handleCloseGuestDelete = () => {
      setDeleteGuestOpen(false);
    };
  
    const handleAccept = () => {
      servicesFunctions.deleteGuestById(guest.id, id).then(() => {
        setRefresh(!refresh);
      })


      setDeleteGuestOpen(false);
    };
  

    
  
    const handleClickOpenGuestEdit = () => {
      setEditGuestOpen(true);
    };
  
    const handleCloseGuestEdit = () => {
      setEditGuestOpen(false);
    };
  
    const handleAcceptEdit = () => {
      // servicesFunctions.deleteGuestById(guest.id, id).then(() => {
        setRefresh(!refresh);
      // })


      setEditGuestOpen(false);
    };
  
  

  
    const handleMenuGuestTool = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleCloseGuestTool = () => {
      setAnchorEl(null);
    };

    return (
        <div className="EditAndDeleteGuestMenu">
                          <IconButton
                            size="large"
                            onClick={handleMenuGuestTool}
                          >
                            <MoreVertIcon />
                          </IconButton>
                          <Menu
                          className="custom_guest_tool_menu"
                            // id="menu-appbar"
                            sx={{
                              '.MuiPaper-root': {
                                boxShadow: 'rgba(100, 100, 111, 0.2) 0px 0px 9px -2px;',
                              },
                            }}                            anchorEl={anchorEl}
                            anchorOrigin={{
                              vertical: 'top',
                              horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                              vertical: 'top',
                              horizontal: 'left',
                            }}
                            open={Boolean(anchorEl)}
                            onClose={handleCloseGuestTool}
                          >
                            <MenuItem onClick={handleClickOpenGuestEdit}>עריכה</MenuItem>
                            <MenuItem onClick={handleClickOpenGuestDelete}>מחיקה</MenuItem>
                          </Menu>
        

                            {/* delete popup*/}
                            <div>
                          <Dialog
                            open={deleteGuestOpen}
                            onClose={handleCloseGuestDelete}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                        >
                            <DialogTitle sx={{textAlign: "center"}} id="alert-dialog-title">{"האם את/ה בטוח?"}</DialogTitle>
                            <DialogContent>
                            <DialogContentText id="alert-dialog-description">

                            באישור תמחק/י את המוזמן: {guest.firstName} {guest.lastName}
                            </DialogContentText>
                            </DialogContent>
                            <div style={{display: "flex", justifyContent: "center", gap: "15px", marginBottom: "15px"}}>

                                <button className="accept_delete_event delete_event_btn" onClick={handleAccept}>
                                מאשר/ת
                                </button>
                                <button className="cancel_delete_event delete_event_btn" onClick={handleCloseGuestDelete}>
                                ביטול
                                </button>
                            </div>
                        
                        </Dialog>












{/* edit guest  */}

                        <Dialog
                            open={editGuestOpen}
                            onClose={handleCloseGuestEdit}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                        >
                          <DialogTitle sx={{textAlign: "center"}} id="alert-dialog-title">{"עריכת אורח"}</DialogTitle>
                            <DialogContent>
                            <DialogContentText id="alert-dialog-description">

                            </DialogContentText>
                            </DialogContent>


                            <EditGuestModal guest={guest} event={event}/>








                            <div style={{display: "flex", justifyContent: "center", gap: "15px", marginBottom: "15px"}}>

                                <button className="accept_delete_event delete_event_btn" onClick={handleAcceptEdit}>
                                מאשר/ת
                                </button>
                                <button className="cancel_delete_event delete_event_btn" onClick={handleCloseGuestEdit}>
                                ביטול
                                </button>
                            </div>
                        

                        </Dialog>

                        </div>
        
        </div>
    );
}

export default EditAndDeleteGuestMenu;

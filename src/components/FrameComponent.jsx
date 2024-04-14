import { useState, useRef, useCallback, useEffect } from "react";
import Profile from "./Profile";
import PortalPopup from "./PortalPopup";
import styles from "./FrameComponent.module.css";
import harukiIcons from "../assets/Haruki_Icons.png";
import Group_77 from "../assets/Group_77.png";
import healthicons_ui_user_profile from "../assets/healthicons_ui-user_profile.png";
import ic_twotone_arrow_drop_down from "../assets/ic_twotone-arrow-drop-down.png";
import plus_icon from "../assets/plus_icon.png";
import add_circle_bg from "../assets/add_circle_bg.png";
import setting_5 from "../assets/setting-5.png";
import { useLocation } from "react-router-dom";

const FrameComponent = () => {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  const location = useLocation();
  const path = location.pathname;
  // console.log("Current path:", location.pathname);
  const frameButtonRef = useRef(null);
  const [isProfileOpen, setProfileOpen] = useState(false);

  const openProfile = useCallback(() => {
    setProfileOpen(true);
  }, []);

  const closeProfile = useCallback(() => {
    setProfileOpen(false);
  }, []);

  return (
    <>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          {path === "/dashboard" && (
            <div className={styles.rectangleParent}>
              <div className={styles.rectangle} />
              <img className={styles.harukiIcons} src={harukiIcons} alt="" />
              <input
                className={styles.frameChild}
                placeholder="Search any devices here"
                type="text"
              />
            </div>
          )}
          {path === "/reports" && <div>Reports</div>}
          {path === "/alerts" && <div>Alerts</div>}
          {path === "/settings" && <div>Settings</div>}
          <div className={styles.frameContainer}>
            <img
              className={styles.frameItem}
              src={Group_77}
              loading="lazy"
              alt=""
            />
            <button
              className={
                `${styles.vectorParent}` +
                (isProfileOpen ? ` ${styles.vectorParentactive}` : "")
              }
              ref={frameButtonRef}
              onClick={openProfile}
            >
              <img className={styles.frameInner} alt="" />
              <div className={styles.healthiconsuiUserProfileParent}>
                <img
                  className={styles.healthiconsuiUserProfile}
                  src={healthicons_ui_user_profile}
                  alt=""
                />
                <div className={styles.alexCooperWrapper}>
                  <div className={styles.alexCooper}>Alex Cooper</div>
                </div>
              </div>
              <div className={styles.ictwotoneArrowDropDownWrapper}>
                <img
                  className={styles.ictwotoneArrowDropDownIcon}
                  src={ic_twotone_arrow_drop_down}
                  alt=""
                />
              </div>
            </button>
          </div>
        </div>
        {path === "/dashboard" && (
          <div className={styles.frameDiv}>
            <div className={styles.rectangleGroup}>
              <div className={styles.rectangleDiv} />
              <div className={styles.frameParent1}>
                <button className={styles.conferenceRoomWrapper}>
                  <div className={styles.conferenceRoom}>Conference Room</div>
                </button>
                <div className={styles.frameParent2}>
                  <button className={styles.workSpaceWrapper}>
                    <div className={styles.workSpace}>Work Space</div>
                  </button>
                  <button className={styles.serverRoomWrapper}>
                    <div className={styles.serverRoom}>Server Room</div>
                  </button>
                  <button className={styles.cafeteriaWrapper}>
                    <div className={styles.cafeteria}>Cafeteria</div>
                  </button>
                  <button className={styles.ellipseParent}>
                    <div className={styles.ellipseDiv} />
                    <img className={styles.icon} src={plus_icon} alt="" />
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.frameWrapper}>
              <div className={styles.frameParent3}>
                <button className={styles.vuesaxbulkaddCircleParent}>
                  <img
                    className={styles.vuesaxbulkaddCircleIcon}
                    src={add_circle_bg}
                    alt=""
                  />
                  <div className={styles.addDeviceWrapper}>
                    <div className={styles.addDevice}>Add Device</div>
                  </div>
                </button>
                <button className={styles.vuesaxbulksetting5Parent}>
                  <img
                    className={styles.vuesaxbulksetting5Icon}
                    src={setting_5}
                    alt=""
                  />
                  <div className={styles.filterByWrapper}>
                    <div className={styles.filterBy}>Filter by</div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      {isProfileOpen && (
        <PortalPopup
          placement="Bottom right"
          bottom={-10}
          relativeLayerRef={frameButtonRef}
          onOutsideClick={closeProfile}
        >
          <Profile onClose={closeProfile} />
        </PortalPopup>
      )}
    </>
  );
};

export default FrameComponent;

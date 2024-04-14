import { useState, useRef, useCallback } from "react";
import Profile from "./Profile";
import PortalPopup from "./PortalPopup";
import styles from "./FrameComponent.module.css";

const FrameComponent = () => {
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
          <div className={styles.rectangleParent}>
            <div className={styles.rectangle} />
            <img className={styles.harukiIcons} alt="" />
            <input
              className={styles.frameChild}
              placeholder="Search any devices here"
              type="text"
            />
          </div>
          <div className={styles.frameContainer}>
            <img className={styles.frameItem} loading="lazy" alt="" />
            <button
              className={styles.vectorParent}
              ref={frameButtonRef}
              onClick={openProfile}
            >
              <img className={styles.frameInner} alt="" />
              <div className={styles.healthiconsuiUserProfileParent}>
                <img className={styles.healthiconsuiUserProfile} alt="" />
                <div className={styles.alexCooperWrapper}>
                  <div className={styles.alexCooper}>Alex Cooper</div>
                </div>
              </div>
              <div className={styles.ictwotoneArrowDropDownWrapper}>
                <img className={styles.ictwotoneArrowDropDownIcon} alt="" />
              </div>
            </button>
          </div>
        </div>
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
                  <img className={styles.icon} alt="" />
                </button>
              </div>
            </div>
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.frameParent3}>
              <button className={styles.vuesaxbulkaddCircleParent}>
                <img className={styles.vuesaxbulkaddCircleIcon} alt="" />
                <div className={styles.addDeviceWrapper}>
                  <div className={styles.addDevice}>Add Device</div>
                </div>
              </button>
              <button className={styles.vuesaxbulksetting5Parent}>
                <img className={styles.vuesaxbulksetting5Icon} alt="" />
                <div className={styles.filterByWrapper}>
                  <div className={styles.filterBy}>Filter by</div>
                </div>
              </button>
            </div>
          </div>
        </div>
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

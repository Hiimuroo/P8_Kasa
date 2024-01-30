import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

const angleDown = <FontAwesomeIcon icon={faAngleDown} />;
const angleUp = <FontAwesomeIcon icon={faAngleUp} />;

const Collapse = (props) => {
    const [openTab, setOpenTab] = useState(false);

    const toggleTabHandler = () => {
        setOpenTab((prevOpenTab) => !prevOpenTab);
    };

    const closeTabHandler = () => {
        setOpenTab(false);
    };

    return (
        <div className={`collapse ${openTab ? '' : 'closing'}`}>
            <div className="collapse_header">
                <h2 className="collapse_header_title">{props.title}</h2>
                <i
                    onClick={openTab ? closeTabHandler : toggleTabHandler}
                    className={`collapse_header_icon ${openTab ? 'rotate-icon' : ''}`}
                >
                    {openTab ? angleUp : angleDown}
                </i>
            </div>
            {openTab && (
                <div className="collapse_content">
                    {props.content}
                </div>
            )}
        </div>
    );
};

export default Collapse;

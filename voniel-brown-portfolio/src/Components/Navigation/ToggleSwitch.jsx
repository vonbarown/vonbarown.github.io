import React from "react";

export const ToggleSwitch = ({ handleThemeToggle }) => {
    return (
        <div className="toggle-switch">
            <input
                type="checkbox"
                className="toggle-switch-checkbox"
                name="toggleSwitch"
                id="toggleSwitch"
                onClick={handleThemeToggle}
            />
            <label className="toggle-switch-label" htmlFor="toggleSwitch">
                <span className="toggle-switch-inner" />
                <span className="toggle-switch-switch" />
            </label>
        </div>
    );
}



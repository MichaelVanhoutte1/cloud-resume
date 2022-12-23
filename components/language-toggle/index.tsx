import { useEffect, useRef, useState } from "react";
import { LanguageIcon } from "./styles";

interface Props {
    toggleLanguagePopup: (value: boolean) => void;
    isLanguageToggleActive: boolean;
}

function listenForOutsideClicks(
    listening: boolean,
    setListening: (listening: boolean) => void,
    languageRef: React.RefObject<any>,
    setIsOpen: (isLanguageToggleActive: boolean) => void
) {
    return () => {
        if (listening) return;
        if (!languageRef.current) return;
        setListening(true);
        [`click`, `touchstart`].forEach((type) => {
            document.addEventListener(`click`, (evt) => {
                if (languageRef.current!.contains(evt.target)) return;
                setIsOpen(false);
            });
        });
    };
}

const LanguageToggler = (props: Props) => {
    const { toggleLanguagePopup, isLanguageToggleActive } = props;
    const languageRef = useRef(null);
    const [listening, setListening] = useState(false);

    useEffect(listenForOutsideClicks(listening, setListening, languageRef, toggleLanguagePopup));

    return (
        <>
            <LanguageIcon
                ref={languageRef}
                loading="lazy"
                onClick={() => toggleLanguagePopup(!isLanguageToggleActive)}
                src="/images/icons/language.svg"
                alt="languageToggle"
            />
        </>
    );
};

export default LanguageToggler;

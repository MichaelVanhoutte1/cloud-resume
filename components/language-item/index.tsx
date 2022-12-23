import { LanguageIcon, LanguageDiv, LanguageText } from "./styles";
import { LanguageSwitcher } from "next-export-i18n";
import cs from "classnames";
import i18n from "../../i18n";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface Props {
    src: string;
    alt: string;
    languageCode: string;
    toggleLanguagePopup: (value: boolean) => void;
}
i18n.translations;

const LanguageItem = (props: Props) => {
    const { src, alt, languageCode, toggleLanguagePopup } = props;
    const router = useRouter();
    const [language, setLanguage] = useState<string>(i18n.defaultLang);

    useEffect(() => {
        if (typeof window !== "undefined") {
            let defaultLocale = navigator.languages[0].split("-")[0];
            if (router.query.lang?.toString !== undefined) {
                setLanguage(router.query.lang?.toString());
            } else {
                setLanguage(
                    i18n.useBrowserDefault && ("en" === defaultLocale || "nl" === defaultLocale)
                        ? defaultLocale
                        : i18n.defaultLang
                );
            }
        }
    }, [router.query]);

    return (
        <>
            <LanguageDiv
                onClick={() => {
                    toggleLanguagePopup(false);
                }}
                className={cs({
                    activeLanguage: language === languageCode,
                })}
            >
                <LanguageSwitcher lang={languageCode}>
                    <LanguageText>{languageCode.toLocaleUpperCase()}</LanguageText>
                    <LanguageIcon src={src} alt={alt} />
                </LanguageSwitcher>
            </LanguageDiv>
        </>
    );
};

export default LanguageItem;

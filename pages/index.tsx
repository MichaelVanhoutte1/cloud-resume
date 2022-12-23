import Head from "next/head";
import { useEffect, useState } from "react";
import { useTranslation } from "next-export-i18n";
import Link from "next/link";
import LanguageToggler from "../components/language-toggle";
import LanguageItem from "../components/language-item";
import { LanguagePopup, PDFIcon, PDFLink } from "../styles/index.styled";
import cs from "classnames";

const corsWorkaround = "https://cors-workaround.herokuapp.com/";
const url = `${corsWorkaround}https://9q7tdld473.execute-api.us-east-1.amazonaws.com/items`;

const apiCall = async (url: string) => {
    const headers = {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
    };
    const response = await fetch(url, { headers });
    const { Count } = await response.json();

    const counter: HTMLElement | null = document.querySelector("#count");
    counter!.innerHTML = Count;
};

const newVisitor = async (url: string) => {
    const headers = {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
    };
    const response = await fetch(url, {
        method: "PUT",
        headers,
        body: JSON.stringify({ id: Date.now() }),
    });
};

export default function Home() {
    const { t } = useTranslation();
    const [isLanguageToggleActive, setIsLanguageToggleActive] = useState<boolean>(false);

    useEffect(() => {
        newVisitor(url);
        apiCall(url);
    });

    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
                />
                <meta
                    name="description"
                    content="Michael Vanhoutte | Software engineer, specializes in javascript and web applications"
                />
                <meta name="author" content="Michael Vanhoutte" />
                <title>Michael Vanhoutte Resume</title>
            </Head>
            <div id="root">
                <header id="main">
                    <a href="https://www.mvanhoutte.com">
                        <h1 id="mainTitle">Michael Vanhoutte</h1>
                    </a>
                    <h3>{t("jobTitle")}</h3>
                    <PDFLink href=""><PDFIcon src="/images/icons/pdf.svg" alt="pdfDownload" /></PDFLink>
                    <LanguageToggler
                        isLanguageToggleActive={isLanguageToggleActive}
                        toggleLanguagePopup={setIsLanguageToggleActive}
                    />
                    <LanguagePopup className={cs({ active: isLanguageToggleActive })}>
                        <LanguageItem
                            toggleLanguagePopup={setIsLanguageToggleActive}
                            src="/images/icons/nl.svg"
                            alt="Dutch"
                            languageCode="nl"
                        />
                        <LanguageItem
                            toggleLanguagePopup={setIsLanguageToggleActive}
                            src="/images/icons/gb.svg"
                            alt="English"
                            languageCode="en"
                        />
                    </LanguagePopup>
                </header>
                <main>
                    <article id="left">
                        <section id="skills">
                            <h2>{t("skills")}</h2>
                            <ul>
                                <li>{t("languages")}</li>
                                <li>{t("frontend")}</li>
                                <li>{t("backend")}</li>
                                <li>{t("devops")}</li>
                            </ul>
                        </section>

                        <section id="education">
                            <h2>{t("education")}</h2>
                            <div>
                                <ul>
                                    <li>{t("diploma")}</li>
                                    <li>{t("certificate1")}</li>
                                    <li>{t("certificate2")}</li>
                                    <li>{t("certificate3")}</li>
                                </ul>
                            </div>
                        </section>
                    </article>
                    <article id="right">
                        <section id="work">
                            <h2>{t("shortSummaryTitle")}</h2>
                            <div>
                                <p>{t("summaryWork")}</p>
                                <p>{t("summaryPrivate")}</p>
                            </div>
                        </section>
                        <section id="work">
                            <h2>{t("workExperience")}</h2>
                            <div>
                                <Link href="https://studioemma.be/">
                                    <h3>{t("jobTitle")}</h3>
                                </Link>
                                {t("location1")}
                            </div>
                            <div>
                                <Link href="https://studioemma.be/">
                                    <h3>Studio Emma</h3>{" "}
                                </Link>
                                {t("companySummary1")}
                            </div>
                            <div>
                                <ul>
                                    <li>{t("job1task1")}</li>
                                    <li>{t("job1task2")}</li>
                                    <li>{t("job1task3")}</li>
                                    <li>{t("job1task4")}</li>
                                    <li>{t("job1task5")}</li>
                                </ul>
                            </div>

                            <div>
                                <Link href="https://www.getflights.com">
                                    <h3>{t("jobTitle")}</h3>
                                </Link>
                                {t("location2")}
                            </div>
                            <div>
                                <Link href="https://www.getflights.com">
                                    <h3>Getflights</h3>{" "}
                                </Link>
                                {t("companySummary2")}
                            </div>
                            <div>
                                <ul>
                                    <li>{t("job2task1")}</li>
                                    <li>{t("job2task2")}</li>
                                    <li>{t("job2task3")}</li>
                                </ul>
                            </div>
                        </section>
                    </article>
                </main>
                <footer>
                    <div id="footer">
                        <div id="counter">
                            <div>{t("visitor")}</div>
                            <div id="count">...</div>
                            <div className="social">
                                <Link href="https://mvanhoutte.com/">Website</Link>
                                <Link href="https://github.com/MichaelVanhoutte1">Github</Link>
                                <Link href="https://www.linkedin.com/in/michael-vanhoutte/">
                                    Linkedin
                                </Link>
                                <Link href="mailto:contact@mvanhoutte.com">Email</Link>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}

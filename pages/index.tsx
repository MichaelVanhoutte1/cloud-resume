import { useEffect, useState } from "react";
import { useLanguageQuery, useTranslation } from "next-export-i18n";
import Link from "next/link";
import LanguageToggler from "../components/language-toggle";
import LanguageItem from "../components/language-item";
import { LanguagePopup, PDFIcon, PDFLink } from "../styles/index.styled";
import cs from "classnames";
import { useRouter } from "next/router";
import SEO from "../components/seo";

const url = `https://9q7tdld473.execute-api.us-east-1.amazonaws.com/items`;

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
    const [query] = useLanguageQuery();
    const [isLanguageToggleActive, setIsLanguageToggleActive] = useState<boolean>(false);
    const [resumeFile, setResumeFile] = useState<string>("Michael-Vanhoutte-Resume.pdf");
    const router = useRouter();

    useEffect(() => {
        if (!localStorage.getItem("hasVisited")) {
            newVisitor(url);
            localStorage.setItem("hasVisited", "true");
        }

        apiCall(url);
    }, []);

    useEffect(() => {
        if (typeof window !== "undefined") {
            if (!router.query.lang) {
                let defaultLocale = navigator.languages[0].split("-")[0];
                if (defaultLocale === "nl") {
                    setResumeFile("Michael-Vanhoutte-CV.pdf");
                }
            } else {
                if (router.query.lang?.toString() === "nl") {
                    setResumeFile("Michael-Vanhoutte-CV.pdf");
                } else {
                    setResumeFile("Michael-Vanhoutte-Resume.pdf");
                }
            }
        }
    }, [router.query.lang]);

    return (
        <>
            <SEO
                title="Michael Vanhoutte Resume"
                description="Michael Vanhoutte | Software engineer, specializes in javascript and web applications"
                name="Michael Vanhoutte"
                type="website"
            />
            <div id="root">
                <header id="main">
                    <Link href={{ pathname: "https://www.mvanhoutte.com", query: query }}>
                        <h1 id="mainTitle">Michael Vanhoutte</h1>
                    </Link>
                    <h3>{t("jobTitle")}</h3>
                    <PDFLink download href={resumeFile}>
                        <PDFIcon src="/images/icons/pdf.svg" alt="pdfDownload" />
                    </PDFLink>
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
                        </section>
                    </article>
                </main>
                <footer>
                    <div id="footer">
                        <div id="counter">
                            <div>{t("visitor")}</div>
                            <div id="count">...</div>
                            <div className="social">
                                <Link
                                    href={{ pathname: "https://www.mvanhoutte.com", query: query }}
                                >
                                    Website
                                </Link>
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

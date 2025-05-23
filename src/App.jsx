import "./i18n";
import { useTranslation } from "react-i18next";
import React, { useState } from "react";
import "./style.css";
import { Github, Instagram, Mail, MapPin } from "lucide-react";
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FolderIcon from '@mui/icons-material/Folder';
import ChatIcon from '@mui/icons-material/Chat';


export default function App() {
  const { t, i18n } = useTranslation();
  const [page, setPage] = useState("home");
  const [message, setMessage] = useState("");

  const allProjects = [
    {
      title: "UserLogin",
      desc: "使用者登入システム",
      tags: ["Spring-Boot", "Thymeleaf", "MyBatis-Plus", "MySQL", "Java"],
      url: "https://github.com/Sawa8811/UserLogin"
    },
    /*
      可以在這邊新增專案
    */
  ];

  const filteredProjects = allProjects;
  return (
    <div className="container">
      <header className="header">
        <div className="logo">{"<Sawa />"}</div>
      </header>

      {/* === Home 分頁內容 === */}
      <main className="main" id="home">
        {/* --- Home 頁面 --- */}
        {page === "home" && (
          <>
            <div className="profile">
              <div className="intro">
                <h1 className="highlight">{t("welcome")}</h1>
                <div className="name-block">
                  <h2><strong>ChingTse Ho</strong></h2>
                  <p className="aka">a.k.a Sawa</p>
                </div>
                <p className="role">{t("role")}</p>
                <a
                  href="https://www.google.com/maps/place/Tokyo,+Japan"
                  target="_blank"
                  rel="noreferrer"
                  className="subtext"
                  style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem" }}
                >
                  <MapPin size={16} />
                  {t("based")}
                </a>
              </div>

              <div className="photo">
                <img src="/sawa.jpg" alt="Sawa Ho" className="avatar" />
                <div className="icons">
                  <a href="https://github.com/Sawa8811" target="_blank" rel="noreferrer">
                    <Github color="white" size={28} />
                  </a>
                  <a href="https://www.instagram.com/sawa88101" target="_blank" rel="noreferrer">
                    <Instagram color="white" size={28} />
                  </a>
                  <a href="mailto:sawa88101@gmail.com">
                    <Mail color="white" size={28} />
                  </a>
                </div>
              </div>
            </div>

            <div className="skills-section" id="skills">
              <div className="skills-list">
                <div className="skill-icon">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" />
                  Java
                </div>
                <div className="skill-icon">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" alt="Spring Boot" />
                  Spring Boot
                </div>
                <div className="skill-icon">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" />
                  MySQL
                </div>
                <div className="skill-icon">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" alt="Oracle" />
                  Oracle
                </div>
                <div className="skill-icon">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
                  React
                </div>
                <div className="skill-icon">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg" alt="Vite" />
                  Vite
                </div>
                <div className="skill-icon">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" />
                  HTML
                </div>
                <div className="skill-icon">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" />
                  CSS
                </div>
                <div className="skill-icon">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
                  JavaScript
                </div>
                <div className="skill-icon">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" />
                  Git
                </div>
                <div className="skill-icon">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="AWS" />
                  AWS
                </div>
                <div className="skill-icon">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" alt="Linux" />
                  Linux
                </div>
                <div className="skill-icon">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/9/92/LaTeX_logo.svg" alt="LaTeX" />
                  LaTeX
                </div>
                <div className="skill-icon">
                  <img src="https://mui.com/static/logo.png" alt="MUI" />
                  MUI
                </div>

              </div>
            </div>
          </>
        )}

        {/* --- About Me 頁面 --- */}
        {page === "about" && (
          <section className="about-section" id="about">

            <div className="about-content">
              <div className="about-left">
                <h3 style={{ textAlign: "center" }}>{t("about_title")}</h3>
                <div style={{ textAlign: "left", margin: "1.5rem 0 0 0", lineHeight: "2" }}>
                  <b>{t("about_intro_bold")}</b><br />
                  {t("about_intro_birth")}<br />
                  <span style={{ color: "#62a6f7", fontWeight: 600 }}>{t("about_intro_skills")}</span><br />
                  <br />
                  <span style={{ fontStyle: "italic", color: "#aaa" }}>
                    {t("about_intro_love")}
                  </span><br />
                  <br />
                  {t("about_intro_work_hobby")}<br />
                  <span style={{ color: "#e5c39a" }}>{t("about_intro_hobby")}</span>{t("about_intro_hobby_extra")}
                </div>
              </div>
              <div className="about-right">
                <h3 style={{ textAlign: "center", marginBottom: "1.2em" }}>{t("career_title")}</h3>

                <div className="career-block">
                  <div className="career-title">{t("career_education_work")}</div>
                  <ul>
                    <li>
                      2018年 台湾桃園陽明高校 卒業
                    </li>
                    <li>
                      2022年 芝浦工業大学
                      <span className="highlight-paren">（機械制御システム学科）</span>
                      卒業
                    </li>
                    <li>
                      2025年 芝浦工業大学大学院
                      <span className="highlight-paren">（量子情報システム研究室）</span>
                      修了
                    </li>
                    <li>
                      2025年〜 株式会社ユタカ Javaエンジニア
                    </li>
                  </ul>
                </div>

                <div className="career-block">
                  <div className="career-title">{t("career_certifications_skills")}</div>
                  <ul>
                    <li>TOEIC 600</li>
                    <li>
                      日本語能力試験N2
                      <span className="highlight-paren">（現在はN1レベル）</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* --- Projects 頁面 --- */}
        {page === "projects" && (
          <section className="projects-section" id="projects">
            <p className="project-intro">{t("projects_title")}</p>
            <div className="project-cards">
              {filteredProjects.map((project, idx) => (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card"
                  key={idx}
                >
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>
                  <img
                    src={project.image || "/userLogin.png"}
                    alt={`${project.title} UserLogin`}
                    className="userLogin-image"
                  />
                  <div className="tech-tags">
                    {project.tags.map(tag => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </a>
              ))}
            </div>
          </section>
        )}

        {/* --- message 頁面 --- */}
        {page === "message" && (
          <section className="about-section" id="message">
            <h2>{t("message_title")}</h2>
            <div className="message-container">
              <div className="message-form">
                <label>
                  {t("message_nickname")}:
                  <input type="text" placeholder={t("message_nickname_placeholder")} className="message-input" />
                </label>
                <label>
                  {t("message_content")}:
                  <div style={{ position: "relative" }}>
                    <textarea
                      className="message-textarea"
                      maxLength={500}
                      rows={6}
                      placeholder={t("message_content_placeholder")}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>
                </label>
                <div className="message-toggle">
                  <span>{t("message_public")}</span>
                  <label className="toggle-switch">
                    <input type="checkbox" id="toggleVisibility" />
                    <span className="slider"></span>
                  </label>
                </div>
                <button className="message-submit">{t("message_submit")}</button>
              </div>
              <div className="message-messages">
                <h3>{t("message_list_title")}</h3>
                <div className="messages-scroll">
                  <div className="message-card">
                    <p><strong>{t("message_anonymous")}</strong>: こんにちは！素敵なサイトですね！</p>
                  </div>
                  <div className="message-card">
                    <p><strong>someone</strong>: Javaのプロジェクト見ました、参考になります。</p>
                  </div>
                  <div className="message-card">
                    <p><strong>Yuki</strong>: Sawaさんの技術ブログ、分かりやすいです！</p>
                  </div>
                  <div className="message-card">
                    <p><strong>小林</strong>: 很棒的作品！加油！</p>
                  </div>
                  <div className="message-card">
                    <p><strong>John</strong>: Your project looks cool!</p>
                  </div>
                  <div className="message-card">
                    <p><strong>美咲</strong>: Reactのサンプルが役に立ちました！</p>
                  </div>
                  <div className="message-card">
                    <p><strong>Takashi</strong>: Spring Bootの実装参考になりました。</p>
                  </div>
                  <div className="message-card">
                    <p><strong>小王</strong>: 想請問怎麼串接MyBatis？</p>
                  </div>
                  <div className="message-card">
                    <p><strong>Anna</strong>: UI好美，想學習看看</p>
                  </div>
                  <div className="message-card">
                    <p><strong>健太</strong>: お疲れ様です！これからも応援します！</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      <div
        className="language-switcher"
        style={{
          position: 'fixed',
          left: 32,
          bottom: 86,
          zIndex: 100,
          display: 'flex',
          gap: '0.5rem'
        }}
      >
        <button onClick={() => i18n.changeLanguage('ja')}>日本語</button>
        <button onClick={() => i18n.changeLanguage('zh')}>中文</button>
        <button onClick={() => i18n.changeLanguage('en')}>EN</button>
      </div>

      {/* === 導覽列 Navigation === */}
      <nav className="navbar">
        <ul className="nav-links">
          <li>
            <a href="#home" onClick={e => { e.preventDefault(); setPage("home"); }}>
              <HomeIcon style={{ verticalAlign: 'middle', marginRight: 6 }} />
              {t("nav_home")}
            </a>
          </li>
          <li>
            <a href="#about" onClick={e => { e.preventDefault(); setPage("about"); }}>
              <AccountCircleIcon style={{ verticalAlign: 'middle', marginRight: 6 }} />
              {t("nav_about")}
            </a>
          </li>
          <li>
            <a href="#projects" onClick={e => { e.preventDefault(); setPage("projects"); }}>
              <FolderIcon style={{ verticalAlign: 'middle', marginRight: 6 }} />
              {t("nav_projects")}
            </a>
          </li>
          <li>
            <a href="#message" onClick={e => { e.preventDefault(); setPage("message"); }}>
              <ChatIcon style={{ verticalAlign: 'middle', marginRight: 6 }} />
              {t("nav_message")}
            </a>
          </li>
        </ul>
      </nav>

      {/* === 頁尾 Footer === */}
      <footer className="footer">
        <p>© 2025 Sawa Ho | All rights reserved.</p>
      </footer>
    </div>
  );
} 

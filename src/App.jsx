import React, { useState } from "react";
import "./style.css";
import { Github, Instagram, Mail, MapPin } from "lucide-react";
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FolderIcon from '@mui/icons-material/Folder';
import ChatIcon from '@mui/icons-material/Chat';


export default function App() {
  const [page, setPage] = useState("home");

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
                <h1 className="highlight">ようこそ</h1>
                <div className="name-block">
                  <h2><strong>ChingTse Ho</strong></h2>
                  <p className="aka">a.k.a Sawa</p>
                </div>
                <p className="role">Full-Stack Engineer</p>
                <a
                  href="https://www.google.com/maps/place/Tokyo,+Japan"
                  target="_blank"
                  rel="noreferrer"
                  className="subtext"
                  style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem" }}
                >
                  <MapPin size={16} />
                  Based in Tokyo, Japan
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
                <h3 style={{ textAlign: "center" }}>自己紹介</h3>
                <div style={{ textAlign: "left", margin: "1.5rem 0 0 0", lineHeight: "2" }}>
                  <b>東京在住のフルスタックエンジニアSawaです。</b><br />
                  台湾生まれ。<br />
                  <span style={{ color: "#62a6f7", fontWeight: 600 }}>Java / React / クラウド</span>を使った開発に日々挑戦中。<br />
                  <br />
                  <span style={{ fontStyle: "italic", color: "#aaa" }}>
                    「誰かの毎日をちょっと便利にする」<br />
                    そんなシステム作りが大好き。
                  </span><br />
                  <br />
                  仕事も趣味も全力投球。<br />
                  <span style={{ color: "#e5c39a" }}>音楽（クラシック・J-Pop）</span>、ゲーム、映画も楽しんでいます。
                </div>
              </div>
              <div className="about-right">
                <h3 style={{ textAlign: "center", marginBottom: "1.2em" }}>経歴・資格</h3>

                <div className="career-block">
                  <div className="career-title">学歴・職歴</div>
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
                  <div className="career-title">資格・スキル</div>
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
            <p className="project-intro">作品集</p>
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

        {/* --- Contact 頁面 --- */}
        {page === "contact" && (
          <section className="about-section" id="contact">
            <h2>Contact</h2>
            <p>（ここに連絡先やフォームなど追加予定）</p>
          </section>
        )}
      </main>

      {/* === 導覽列 Navigation === */}
      <nav className="navbar">
        <ul className="nav-links">
          <li>
            <a href="#home" onClick={e => { e.preventDefault(); setPage("home"); }}>
              <HomeIcon style={{ verticalAlign: 'middle', marginRight: 6 }} />
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={e => { e.preventDefault(); setPage("about"); }}>
              <AccountCircleIcon style={{ verticalAlign: 'middle', marginRight: 6 }} />
              About Me
            </a>
          </li>
          <li>
            <a href="#projects" onClick={e => { e.preventDefault(); setPage("projects"); }}>
              <FolderIcon style={{ verticalAlign: 'middle', marginRight: 6 }} />
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={e => { e.preventDefault(); setPage("contact"); }}>
              <ChatIcon style={{ verticalAlign: 'middle', marginRight: 6 }} />
              Contact
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

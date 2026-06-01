import React, { useState, useEffect, useRef } from 'react';
import styles from './Skills.module.css';
import skillsProfile from '../../assets/images/skills-profile.png';
import yinYangImg from '../../assets/images/yinyang1.png';

import imgAWS from '../../assets/images/AWS.png';
import imgAzure from '../../assets/images/Azure.png';
import imgDocker from '../../assets/images/Docker.png';
import imgKubernetes from '../../assets/images/Kubernetes.png';
import imgJenkins from '../../assets/images/Jenkins.png';
import imgGithubActions from '../../assets/images/GitHubActions.png';
import imgGrafana from '../../assets/images/Grafana.png';
import imgPrometheus from '../../assets/images/Prometheus.png';
import imgPython from '../../assets/images/Python.png';
import imgMySQL from '../../assets/images/MySQL.png';
import imgN8N from '../../assets/images/n8n_pink+white_logo.svg';
import imgLinux from '../../assets/images/Linux.png';

const tools = [
  { id: 1,  name: 'Docker',         img: imgDocker,        info: 'Containerization platform for building, shipping, and running applications in isolated environments.' },
  { id: 2,  name: 'Kubernetes',     img: imgKubernetes,    info: 'Open-source container orchestration system for automating deployment, scaling, and management.' },
  { id: 3,  name: 'AWS',            img: imgAWS,           info: 'Amazon Web Services — industry-leading cloud platform with 200+ services for compute, storage, and more.' },
  { id: 4,  name: 'Azure',          img: imgAzure,         info: 'Microsoft cloud platform offering hybrid solutions, enterprise-grade security and global infrastructure.' },
  { id: 5,  name: 'Jenkins',        img: imgJenkins,       info: 'Open-source automation server for building CI/CD pipelines and automating software delivery.' },
  { id: 6,  name: 'GitHub Actions', img: imgGithubActions, info: 'Native CI/CD workflow automation built directly into GitHub repositories.' },
  { id: 7,  name: 'Grafana',        img: imgGrafana,       info: 'Open-source analytics and monitoring platform for visualizing metrics from multiple data sources.' },
  { id: 8,  name: 'Prometheus',     img: imgPrometheus,    info: 'Systems monitoring and alerting toolkit designed for reliability and scalability.' },
  { id: 9,  name: 'Python',         img: imgPython,        info: 'Versatile scripting language widely used for automation, infrastructure tooling, and cloud scripting.' },
  { id: 10, name: 'MySQL',          img: imgMySQL,         info: 'Relational database management system used for structured data storage and querying.' },
  { id: 11, name: 'N8N',            img: imgN8N,           info: 'Workflow automation tool connecting apps and services with a visual node-based editor.' },
  { id: 12, name: 'Linux',          img: imgLinux,         info: 'Open-source operating system kernel powering most cloud servers and DevOps infrastructure.' },
];

const RADIUS = 420;
const CENTER = 340;

export default function Skills() {
  const [angle, setAngle] = useState(0);
  const [yinYangAngle, setYinYangAngle] = useState(0);
  const [hoveredTool, setHoveredTool] = useState(null);
  const [selectedTool, setSelectedTool] = useState(null);
  const angleRef = useRef(0);
  const pausedRef = useRef(false);
  const animRef = useRef(null);
  const yinRef = useRef(null);

  useEffect(() => {
    const step = () => {
      if (!pausedRef.current) {
        angleRef.current += 0.003;
        setAngle(angleRef.current);
      }
      animRef.current = requestAnimationFrame(step);
    };
    animRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  useEffect(() => {
    let a = 0;
    const step = () => {
      a += 0.3;
      setYinYangAngle(a);
      yinRef.current = requestAnimationFrame(step);
    };
    yinRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(yinRef.current);
  }, []);

  const handleHover = (tool) => {
    if (selectedTool) return;
    pausedRef.current = true;
    setHoveredTool(tool);
  };

  const handleLeave = () => {
    if (selectedTool) return;
    pausedRef.current = false;
    setHoveredTool(null);
  };

  const handleClick = (e, tool) => {
    e.stopPropagation();
    setSelectedTool(tool);
    setHoveredTool(null);
    pausedRef.current = true;
  };

  const handlePageClick = () => {
    if (selectedTool) {
      setSelectedTool(null);
      pausedRef.current = false;
    }
  };

  const activeTool = selectedTool || hoveredTool;

  return (
    <section className={styles.skillsContainer} onClick={handlePageClick}>

      {/* LEFT PANEL */}
      <div className={styles.leftPanel}>
        <h2 className={styles.sectionTitle}>TOOLS</h2>
        <div className={styles.infoBox}>
          {activeTool ? (
            <>
              <div className={styles.activeToolHeader}>
                <img src={activeTool.img} alt={activeTool.name} className={styles.activeToolImg} />
                <h3 className={styles.toolName}>{activeTool.name}</h3>
              </div>
              <p className={styles.toolInfo}>{activeTool.info}</p>
              {selectedTool && <p className={styles.hint}>Click anywhere to continue →</p>}
            </>
          ) : (
            <p className={styles.toolInfo}>Hover over a tool to learn more about it.</p>
          )}
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className={styles.rightPanel}>
        <div className={styles.orbitWrapper}>

          <img
            src={yinYangImg}
            alt=""
            className={styles.yinYangImg}
            style={{ transform: `translate(-50%, -50%) rotate(${yinYangAngle}deg)` }}
          />

          <img
            src={skillsProfile}
            alt="Ujjawal"
            className={styles.profileImg}
          />

          {tools.map((tool, i) => {
            const a = angleRef.current + (i / tools.length) * Math.PI * 2;
            const x = CENTER + RADIUS * Math.cos(a);
            const y = CENTER + RADIUS * Math.sin(a) + 80;
            const isActive = hoveredTool?.id === tool.id || selectedTool?.id === tool.id;

            return (
              <div
                key={tool.id}
                className={`${styles.toolIcon} ${isActive ? styles.active : ''}`}
                style={{ left: x, top: y }}
                onMouseEnter={() => handleHover(tool)}
                onMouseLeave={handleLeave}
                onClick={(e) => handleClick(e, tool)}
              >
                <img src={tool.img} alt={tool.name} className={styles.toolIconImg} />
              </div>
            );
          })}

        </div>
      </div>

    </section>
  );
}
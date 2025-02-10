import { ProjectType } from '../../data/projects';
import styles from './Project.module.scss';
import SkillTag from './SkillTag';
import openImg from '../../public/asset/open.svg';
import githubImg from '../../public/asset/Github-Light.svg';
import ImageCarousel from './ImageCarousel';

interface Props {
  project: ProjectType;
}

export default function Project({ project }: Props) {
  return (
    <section className={styles.wrapper}>
      <div className={styles.vertical_line}></div>
      <span className={styles.period}>{project.period}</span>
      <article className={styles.project_content_container}>
        <div className={styles.project_header}>
          {project.title === '등잔 밑 일기' ? (
            <h3
              className={styles.project_title}
              style={{ fontFamily: 'Pretendard' }}
            >
              {project.title}
            </h3>
          ) : (
            <h3 className={styles.project_title}>{project.title}</h3>
          )}
          {project.url && (
            <a
              href={project.url}
              target='_black'
              className={styles.visit_button}
            >
              둘러보기
              <img
                src={openImg}
                alt='open-image'
                className={styles.image}
              />
            </a>
          )}
          <a
            href={project.repository}
            target='_black'
            className={styles.visit_button}
          >
            <img
              src={githubImg}
              alt='github-image'
              className={styles.image}
            />
            깃허브 저장소
          </a>
        </div>
        <h4 className={styles.project_description}>{project.description}</h4>
        <h5 className={styles.list_title}>사용 기술 및 라이브러리</h5>
        <div className={styles.skill_box}>
          {project.skills.map((skill, index) => {
            return (
              <SkillTag
                key={index}
                skill={skill.name}
                backgroundColor={skill.backgroundColor}
                color={skill.color}
              />
            );
          })}
        </div>
        <h5 className={styles.list_title}>미리보기</h5>
        <ImageCarousel images={project.images} />
        <div className={styles.list_container}>
          <h5 className={styles.list_title}>주요 기능 및 특징</h5>
          <ul>
            {project.introduce.map((item, index) => {
              return (
                <li
                  key={index}
                  className={styles.list_item}
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
        <div className={styles.list_container}>
          <h5 className={styles.list_title}>프로젝트 담당 기능</h5>
          <ul>
            {project.role.map((item, index) => {
              return (
                <li
                  key={index}
                  className={styles.list_item}
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      </article>
    </section>
  );
}

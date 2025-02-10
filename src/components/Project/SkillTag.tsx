import styles from './SkillTag.module.scss';

interface Props {
  skill: string;
  backgroundColor: string;
  color?: string;
}

export default function SkillTag({
  skill,
  backgroundColor,
  color = 'white',
}: Props) {
  return (
    <div
      className={styles.wrapper}
      style={{
        backgroundColor: backgroundColor,
        borderColor: backgroundColor,
        color: color,
      }}
    >
      {skill}
    </div>
  );
}

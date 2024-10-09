// const header = {color: "blue", fontSize: '140px'}

// import '../css/style.css';
import styles from "./inlinecomponent.module.css"

export default function InlineComponent() {
//   return <h3 style={header}>Inline Component</h3>;
  return <h3 className={styles.header}>Inline Component</h3>;
}

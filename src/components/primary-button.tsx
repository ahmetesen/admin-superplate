import { PrimaryButtonProps } from "./primary-button-props";
import { Button } from 'antd';
import styles from './primary-button.module.scss';

export const PrimaryButton = (props: PrimaryButtonProps) => {
  
    return (
      <Button className={styles.primaryButton} onClick={props.onClick}>
        {props.label}
      </Button>
    );
  };
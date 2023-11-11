import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Header.module.scss';

interface HeaderProps {
    className?: string;
}

export const Header = ({ className }: HeaderProps) => (
  <div className={classNames(cls.Header, {}, [className])}>
    <h2>
      Tap BPM!
    </h2>
    <h3 className={classNames(cls.Description, {}, [])}>
      Нажмайте на экран чтобы вывести BPM
    </h3>
  </div>
);

import { classNames } from 'shared/lib/classNames/classNames';
import cls from './BPMCounter.module.scss';

interface BPMCounterProps {
    className?: string;
    BPM?: number;
}

export const BPMCounter = ({ className, BPM }: BPMCounterProps) => (
  <div className={classNames(cls.BPMCounter, {}, [className])}>
    {BPM}
    {' BPM'}
  </div>
);

import { useEffect, useState } from 'react';

interface CountdownTimerProps {
  totalReserves: number;
  dailyConsumption: number;
}

interface TimeRemaining {
  years: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = ({ totalReserves, dailyConsumption }: CountdownTimerProps) => {
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>({
    years: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [depletionDate, setDepletionDate] = useState<Date>(new Date());

  useEffect(() => {
    const calculateDepletion = () => {
      const daysRemaining = totalReserves / dailyConsumption;
      const msRemaining = daysRemaining * 24 * 60 * 60 * 1000;
      const futureDate = new Date(Date.now() + msRemaining);
      setDepletionDate(futureDate);
    };

    calculateDepletion();
  }, [totalReserves, dailyConsumption]);

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = depletionDate.getTime() - now;

      if (distance > 0) {
        const years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365));
        const days = Math.floor((distance % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeRemaining({ years, days, hours, minutes, seconds });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [depletionDate]);

  const formatNumber = (num: number) => String(num).padStart(2, '0');

  return (
    <div className="flex flex-col items-center gap-4 sm:gap-8">
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-8">
        <TimeUnit value={timeRemaining.years} label="Years" />
        <TimeSeparator />
        <TimeUnit value={timeRemaining.days} label="Days" />
        <TimeSeparator />
        <TimeUnit value={timeRemaining.hours} label="Hours" />
        <TimeSeparator />
        <TimeUnit value={timeRemaining.minutes} label="Minutes" />
        <TimeSeparator />
        <TimeUnit value={timeRemaining.seconds} label="Seconds" />
      </div>
      <p className="text-sm md:text-base text-muted-foreground text-center max-w-2xl">
        Estimated depletion date: <span className="text-primary font-semibold">{depletionDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
      </p>
    </div>
  );
};

const TimeUnit = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center">
    <div className="bg-card border-2 border-primary/30 rounded-lg p-2 sm:p-3 md:p-6 shadow-glow animate-pulse-glow min-w-[56px] sm:min-w-[70px] md:min-w-[100px]">
      <span className="text-2xl sm:text-4xl md:text-6xl font-mono font-bold text-primary tracking-wider">
        {String(value).padStart(2, '0')}
      </span>
    </div>
    <span className="text-[10px] sm:text-xs md:text-sm text-muted-foreground mt-1 sm:mt-2 uppercase tracking-widest">{label}</span>
  </div>
);

const TimeSeparator = () => (
  <div className="hidden sm:flex items-center text-2xl sm:text-3xl md:text-5xl text-primary/50 font-bold -mt-4 sm:-mt-6">:</div>
);


export default CountdownTimer;

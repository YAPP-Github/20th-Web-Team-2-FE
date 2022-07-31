import useIntervalPoint from '@/hooks/survey/useIntervalPoint';

function IntervalPoints() {
  const points = useIntervalPoint();

  return (
    <>
      {Array(points)
        .fill('.')
        .map((point, index) => (
          <span key={index}>{point}</span>
        ))}
    </>
  );
}

export default IntervalPoints;

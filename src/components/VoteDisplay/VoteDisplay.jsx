import styles from './VoteDisplay.module.css';

export const VoteDisplay = ({ rating }) => {
  const calculateRating = () => {
    return (rating.score / rating.votes).toFixed(1);
  };

  return (
    <div className={styles.VoteDisplay}>
      <div className={styles.ratingBox}>
        <p className={styles.rating}>{calculateRating()}</p>
      </div>
      <div className={styles.infoBox}>
        <p className={styles.playersText}>Players</p>
        <p className={styles.voteText}>{rating.votes} votes</p>
        <p className={styles.ratingText}>
          Your rating: <span className={styles.ratingTextAccent}>5.2</span>
        </p>
      </div>
    </div>
  );
};

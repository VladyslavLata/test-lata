export const ListFooter = ({ title }) => {
  return (
    <div>
      <p>{title}</p>
      <ol>
        {[1, 2, 3, 4, 5].map(el => (
          <li key={el}>
            <a href="#">{`item ${el}`}</a>
          </li>
        ))}
      </ol>
    </div>
  );
};

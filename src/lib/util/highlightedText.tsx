interface Props {
  text: string;
  query: string;
}

const highlightedText = ({ text, query }: Props) => {
  if (query !== '' && text.toLowerCase().includes(query.toLowerCase())) {
    const parts = text.split(new RegExp(`(${query})`, 'gi'));

    return (
      <p>
        {parts.map((part, index) =>
          part.toLowerCase() === query.toLowerCase() ? (
            <span className="highlightText" key={index}>
              {part}
            </span>
          ) : (
            part
          )
        )}
      </p>
    );
  }

  return <span>{text}</span>;
};

export default highlightedText;

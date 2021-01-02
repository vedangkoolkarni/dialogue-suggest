function DialogueList(props) {
  return (
    <ul>
      {props.results.map((item, index) => (
        <li key={index} className="dialog-list-item">
          <p className="dialogue-text">{item.dialogue} </p>
          <p className="dialogue-info">season - {item.season} episode - {item.episode}</p>
        </li>
      ))}
    </ul>
  );
}

export default DialogueList;
import classes from './CommentList.module.css';

function CommentList() {
  return (
    <ul className={classes.comments}>
      {/* Render list of comments - fetched from API */}
      <li>
        <p>My comment is amazing!</p>
        <div>
          By <address>Beyza</address>
        </div>
      </li>
      <li>
        <p>My comment is amazing!</p>
        <div>
          By <address>Beyza</address>
        </div>
      </li>
    </ul>
  );
}

export default CommentList;

import './index.css'

const BlogItem = props => {
  const {blogItemDetails} = props
  const {title, selfTextHtml, url, score} = blogItemDetails

  return (
    <div className="blog-item">
      <a href={url} target="_blank" rel="noreferrer">
        <h1 className="title">{title}</h1>
      </a>
      <p className="score">
        SCORE:<span className="score-num"> {score}</span>
      </p>
      <div className="description-container">
        <p className="description">{selfTextHtml}</p>
      </div>
    </div>
  )
}

export default BlogItem

export default function Post() {
  return (
    <div className="post">
      <div className="image">
        <img
          src="https://techcrunch.com/wp-content/uploads/2022/08/GettyImages-600632443.jpg?w=1390&crop=1"
          alt="puzzle with dollar image"
        />
      </div>
      <div className="texts">
        <h2>
          Silicon Valley Bank’s crash is providing valuable lessons all over the
          world
        </h2>
        <p className="info">
          <a className="author">John Doe</a>
          <time>2023-03-01 15:15</time>
        </p>
        <p className="summary">
          This week, some of my colleagues took a deep dive into the effects on
          consumers, businesses, banks, investors, and so on — all over the
          world — who had made deposits with SVB. If anything, it shows just how
          connected the startup ecosystem really is.
        </p>
      </div>
    </div>
  );
}

const Main = () =>{
    return(
<header className="header">
        <div>
          <p>
            Pages switcher
          </p>
        </div>
        <nav className="nav">
          <button>
            <a href="/users">
              User
            </a>
          </button>
          <button>
            <a href="/groups">
              Groups
            </a>
          </button>
        </nav>
      </header>
    )
}
export default Main;
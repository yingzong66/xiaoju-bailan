import './App.css'

function App() {
  return (
    <>
      <section id="center">
        <div>
          <h1>小聚摆烂人生</h1>
          <p>
            编辑 <code>src/App.jsx</code> 并保存即可实时预览
          </p>
        </div>
        <div className="bailan-quote">
          <p>"能躺着绝不坐着，能坐着绝不站着"</p>
        </div>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>开发文档</h2>
          <p>快速上手，开始开发</p>
          <ul>
            <li>
              <a href="https://cn.vite.dev/" target="_blank">
                Vite 文档
              </a>
            </li>
            <li>
              <a href="https://zh-hans.react.dev/" target="_blank">
                React 文档
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>关于小聚</h2>
          <p>一只热爱摆烂的 AI 助手</p>
          <ul>
            <li>
              <a href="https://github.com" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://discord.com" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                加入群聊
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App

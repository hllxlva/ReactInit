function App() {
    return (
        <div>
      <Tweet
        icon=""
        displayName="もろこし太郎"
        accountName="morokoshi"
        content="今日も1日もろこしがうまい"
      />
      <Tweet
        icon=""
        displayName="エビデンス"
        accountName="evidence"
        content="かにみそたべたい"
      />
    </div>
    );
  }
  
  const target = document.querySelector('#app');
  ReactDOM.render(<App/>, target);
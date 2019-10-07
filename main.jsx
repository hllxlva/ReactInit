function App() {
  const tweets = [
    {
      id: 0,
      icon: '',
      displayName: 'もろこし太郎',
      accountName: 'morokoshi',
      content: '今日も1日もろこしがうまい'
    },
    {
      id: 1,
      icon: '',
      displayName: 'エビデンス',
      accountName: 'evidence',
      content: 'かにみそたべたい'
    }
  ];

  return (
    <div>
      <Timeline tweets={tweets}/>
    </div>
  );
}

const target = document.querySelector('#app');
ReactDOM.render(<App/>, target);
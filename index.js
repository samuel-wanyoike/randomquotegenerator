
const App = () =>  {

    const [quotes, setQuotes] = React.useState([]);
    const [randomQuote, setRandomQuote] = React.useState('');
    const [color, setColor] = React.useState('white');

    React.useEffect(() => {
            const fetchData = async () => {
            const response = await fetch('https://type.fit/api/quotes');
            const data = await response.json();
        
            setQuotes(data);
        
            let randomIndex = Math.floor(Math.random() * data.length);
            setRandomQuote(data[randomIndex]);
            };
        
            fetchData();
    }, []); 

    const getNewQuote = () => {
        
        const colors = [
            '#16a085',
            '#27ae60',
            '#2c3e50',
            '#f39c12',
            '#e74c3c',
            '#9b59b6',
            '#FB6964',
            '#342224',
            '#472E32',
            '#BDBB99',
            '#77B1A9',
            '#73A857'
        ];

        let randomIndex = Math.floor(Math.random() * quotes.length);
        setRandomQuote(quotes[randomIndex]);

        let randomColor = Math.floor(Math.random() * colors.length);
        setColor(colors[randomColor]);
        };
    


    return (
        <div style={{backgroundColor: color, height: '100vh'}}>
            <div className='container pt-5' style={{textColor: color}}>
            <div className='jumbotron'>
                <div className='card'>
                    <div className='card-header'>Motivational Quotes</div>
                    <div className='card-body'>
                        {randomQuote ? (
                            <>
                            <h5 className='card-title'>{randomQuote.author || 'No Author'}</h5>
                            <p>&quot;{randomQuote.text}&quot;</p>
                            </>
                        )
                        : (
                            <h2>Loading</h2>
                        )
                        }

                        <div className='row row-cols-auto'>
                            <button type='button' onClick={getNewQuote} className='btn btn-primary ml-4'>New Quote</button>
                            <a href={
                                "https://twitter.com/intent/tweet?text="+encodeURIComponent('"' + randomQuote.text + '" ' + randomQuote.author)
                            } 
                            target='_blank'
                            className='btn btn-warning'>
                                <i class="bi bi-twitter"></i>
                            </a>
                            <a href={
                                "https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=" +
                                encodeURIComponent(randomQuote.author) +
                                '&content=' +
                                encodeURIComponent(randomQuote.text) +
                                "&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button"
                            } 
                            className='btn btn-danger'>
                                tumblr
                            <i class="fa fa-tumblr"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
      );
      
};


  
ReactDOM.render(React.createElement(App), document.getElementById("root"));
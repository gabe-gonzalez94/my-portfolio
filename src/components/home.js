import React, {Component} from 'react';
import Grid from "@material-ui/core/Grid";
import { SocialIcon } from 'react-social-icons';


const APIURL = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
// const Home = () => {
class Home extends Component{

    componentDidMount() {
        this.getRandomQuote();
    }

    constructor(){
        super();
        this.state = {
            quote:'loading..',
            author:''
        }

    }
    getRandomQuote = () =>{
        fetch(APIURL)
            .then(response => response.json())
            .then(data =>{
                console.log(data);
                let randomNumber = Math.floor(Math.random() * data.quotes.length);
                // console.log(randomNumber);

                let randomQuote = data.quotes[randomNumber].quote;
                let randomAuthor = data.quotes[randomNumber].author;
                // console.log(randomNumber);
                this.setState({
                    quote: '"' + randomQuote + '"',
                    author: randomAuthor
                })
            })
    }
    render(){
        return (
            <div style={{width: '100%'}} className="home-color">
                <Grid>
                    <Grid container>
                        <Grid item xs={4}></Grid>
                        <Grid item xs={4}>
                            {/*<img src={require('../images/myAvatar.png')}*/}
                            {/*     className="avatar-img"/>*/}
                        </Grid>
                        <Grid item xs={4}></Grid>
                    </Grid>
                    <br/>
                    <Grid container style={{paddingTop:"15em"}}>
                        <Grid item xs={3}></Grid>
                        <Grid item xs={6}>
                            <div className="name-banner">
                                <br/>
                                <h1 className="main-bio" >Gabriel Gonzalez- Software Developer</h1>
                                <br/>
                                <p className="skill-list">Java | Spring Boot | SQL | Bash Scripting | Web Development | Data Science</p>
                                <br/>
                                <Grid container spacing={2}>
                                    <Grid item xs={4}></Grid>
                                    <Grid item xs={1}>
                                        <SocialIcon url="https://www.linkedin.com/in/gabriel-gonzalez-b3162ab3/" to="_blank" />
                                    </Grid>
                                    <Grid item xs={1}>
                                        <SocialIcon url="https://github.com/gegb1994" />
                                    </Grid>
                                    <Grid item xs={1}>
                                        <SocialIcon url="https://www.facebook.com/gabriel.gonzalezbarrios" />
                                    </Grid>
                                    <Grid item xs={1}>
                                        <SocialIcon url="https://www.instagram.com/gabe_g94/" />
                                    </Grid>
                                </Grid>

                            <br/>
                                <p>{this.state.quote}</p>
                                <p>{this.state.author}</p>
                                <br/>
                            </div>
                        </Grid>
                        <Grid item xs={3}></Grid>
                    </Grid>
                </Grid>
            </div>
        )
    }


}
export default Home;
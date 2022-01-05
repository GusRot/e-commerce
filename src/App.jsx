import React, { Component } from "react";
import Header from "./Components/Header";
import Router from "./Components/Router";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./Styles/Global";
import { lightTheme, darkTheme } from "./Styles/Theme";
import store from "./Components/Store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ApolloClient, InMemoryCache, HttpLink, from } from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const link = from([new HttpLink({ uri: "http://localhost:4000" })]);

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: link,
});
class App extends Component {
    constructor() {
        super();
        this.state = {
            theme: lightTheme,
            text: "Light",
        };
    }

    handleTheme() {
        if (this.state.theme === darkTheme) {
            this.setState({
                theme: lightTheme,
                text: "Light",
            });
        } else {
            this.setState({
                theme: darkTheme,
                text: "Dark",
            });
        }
    }

    render() {
        return (
            <ThemeProvider theme={this.state.theme}>
                <Provider store={store}>
                    <ApolloProvider client={client}>
                        <BrowserRouter>
                            <Header
                                themeFunction={this.handleTheme.bind(this)}
                                theme={this.state}
                            />
                            <Router />
                        </BrowserRouter>
                    </ApolloProvider>
                </Provider>
                <GlobalStyle />
            </ThemeProvider>
        );
    }
}

export default App;

import React, { Component } from "react";
import Header from "./Components/Header";
import Router from "./Components/Router";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./Styles/Global";
import { lightTheme, darkTheme } from "./Styles/Theme";
import { store, persistor } from "./Components/Store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { ApolloClient, InMemoryCache, HttpLink, from } from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const link = from([new HttpLink({ uri: "http://localhost:4000" })]);

const defaultOptions = {
    watchQuery: {
        fetchPolicy: "no-cache",
        errorPolicy: "ignore",
    },
    query: {
        fetchPolicy: "no-cache",
        errorPolicy: "all",
    },
};

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: link,
    defaultOptions,
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
                    <PersistGate loading={null} persistor={persistor}>
                        <ApolloProvider client={client}>
                            <BrowserRouter>
                                <Header
                                    themeFunction={this.handleTheme.bind(this)}
                                    theme={this.state}
                                />
                                <Router />
                            </BrowserRouter>
                        </ApolloProvider>
                    </PersistGate>
                </Provider>
                <GlobalStyle />
            </ThemeProvider>
        );
    }
}

export default App;

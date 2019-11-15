import { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

class Layout extends Component {
    render() {
        return (
            <div className="app">
                <Header />

                <aside>
                    Sidebar
                </aside>

                <section>
                    {this.props.children}
                </section>
                <Footer />
            </div>
        );
    }
}

export default Layout;
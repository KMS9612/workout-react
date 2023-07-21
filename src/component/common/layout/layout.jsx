import Header from "./header";
import Navigation from "./nav";
import "../../../style/layout.css";

export default function Layout(props) {
  return (
    <div className="layout-wrapper">
      <Header />
      <body className="body-wrapper">
        <Navigation />
        {props.children}
      </body>
    </div>
  );
}

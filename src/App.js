import React from "react";
import Header from "./components/Header";
import Travel from "./components/Travel";
import data from "./data";

export default function App() {
    var travels = data.map(item => {
        return (
            <Travel
                key={item.id}
                {...item}
            />
        )
    });

    var i = 1;

    while (i <= travels.length) {
        travels.splice(i, 0, <hr className="travel--list_divider" />);
        i += 2;
    }

    travels.pop()

    return (
        <>
            <Header />
            <section className="travels-list">
                {travels}
            </section>
        </>
    )
};